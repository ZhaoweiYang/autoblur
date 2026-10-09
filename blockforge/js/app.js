/* BlockForge — page logic: i18n, theme, creator widgets, workspace demo,
 * showcase carousel, pricing, FAQ and small scroll effects. */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  const TOOLS = [
    { id: "thumbnail", cost: 1, plan: "free", size: "1280 × 720", ext: "png" },
    { id: "ui", cost: 4, plan: "starter", size: "1280 × 720", ext: "png" },
    { id: "texture", cost: 1, plan: "free", size: "512 × 512", ext: "png" },
    { id: "clothing", cost: 1, plan: "free", size: "585 × 559", ext: "png" },
    { id: "icon", cost: 1, plan: "starter", size: "512 × 512", ext: "png" },
    { id: "gfx", cost: 1, plan: "starter", size: "512 × 512", ext: "png" },
    { id: "sfx", cost: 1, plan: "starter", size: "WAV · 44.1 kHz", ext: "wav" }
  ];
  const toolById = (id) => TOOLS.find((t) => t.id === id) || TOOLS[0];

  /* ================= i18n ================= */
  let lang = "en";
  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "ja" || q === "en") return q;
    const saved = store.get("bf-lang");
    if (saved === "ja" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
  }
  function t(key, vars) {
    let v = (I18N[lang] && I18N[lang][key]);
    if (v === undefined) v = I18N.en[key];
    if (v === undefined) return key;
    if (typeof v === "string" && vars) v = v.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
    return v;
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-ja", lang === "ja");
    store.set("bf-lang", lang);
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-content]").forEach((el) => el.setAttribute("content", t(el.dataset.i18nContent)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$("[data-i18n-tpl]").forEach((el) => { el.textContent = t(el.dataset.i18nTpl, { n: el.dataset.n }); });
    document.title = t("meta.title");
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderRibbon();
    creators.forEach((c) => c.render());
    renderSmallTools();
    renderCarousel();
    renderWhy();
    renderReviews();
    renderPlans();
    renderFaq();
  }

  /* ================= theme ================= */
  function initTheme() {
    const saved = store.get("bf-theme");
    if (saved) document.documentElement.dataset.theme = saved;
    $("#themeBtn").addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme || "dark";
      const next = cur === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      store.set("bf-theme", next);
    });
  }

  /* ================= nav ================= */
  function initNav() {
    $$(".has-menu > button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = btn.getAttribute("aria-expanded") === "true";
        $$(".has-menu > button").forEach((b) => b.setAttribute("aria-expanded", "false"));
        btn.setAttribute("aria-expanded", String(!open));
      });
    });
    document.addEventListener("click", () => $$(".has-menu > button").forEach((b) => b.setAttribute("aria-expanded", "false")));
    const burger = $("#burger");
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$(".nav-links a").forEach((a) => a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }));
    $$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
    document.addEventListener("click", (e) => {
      const s = e.target.closest("[data-signup]");
      if (s) { e.preventDefault(); $("#signup").showModal(); }
      const o = e.target.closest("[data-open-tool]");
      if (o) {
        e.preventDefault();
        heroCreator().setTool(o.dataset.openTool);
        $("#top").scrollIntoView({ behavior: "smooth" });
        setTimeout(() => heroCreator().focus(), 500);
      }
    });
    const navWrap = $(".nav-wrap");
    addEventListener("scroll", () => navWrap.classList.toggle("scrolled", scrollY > 20), { passive: true });
  }

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
        if (tabs) {
          tabs.innerHTML = TOOLS.map((tl) =>
            `<button type="button" role="tab" aria-selected="${tl.id === tool}" data-tool="${tl.id}">${t("tool." + tl.id)}</button>`).join("");
        }
        if (select) {
          select.innerHTML = TOOLS.map((tl) => `<option value="${tl.id}"${tl.id === tool ? " selected" : ""}>${t("tool." + tl.id)}</option>`).join("");
        }
        input.placeholder = t(`prompt.${tool}.ph`);
        input.setAttribute("aria-label", t(`prompt.${tool}.label`));
        if (label) label.textContent = t(`prompt.${tool}.label`);
        btn.textContent = compact ? t(`prompt.${tool}.btn`).replace(/^Make my /, "Make ") : t(`prompt.${tool}.btn`);
        if (chips) {
          chips.innerHTML = t(`chips.${tool}`).map((c) => `<button type="button" class="chip">${escapeHtml(c)}</button>`).join("");
        }
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
      if (!v) { toast(t("ws.empty")); input.focus(); return; }
      openWorkspace(sharedTool, v);
    });
    return self;
  }

  /* ================= workspace (demo generator) ================= */
  const ws = { tool: null, prompt: "", variation: 0, url: null, audio: null };
  let audioCtx = null;

  function openWorkspace(tool, prompt) {
    ws.tool = tool; ws.prompt = prompt; ws.variation = 0;
    const dlg = $("#workspace");
    if (!dlg.open) dlg.showModal();
    generate();
  }

  async function generate() {
    const tl = toolById(ws.tool);
    $("#wsTitle").textContent = `${t("tool." + tl.id)} · “${ws.prompt}”`;
    $("#wsSize").textContent = tl.size;
    $("#wsCost").textContent = tl.cost === 1 ? t("credit.one") : t("credit.n", { n: tl.cost });
    const stage = $("#wsStage");
    stage.innerHTML = `<div class="spinner"></div><p>${t("ws.generating")}</p>`;
    stage.className = "ws-stage";
    const dl = $("#wsDownload");
    dl.classList.add("disabled");
    $("#wsPlay").hidden = tl.id !== "sfx";
    if (ws.url) { URL.revokeObjectURL(ws.url); ws.url = null; }
    await new Promise((r) => setTimeout(r, 450)); // let the spinner paint
    const seed = Gen.hash(ws.prompt.toLowerCase() + "#" + ws.variation + "#" + tl.id);
    let blob;
    try {
      if (tl.id === "sfx") {
        const buf = await Gen.sfx(ws.prompt, seed);
        ws.audio = buf;
        blob = Gen.wavBlob(buf);
        stage.innerHTML = "";
        stage.appendChild(Gen.waveform(buf));
        playAudio();
      } else {
        await document.fonts.ready;
        const cv = Gen[tl.id](ws.prompt, seed);
        stage.innerHTML = "";
        if (tl.id === "icon" || tl.id === "clothing") stage.classList.add("checker");
        if (tl.id === "texture") stage.classList.add("tiled"), stage.style.setProperty("--tile", `url(${cv.toDataURL()})`);
        stage.appendChild(cv);
        blob = await new Promise((r) => cv.toBlob(r, "image/png"));
      }
    } catch (err) {
      stage.innerHTML = `<p>⚠️ ${escapeHtml(String(err && err.message || err))}</p>`;
      return;
    }
    ws.url = URL.createObjectURL(blob);
    dl.href = ws.url;
    dl.download = `blockforge-${tl.id}-${slug(ws.prompt)}.${tl.ext}`;
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

  function initWorkspace() {
    $("#wsAgain").addEventListener("click", () => { ws.variation++; generate(); });
    $("#wsPlay").addEventListener("click", playAudio);
    $$("dialog").forEach((d) => {
      d.addEventListener("click", (e) => {
        if (e.target === d || e.target.closest("[data-close]")) d.close();
      });
    });
  }

  /* ================= hero wall + ribbon ================= */
  const WALL_PROMPTS = [
    "level 1 vs level 9999 emerald", "lava obby 2 seconds left", "golden coin tycoon $1B",
    "neon cyber city race", "zombie horror corridor", "ice castle +99 levels",
    "dragon magic crystal pet", "pirate ocean treasure", "forest moss explorer",
    "candy pet simulator", "diamond reactor 9999", "999,999 IQ brain"
  ];
  const thumbCache = new Map();
  function thumbURL(prompt, w = 480) {
    const key = prompt + "@" + w;
    if (thumbCache.has(key)) return thumbCache.get(key);
    const big = Gen.thumbnail(prompt, Gen.hash(prompt));
    const small = document.createElement("canvas");
    small.width = w; small.height = Math.round(w * 9 / 16);
    small.getContext("2d").drawImage(big, 0, 0, small.width, small.height);
    const url = small.toDataURL("image/jpeg", 0.82);
    thumbCache.set(key, url);
    return url;
  }

  function renderWall() {
    const grid = $("#wallGrid");
    const cells = [];
    for (let i = 0; i < 36; i++) cells.push(`<div class="tile" style="background-image:url(${thumbURL(WALL_PROMPTS[i % WALL_PROMPTS.length], 360)})"></div>`);
    grid.innerHTML = cells.join("");
    const orb = $("#orb");
    orb.innerHTML = WALL_PROMPTS.concat(WALL_PROMPTS, WALL_PROMPTS).slice(0, 36)
      .map((p) => `<div class="tile" style="background-image:url(${thumbURL(p, 360)})"></div>`).join("");
  }

  function renderRibbon() {
    const items = t("marquee");
    const html = items.map((s) => `<span>${escapeHtml(s)}</span><i>+</i>`).join("");
    $("#ribbon").innerHTML = html + html + html;
  }

  /* ================= art canvases ================= */
  function renderArt() {
    $$("canvas[data-art]").forEach((cv) => {
      const kind = cv.dataset.art, p = cv.dataset.prompt;
      const src = Gen[kind](p, Gen.hash(p));
      cv.width = src.width; cv.height = src.height;
      cv.getContext("2d").drawImage(src, 0, 0);
    });
  }

  /* ================= small tools grid ================= */
  const SMALL = ["texture", "clothing", "icon", "gfx", "sfx"];
  const smallArt = {};
  function renderSmallTools() {
    const grid = $("#smallTools");
    grid.innerHTML = SMALL.map((id) => {
      const tl = toolById(id);
      const chips = t(`chips.${id}`);
      return `<article class="scard reveal in" data-tool-card="${id}">
        <div class="scard-art" data-slot="${id}"></div>
        <h3>${t("tool." + id)}</h3>
        <p class="spec">${t(`tools.${id}.spec`)}</p>
        <p>${t(`tools.${id}.desc`)}</p>
        <button class="try-line" data-open-tool="${id}">› <span>${escapeHtml(chips[0])}</span></button>
        <div class="tags"><span class="tag">${t(tl.plan === "free" ? "plan.free" : "plan.starter")}</span><span class="tag ghost">${tl.cost === 1 ? t("credit.one") : t("credit.n", { n: tl.cost })}</span></div>
      </article>`;
    }).join("");
    SMALL.forEach((id) => {
      if (!smallArt[id]) {
        const seedP = { texture: "mossy stone", clothing: "racing jersey", icon: "magic gem badge", gfx: "neon explorer", sfx: "level-up chime" }[id];
        if (id === "sfx") {
          const cv = document.createElement("canvas");
          cv.className = "wave";
          smallArt[id] = cv;
          Gen.sfx(seedP, 1).then((buf) => {
            const w = Gen.waveform(buf, 480, 200, getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#f7b928");
            cv.width = w.width; cv.height = w.height; cv.getContext("2d").drawImage(w, 0, 0);
          }).catch(() => {});
        } else {
          smallArt[id] = Gen[id](seedP, Gen.hash(seedP));
        }
      }
      $(`[data-slot="${id}"]`).appendChild(smallArt[id]);
    });
    // rotate the "try" suggestion on each card
    clearInterval(renderSmallTools.timer);
    let k = 0;
    renderSmallTools.timer = setInterval(() => {
      k++;
      SMALL.forEach((id) => {
        const span = $(`[data-tool-card="${id}"] .try-line span`);
        if (!span) return;
        const list = t(`chips.${id}`);
        span.classList.remove("swap"); void span.offsetWidth; span.classList.add("swap");
        span.textContent = list[k % list.length];
      });
    }, 2600);
  }

  /* ================= showcase carousel ================= */
  function renderCarousel() {
    const items = t("show.items");
    const en = I18N.en["show.items"];
    $("#carousel").innerHTML = items.map((txt, i) => `
      <figure class="shot">
        <div class="shot-img" style="background-image:url(${thumbURL(en[i], 640)})">
          <span class="badge">${t(i % 2 ? "badge.forge" : "badge.made")}</span>
        </div>
        <figcaption>
          <div><small>${t("show.idea")}</small><p>${escapeHtml(txt)}</p></div>
          <button class="btn btn-outline btn-xs" data-idea="${i}">${t("show.use")}</button>
        </figcaption>
      </figure>`).join("");
  }
  function initCarousel() {
    const c = $("#carousel");
    const step = () => (c.firstElementChild ? c.firstElementChild.getBoundingClientRect().width + 20 : 300);
    $("#showPrev").addEventListener("click", () => c.scrollBy({ left: -step(), behavior: "smooth" }));
    $("#showNext").addEventListener("click", () => c.scrollBy({ left: step(), behavior: "smooth" }));
    c.addEventListener("click", (e) => {
      const b = e.target.closest("[data-idea]");
      if (!b) return;
      const txt = t("show.items")[+b.dataset.idea];
      heroCreator().setTool("thumbnail");
      creators.forEach((cr) => cr.setPrompt(txt));
      openWorkspace("thumbnail", txt);
    });
  }

  /* ================= why table ================= */
  function renderWhy() {
    $("#whyRows").innerHTML = ["why.r1", "why.r2", "why.r3", "why.r4"].map((k) => {
      const [a, b, c] = t(k);
      return `<tr><td>${a}</td><td>${b}</td><td>${c}</td></tr>`;
    }).join("");
  }

  /* ================= reviews ================= */
  function renderReviews() {
    $("#reviewGrid").innerHTML = t("rev.items").map(([q, who, when], i) => `
      <blockquote class="review${i === 0 ? " feature" : ""}">
        <p>${escapeHtml(q)}</p>
        <footer><b>${escapeHtml(who)}</b><small>${escapeHtml(when)}</small></footer>
      </blockquote>`).join("");
  }

  /* ================= pricing ================= */
  let billing = "yearly";
  function money(v) {
    const p = PRICES[lang];
    const digits = p.currency === "JPY" || v === 0 ? 0 : 2;
    return new Intl.NumberFormat(p.locale, { style: "currency", currency: p.currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);
  }
  function renderPlans() {
    const P = PRICES[lang];
    const roundJ = (v) => (P.currency === "JPY" ? Math.round(v / 10) * 10 : Math.round(v * 100) / 100);
    const plans = [
      { id: "free", credits: 1 },
      { id: "starter", credits: 40 },
      { id: "creator", credits: 80, popular: true },
      { id: "studio", credits: 300 }
    ];
    $("#plans").innerHTML = plans.map((pl) => {
      const list = P[pl.id];
      const yearTotal = roundJ(list * 12 * 0.7);
      const perMo = pl.id === "free" ? 0 : billing === "yearly" ? roundJ(yearTotal / 12) : list;
      const note = pl.id === "free"
        ? ""
        : `<p class="billed">${billing === "yearly" ? t("price.billedYear", { p: money(yearTotal) }) : t("price.billedMonth")}</p>`;
      return `<article class="plan${pl.popular ? " popular" : ""}">
        ${pl.popular ? `<span class="pop">${t("price.popular")}</span>` : ""}
        <h3>${t(`price.${pl.id}.name`)}</h3>
        <div class="price"><b>${money(perMo)}</b><small>${pl.id === "free" ? t("price.forever") : t("price.mo")}</small></div>
        ${note}
        <p class="desc">${t(`price.${pl.id}.desc`)}</p>
        <span class="tag">${pl.credits === 1 ? t("price.credit1") : t("price.credits", { n: pl.credits })}</span>
        <ul class="feat">${t(`price.${pl.id}.f`).map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
        <a href="#" data-signup class="btn ${pl.popular ? "btn-primary" : "btn-dark"} btn-block">${t(`price.${pl.id}.cta`)}</a>
      </article>`;
    }).join("");
    $("#packLink").textContent = t("price.pack", { p: money(P.pack) });
    $$("[data-billing]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.billing === billing)));
  }
  function initBilling() {
    $$("[data-billing]").forEach((b) => b.addEventListener("click", () => { billing = b.dataset.billing; renderPlans(); }));
  }

  /* ================= FAQ ================= */
  function renderFaq() {
    $("#faqList").innerHTML = t("faq.items").map(([q, a], i) => `
      <details name="faq"${i === 0 ? " open" : ""}>
        <summary>${escapeHtml(q)}<span class="chev" aria-hidden="true"></span></summary>
        <p>${escapeHtml(a)}</p>
      </details>`).join("");
  }

  /* ================= scroll effects ================= */
  function initReveal() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    $$(".reveal").forEach((el) => io.observe(el));
  }
  function initCounters() {
    const els = $$(".count");
    const run = (el) => {
      const end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / 1400), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = v.toLocaleString("en-US") + (k === 1 ? suf : "");
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    els.forEach(run);
  }
  function initDock() {
    const dock = $("#dock");
    let dismissed = sessionStorage && (() => { try { return sessionStorage.getItem("bf-dock") === "x"; } catch (e) { return false; } })();
    const hero = $(".hero"), final = $(".final");
    const update = () => {
      if (dismissed) { dock.hidden = true; return; }
      const pastHero = hero.getBoundingClientRect().bottom < 0;
      const atFinal = final.getBoundingClientRect().top < innerHeight * 0.8;
      dock.hidden = !(pastHero && !atFinal);
    };
    addEventListener("scroll", update, { passive: true });
    $("#dockClose").addEventListener("click", () => {
      dismissed = true; dock.hidden = true;
      try { sessionStorage.setItem("bf-dock", "x"); } catch (e) { /* ignore */ }
    });
    update();
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

  /* ================= boot ================= */
  $$("[data-creator]").forEach((el) => creators.push(Creator(el)));
  initTheme();
  initNav();
  initWorkspace();
  initCarousel();
  initBilling();
  initDock();
  applyLang(detectLang());
  initReveal();
  initCounters();
  // Wait for display fonts so text drawn on canvases uses them.
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    thumbCache.clear();
    renderWall();
    renderArt();
    renderCarousel();
  });
})();
