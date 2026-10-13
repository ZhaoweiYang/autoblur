/* Blockgoer — browser behaviour for the static pages.
 * Content is pre-rendered into the HTML for each language; this script only
 * adds interactivity: theme, menu, language memory, creator widgets, the
 * in-browser preview workspace, the idea cards and the checkout consent. */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };
  const BF = window.BF || { lang: "en", t: {} };
  const T = BF.t;
  document.documentElement.classList.add("js");

  const TOOL_META = {
    thumbnail: { size: "1280 × 720", ext: "png" },
    ui: { size: "1280 × 720", ext: "png" },
    texture: { size: "512 × 512", ext: "png" },
    clothing: { size: "585 × 559", ext: "png" },
    icon: { size: "512 × 512", ext: "png" },
    gfx: { size: "512 × 512", ext: "png" },
    sfx: { size: "WAV · 44.1 kHz", ext: "wav" }
  };
  const creditLabel = (n) => (n === 1 ? T.credit.one : T.credit.n.replace("{n}", n));

  /* ================= theme / language / nav ================= */
  const themeBtn = $("#themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    store.set("blockgoer-theme", next);
  });

  $$("[data-lang]").forEach((a) => a.addEventListener("click", () => store.set("blockgoer-lang", a.dataset.lang)));

  const burger = $("#burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }
  const navWrap = $("#topbar");
  addEventListener("scroll", () => navWrap && navWrap.classList.toggle("scrolled", scrollY > 20), { passive: true });

  /* ================= checkout ================= */
  const consentBox = $("#consentBox");
  if (consentBox) {
    const start = $("#startTrial");
    const hint = $("#consentHint");
    const sync = () => {
      start.classList.toggle("disabled-look", !consentBox.checked);
      start.setAttribute("aria-disabled", String(!consentBox.checked));
      hint.hidden = consentBox.checked;
    };
    consentBox.addEventListener("change", sync);
    start.addEventListener("click", (e) => {
      if (!consentBox.checked) { e.preventDefault(); hint.hidden = false; consentBox.focus(); hint.classList.add("shake"); setTimeout(() => hint.classList.remove("shake"), 400); }
    });
    $("#consentForm").addEventListener("submit", (e) => e.preventDefault());
    sync();
    // Show the concrete local time the first charge would happen.
    // Only show a live clock once a real checkout is connected.
    const ct = $("#chargeTime b");
    if (ct && T.checkout && BF.checkoutUrl) {
      $("#chargeTime").firstChild.textContent = T.checkout.timeLineLive + " ";
      const fmt = new Intl.DateTimeFormat(BF.lang === "ja" ? "ja-JP" : "en-US", { dateStyle: "medium", timeStyle: "short" });
      const tick = () => { ct.textContent = fmt.format(new Date(Date.now() + 3600e3)) + (BF.lang === "ja" ? "（現地時間）" : " (your local time)"); };
      tick();
      setInterval(tick, 30e3);
    }
  }

  /* Pages without the creator/preview UI stop here. */
  if (!document.body.classList.contains("home") || !window.Gen) return;

  /* ================= creator widget ================= */
  const creators = [];
  const heroCreator = () => creators[0];
  let sharedTool = (T.toolOrder && T.toolOrder[0]) || "thumbnail";

  function Creator(root) {
    const typeSel = $("[data-role=type]", root);
    const input = $("[data-role=input]", root);
    const label = $("[data-role=label]", root);
    const btn = $("[data-role=btn]", root);
    const chips = $("[data-role=chips]", root);
    const form = $("form", root);
    const self = {
      render() {
        const tool = sharedTool;
        const P = T.prompt[tool];
        if (typeSel) typeSel.value = tool;
        input.placeholder = P.ph;
        if (label) label.textContent = P.label;
        btn.textContent = P.btn;
        if (chips) chips.innerHTML = T.chips[tool].map((c) => `<button type="button" class="chip">${escapeHtml(c)}</button>`).join("");
      },
      setTool(id) { sharedTool = id; creators.forEach((c) => c.render()); },
      focus() { input.focus({ preventScroll: true }); },
      setPrompt(v) { input.value = v; }
    };
    if (typeSel) typeSel.addEventListener("change", () => { self.setTool(typeSel.value); input.focus(); });
    if (chips) chips.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (c) { input.value = c.textContent; input.focus(); }
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) { toast(T.ws.empty); input.focus(); return; }
      openWorkspace(sharedTool, v);
    });
    return self;
  }
  $$("[data-creator]").forEach((el) => creators.push(Creator(el)));

  const goToComposer = () => {
    $(".ask").scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => heroCreator().focus(), 450);
  };
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open-tool]");
    if (o) { e.preventDefault(); heroCreator().setTool(o.dataset.openTool); goToComposer(); return; }
    const f = e.target.closest("[data-focus-composer]");
    if (f) { e.preventDefault(); goToComposer(); return; }
    const idea = e.target.closest("[data-idea]");
    if (idea) {
      const txt = T.ideas[+idea.dataset.idea];
      heroCreator().setTool("thumbnail");
      heroCreator().setPrompt(txt);
      openWorkspace("thumbnail", txt);
    }
  });

  /* ================= preview workspace ================= */
  const ws = { tool: null, prompt: "", variation: 0, url: null, audio: null };
  let audioCtx = null;

  function openWorkspace(tool, prompt) {
    ws.tool = tool; ws.prompt = prompt; ws.variation = 0;
    const dlg = $("#workspace");
    if (!dlg.open) dlg.showModal();
    generate();
  }

  async function generate() {
    const id = ws.tool, meta = TOOL_META[id];
    $("#wsTitle").textContent = BF.lang === "ja" ? `${T.tools[id]}・「${ws.prompt}」` : `${T.tools[id]} · “${ws.prompt}”`;
    $("#wsSize").textContent = meta.size;
    $("#wsCost").textContent = creditLabel(T.creditCosts[id]);
    const stage = $("#wsStage");
    stage.innerHTML = `<div class="spinner"></div><p>${escapeHtml(T.ws.generating)}</p>`;
    stage.className = "sketch-stage";
    const dl = $("#wsDownload");
    dl.classList.add("disabled");
    $("#wsPlay").hidden = id !== "sfx";
    if (ws.url) { URL.revokeObjectURL(ws.url); ws.url = null; }
    await new Promise((r) => setTimeout(r, 350));
    const seed = Gen.hash(ws.prompt.toLowerCase() + "#" + ws.variation + "#" + id);
    let blob;
    try {
      if (id === "sfx") {
        const buf = await Gen.sfx(ws.prompt, seed);
        ws.audio = buf;
        blob = Gen.wavBlob(buf);
        stage.innerHTML = "";
        stage.appendChild(Gen.waveform(buf, 1024, 300, accent()));
        playAudio();
      } else {
        if (document.fonts) await document.fonts.ready;
        const cv = Gen[id](ws.prompt, seed);
        cv.setAttribute("role", "img");
        cv.setAttribute("aria-label", `${T.ws.title}: ${ws.prompt}`);
        stage.innerHTML = "";
        if (id === "icon" || id === "clothing") stage.classList.add("checker");
        if (id === "texture") { stage.classList.add("tiled"); stage.style.setProperty("--tile", `url(${cv.toDataURL()})`); }
        stage.appendChild(cv);
        blob = await new Promise((r) => cv.toBlob(r, "image/png"));
      }
    } catch (err) {
      stage.innerHTML = `<p>${escapeHtml(T.ws.error)}</p>`;
      if (window.console) console.error(err);
      return;
    }
    ws.url = URL.createObjectURL(blob);
    dl.href = ws.url;
    dl.download = `blockgoer-preview-${id}-${slug(ws.prompt)}.${meta.ext}`;
    dl.classList.remove("disabled");
  }

  function playAudio() {
    if (!ws.audio) return;
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const src = audioCtx.createBufferSource();
    src.buffer = ws.audio;
    src.connect(audioCtx.destination);
    src.start();
  }

  $("#wsAgain").addEventListener("click", () => { ws.variation++; generate(); });
  $("#wsPlay").addEventListener("click", playAudio);
  $$("dialog").forEach((d) => d.addEventListener("click", (e) => {
    if (e.target === d || e.target.closest("[data-close]")) d.close();
  }));

  /* ================= generated imagery ================= */
  // Page art is drawn in small idle-time jobs, at the size it is shown, so
  // the main thread never blocks for long.
  const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--orange").trim() || "#fb923c";
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const NATIVE = { thumbnail: [1280, 720], ui: [1280, 720], clothing: [585, 559] };
  const nativeSize = (id) => NATIVE[id] || [512, 512];
  const fitScale = (el, [w, h]) => Math.max((el.clientWidth * DPR) / w, (el.clientHeight * DPR) / h) || 0.5;

  const idle = window.requestIdleCallback ? (fn) => requestIdleCallback(fn, { timeout: 500 }) : (fn) => setTimeout(fn, 16);
  const jobs = [];
  let pumping = false;
  function schedule(job) { jobs.push(job); if (!pumping) { pumping = true; idle(pump); } }
  function pump(deadline) {
    do { const job = jobs.shift(); try { job(); } catch (e) { if (window.console) console.error(e); } }
    while (jobs.length && deadline && deadline.timeRemaining && deadline.timeRemaining() > 12);
    if (jobs.length) idle(pump); else pumping = false;
  }

  function ideaThumb(el) {
    const prompt = T.ideas[+el.dataset.ideaImg] || T.ideas[0];
    // Same seed as the preview dialog, so a card matches what "Preview" opens.
    const cv = Gen.scaled(fitScale(el, NATIVE.thumbnail), () => Gen.thumbnail(prompt, Gen.hash(prompt.toLowerCase() + "#0#thumbnail")));
    el.style.backgroundImage = `url(${cv.toDataURL("image/jpeg", 0.84)})`;
  }

  function renderImagery() {
    $$("canvas[data-art]").forEach((cv) => schedule(() => {
      const id = cv.dataset.art;
      const src = Gen.scaled(fitScale(cv, nativeSize(id)), () => Gen[id](cv.dataset.prompt, Gen.hash(cv.dataset.prompt)));
      cv.width = src.width; cv.height = src.height;
      cv.getContext("2d").drawImage(src, 0, 0);
    }));
    $$('[data-slot="sfx"]').forEach((slot) => schedule(() => {
      Gen.sfx("victory fanfare chime", 7).then((buf) => {
        if (slot.firstChild) return;
        const w = Gen.waveform(buf, Math.round(slot.clientWidth * DPR) || 480, Math.round(slot.clientHeight * DPR) || 240, accent());
        w.classList.add("wave");
        slot.appendChild(w);
      }).catch(() => {});
    }));
    // Small enough to draw right after the hero, so the page is complete
    // even for visitors (and screenshot tools) that never scroll.
    $$("[data-idea-img]").forEach((el) => schedule(() => ideaThumb(el)));
  }

  /* ================= utils ================= */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function slug(s) {
    return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 40) || "asset";
  }
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  // Canvas text needs the display face; it is preloaded, so this resolves fast.
  const fontReady = document.fonts && document.fonts.load ? document.fonts.load('800 40px "Wix Madefor Display"').catch(() => {}) : Promise.resolve();
  fontReady.then(renderImagery);
})();
