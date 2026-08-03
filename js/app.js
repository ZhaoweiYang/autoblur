/* app.js — AutoBlur orchestration: upload → detect → select → mosaic → export.
 * Everything runs locally in the browser; no video ever leaves the device. */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const els = {
    engineChip: $('engineChip'), engineText: $('engineText'),
    fileInput: $('fileInput'), dropZone: $('dropZone'), fileMeta: $('fileMeta'),
    stepDetect: $('step-detect'), optFace: $('optFace'), optPlate: $('optPlate'), optDensity: $('optDensity'),
    btnAnalyze: $('btnAnalyze'), analyzeProgress: $('analyzeProgress'), analyzeBar: $('analyzeBar'),
    analyzeText: $('analyzeText'), btnCancelAnalyze: $('btnCancelAnalyze'),
    stepReview: $('step-review'), previewCanvas: $('previewCanvas'), drawHint: $('drawHint'),
    scrub: $('scrub'), styleSel: $('styleSel'), strength: $('strength'), btnManual: $('btnManual'),
    btnAll: $('btnAll'), btnNone: $('btnNone'), selCount: $('selCount'), detectList: $('detectList'),
    btnExport: $('btnExport'),
    stepExport: $('step-export'), exportProgress: $('exportProgress'), exportBar: $('exportBar'),
    exportText: $('exportText'), resultBox: $('resultBox'), resultVideo: $('resultVideo'),
    downloadLink: $('downloadLink'), btnRestart: $('btnRestart'), resultMeta: $('resultMeta'),
    unsupported: $('unsupported'),
    engineOverlay: $('engineOverlay'), overlayStatus: $('overlayStatus')
  };

  const PAD = { face: 0.24, plate: 0.20, manual: 0.06 };
  const CATLABEL = { face: '人脸', plate: '车牌', manual: '手动区域' };
  const CATICON = { face: '👤', plate: '🚗', manual: '✏️' };

  const state = {
    file: null, srcURL: null,
    duration: 0, vw: 0, vh: 0,
    tracks: [], selected: new Set(),
    manualCount: 0, previewT: 0,
    outputURL: null,
    analyzing: false, cancelAnalyze: false, exporting: false
  };

  // Offscreen video used for analysis, preview and export.
  const video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.preload = 'auto';
  video.style.cssText = 'position:fixed;left:-99999px;top:0;width:2px;height:2px;opacity:0;pointer-events:none;';
  document.body.appendChild(video);

  const detCanvas = document.createElement('canvas');
  const detCtx = detCanvas.getContext('2d', { willReadFrequently: true });
  const thumbCanvas = document.createElement('canvas');
  const thumbCtx = thumbCanvas.getContext('2d');
  const previewCtx = els.previewCanvas.getContext('2d');

  /* ---------------- helpers ---------------- */
  function fmtTime(s) {
    s = Math.max(0, s || 0);
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  }
  function humanSize(b) {
    if (!b) return '0 B';
    const u = ['B', 'KB', 'MB', 'GB']; let i = 0;
    while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; }
    return b.toFixed(b < 10 && i > 0 ? 1 : 0) + ' ' + u[i];
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function baseName(n) { return String(n || 'video').replace(/\.[^.]+$/, ''); }
  function showStep(el, show) { el.hidden = !show; }
  function scrollToEl(el) { try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }

  function setEngine(kind, text) {
    const cls = kind === 'ready' ? 'chip-ready' : kind === 'error' ? 'chip-error' : kind === 'loading' ? 'chip-loading' : '';
    els.engineChip.className = 'chip' + (cls ? ' ' + cls : '');
    els.engineText.textContent = text;
  }

  let enginePromise = null;
  function ensureEngine() {
    if (enginePromise) return enginePromise;
    els.engineOverlay.hidden = false;
    const onStatus = (t) => { setEngine('loading', t); if (els.overlayStatus) els.overlayStatus.textContent = t; };
    enginePromise = Detector.init(onStatus)
      .then(() => { setEngine('ready', '识别引擎就绪 ✓'); els.engineOverlay.hidden = true; })
      .catch((err) => { setEngine('error', '引擎加载失败：' + err.message); els.engineOverlay.hidden = true; throw err; });
    return enginePromise;
  }

  function seekTo(t) {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => { if (done) return; done = true; video.removeEventListener('seeked', finish); requestAnimationFrame(() => resolve()); };
      video.addEventListener('seeked', finish);
      try {
        const dur = state.duration || video.duration || 0;
        video.currentTime = Math.max(0, Math.min(t, dur > 0 ? dur - 1e-3 : t));
      } catch (e) { finish(); }
      setTimeout(finish, 2000); // safety
    });
  }

  function denormPad(b, W, H, pad) {
    const dw = b.w * pad, dh = b.h * pad;
    return { x: (b.x - dw / 2) * W, y: (b.y - dh / 2) * H, w: (b.w + dw) * W, h: (b.h + dh) * H };
  }
  function cropThumbFrom(canvas, ctxUnused, box) {
    const W = canvas.width, H = canvas.height;
    const sx = Math.max(0, box.x * W), sy = Math.max(0, box.y * H);
    const sw = Math.min(W - sx, box.w * W), sh = Math.min(H - sy, box.h * H);
    if (sw <= 1 || sh <= 1) return '';
    const tw = 64, th = Math.max(16, Math.round(64 * sh / sw));
    thumbCanvas.width = tw; thumbCanvas.height = th;
    thumbCtx.drawImage(canvas, sx, sy, sw, sh, 0, 0, tw, th);
    try { return thumbCanvas.toDataURL('image/jpeg', 0.7); } catch (e) { return ''; }
  }

  /* ---------------- file handling ---------------- */
  function handleFile(file) {
    if (!file) return;
    if (!/^video\//.test(file.type) && !/\.(mp4|webm|mov|m4v|ogg|ogv|mkv)$/i.test(file.name)) {
      alert('请选择一个视频文件'); return;
    }
    resetAll();
    state.file = file;
    state.srcURL = URL.createObjectURL(file);
    video.src = state.srcURL;

    video.onloadedmetadata = () => {
      state.vw = video.videoWidth || 0;
      state.vh = video.videoHeight || 0;
      const setup = () => {
        state.duration = isFinite(video.duration) && video.duration > 0 ? video.duration : (state.duration || 0);
        els.fileMeta.hidden = false;
        els.fileMeta.innerHTML = '已选择：<b>' + escapeHtml(file.name) + '</b> · ' +
          state.vw + '×' + state.vh + ' · ' + fmtTime(state.duration) + ' · ' + humanSize(file.size);
        showStep(els.stepDetect, true);
        scrollToEl(els.stepDetect);
        ensureEngine().catch(() => {});
      };
      if (!isFinite(video.duration) || video.duration === 0) {
        // Some encodings report Infinity until forced to seek to the end.
        const onTU = () => {
          video.removeEventListener('timeupdate', onTU);
          state.duration = isFinite(video.duration) ? video.duration : (video.seekable.length ? video.seekable.end(0) : 0);
          video.currentTime = 0;
          setup();
        };
        video.addEventListener('timeupdate', onTU);
        try { video.currentTime = 1e101; } catch (e) { setup(); }
      } else {
        setup();
      }
    };
    video.onerror = () => { alert('无法读取该视频，请换一个文件或格式。'); };
  }

  /* ---------------- analysis ---------------- */
  function toDets(rects) {
    // rects come from Detector already normalized to [0,1].
    return rects.map((r) => {
      const box = { x: r.x, y: r.y, w: r.w, h: r.h };
      return { box, thumb: cropThumbFrom(detCanvas, detCtx, box) };
    });
  }

  async function analyze() {
    if (state.analyzing) return;
    const face = els.optFace.checked, plate = els.optPlate.checked;
    if (!face && !plate) { alert('请至少选择“人脸”或“车牌”其中一项'); return; }
    setEngine('loading', '正在准备识别引擎…');
    try { await ensureEngine(); } catch (e) { alert('识别引擎加载失败：' + (e && e.message ? e.message : e) + '\n请刷新页面重试，或改用最新版 Chrome / Edge。'); return; }

    state.analyzing = true; state.cancelAnalyze = false;
    els.btnAnalyze.disabled = true;
    els.analyzeProgress.hidden = false;
    els.analyzeBar.style.width = '0%';

    // keep manual regions across re-analysis, drop previous auto tracks
    state.tracks = state.tracks.filter((t) => t.category === 'manual');
    state.selected = new Set([...state.selected].filter((uid) => state.tracks.some((t) => t.uid === uid)));

    const targetW = 448; // balance YuNet DNN speed vs. small-face recall
    const scale = state.vw > targetW ? targetW / state.vw : 1;
    const dW = Math.max(2, Math.round(state.vw * scale));
    const dH = Math.max(2, Math.round(state.vh * scale));
    detCanvas.width = dW; detCanvas.height = dH;

    const density = parseInt(els.optDensity.value, 10) || 4;
    let nSamples = Math.max(2, Math.ceil((state.duration || 1) * density));
    if (nSamples > 900) nSamples = 900;
    const dt = (state.duration || 1) / nSamples;

    const gap = Math.max(0.6, dt * 3);
    const faceT = new Tracking.Tracker('face', { maxGap: gap, iouThresh: 0.2 });
    const plateT = new Tracking.Tracker('plate', { maxGap: gap, iouThresh: 0.15 });

    video.pause();
    for (let i = 0; i < nSamples; i++) {
      if (state.cancelAnalyze) break;
      const t = Math.min((state.duration || 0) - 1e-3, i * dt);
      await seekTo(t);
      try { detCtx.drawImage(video, 0, 0, dW, dH); } catch (e) {}
      let res = { faces: [], plates: [] };
      try {
        const imageData = detCtx.getImageData(0, 0, dW, dH);
        res = await Detector.detect(imageData, { face, plate });
      } catch (e) { console.error(e); }
      if (face) faceT.update(toDets(res.faces), t);
      if (plate) plateT.update(toDets(res.plates), t);
      const p = (i + 1) / nSamples;
      els.analyzeBar.style.width = (p * 100).toFixed(1) + '%';
      els.analyzeText.textContent = '识别中… ' + (i + 1) + ' / ' + nSamples + ' 帧';
    }

    // Require auto-detected objects to persist a little to cut false positives.
    const minApp = nSamples >= 8 ? 2 : 1;
    const autos = [];
    if (face) faceT.finalize(1).forEach((tr) => { if (tr.samples.length >= minApp) autos.push(tr); });
    if (plate) plateT.finalize(1).forEach((tr) => { if (tr.samples.length >= minApp) autos.push(tr); });
    autos.forEach((tr) => { tr.uid = tr.id; state.tracks.push(tr); state.selected.add(tr.uid); });

    state.analyzing = false;
    els.btnAnalyze.disabled = false;
    els.analyzeProgress.hidden = true;

    buildReview();
    showStep(els.stepReview, true);
    setupPreview();
    scrollToEl(els.stepReview);
  }

  /* ---------------- review & selection ---------------- */
  function buildReview() {
    const list = els.detectList;
    list.innerHTML = '';
    const groups = [
      ['face', state.tracks.filter((t) => t.category === 'face')],
      ['plate', state.tracks.filter((t) => t.category === 'plate')],
      ['manual', state.tracks.filter((t) => t.category === 'manual')]
    ];
    let any = false;
    for (const [cat, arr] of groups) {
      if (!arr.length) continue;
      any = true;
      const title = document.createElement('div');
      title.className = 'group-title';
      title.textContent = CATICON[cat] + ' ' + CATLABEL[cat] + '（' + arr.length + '）';
      list.appendChild(title);
      arr.forEach((tr, i) => list.appendChild(makeItem(tr, i + 1)));
    }
    if (!any) {
      list.innerHTML = '<div class="empty-hint">未自动识别到人脸或车牌。<br>可点击左侧“✏️ 手动框选”，在画面上手动圈出要遮挡的区域。</div>';
    }
    updateSelCount();
  }

  function makeItem(tr, n) {
    const div = document.createElement('div');
    div.className = 'det-item' + (state.selected.has(tr.uid) ? ' on' : '');
    div.dataset.uid = tr.uid;

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = state.selected.has(tr.uid);
    cb.addEventListener('click', (e) => { e.stopPropagation(); toggleTrack(tr.uid, cb.checked); });

    const img = document.createElement('img');
    img.src = tr.thumb || '';
    img.alt = '';

    const info = document.createElement('div');
    info.className = 'di-info';
    const title = document.createElement('div');
    title.className = 'di-title';
    title.textContent = CATLABEL[tr.category] + ' #' + n;
    const sub = document.createElement('div');
    sub.className = 'di-sub';
    sub.textContent = tr.category === 'manual' ? '全程遮挡' : ('出现 ' + fmtTime(tr.firstT) + ' – ' + fmtTime(tr.lastT));
    info.appendChild(title); info.appendChild(sub);

    div.appendChild(cb); div.appendChild(img); div.appendChild(info);

    if (tr.category === 'manual') {
      const del = document.createElement('button');
      del.className = 'di-del'; del.textContent = '🗑'; del.title = '删除该区域';
      del.addEventListener('click', (e) => { e.stopPropagation(); removeTrack(tr.uid); });
      div.appendChild(del);
    }

    div.addEventListener('click', () => {
      const on = !state.selected.has(tr.uid);
      cb.checked = on;
      toggleTrack(tr.uid, on);
    });
    return div;
  }

  function toggleTrack(uid, on) {
    if (on) state.selected.add(uid); else state.selected.delete(uid);
    const el = els.detectList.querySelector('[data-uid="' + uid + '"]');
    if (el) {
      el.classList.toggle('on', on);
      const cb = el.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = on;
    }
    updateSelCount();
    drawPreview();
  }

  function removeTrack(uid) {
    state.tracks = state.tracks.filter((t) => t.uid !== uid);
    state.selected.delete(uid);
    buildReview();
    drawPreview();
  }

  function updateSelCount() {
    els.selCount.textContent = '已选中 ' + state.selected.size + ' / ' + state.tracks.length;
  }

  /* ---------------- preview ---------------- */
  function setupPreview() {
    const cw = Math.min(state.vw || 640, 960);
    const ch = Math.max(1, Math.round(cw * (state.vh || 360) / (state.vw || 640)));
    els.previewCanvas.width = cw;
    els.previewCanvas.height = ch;
    els.scrub.value = 0;
    state.previewT = 0;
    seekTo(0).then(drawPreview);
  }

  let draft = null, drawStart = null, manualMode = false;

  function drawPreview() {
    const cv = els.previewCanvas, ctx = previewCtx;
    try { ctx.drawImage(video, 0, 0, cv.width, cv.height); } catch (e) {}
    const t = state.previewT;
    const style = els.styleSel.value, strength = parseInt(els.strength.value, 10);
    for (const tr of state.tracks) {
      const b = Tracking.boxAt(tr, t, tr.category === 'manual' ? 1e9 : 0.35);
      if (!b) continue;
      const rect = denormPad(b, cv.width, cv.height, PAD[tr.category]);
      if (state.selected.has(tr.uid)) {
        Mosaic.apply(ctx, rect, { style, strength });
      } else {
        ctx.save();
        ctx.strokeStyle = '#fb7185';
        ctx.lineWidth = Math.max(2, cv.width / 320);
        ctx.setLineDash([7, 5]);
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
        ctx.restore();
      }
    }
    if (draft) {
      ctx.save();
      ctx.strokeStyle = '#6d5efc';
      ctx.fillStyle = 'rgba(109,94,252,.22)';
      ctx.lineWidth = 2;
      ctx.fillRect(draft.x, draft.y, draft.w, draft.h);
      ctx.strokeRect(draft.x, draft.y, draft.w, draft.h);
      ctx.restore();
    }
  }

  let seekingPreview = false, pendingT = null;
  function requestPreviewSeek(t) {
    pendingT = t;
    if (seekingPreview) return;
    seekingPreview = true;
    const go = () => {
      const tt = pendingT; pendingT = null;
      seekTo(tt).then(() => {
        drawPreview();
        if (pendingT != null) go(); else seekingPreview = false;
      });
    };
    go();
  }

  function canvasPoint(e) {
    const cv = els.previewCanvas, rect = cv.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * cv.width;
    const y = (e.clientY - rect.top) / rect.height * cv.height;
    return { x: Math.max(0, Math.min(cv.width, x)), y: Math.max(0, Math.min(cv.height, y)) };
  }

  function toggleAtPoint(p) {
    const cv = els.previewCanvas;
    const hits = [];
    for (const tr of state.tracks) {
      const b = Tracking.boxAt(tr, state.previewT, tr.category === 'manual' ? 1e9 : 0.35);
      if (!b) continue;
      const r = denormPad(b, cv.width, cv.height, PAD[tr.category]);
      if (p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h) hits.push({ tr, area: r.w * r.h });
    }
    if (!hits.length) return;
    hits.sort((a, b) => a.area - b.area);
    const uid = hits[0].tr.uid;
    toggleTrack(uid, !state.selected.has(uid));
  }

  function addManual(rectPx) {
    const cv = els.previewCanvas;
    const box = { x: rectPx.x / cv.width, y: rectPx.y / cv.height, w: rectPx.w / cv.width, h: rectPx.h / cv.height };
    state.manualCount++;
    const uid = 'manual-' + state.manualCount;
    const dur = Math.max(0.001, state.duration || 0.001);
    const thumb = (function () {
      const tw = 64, th = Math.max(16, Math.round(64 * rectPx.h / Math.max(1, rectPx.w)));
      thumbCanvas.width = tw; thumbCanvas.height = th;
      try { thumbCtx.drawImage(cv, rectPx.x, rectPx.y, rectPx.w, rectPx.h, 0, 0, tw, th); return thumbCanvas.toDataURL('image/jpeg', 0.7); } catch (e) { return ''; }
    })();
    const tr = {
      id: uid, uid, category: 'manual', manual: true,
      samples: [{ t: 0, box }, { t: dur, box }],
      firstT: 0, lastT: dur, bestT: 0, thumb
    };
    state.tracks.push(tr);
    state.selected.add(uid);
    buildReview();
    drawPreview();
  }

  /* ---------------- export ---------------- */
  function pickMime() {
    if (!('MediaRecorder' in window)) return '';
    const c = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4',
      'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'];
    for (const m of c) { try { if (MediaRecorder.isTypeSupported(m)) return m; } catch (e) {} }
    return '';
  }
  function bitrateFor(w, h) {
    return Math.min(16000000, Math.max(2500000, Math.round(w * h * 30 * 0.15)));
  }

  let audioCtx = null, srcNode = null, destNode = null;
  function getAudioStream() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audioCtx) audioCtx = new AC();
    if (!srcNode) {
      try {
        srcNode = audioCtx.createMediaElementSource(video);
        destNode = audioCtx.createMediaStreamDestination();
        srcNode.connect(destNode);
        // intentionally NOT connected to audioCtx.destination -> silent while exporting
      } catch (e) { return null; }
    }
    if (audioCtx.state === 'suspended') { try { audioCtx.resume(); } catch (e) {} }
    return destNode ? destNode.stream : null;
  }

  async function exportVideo() {
    if (state.exporting) return;
    const selected = state.tracks.filter((t) => state.selected.has(t.uid));
    if (!('MediaRecorder' in window) || !els.previewCanvas.captureStream && !document.createElement('canvas').captureStream) {
      alert('当前浏览器不支持导出（缺少 MediaRecorder / captureStream）。请使用最新版 Chrome 或 Edge。');
      return;
    }
    state.exporting = true;
    els.btnExport.disabled = true;
    showStep(els.stepExport, true);
    els.resultBox.hidden = true;
    els.exportProgress.hidden = false;
    els.exportBar.style.width = '0%';
    els.exportText.textContent = '准备中…';
    scrollToEl(els.stepExport);

    let outW = state.vw || 640, outH = state.vh || 360;
    const maxW = 1920;
    if (outW > maxW) { const s = maxW / outW; outW = Math.round(outW * s); outH = Math.round(outH * s); }
    outW -= outW % 2; outH -= outH % 2;
    const oc = document.createElement('canvas');
    oc.width = outW; oc.height = outH;
    const octx = oc.getContext('2d');

    const canvasStream = oc.captureStream(30);
    const outStream = new MediaStream();
    canvasStream.getVideoTracks().forEach((t) => outStream.addTrack(t));
    const aStream = getAudioStream();
    if (aStream) aStream.getAudioTracks().forEach((t) => outStream.addTrack(t));

    const mime = pickMime();
    let rec;
    try {
      rec = new MediaRecorder(outStream, mime ? { mimeType: mime, videoBitsPerSecond: bitrateFor(outW, outH) } : undefined);
    } catch (e) {
      alert('无法创建视频录制器：' + e.message);
      state.exporting = false; els.btnExport.disabled = false; return;
    }
    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    const stopped = new Promise((res) => { rec.onstop = res; });

    const style = els.styleSel.value, strength = parseInt(els.strength.value, 10);
    function renderFrame(t) {
      try { octx.drawImage(video, 0, 0, outW, outH); } catch (e) {}
      for (const tr of selected) {
        const b = Tracking.boxAt(tr, t, tr.category === 'manual' ? 1e9 : 0.4);
        if (!b) continue;
        Mosaic.apply(octx, denormPad(b, outW, outH, PAD[tr.category]), { style, strength });
      }
    }

    video.pause();
    await seekTo(0);
    renderFrame(0);
    rec.start(1000);
    // Keep the element unmuted when we have an audio graph so the original audio
    // flows into the recorder (the graph is not wired to speakers, so nothing plays
    // aloud). Mute only when there's no capturable audio, to avoid speaker output.
    video.muted = !aStream;
    try { await video.play(); } catch (e) {}

    let ended = false;
    const finishExport = () => { if (ended) return; ended = true; setTimeout(() => { try { rec.stop(); } catch (e) {} }, 300); };

    function updateProgress() {
      const p = state.duration ? Math.min(1, video.currentTime / state.duration) : 0;
      els.exportBar.style.width = (p * 100).toFixed(1) + '%';
      els.exportText.textContent = '处理中… ' + fmtTime(video.currentTime) + ' / ' + fmtTime(state.duration);
    }

    const useRVFC = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
    if (useRVFC) {
      const cb = () => {
        if (ended) return;
        renderFrame(video.currentTime);
        updateProgress();
        if (video.ended) finishExport();
        else video.requestVideoFrameCallback(cb);
      };
      video.requestVideoFrameCallback(cb);
    } else {
      const raf = () => {
        if (ended) return;
        renderFrame(video.currentTime);
        updateProgress();
        if (video.ended) finishExport();
        else requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
    video.addEventListener('ended', finishExport, { once: true });
    const guard = setInterval(() => {
      if (ended) { clearInterval(guard); return; }
      if (video.ended || (state.duration && video.currentTime >= state.duration - 0.05)) finishExport();
    }, 400);

    await stopped;
    clearInterval(guard);

    const type = (mime || 'video/webm').split(';')[0];
    const blob = new Blob(chunks, { type });
    state.exporting = false;
    els.btnExport.disabled = false;

    if (!blob.size) {
      els.exportProgress.hidden = true;
      alert('导出失败：未捕获到视频数据。请尝试使用最新版 Chrome / Edge。');
      return;
    }
    if (state.outputURL) URL.revokeObjectURL(state.outputURL);
    state.outputURL = URL.createObjectURL(blob);
    const ext = type.indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    els.resultVideo.src = state.outputURL;
    els.downloadLink.href = state.outputURL;
    els.downloadLink.download = baseName(state.file && state.file.name) + '_打码.' + ext;
    els.resultMeta.textContent = outW + '×' + outH + ' · ' + humanSize(blob.size) + ' · ' + ext.toUpperCase();
    els.exportProgress.hidden = true;
    els.resultBox.hidden = false;
    scrollToEl(els.stepExport);
  }

  /* ---------------- reset ---------------- */
  function resetAll() {
    state.tracks = [];
    state.selected = new Set();
    state.manualCount = 0;
    state.previewT = 0;
    if (state.outputURL) { URL.revokeObjectURL(state.outputURL); state.outputURL = null; }
    els.detectList.innerHTML = '';
    showStep(els.stepReview, false);
    showStep(els.stepExport, false);
    els.resultBox.hidden = true;
    els.analyzeProgress.hidden = true;
    els.exportProgress.hidden = true;
  }

  /* ---------------- wiring ---------------- */
  function wire() {
    els.fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
    ['dragenter', 'dragover'].forEach((ev) => els.dropZone.addEventListener(ev, (e) => { e.preventDefault(); els.dropZone.classList.add('drag'); }));
    ['dragleave', 'drop'].forEach((ev) => els.dropZone.addEventListener(ev, (e) => { e.preventDefault(); els.dropZone.classList.remove('drag'); }));
    els.dropZone.addEventListener('drop', (e) => { if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });

    els.btnAnalyze.addEventListener('click', analyze);
    els.btnCancelAnalyze.addEventListener('click', () => { state.cancelAnalyze = true; });

    els.scrub.addEventListener('input', () => {
      const t = (els.scrub.value / 1000) * (state.duration || 0);
      state.previewT = t;
      requestPreviewSeek(t);
    });
    els.styleSel.addEventListener('change', drawPreview);
    els.strength.addEventListener('input', drawPreview);

    els.btnManual.addEventListener('click', () => {
      manualMode = !manualMode;
      els.btnManual.classList.toggle('btn-primary', manualMode);
      els.drawHint.hidden = !manualMode;
    });
    els.previewCanvas.addEventListener('pointerdown', (e) => {
      const p = canvasPoint(e);
      if (manualMode) {
        drawStart = p; draft = { x: p.x, y: p.y, w: 0, h: 0 };
        try { els.previewCanvas.setPointerCapture(e.pointerId); } catch (er) {}
      } else {
        toggleAtPoint(p);
      }
    });
    els.previewCanvas.addEventListener('pointermove', (e) => {
      if (!manualMode || !drawStart) return;
      const p = canvasPoint(e);
      draft = { x: Math.min(drawStart.x, p.x), y: Math.min(drawStart.y, p.y), w: Math.abs(p.x - drawStart.x), h: Math.abs(p.y - drawStart.y) };
      drawPreview();
    });
    els.previewCanvas.addEventListener('pointerup', () => {
      if (!manualMode || !drawStart) return;
      drawStart = null;
      if (draft && draft.w > 6 && draft.h > 6) addManual(draft);
      draft = null;
      drawPreview();
    });

    els.btnAll.addEventListener('click', () => { state.tracks.forEach((t) => state.selected.add(t.uid)); buildReview(); drawPreview(); });
    els.btnNone.addEventListener('click', () => { state.selected.clear(); buildReview(); drawPreview(); });

    els.btnExport.addEventListener('click', exportVideo);
    els.btnRestart.addEventListener('click', () => { showStep(els.stepExport, false); showStep(els.stepReview, true); scrollToEl(els.stepReview); });
  }

  window.addEventListener('load', () => {
    wire();
    const canCapture = !!document.createElement('canvas').captureStream;
    if (!('MediaRecorder' in window) || !canCapture) els.unsupported.hidden = false;
    // Engine is loaded lazily on first file selection (see handleFile) so idle
    // visitors don't download ~10MB. Show a neutral status until then.
    setEngine('idle', '选择视频后将自动加载识别引擎（约 10MB，仅首次）');
  });
})();
