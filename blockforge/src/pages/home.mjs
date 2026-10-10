import { SITE, PLAN, FACTS } from "../config.mjs";
import { STRINGS, TOOLS } from "../strings.mjs";
import { page, esc, langPath, relFrom, LOGO } from "../lib/layout.mjs";
import { cardBadges } from "../lib/cards.mjs";
import { product, faqPage, webPage, returnPolicyNode, abs } from "../lib/schema.mjs";

const creditLabel = (S, n) => (n === 1 ? S.credit.one : S.credit.n.replace("{n}", n));

/* Small line glyphs for each asset type (stroke = currentColor). */
const GLYPH = {
  thumbnail: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M6 15l4-4 3 3 2-2 3 3"/>',
  icon: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  ui: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h3M8 16h3M14 13h3v3h-3z"/>',
  texture: '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M4 12h16M12 4v16M8 4v8M16 12v8"/>',
  clothing: '<path d="M8.5 4L4 7l2 4 2-1v10h8V10l2 1 2-4-4.5-3c-.5 1.6-1.9 2.6-3.5 2.6S9 5.6 8.5 4z"/>',
  gfx: '<circle cx="12" cy="7" r="3"/><path d="M6 20v-3.5A4.5 4.5 0 0 1 10.5 12h3a4.5 4.5 0 0 1 4.5 4.5V20"/>',
  sfx: '<path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10M21 12h0"/>'
};
const glyph = (id) => `<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true">${GLYPH[id]}</svg>`;

/* Prompts used to draw the static preview tiles, per language, so any text
 * drawn into the art (cover headline, UI title) matches the page language. */
const ART = {
  en: { thumbnail: "castle siege at sunset level 99", icon: "golden coin badge", ui: "potion shop", texture: "mossy cobblestone", clothing: "racing jersey", gfx: "neon knight" },
  ja: { thumbnail: "夕暮れの城攻め レベル99", icon: "金貨のバッジ", ui: "ポーション屋", texture: "苔むした石畳", clothing: "レーシングジャージ", gfx: "ネオンの騎士" }
};

export function homePage(lang, legal) {
  const S = STRINGS[lang];
  const F = FACTS[lang];
  const enPath = "index.html";
  const rel = relFrom(langPath(lang, enPath));
  const L = (slug) => rel(langPath(lang, `legal/${slug}.html`));
  const title = (slug) => esc(legal.find((m) => m.slug === slug)[lang].title);
  const checkout = rel(langPath(lang, "checkout.html"));
  const A = S.assets;
  const Pr = S.pricing;
  const first = TOOLS[0];

  const slot = (id) => id === "sfx"
    ? `<div class="art art-sfx" data-slot="sfx"></div>`
    : `<canvas class="art art-${id}" data-art="${id}" data-prompt="${esc(ART[lang][id])}" width="${id === "thumbnail" || id === "ui" ? 1280 : id === "clothing" ? 585 : 512}" height="${id === "thumbnail" || id === "ui" ? 720 : id === "clothing" ? 559 : 512}"></canvas>`;

  const main = `
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="kicker">${esc(S.hero.eyebrow)}</p>
      <h1 class="display"><span>${esc(S.hero.title1)}</span> <em>${esc(S.hero.title2)}</em></h1>
      <p class="hero-sub">${esc(S.hero.sub)}</p>
      <ul class="facts">${S.hero.facts.map(([b, s]) => `<li><b>${esc(b)}</b> <span>${esc(s)}</span></li>`).join("")}</ul>
    </div>

    <div class="composer" data-creator>
      <h2 class="composer-title">${esc(S.hero.composerTitle)}</h2>
      <div class="slot-bar" role="tablist" aria-label="${esc(S.hero.typeLabel)}">${TOOLS.map((t) => `<button type="button" role="tab" aria-selected="${t === first}" data-tool="${t}" title="${esc(S.tools[t])}">${glyph(t)}<span>${esc(S.toolsShort[t])}</span></button>`).join("")}</div>
      <form class="prompt-box">
        <label class="prompt-label" for="heroPrompt" data-role="label">${esc(S.prompt[first].label)}</label>
        <div class="prompt-row">
          <input id="heroPrompt" type="text" maxlength="140" autocomplete="off" data-role="input" placeholder="${esc(S.prompt[first].ph)}">
          <button class="btn btn-primary" type="submit"><span data-role="btn">${esc(S.prompt[first].btn)}</span></button>
        </div>
      </form>
      <div class="examples"><span>${esc(S.hero.examples)}</span><div class="chips" data-role="chips">${S.chips[first].map((c) => `<button type="button" class="chip">${esc(c)}</button>`).join("")}</div></div>
      <p class="composer-note">${esc(S.hero.note)}</p>
    </div>
  </div>

  <div class="wrap">
    <div class="board" aria-label="${esc(S.hero.boardTitle)}">
      <div class="board-head"><span>${esc(S.hero.boardTitle)}</span><small>${esc(S.hero.boardNote)}</small></div>
      <ul class="board-slots">${TOOLS.map((t) => `<li class="board-slot board-${t}">${slot(t)}<span class="slot-tag">${glyph(t)}${esc(S.toolsShort[t])}</span></li>`).join("")}</ul>
    </div>
  </div>
</section>

<section class="section" id="assets">
  <div class="wrap">
    <div class="sec-head">
      <p class="kicker">${esc(A.eyebrow)}</p>
      <h2 class="h2">${A.title}</h2>
      <p class="lead">${esc(A.sub)}</p>
    </div>
    <div class="asset-grid">${TOOLS.map((t) => `
      <article class="asset-card">
        <div class="asset-art">${slot(t)}</div>
        <div class="asset-body">
          <h3>${glyph(t)}${esc(S.tools[t])}</h3>
          <p class="spec">${esc(A.items[t].spec)}</p>
          <p>${esc(A.items[t].desc)}</p>
          <div class="asset-foot"><span class="chip-cost">${esc(creditLabel(S, PLAN.creditCosts[t]))}</span><button class="link-btn" type="button" data-open-tool="${t}">${esc(A.preview)} →</button></div>
        </div>
      </article>`).join("")}
      <article class="asset-card pro-card">
        <div class="asset-body">
          <span class="pro-mark">${LOGO}</span>
          <h3>${esc(A.proCard.title)}</h3>
          <p>${esc(A.proCard.body)}</p>
          <p class="pro-price"><b>${esc(F.price)}</b> <span>${esc(Pr.per)}</span></p>
          <a class="btn btn-ghost btn-sm" href="#pricing">${esc(A.proCard.cta)} →</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section band" id="how">
  <div class="wrap">
    <div class="sec-head">
      <p class="kicker">${esc(S.how.eyebrow)}</p>
      <h2 class="h2">${S.how.title}</h2>
    </div>
    <ol class="steps">${S.how.steps.map(([t, d], i) => `<li><span class="step-n">${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section" id="ideas">
  <div class="wrap">
    <div class="sec-head">
      <p class="kicker">${esc(S.ideas.eyebrow)}</p>
      <h2 class="h2">${S.ideas.title}</h2>
      <p class="lead">${esc(S.ideas.sub)}</p>
    </div>
    <ul class="idea-grid">${S.ideas.items.map(([genre, text], i) => `
      <li class="idea">
        <div class="idea-img" data-idea-img="${i}" role="img" aria-label="${esc(S.ideas.badge)}: ${esc(text)}"></div>
        <div class="idea-body">
          <span class="genre">${esc(genre)}</span>
          <p>${esc(text)}</p>
          <button class="link-btn" type="button" data-idea="${i}">${esc(S.ideas.use)} →</button>
        </div>
      </li>`).join("")}
    </ul>
  </div>
</section>

<section class="section band" id="pricing">
  <div class="wrap">
    <div class="sec-head">
      <p class="kicker">${esc(Pr.eyebrow)}</p>
      <h2 class="h2">${Pr.title}</h2>
      <p class="lead">${esc(Pr.sub)}</p>
    </div>
    <div class="pricing-grid">
      <article class="plan-card">
        <div class="plan-head">
          <h3>${esc(Pr.planName)}</h3>
          <span class="chip-cost">${esc(Pr.planTag)}</span>
        </div>
        <p class="plan-price"><b>${esc(F.price)}</b><span>${esc(Pr.per)}</span></p>
        <p class="currency-note"><strong>${esc(F.currency)}</strong> · ${esc(Pr.currencyNote)}</p>
        <p class="plan-eq">${esc(Pr.equivalent)}</p>
        <p class="key-terms">${esc(Pr.keyTerms)}</p>
        <ul class="feat">${Pr.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <a class="btn btn-primary btn-block btn-lg" href="${checkout}">${esc(Pr.cta)}</a>
        <p class="cta-note">${esc(Pr.ctaNote)}</p>
        <div class="plan-pay">
          ${cardBadges(SITE.cards, Pr.cardsTitle)}
          <p class="descriptor">${esc(Pr.descriptor)}</p>
        </div>
      </article>
      <div class="billing-col">
        <div class="guarantee">
          <div class="seal" aria-hidden="true"><b>30</b><small>${lang === "ja" ? "日間" : "DAYS"}</small></div>
          <div>
            <h3>${esc(Pr.guaranteeTitle)}</h3>
            <p class="guarantee-line">${esc(Pr.guaranteeLine)}</p>
            <p>${esc(Pr.guaranteeBody)}</p>
          </div>
        </div>
        <div class="timeline-box">
          <h3>${esc(Pr.timelineTitle)}</h3>
          <ol class="timeline">${Pr.timeline.map(([when, what, detail]) => `<li><span class="when">${esc(when)}</span><div><b>${esc(what)}</b><p>${esc(detail)}</p></div></li>`).join("")}</ol>
        </div>
        <div class="terms-row">
          <div><h3>${esc(Pr.cancelTitle)}</h3><p>${esc(Pr.cancelBody)}</p></div>
          <div><h3>${esc(Pr.cardsTitle)}</h3><p>${esc(Pr.cardsNote)}</p></div>
        </div>
        <p class="policy-links">${esc(Pr.policyLinks)} <a href="${L("terms")}">${title("terms")}</a> · <a href="${L("refund")}">${title("refund")}</a> · <a href="${L("cancellation")}">${title("cancellation")}</a>${lang === "ja" ? ` · <a href="${L("commercial-disclosure")}">${title("commercial-disclosure")}</a>` : ""}</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="faq">
  <div class="wrap faq-wrap">
    <div class="sec-head">
      <p class="kicker">${esc(S.faq.eyebrow)}</p>
      <h2 class="h2">${S.faq.title}</h2>
    </div>
    <div class="faq">${S.faq.items.map(([q, a], i) => `
      <details${i === 0 ? " open" : ""}>
        <summary>${esc(q)}<span class="chev" aria-hidden="true"></span></summary>
        <p>${esc(a)}</p>
      </details>`).join("")}
    </div>
  </div>
</section>

<section class="section closing">
  <div class="wrap closing-inner">
    <h2 class="display sm"><span>${esc(S.cta.title1)}</span> <em>${esc(S.cta.title2)}</em></h2>
    <p class="hero-sub">${esc(S.cta.sub)}</p>
    <div class="closing-actions">
      <a class="btn btn-primary btn-lg" href="${checkout}">${esc(S.cta.trial)}</a>
      <a class="btn btn-ghost btn-lg" href="#top" data-focus-composer>${esc(S.cta.preview)}</a>
    </div>
  </div>
</section>

<dialog class="modal" id="workspace" aria-labelledby="wsTitle">
  <div class="modal-head">
    <div>
      <p class="kicker">${esc(S.ws.title)}</p>
      <h3 id="wsTitle"></h3>
      <p class="modal-note">${esc(S.ws.demo)}</p>
    </div>
    <button class="icon-btn" type="button" data-close aria-label="${esc(S.ws.close)}">×</button>
  </div>
  <div class="ws-stage" id="wsStage"></div>
  <div class="ws-meta">
    <span><small>${esc(S.ws.size)}</small> <b id="wsSize"></b></span>
    <span><small>${esc(S.ws.cost)}</small> <b id="wsCost"></b></span>
  </div>
  <div class="ws-actions">
    <button class="btn btn-ghost" type="button" id="wsPlay" hidden>${esc(S.ws.play)}</button>
    <button class="btn btn-ghost" type="button" id="wsAgain">${esc(S.ws.again)}</button>
    <a class="btn btn-ghost" id="wsDownload" download>${esc(S.ws.download)}</a>
    <a class="btn btn-primary" href="${checkout}">${esc(S.ws.upgrade)}</a>
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
