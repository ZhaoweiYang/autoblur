/* Ugokie — in-browser image → video renderer.
 * The still image is animated with a virtual camera on a <canvas>, then the
 * canvas is recorded with MediaRecorder. Nothing leaves the browser.
 * To plug in a real generative model later, replace render() with an API call
 * that returns a video Blob — the rest of the UI stays the same.
 */
(function () {
  const $ = id => document.getElementById(id);
  const t = k => window.I18N.t(k);

  const FPS = 30;
  const MAX_BYTES = 10 * 1024 * 1024;
  const FREE_CREDITS = 3;
  const CREDIT_KEY = 'ugokie.credits';

  const els = {
    file: $('fileInput'), drop: $('drop'), dropEmpty: $('dropEmpty'), thumb: $('thumb'), clear: $('clearImg'),
    prompt: $('prompt'), motion: $('motion'), ratio: $('ratio'), duration: $('duration'),
    quality: $('quality'), effect: $('effect'), generate: $('generate'),
    canvas: $('canvas'), result: $('result'), stageEmpty: $('stageEmpty'),
    progress: $('progress'), progressFill: $('progressFill'), progressText: $('progressText'),
    outActions: $('outActions'), download: $('download'), again: $('again'),
    creditsNav: $('creditsNav'), toast: $('toast'),
  };

  let image = null;       // HTMLImageElement | HTMLCanvasElement
  let busy = false;
  let resultUrl = null;

  /* ---------------- credits (demo: stored locally) ---------------- */
  function getCredits() {
    try {
      const v = localStorage.getItem(CREDIT_KEY);
      return v === null ? FREE_CREDITS : Math.max(0, parseInt(v, 10) || 0);
    } catch (_) { return FREE_CREDITS; }
  }
  function setCredits(n) {
    try { localStorage.setItem(CREDIT_KEY, String(n)); } catch (_) { /* ignore */ }
    els.creditsNav.textContent = n;
  }
  setCredits(getCredits());

  /* ---------------- toast ---------------- */
  let toastTimer;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 3200);
  }

  /* ---------------- image input ---------------- */
  function setImage(src) {
    image = src;
    els.thumb.src = src instanceof HTMLCanvasElement ? src.toDataURL('image/jpeg', 0.9) : src.src;
    els.thumb.hidden = false;
    els.clear.hidden = false;
    els.dropEmpty.hidden = true;
    els.generate.disabled = busy;
  }
  function clearImage() {
    image = null;
    els.thumb.hidden = true;
    els.thumb.removeAttribute('src');
    els.clear.hidden = true;
    els.dropEmpty.hidden = false;
    els.file.value = '';
    els.generate.disabled = true;
  }
  function loadFile(file) {
    if (!file || !/^image\/(png|jpe?g|webp)$/.test(file.type) || file.size > MAX_BYTES) {
      toast(t('toast.badFile'));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => setImage(img);
    img.onerror = () => toast(t('toast.badFile'));
    img.src = url;
  }

  els.file.addEventListener('change', e => loadFile(e.target.files[0]));
  els.clear.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); clearImage(); });
  ['dragenter', 'dragover'].forEach(ev => els.drop.addEventListener(ev, e => { e.preventDefault(); els.drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach(ev => els.drop.addEventListener(ev, e => { e.preventDefault(); els.drop.classList.remove('over'); }));
  els.drop.addEventListener('drop', e => loadFile(e.dataTransfer.files[0]));

  /* ---------------- sample photos ---------------- */
  document.querySelectorAll('[data-sample]').forEach(btn => btn.addEventListener('click', () => {
    const img = new Image();
    img.onload = () => setImage(img);
    img.src = btn.dataset.sample;
  }));

  /* ---------------- motion ---------------- */
  // Keywords (EN + JA) used when motion = "auto".
  const KEYWORDS = [
    ['zoomOut', ['zoom out', 'pull back', 'reveal', 'ズームアウト', '引き', '遠ざか']],
    ['dolly', ['dolly', 'vertigo', 'push in', 'ドリー', '迫']],
    ['zoomIn', ['zoom in', 'zoom', 'close', 'closer', 'ズームイン', 'ズーム', '寄', 'アップ', '近づ']],
    ['panLeft', ['pan left', 'left', '左']],
    ['panRight', ['pan right', 'right', 'pan', '右', 'パン']],
    ['tiltUp', ['tilt', 'up', 'rise', 'sky', 'ティルト', '上', '見上げ', '空']],
    ['orbit', ['orbit', 'rotate', 'spin', 'around', '回', 'オービット', '旋回']],
    ['handheld', ['handheld', 'shake', 'vlog', 'walk', '手持ち', '揺れ', '歩']],
  ];
  function resolveMotion(choice, prompt) {
    if (choice !== 'auto') return choice;
    const p = prompt.toLowerCase();
    for (const [m, words] of KEYWORDS) if (words.some(w => p.includes(w))) return m;
    return 'zoomIn';
  }

  const ease = p => 0.5 - Math.cos(Math.PI * p) / 2;
  // Returns camera {s: scale, x/y: offset as fraction of frame, r: rotation rad}
  function camera(motion, p, sec) {
    const e = ease(p);
    switch (motion) {
      case 'zoomIn':  return { s: 1.04 + 0.26 * e, x: 0, y: 0, r: 0 };
      case 'zoomOut': return { s: 1.30 - 0.26 * e, x: 0, y: 0, r: 0 };
      case 'panLeft': return { s: 1.22, x: -0.08 + 0.16 * e, y: 0, r: 0 };
      case 'panRight':return { s: 1.22, x: 0.08 - 0.16 * e, y: 0, r: 0 };
      case 'tiltUp':  return { s: 1.22, x: 0, y: -0.08 + 0.16 * e, r: 0 };
      case 'orbit': {
        const a = Math.PI * 2 * e;
        return { s: 1.22, x: 0.05 * Math.sin(a), y: 0.025 * (Math.cos(a) - 1), r: 0.03 * Math.sin(a) };
      }
      case 'dolly':   return { s: 1.02 + 0.4 * e * e, x: 0, y: -0.02 * e, r: 0 };
      case 'handheld':return {
        s: 1.14 + 0.03 * e,
        x: 0.010 * Math.sin(sec * 1.9) + 0.006 * Math.sin(sec * 4.7),
        y: 0.008 * Math.sin(sec * 2.3 + 1) + 0.005 * Math.sin(sec * 5.9),
        r: 0.006 * Math.sin(sec * 1.3),
      };
    }
    return { s: 1, x: 0, y: 0, r: 0 };
  }

  function frameSize(ratio, quality) {
    const short = quality === '1080' ? 1080 : 720;
    const [a, b] = ratio.split(':').map(Number);
    const w = a >= b ? Math.round(short * a / b) : short;
    const h = a >= b ? short : Math.round(short * b / a);
    return { w: w - (w % 2), h: h - (h % 2) };
  }

  let grain;
  function grainTile() {
    if (grain) return grain;
    grain = document.createElement('canvas');
    grain.width = grain.height = 160;
    const g = grain.getContext('2d'), d = g.createImageData(160, 160);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 28; }
    g.putImageData(d, 0, 0);
    return grain;
  }

  function drawFrame(ctx, W, H, img, cam, look, watermark) {
    const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
    const cover = Math.max(W / iw, H / ih);
    ctx.save();
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
    ctx.filter = look === 'mono' ? 'grayscale(1) contrast(1.15)'
      : look === 'warm' ? 'sepia(0.35) saturate(1.2) contrast(1.05)'
      : look === 'cinema' ? 'contrast(1.12) saturate(1.1)' : 'none';
    ctx.translate(W / 2 + cam.x * W, H / 2 + cam.y * H);
    ctx.rotate(cam.r);
    ctx.scale(cover * cam.s, cover * cam.s);
    ctx.drawImage(img, -iw / 2, -ih / 2, iw, ih);
    ctx.restore();

    if (look === 'warm') {
      const tile = grainTile();
      ctx.save();
      ctx.globalCompositeOperation = 'overlay';
      ctx.translate(-Math.random() * 160, -Math.random() * 160);
      ctx.fillStyle = ctx.createPattern(tile, 'repeat');
      ctx.fillRect(0, 0, W + 160, H + 160);
      ctx.restore();
    }
    if (look === 'cinema' || look === 'warm' || look === 'mono') {
      const v = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
      v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.45)');
      ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
    }
    if (look === 'cinema' && W > H) {
      const bar = Math.round(H * 0.1);
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, bar); ctx.fillRect(0, H - bar, W, bar);
    }
    if (watermark) {
      const fs = Math.round(Math.min(W, H) * 0.04);
      ctx.font = `700 ${fs}px system-ui, sans-serif`;
      ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 6;
      ctx.fillText('Ugokie', W - fs * 0.8, H - fs * 0.6);
      ctx.shadowBlur = 0;
    }
  }

  function pickMime() {
    const types = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4;codecs=avc1', 'video/mp4'];
    return types.find(m => window.MediaRecorder && MediaRecorder.isTypeSupported(m)) || '';
  }

  function setProgress(p) {
    const pct = Math.round(p * 100);
    els.progressFill.style.width = pct + '%';
    els.progressText.textContent = `${t('out.rendering')} ${pct}%`;
  }

  function render(opts) {
    return new Promise((resolve, reject) => {
      const { w: W, h: H } = frameSize(opts.ratio, opts.quality);
      const c = els.canvas;
      c.width = W; c.height = H;
      const ctx = c.getContext('2d');
      const mime = pickMime();
      const stream = c.captureStream(FPS);
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: H >= 1080 ? 8e6 : 5e6 } : undefined);
      const chunks = [];
      rec.ondataavailable = e => e.data.size && chunks.push(e.data);
      rec.onerror = e => reject(e.error || e);
      rec.onstop = () => resolve(new Blob(chunks, { type: rec.mimeType || mime || 'video/webm' }));

      const total = opts.duration * 1000;
      drawFrame(ctx, W, H, opts.image, camera(opts.motion, 0, 0), opts.look, opts.watermark);
      rec.start(250);
      const t0 = performance.now();
      (function tick(now) {
        const el = Math.min(now - t0, total);
        const p = el / total;
        drawFrame(ctx, W, H, opts.image, camera(opts.motion, p, el / 1000), opts.look, opts.watermark);
        setProgress(p);
        if (el < total) requestAnimationFrame(tick);
        else setTimeout(() => rec.state !== 'inactive' && rec.stop(), 120);
      })(t0);
    });
  }

  // MediaRecorder WebM has no duration in its header, which breaks the seek bar.
  // Seeking far past the end forces the browser to compute the real duration.
  function fixDuration(video) {
    return new Promise(resolve => {
      const done = () => { video.currentTime = 0; resolve(); };
      video.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(video.duration)) return done();
        video.addEventListener('timeupdate', done, { once: true });
        video.currentTime = 1e101;
      }, { once: true });
      setTimeout(resolve, 3000);
    });
  }

  async function generate() {
    if (!image || busy) return;
    const credits = getCredits();
    if (credits <= 0) { toast(t('toast.noCredits')); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); return; }
    if (!window.MediaRecorder || !els.canvas.captureStream) { toast(t('toast.unsupported')); return; }

    let quality = els.quality.value;
    const isPro = false; // demo: no paid accounts yet
    if (quality === '1080' && !isPro) { toast(t('toast.pro')); quality = '720'; els.quality.value = '720'; }

    busy = true;
    els.generate.disabled = true;
    els.generate.classList.add('loading');
    els.outActions.hidden = true;
    els.result.hidden = true;
    els.result.pause();
    els.stageEmpty.hidden = true;
    els.canvas.hidden = false;
    els.progress.hidden = false;
    setProgress(0);

    try {
      const blob = await render({
        image,
        motion: resolveMotion(els.motion.value, els.prompt.value),
        ratio: els.ratio.value,
        duration: Number(els.duration.value),
        quality,
        look: els.effect.value,
        watermark: !isPro,
      });
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      resultUrl = URL.createObjectURL(blob);
      els.result.src = resultUrl;
      await fixDuration(els.result);
      els.result.hidden = false;
      els.canvas.hidden = true;
      els.result.play().catch(() => {});
      els.download.href = resultUrl;
      els.download.download = `ugokie-${Date.now()}.${blob.type.includes('mp4') ? 'mp4' : 'webm'}`;
      els.outActions.hidden = false;
      setCredits(credits - 1);
      toast(t('toast.done'));
    } catch (err) {
      console.error(err);
      toast(t('toast.unsupported'));
      els.canvas.hidden = true;
      els.stageEmpty.hidden = false;
    } finally {
      busy = false;
      els.progress.hidden = true;
      els.generate.classList.remove('loading');
      els.generate.disabled = !image;
    }
  }

  els.generate.addEventListener('click', generate);
  els.again.addEventListener('click', generate);

  /* ---------------- pricing ---------------- */
  document.querySelectorAll('[data-plan]').forEach(b => b.addEventListener('click', () => toast(t('toast.checkout'))));

  /* ---------------- gallery: play clips only while on screen ---------------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clips = document.querySelectorAll('.gallery video');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) target.play().catch(() => {});
      else target.pause();
    }), { threshold: 0.25 });
    clips.forEach(v => io.observe(v));
  }

  /* ---------------- misc ---------------- */
  const navLinks = $('navLinks');
  $('menuBtn').addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') navLinks.classList.remove('open'); });
  $('year').textContent = new Date().getFullYear();
})();
