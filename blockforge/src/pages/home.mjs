import { SITE, PLAN, FACTS } from "../config.mjs";
import { STRINGS, TOOLS } from "../strings.mjs";
import { page, esc, langPath, relFrom } from "../lib/layout.mjs";
import { cardBadges } from "../lib/cards.mjs";
import { product, faqPage, webPage, returnPolicyNode, abs } from "../lib/schema.mjs";

const creditLabel = (S, n) => (n === 1 ? S.credit.one : S.credit.n.replace("{n}", n));

/* Circled arrow used on list rows and cards. */
const ARROW = `<span class="circ" aria-hidden="true"></span>`;

/* Prompts used to draw the static sketches, per language, so any text drawn
 * into the art (cover lettering, UI title) matches the page language. */
const ART = {
  en: { thumbnail: "haunted lighthouse at dawn level 7", icon: "golden coin badge", ui: "crafting table", texture: "wet cobblestone", clothing: "racing jersey", gfx: "fox mechanic" },
  ja: { thumbnail: "夜明けの灯台 レベル7", icon: "金貨のバッジ", ui: "作業台", texture: "濡れた石畳", clothing: "レーシングジャージ", gfx: "キツネの整備士" }
};

const SIZE = { thumbnail: [1280, 720], ui: [1280, 720], clothing: [585, 559] };

function art(lang, id) {
  if (id === "sfx") return `<div class="art art-sfx" data-slot="sfx"></div>`;
  const [w, h] = SIZE[id] || [512, 512];
  return `<canvas class="art art-${id}" data-art="${id}" data-prompt="${esc(ART[lang][id])}" width="${w}" height="${h}"></canvas>`;
}

export function homePage(lang, legal) {
  const S = STRINGS[lang];
  const F = FACTS[lang];
  const enPath = "index.html";
  const rel = relFrom(langPath(lang, enPath));
  const L = (slug) => rel(langPath(lang, `legal/${slug}.html`));
  const title = (slug) => esc(legal.find((m) => m.slug === slug)[lang].title);
  const checkout = rel(langPath(lang, "checkout.html"));
  const A = S.assets, Pr = S.pricing, H = S.hero;
  const first = TOOLS[0];

  // Group prompt ideas by genre, keeping each idea's index for the preview.
  const genres = [];
  S.ideas.items.forEach(([genre, text], i) => {
    let g = genres.find((x) => x.name === genre);
    if (!g) genres.push((g = { name: genre, items: [] }));
    g.items.push({ text, i });
  });

  const main = `
<section class="stage" id="top">
  <div class="stage-in">
    <p class="kick">${esc(H.kicker)}</p>
    <h1 class="mega"><span>${esc(H.title1)}</span> <span class="mega-b">${esc(H.title2)}</span></h1>
    <p class="stage-sub">${esc(H.sub)}</p>
    <div class="asker" data-creator>
      <form class="ask">
        <label class="ask-label" for="askInput" data-role="label">${esc(S.prompt[first].label)}</label>
        <input id="askInput" type="text" maxlength="140" autocomplete="off" data-role="input" placeholder="${esc(S.prompt[first].ph)}">
        <div class="ask-bar">
          <label class="ask-type"><span>${esc(H.makeLabel)}</span>
            <select id="askType" data-role="type">${TOOLS.map((t) => `<option value="${t}"${t === first ? " selected" : ""}>${esc(S.tools[t])}</option>`).join("")}</select>
          </label>
          <button class="ask-go" type="submit"><span data-role="btn">${esc(S.prompt[first].btn)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></button>
        </div>
      </form>
      <div class="ask-try"><span>${esc(H.examples)}</span><div class="ask-chips" data-role="chips">${S.chips[first].map((c) => `<button type="button" class="chip">${esc(c)}</button>`).join("")}</div></div>
    </div>
    <p class="stage-note">${esc(H.note)}</p>
  </div>
  <figure class="sheet">
    <ul class="sheet-row">${TOOLS.map((t) => `<li class="frame frame-${t}">${art(lang, t)}<span class="frame-cap">${esc(S.toolsShort[t])}</span></li>`).join("")}</ul>
    <figcaption><b>${esc(H.stripTitle)}</b> ${esc(H.stripNote)}</figcaption>
  </figure>
</section>

<section class="about-line" aria-labelledby="aboutTitle">
  <div class="wrap about-in">
    <h2 class="about-label" id="aboutTitle">${esc(H.aboutLabel)}</h2>
    <p class="about-text">${esc(F.summary)}</p>
  </div>
</section>

<section class="ruled" id="assets">
  <div class="wrap ruled-grid">
    <div class="ruled-intro">
      <p class="kick">${esc(A.kicker)}</p>
      <h2 class="head-xl">${A.title}</h2>
      <p class="lede-text">${esc(A.sub)}</p>
    </div>
    <ul class="rows">${TOOLS.map((t) => `
      <li><button class="row" type="button" data-open-tool="${t}" aria-label="${esc(A.open)}: ${esc(S.tools[t])}">
        <span class="row-main"><span class="row-name">${esc(S.tools[t])}</span><span class="row-desc">${esc(A.items[t].desc)}</span></span>
        <span class="row-meta"><span class="row-spec">${esc(A.items[t].spec)}</span><span class="row-cost">${esc(creditLabel(S, PLAN.creditCosts[t]))}</span></span>
        ${ARROW}
      </button></li>`).join("")}
    </ul>
  </div>
</section>

<section class="trio">
  <div class="wrap">
    <p class="kick">${esc(S.groups.kicker)}</p>
    <h2 class="head-xl">${esc(S.groups.title)}</h2>
    <div class="trio-cards">${S.groups.items.map((g) => `
      <article class="trio-card">
        <h3 class="jh">${esc(g.title)}</h3>
        <p>${esc(g.body)}</p>
        <button class="pill pill-ink" type="button" data-open-tool="${g.tool}">${esc(g.cta)}</button>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="band-blue">
  <div class="wrap band-grid">
    <div class="band-panel"><h2 class="jh">${S.built.title}</h2></div>
    <ul class="lines">${S.built.items.map(([t, d]) => `<li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ul>
  </div>
</section>

<section class="tiles">
  <div class="wrap">
    <ul class="tile-row">${S.numbers.map(([b, l]) => `<li><b class="jh">${esc(b)}</b><span>${esc(l)}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="moves" id="process">
  <div class="wrap moves-grid">
    <div>
      <p class="kick">${esc(S.how.kicker)}</p>
      <h2 class="head-xl">${S.how.title}</h2>
    </div>
    <ol class="move-list">${S.how.steps.map(([t, d], i) => `<li><span class="move-n">0${i + 1}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></li>`).join("")}</ol>
  </div>
</section>

<section class="prompts" id="prompts">
  <div class="wrap">
    <div class="prompts-head">
      <div>
        <p class="kick">${esc(S.ideas.kicker)}</p>
        <h2 class="head-xl">${esc(S.ideas.title)}</h2>
      </div>
      <p class="lede-text">${esc(S.ideas.sub)}</p>
    </div>
    <div class="genres">${genres.map((g) => `
      <div class="genre">
        <h3 class="genre-name">${esc(g.name)}</h3>
        <ul class="genre-cards">${g.items.map(({ text, i }) => `
          <li class="pcard">
            <div class="pcard-img" data-idea-img="${i}" role="img" aria-label="${esc(S.ideas.badge)}: ${esc(text)}"></div>
            <div class="pcard-body"><p>${esc(text)}</p><button class="text-btn" type="button" data-idea="${i}">${esc(S.ideas.use)} →</button></div>
          </li>`).join("")}
        </ul>
      </div>`).join("")}
    </div>
  </div>
</section>

<section class="plans" id="pricing">
  <div class="wrap">
    <div class="plans-top">
      <div class="plans-intro">
        <p class="kick">${esc(Pr.kicker)}</p>
        <h2 class="head-xxl">${Pr.title}</h2>
        <p class="lede-text">${esc(Pr.sub)}</p>
      </div>
      <div class="plan-pair">
        <article class="plan plan-free">
          <div class="plan-top"><h3 class="jh">${esc(Pr.free.name)}</h3><span class="plan-tag">${esc(Pr.free.tag)}</span></div>
          <p class="plan-amount"><b>${esc(Pr.free.price)}</b><span>${esc(Pr.free.per)}</span></p>
          <ul class="ticks">${Pr.free.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          <a class="pill pill-line" href="#top" data-focus-composer>${esc(Pr.free.cta)}</a>
        </article>
        <article class="plan plan-pro">
          <div class="plan-top"><h3 class="jh">${esc(Pr.planName)}</h3><span class="plan-tag">${esc(Pr.planTag)}</span></div>
          <p class="plan-amount"><b>${esc(F.price)}</b><span>${esc(Pr.per)}</span></p>
          <p class="plan-currency"><strong>${esc(F.currency)}</strong> · ${esc(Pr.currencyNote)}</p>
          <p class="plan-eq">${esc(Pr.equivalent)}</p>
          <p class="plan-terms">${esc(Pr.keyTerms)}</p>
          <ul class="ticks">${Pr.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          <a class="pill pill-ink pill-wide" href="${checkout}">${esc(Pr.cta)}</a>
          <p class="plan-small">${esc(Pr.ctaNote)}</p>
          <div class="plan-pay">${cardBadges(SITE.cards, Pr.cardsTitle, rel("assets/img/cards.svg"))}<p>${esc(Pr.descriptor)}</p></div>
        </article>
      </div>
    </div>

    <h3 class="billing-title jh">${esc(Pr.timelineTitle)}</h3>
    <ol class="billing-steps">${Pr.timeline.map(([when, what, detail]) => `<li><span class="when">${esc(when)}</span><b>${esc(what)}</b><p>${esc(detail)}</p></li>`).join("")}</ol>

    <div class="facts-grid">
      <div class="fact fact-guarantee">
        <span class="seal" aria-hidden="true">30</span>
        <h3 class="jh">${esc(Pr.guaranteeTitle)}</h3>
        <p class="fact-strong">${esc(Pr.guaranteeLine)}</p>
        <p>${esc(Pr.guaranteeBody)}</p>
      </div>
      <div class="fact"><h3>${esc(Pr.cancelTitle)}</h3><p>${esc(Pr.cancelBody)}</p></div>
      <div class="fact"><h3>${esc(Pr.descriptorTitle)}</h3><p>${esc(Pr.descriptor)}</p></div>
      <div class="fact"><h3>${esc(Pr.cardsTitle)}</h3><p>${esc(Pr.cardsNote)}</p></div>
    </div>
    <p class="policy-line">${esc(Pr.policyLinks)} <a href="${L("terms")}">${title("terms")}</a> · <a href="${L("refund")}">${title("refund")}</a> · <a href="${L("cancellation")}">${title("cancellation")}</a>${lang === "ja" ? ` · <a href="${L("commercial-disclosure")}">${title("commercial-disclosure")}</a>` : ""}</p>
  </div>
</section>

<section class="qa" id="faq">
  <div class="wrap qa-grid">
    <div>
      <p class="kick">${esc(S.faq.kicker)}</p>
      <h2 class="head-xl">${S.faq.title}</h2>
    </div>
    <div class="qa-list">${S.faq.items.map(([q, a], i) => `
      <details${i === 0 ? " open" : ""}>
        <summary><span>${esc(q)}</span><i aria-hidden="true"></i></summary>
        <p>${esc(a)}</p>
      </details>`).join("")}
    </div>
  </div>
</section>

<section class="finale">
  <div class="wrap finale-in">
    <h2 class="head-xxl">${S.cta.title}</h2>
    <p class="lede-text">${esc(S.cta.sub)}</p>
    <div class="finale-actions">
      <a class="pill pill-orange pill-lg" href="${checkout}">${esc(S.cta.trial)}</a>
      <a class="pill pill-line pill-lg" href="#top" data-focus-composer>${esc(S.cta.preview)}</a>
    </div>
  </div>
</section>

<dialog class="sketch" id="workspace" aria-labelledby="wsTitle">
  <div class="sketch-head">
    <div>
      <p class="kick">${esc(S.ws.title)}</p>
      <h3 id="wsTitle"></h3>
      <p class="sketch-note">${esc(S.ws.demo)}</p>
    </div>
    <button class="tool-btn" type="button" data-close aria-label="${esc(S.ws.close)}">×</button>
  </div>
  <div class="sketch-stage" id="wsStage"></div>
  <dl class="sketch-meta">
    <div><dt>${esc(S.ws.size)}</dt><dd id="wsSize"></dd></div>
    <div><dt>${esc(S.ws.cost)}</dt><dd id="wsCost"></dd></div>
  </dl>
  <div class="sketch-actions">
    <button class="pill pill-line" type="button" id="wsPlay" hidden>${esc(S.ws.play)}</button>
    <button class="pill pill-line" type="button" id="wsAgain">${esc(S.ws.again)}</button>
    <a class="pill pill-line" id="wsDownload" download>${esc(S.ws.download)}</a>
    <a class="pill pill-ink" href="${checkout}">${esc(S.ws.upgrade)}</a>
  </div>
</dialog>
<div class="toast" id="toast" role="status" aria-live="polite"></div>`;

  const url = abs(langPath(lang, enPath));
  return page({
    lang, enPath, legal, isHome: true,
    title: S.meta.homeTitle,
    description: S.meta.homeDesc,
    bodyClass: "home",
    jsonld: [
      webPage("WebPage", { name: S.meta.homeTitle, description: S.meta.homeDesc, path: langPath(lang, enPath), lang }),
      product(lang), returnPolicyNode(lang), faqPage(S.faq.items, url)
    ],
    scripts: ["gen.js", "app.js"],
    main
  });
}
