import { SITE, PLAN, FACTS } from "../config.mjs";
import { STRINGS, TOOLS } from "../strings.mjs";
import { page, esc, langPath, relFrom } from "../lib/layout.mjs";
import { cardBadges } from "../lib/cards.mjs";
import { product, webApplication, faqPage, webPage, returnPolicyNode, abs } from "../lib/schema.mjs";

const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2l12 7v14l-12 7-12-7V9z" fill="currentColor"/><path d="M18 7l-7 10h5l-2 8 7-10h-5z" fill="#1a1305"/></svg>`;

const creditLabel = (S, n) => (n === 1 ? S.credit.one : S.credit.n.replace("{n}", n));

function creator(S, { withChips }) {
  const tool = "thumbnail";
  const P = S.prompt[tool];
  return `<div class="creator" data-creator>
  <div class="tool-tabs" role="tablist" aria-label="${esc(S.nav.tools)}">${TOOLS.map((t) => `<button type="button" role="tab" aria-selected="${t === tool}" data-tool="${t}">${esc(S.tools[t])}</button>`).join("")}</div>
  <form class="prompt">
    <span class="prompt-label" data-role="label">${esc(P.label)}</span>
    <input type="text" maxlength="140" autocomplete="off" data-role="input" placeholder="${esc(P.ph)}" aria-label="${esc(P.label)}">
    <button class="btn btn-primary" type="submit"><span data-role="btn">${esc(P.btn)}</span> <span aria-hidden="true">→</span></button>
  </form>
  ${withChips ? `<div class="try"><span>${esc(S.hero.try)}</span><div class="chips" data-role="chips">${S.chips[tool].map((c) => `<button type="button" class="chip">${esc(c)}</button>`).join("")}</div></div>` : ""}
</div>`;
}

export function homePage(lang, legal) {
  const S = STRINGS[lang];
  const F = FACTS[lang];
  const enPath = "index.html";
  const rel = relFrom(langPath(lang, enPath));
  const L = (slug) => rel(langPath(lang, `legal/${slug}.html`));
  const checkout = rel(langPath(lang, "checkout.html"));
  const T = S.toolsSec;
  const Pr = S.pricing;
  const priceNum = F.price;

  const main = `
<section class="hero" id="top">
  <div class="hero-wall" aria-hidden="true"><div class="wall-grid" id="wallGrid"></div></div>
  <div class="hero-inner">
    <p class="eyebrow-plain">${esc(S.hero.eyebrow)}</p>
    <h1 class="hero-title"><span>${esc(S.hero.title1)}</span><br><em>${esc(S.hero.title2)}</em></h1>
    <p class="hero-sub">${esc(S.hero.sub)}</p>
    ${creator(S, { withChips: true })}
    <p class="fine">${esc(S.hero.note)}</p>
    <ul class="stats">${S.hero.facts.map(([b, s]) => `<li><b>${esc(b)}</b><span>${esc(s)}</span></li>`).join("")}</ul>
  </div>
  <div class="ribbon" aria-hidden="true"><div class="ribbon-track">${[0, 1, 2].map(() => S.marquee.map((m) => `<span>${esc(m)}</span><i>+</i>`).join("")).join("")}</div></div>
</section>

<section class="section" id="how">
  <div class="wrap center">
    <span class="eyebrow">${esc(S.how.eyebrow)}</span>
    <h2 class="h2">${S.how.title}</h2>
    <p class="lead">${esc(S.how.sub)}</p>
    <ol class="steps">${S.how.steps.map(([t, d], i) => `<li class="step reveal"><span class="step-n">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section alt" id="tools">
  <div class="wrap">
    <span class="eyebrow">${esc(T.eyebrow)}</span>
    <h2 class="h2">${T.title}</h2>
    <p class="lead left">${esc(T.sub)}</p>
    <div class="tools-top">
      <article class="tcard big reveal">
        <div class="tcard-body">
          <h3>${esc(T.thumb.name)}</h3>
          <p class="spec">${esc(T.thumb.spec)}</p>
          <p>${esc(T.thumb.desc)}</p>
          <ul class="bullets">${T.thumb.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          <div class="tags"><span class="tag">${esc(T.included)}</span><span class="tag ghost">${esc(creditLabel(S, PLAN.creditCosts.thumbnail))}</span></div>
          <button class="btn btn-primary" type="button" data-open-tool="thumbnail">${esc(T.thumb.cta)} →</button>
        </div>
        <div class="tcard-art stack" aria-hidden="true">
          <canvas data-art="thumbnail" data-prompt="level 1 vs level 9999 giant emerald" width="1280" height="720"></canvas>
          <canvas data-art="thumbnail" data-prompt="golden coin tycoon" width="1280" height="720"></canvas>
          <span class="badge">${esc(S.ideas.badge)}</span>
        </div>
      </article>
      <article class="tcard reveal">
        <div class="tcard-body">
          <h3>${esc(T.ui.name)}</h3>
          <p class="spec">${esc(T.ui.spec)}</p>
          <p>${esc(T.ui.desc)}</p>
          <div class="tags"><span class="tag">${esc(T.included)}</span><span class="tag ghost">${esc(creditLabel(S, PLAN.creditCosts.ui))}</span></div>
          <button class="btn btn-ghost" type="button" data-open-tool="ui">${esc(T.ui.cta)} →</button>
        </div>
        <div class="tcard-art ui-art" aria-hidden="true">
          <canvas data-art="ui" data-prompt="candy shop" width="1280" height="720"></canvas>
          <div class="tree"><small>${esc(T.ui.opens)}</small><ul><li>ScreenGui</li><li>Frame</li><li>UICorner</li><li>UIStroke</li><li>UIGradient</li><li>TextLabel</li><li>TextButton</li><li>ImageLabel</li></ul></div>
        </div>
      </article>
    </div>
    <div class="tools-grid">${["texture", "clothing", "icon", "gfx", "sfx"].map((id) => `
      <article class="scard" data-tool-card="${id}">
        <div class="scard-art" data-slot="${id}" aria-hidden="true"></div>
        <h3>${esc(S.tools[id])}</h3>
        <p class="spec">${esc(T.small[id].spec)}</p>
        <p>${esc(T.small[id].desc)}</p>
        <button class="try-line" type="button" data-open-tool="${id}">› <span>${esc(S.chips[id][0])}</span></button>
        <div class="tags"><span class="tag">${esc(T.included)}</span><span class="tag ghost">${esc(creditLabel(S, PLAN.creditCosts[id]))}</span></div>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="ideas">
  <div class="wrap">
    <div class="row-head">
      <div>
        <span class="eyebrow">${esc(S.ideas.eyebrow)}</span>
        <h2 class="h2">${S.ideas.title}</h2>
        <p class="lead left">${esc(S.ideas.sub)}</p>
      </div>
      <div class="arrows">
        <button class="icon-btn round" id="showPrev" type="button" aria-label="${esc(S.ideas.prev)}">←</button>
        <button class="icon-btn round" id="showNext" type="button" aria-label="${esc(S.ideas.next)}">→</button>
      </div>
    </div>
  </div>
  <div class="carousel" id="carousel">${S.ideas.items.map((txt, i) => `
    <figure class="shot">
      <div class="shot-img" data-idea-img="${i}" role="img" aria-label="${esc(S.ideas.badge)}: ${esc(txt)}"><span class="badge">${esc(S.ideas.badge)}</span></div>
      <figcaption>
        <div><small>${esc(S.ideas.idea)}</small><p>${esc(txt)}</p></div>
        <button class="btn btn-outline btn-xs" type="button" data-idea="${i}">${esc(S.ideas.use)}</button>
      </figcaption>
    </figure>`).join("")}
  </div>
</section>

<section class="section why">
  <div class="wrap why-grid">
    <div class="reveal">
      <span class="eyebrow">${esc(S.why.eyebrow)}</span>
      <h2 class="h2">${S.why.title}</h2>
      <p class="lead left">${esc(S.why.sub)}</p>
      <ul class="hex-list">${S.why.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    </div>
    <div class="why-art reveal">
      <div class="orb" id="orb" aria-hidden="true"></div>
      <table class="why-table">
        <thead><tr>${S.why.th.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${S.why.rows.map(([a, b, c]) => `<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td><td>${esc(c)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section alt" id="pricing">
  <div class="wrap">
    <span class="eyebrow">${esc(Pr.eyebrow)}</span>
    <h2 class="h2">${Pr.title}</h2>
    <p class="lead left">${esc(Pr.sub)}</p>
    <div class="pricing-grid">
      <article class="plan-card">
        <div class="plan-head">
          <h3>${esc(Pr.planName)}</h3>
          <span class="tag">${esc(Pr.planTag)}</span>
        </div>
        <p class="plan-price"><b>${esc(priceNum)}</b><span>${esc(Pr.per)}</span></p>
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
        <p class="policy-links">${esc(Pr.policyLinks)} <a href="${L("terms")}">${esc(legal.find((m) => m.slug === "terms")[lang].title)}</a> · <a href="${L("refund")}">${esc(legal.find((m) => m.slug === "refund")[lang].title)}</a> · <a href="${L("cancellation")}">${esc(legal.find((m) => m.slug === "cancellation")[lang].title)}</a>${lang === "ja" ? ` · <a href="${L("commercial-disclosure")}">${esc(legal.find((m) => m.slug === "commercial-disclosure").ja.title)}</a>` : ""}</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="faq">
  <div class="wrap narrow">
    <span class="eyebrow">${esc(S.faq.eyebrow)}</span>
    <h2 class="h2">${S.faq.title}</h2>
    <div class="faq">${S.faq.items.map(([q, a], i) => `
      <details${i === 0 ? " open" : ""}>
        <summary>${esc(q)}<span class="chev" aria-hidden="true"></span></summary>
        <p>${esc(a)}</p>
      </details>`).join("")}
    </div>
  </div>
</section>

<section class="section final">
  <div class="wrap center">
    <span class="final-mark">${LOGO}</span>
    <h2 class="hero-title sm"><span>${esc(S.cta.title1)}</span><br><em>${esc(S.cta.title2)}</em></h2>
    <p class="hero-sub">${esc(S.cta.sub)}</p>
    ${creator(S, { withChips: false })}
    <a class="text-link" href="${checkout}">${esc(S.cta.trial)}</a>
  </div>
</section>

<div class="dock" id="dock" hidden>
  <form class="dock-form" data-creator data-compact>
    <label class="dock-select"><span class="sr-only">${esc(S.fab)}</span>
      <select data-role="select">${TOOLS.map((t) => `<option value="${t}">${esc(S.tools[t])}</option>`).join("")}</select>
    </label>
    <input type="text" maxlength="140" autocomplete="off" data-role="input" placeholder="${esc(S.prompt.thumbnail.ph)}" aria-label="${esc(S.prompt.thumbnail.label)}">
    <button class="btn btn-primary btn-sm" type="submit"><span data-role="btn">${esc(S.prompt.thumbnail.btn)}</span> →</button>
    <button class="icon-btn dock-x" type="button" id="dockClose" aria-label="${esc(S.ws.close)}">×</button>
  </form>
</div>

<dialog class="modal" id="workspace" aria-labelledby="wsTitle">
  <div class="modal-head">
    <div>
      <span class="eyebrow">${esc(S.ws.title)}</span>
      <h3 id="wsTitle"></h3>
      <p class="fine left">${esc(S.ws.demo)}</p>
    </div>
    <button class="icon-btn round" type="button" data-close aria-label="${esc(S.ws.close)}">×</button>
  </div>
  <div class="ws-stage" id="wsStage"></div>
  <div class="ws-meta">
    <span><small>${esc(S.ws.size)}</small> <b id="wsSize"></b></span>
    <span><small>${esc(S.ws.cost)}</small> <b id="wsCost"></b></span>
  </div>
  <div class="ws-actions">
    <button class="btn btn-ghost" type="button" id="wsPlay" hidden>${esc(S.ws.play)} ▶</button>
    <button class="btn btn-ghost" type="button" id="wsAgain">${esc(S.ws.again)} ↻</button>
    <a class="btn btn-ghost" id="wsDownload" download>${esc(S.ws.download)} ↓</a>
    <a class="btn btn-primary" href="${checkout}">${esc(S.ws.upgrade)} →</a>
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
      product(lang), webApplication(lang), returnPolicyNode(), faqPage(S.faq.items, url)
    ],
    scripts: ["gen.js", "app.js"],
    main
  });
}
