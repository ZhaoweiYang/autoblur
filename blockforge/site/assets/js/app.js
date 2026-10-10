/* BlockForge — browser behaviour for the static pages.
 * Content is pre-rendered into the HTML for each language; this script only
 * adds interactivity: theme, menu, language memory, creator widgets, the
 * in-browser preview workspace, the ideas carousel and the checkout consent. */
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
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    store.set("bf-theme", next);
  });

  $$("[data-lang]").forEach((a) => a.addEventListener("click", () => store.set("bf-lang", a.dataset.lang)));

  const burger = $("#burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$(".nav-links a").forEach((a) => a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }
  const navWrap = $(".nav-wrap");
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
    const ct = $("#chargeTime b");
    if (ct && T.checkout) {
      const fmt = new Intl.DateTimeFormat(BF.lang === "ja" ? "ja-JP" : "en-US", { dateStyle: "medium", timeStyle: "short" });
      const tick = () => { ct.textContent = fmt.format(new Date(Date.now() + 3600e3)) + (BF.lang === "ja" ? "（現地時間）" : " (your local time)"); };
      tick();
      setInterval(tick, 30e3);
    }
  }

  /* Pages without the creator/preview UI stop here. */
  if (!document.body.classList.contains("home") || !window.Gen) return;

  /* ================= creator widgets ================= */
  const creators = [];
  const heroCreator = () => creators[0];
  let sharedTool = "thumbnail";

  function Creator(root) {
    const compact = root.hasAttribute("data-compact");
    const tabs = $(".tool-tabs", root);
    const input = $("[data-role=input]", root);
    const label = $("[data-role=label]", root);
    const btn = $("[data-role=btn]", root);
    const chips = $("[data-role=chips]", root);
    const select = $("[data-role=select]", root);
    const form = root.tagName === "FORM" ? root : $("form", root);
    const self = {
      render() {
        const tool = sharedTool;
        const P = T.prompt[tool];
        if (tabs) $$("[data-tool]", tabs).forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tool === tool)));
        if (select) select.value = tool;
        input.placeholder = P.ph;
        input.setAttribute("aria-label", P.label);
        if (label) label.textContent = P.label;
        btn.textContent = P.btn;
        if (chips) chips.innerHTML = T.chips[tool].map((c) => `<button type="button" class="chip">${escapeHtml(c)}</button>`).join("");
        void compact;
      },
      setTool(id) { sharedTool = id; creators.forEach((c) => c.render()); },
      focus() { input.focus(); },
      setPrompt(v) { input.value = v; }
    };
    if (tabs) tabs.addEventListener("click", (e) => {
      const b = e.target.closest("[data-tool]");
      if (b) { self.setTool(b.dataset.tool); input.focus(); }
    });
    if (select) select.addEventListener("change", () => self.setTool(select.value));
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

  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open-tool]");
    if (!o) return;
    e.preventDefault();
    heroCreator().setTool(o.dataset.openTool);
    $("#top").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => heroCreator().focus(), 500);
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
    $("#wsTitle").textContent = `${T.tools[id]} · “${ws.prompt}”`;
    $("#wsSize").textContent = meta.size;
    $("#wsCost").textContent = creditLabel(T.creditCosts[id]);
    const stage = $("#wsStage");
    stage.innerHTML = `<div class="spinner"></div><p>${escapeHtml(T.ws.generating)}</p>`;
    stage.className = "ws-stage";
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
        stage.appendChild(Gen.waveform(buf));
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
      stage.innerHTML = `<p>${escapeHtml(String((err && err.message) || err))}</p>`;
      return;
    }
    ws.url = URL.createObjectURL(blob);
    dl.href = ws.url;
    dl.download = `blockforge-preview-${id}-${slug(ws.prompt)}.${meta.ext}`;
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
  const WALL_PROMPTS = [
    "level 1 vs level 9999 emerald", "lava obby 2 seconds left", "golden coin tycoon $1B",
    "neon cyber city race", "zombie horror corridor", "ice castle +99 levels",
    "dragon magic crystal pet", "pirate ocean treasure", "forest moss explorer",
    "candy pet simulator", "diamond reactor 9999", "999,999 IQ brain"
  ];
  const IDEA_SEEDS = [
    "level 1 vs level 9999 mining simulator, giant emerald", "minigun turret defending a bank vault from robbers",
    "golden drill digging to the core, how deep?!", "tornado survival, builder screaming as the fort rips apart",
    "baby dragon pet next to a treasure chest reveal", "boy vs girl lava obby race, 2 seconds left",
    "1 cent rusty tub vs $1B golden tub full of cash", "sword fighter charging a giant lava golem boss",
    "tycoon upgrade from gold mine to diamond reactor", "crowned player powering up, +99 levels, blue lightning"
  ];
  const thumbCache = new Map();
  function thumbURL(prompt, w) {
    const key = prompt + "@" + w;
    if (thumbCache.has(key)) return thumbCache.get(key);
    const big = Gen.thumbnail(prompt, Gen.hash(prompt));
    const small = document.createElement("canvas");
    small.width = w; small.height = Math.round((w * 9) / 16);
    small.getContext("2d").drawImage(big, 0, 0, small.width, small.height);
    const url = small.toDataURL("image/jpeg", 0.82);
    thumbCache.set(key, url);
    return url;
  }

  function renderImagery() {
    const grid = $("#wallGrid");
    if (grid) grid.innerHTML = Array.from({ length: 36 }, (_, i) => `<div class="tile" style="background-image:url(${thumbURL(WALL_PROMPTS[i % WALL_PROMPTS.length], 360)})"></div>`).join("");
    const orb = $("#orb");
    if (orb) orb.innerHTML = Array.from({ length: 36 }, (_, i) => `<div class="tile" style="background-image:url(${thumbURL(WALL_PROMPTS[i % WALL_PROMPTS.length], 360)})"></div>`).join("");
    $$("[data-idea-img]").forEach((el) => { el.style.backgroundImage = `url(${thumbURL(IDEA_SEEDS[+el.dataset.ideaImg] || IDEA_SEEDS[0], 640)})`; });
    $$("canvas[data-art]").forEach((cv) => {
      const src = Gen[cv.dataset.art](cv.dataset.prompt, Gen.hash(cv.dataset.prompt));
      cv.width = src.width; cv.height = src.height;
      cv.getContext("2d").drawImage(src, 0, 0);
    });
    const seeds = { texture: "mossy stone", clothing: "racing jersey", icon: "magic gem badge", gfx: "neon explorer" };
    Object.keys(seeds).forEach((id) => {
      const slot = $(`[data-slot="${id}"]`);
      if (slot && !slot.firstChild) slot.appendChild(Gen[id](seeds[id], Gen.hash(seeds[id])));
    });
    const sfxSlot = $('[data-slot="sfx"]');
    if (sfxSlot && !sfxSlot.firstChild) {
      Gen.sfx("level-up chime", 1).then((buf) => {
        const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#f7b928";
        const w = Gen.waveform(buf, 480, 200, accent);
        w.classList.add("wave");
        sfxSlot.appendChild(w);
      }).catch(() => {});
    }
  }

  // Rotate the suggestion on each small tool card.
  let k = 0;
  setInterval(() => {
    k++;
    $$("[data-tool-card]").forEach((card) => {
      const span = $(".try-line span", card);
      const list = T.chips[card.dataset.toolCard];
      span.classList.remove("swap"); void span.offsetWidth; span.classList.add("swap");
      span.textContent = list[k % list.length];
    });
  }, 2600);

  /* ================= ideas carousel ================= */
  const carousel = $("#carousel");
  const step = () => (carousel.firstElementChild ? carousel.firstElementChild.getBoundingClientRect().width + 20 : 300);
  $("#showPrev").addEventListener("click", () => carousel.scrollBy({ left: -step(), behavior: "smooth" }));
  $("#showNext").addEventListener("click", () => carousel.scrollBy({ left: step(), behavior: "smooth" }));
  carousel.addEventListener("click", (e) => {
    const b = e.target.closest("[data-idea]");
    if (!b) return;
    const txt = T.ideas[+b.dataset.idea];
    heroCreator().setTool("thumbnail");
    creators.forEach((cr) => cr.setPrompt(txt));
    openWorkspace("thumbnail", txt);
  });

  /* ================= scroll effects ================= */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in");
      else { el.classList.add("pending"); io.observe(el); }
    });
  }

  const dock = $("#dock");
  let dismissed = false;
  try { dismissed = sessionStorage.getItem("bf-dock") === "x"; } catch (e) { /* ignore */ }
  const hero = $(".hero"), final = $(".final");
  const updateDock = () => {
    if (dismissed) { dock.hidden = true; return; }
    const pastHero = hero.getBoundingClientRect().bottom < 0;
    const atFinal = final.getBoundingClientRect().top < innerHeight * 0.8;
    dock.hidden = !(pastHero && !atFinal);
  };
  addEventListener("scroll", updateDock, { passive: true });
  $("#dockClose").addEventListener("click", () => {
    dismissed = true; dock.hidden = true;
    try { sessionStorage.setItem("bf-dock", "x"); } catch (e) { /* ignore */ }
  });
  updateDock();

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

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(renderImagery);
})();
