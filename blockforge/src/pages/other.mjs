import { SITE, FACTS } from "../config.mjs";
import { STRINGS } from "../strings.mjs";
import { page, esc, langPath, relFrom } from "../lib/layout.mjs";
import { cardBadges } from "../lib/cards.mjs";
import { product, webPage, breadcrumbs, returnPolicyNode } from "../lib/schema.mjs";

/* ---------------- checkout ---------------- */
export function checkoutPage(lang, legal) {
  const S = STRINGS[lang], C = S.checkout, Pr = S.pricing, F = FACTS[lang];
  const enPath = "checkout.html";
  const rel = relFrom(langPath(lang, enPath));
  const mailto = `mailto:${F.email}?subject=${encodeURIComponent(lang === "ja" ? "BlockForgeo Pro 無料トライアルの申し込み" : "Start my BlockForgeo Pro free trial")}`;
  const target = SITE.checkoutUrl || mailto;
  const rows = [
    [C.plan, ""],
    [C.today, C.todayValue],
    [C.trialCredits, C.trialCreditsValue],
    [C.access, C.accessValue],
    [C.afterTrial, C.afterTrialValue],
    ...(C.tax ? [[C.tax, C.taxValue]] : []),
    [C.renews, C.renewsValue],
    [C.includes, C.includesValue]
  ];
  const main = `
<section class="section page-top">
  <div class="wrap checkout-grid">
    <nav class="crumbs crumbs-full" aria-label="${esc(S.legal.breadcrumb)}"><a href="${rel(langPath(lang, "index.html"))}">${esc(S.legal.home)}</a> <span aria-hidden="true">›</span> <span aria-current="page">${esc(C.title)}</span></nav>
    <div>
      <span class="eyebrow">${esc(C.eyebrow)}</span>
      <h1 class="h2">${esc(C.title)}</h1>
      <p class="lead left">${esc(C.sub)}</p>

      <div class="summary">
        <h2 class="h3">${esc(C.summary)}</h2>
        <dl class="summary-list">
          ${rows.slice(1).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>
        <p class="plan-line"><strong>${esc(C.plan)}</strong><br><span class="big-price">${esc(F.price)}</span> <span>${esc(Pr.per)}</span> · <strong>${esc(F.currency)}</strong></p>
        <p class="charge-time" id="chargeTime">${esc(C.timeLine)} <b>${esc(C.timeLineFallback)}</b></p>
      </div>

      <form class="consent-form" id="consentForm">
        <label class="consent"><input type="checkbox" id="consentBox" required> <span>${C.consent.replace(/href="legal\//g, `href="${rel(langPath(lang, "legal/"))}`)}</span></label>
        <a class="btn btn-primary btn-lg btn-block" id="startTrial" href="${esc(target)}"${SITE.checkoutUrl ? ' rel="noopener"' : ""}>${esc(C.button)}</a>
        <p class="fine left" id="consentHint">${esc(C.buttonHint)}</p>
        <p class="secure"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 10V8a6 6 0 1 1 12 0v2h1v12H5V10h1zm2 0h8V8a4 4 0 1 0-8 0v2z" fill="currentColor"/></svg> ${esc(SITE.checkoutUrl ? C.secure : C.fallback)}</p>
      </form>
    </div>

    <aside class="checkout-side">
      <div class="guarantee">
        <div class="seal" aria-hidden="true"><b>30</b><small>${lang === "ja" ? "日間" : "DAYS"}</small></div>
        <div>
          <h2 class="h3">${esc(Pr.guaranteeTitle)}</h2>
          <p class="guarantee-line">${esc(Pr.guaranteeLine)}</p>
          <p>${esc(Pr.guaranteeBody)}</p>
        </div>
      </div>
      <div class="side-box">
        <h2 class="h3">${esc(C.whatNext)}</h2>
        <ol class="next-list">${C.next.map((n) => `<li>${esc(n)}</li>`).join("")}</ol>
      </div>
      <div class="side-box">
        <h2 class="h3">${esc(Pr.cardsTitle)}</h2>
        ${cardBadges(SITE.cards, Pr.cardsTitle)}
        <p>${esc(Pr.cardsNote)}</p>
        <p class="descriptor">${esc(Pr.descriptor)}</p>
      </div>
      <div class="side-box">
        <h2 class="h3">${esc(Pr.cancelTitle)}</h2>
        <p>${esc(Pr.cancelBody)}</p>
        <p class="policy-links"><a href="${rel(langPath(lang, "legal/refund.html"))}">${esc(legal.find((m) => m.slug === "refund")[lang].title)}</a> · <a href="${rel(langPath(lang, "legal/cancellation.html"))}">${esc(legal.find((m) => m.slug === "cancellation")[lang].title)}</a> · <a href="${rel(langPath(lang, "legal/terms.html"))}">${esc(legal.find((m) => m.slug === "terms")[lang].title)}</a>${lang === "ja" ? ` · <a href="${rel(langPath(lang, "legal/commercial-disclosure.html"))}">${esc(legal.find((m) => m.slug === "commercial-disclosure").ja.title)}</a>` : ""}</p>
      </div>
    </aside>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.checkoutTitle,
    description: S.meta.checkoutDesc,
    bodyClass: "checkout",
    jsonld: [
      webPage("CheckoutPage", { name: S.meta.checkoutTitle, description: S.meta.checkoutDesc, path: langPath(lang, enPath), lang }),
      breadcrumbs([[S.legal.home, langPath(lang, "index.html")], [C.title, langPath(lang, enPath)]]),
      product(lang), returnPolicyNode(lang)
    ],
    scripts: ["app.js"],
    main
  });
}

/* ---------------- contact ---------------- */
export function contactPage(lang, legal) {
  const S = STRINGS[lang], C = S.contact, F = FACTS[lang];
  const enPath = "contact.html";
  const rel = relFrom(langPath(lang, enPath));
  const main = `
<section class="section page-top">
  <div class="wrap narrow-wide">
    <nav class="crumbs" aria-label="${esc(S.legal.breadcrumb)}"><a href="${rel(langPath(lang, "index.html"))}">${esc(S.legal.home)}</a> <span aria-hidden="true">›</span> <span aria-current="page">${esc(C.title)}</span></nav>
    <span class="eyebrow">${esc(C.eyebrow)}</span>
    <h1 class="h2">${esc(C.title)}</h1>
    <p class="lead left">${esc(C.sub)}</p>
    <div class="contact-grid">
      <div class="side-box email-box">
        <h2 class="h3">${esc(C.emailTitle)}</h2>
        <p class="big-email"><a href="mailto:${F.email}">${F.email}</a></p>
        <dl class="summary-list">
          <div><dt>${esc(C.hours)}</dt><dd>${esc(F.supportResponse)}</dd></div>
          <div><dt>${esc(C.languages)}</dt><dd>${esc(C.languagesValue)}</dd></div>
        </dl>
      </div>
      <div class="side-box">
        <h2 class="h3">${esc(C.companyTitle)}</h2>
        <dl class="summary-list">
          <div><dt>${esc(C.legalName)}</dt><dd>${F.company}</dd></div>
          <div><dt>${esc(C.address)}</dt><dd><address>${FACTS.en.addressLines.join("<br>")}</address></dd></div>
          <div><dt>${esc(C.emailLabel)}</dt><dd><a href="mailto:${F.email}">${F.email}</a></dd></div>
        </dl>
      </div>
    </div>
    <h2 class="h3 topics-h">${esc(C.topics)}</h2>
    <ul class="topic-list">${C.topicList.map(([t, d, href]) => `<li><a href="${rel(langPath(lang, href))}"><b>${esc(t)}</b><span>${esc(d)}</span></a></li>`).join("")}</ul>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.contactTitle,
    description: S.meta.contactDesc,
    bodyClass: "contact",
    jsonld: [
      webPage("ContactPage", { name: S.meta.contactTitle, description: S.meta.contactDesc, path: langPath(lang, enPath), lang }),
      breadcrumbs([[S.legal.home, langPath(lang, "index.html")], [C.title, langPath(lang, enPath)]])
    ],
    scripts: ["app.js"],
    main
  });
}

/* ---------------- legal pages ---------------- */
export function legalPage(lang, mod, legal) {
  const S = STRINGS[lang], L = S.legal, F = FACTS[lang];
  const P = mod[lang];
  const enPath = `legal/${mod.slug}.html`;
  const rel = relFrom(langPath(lang, enPath));
  const toc = [...P.body.matchAll(/<h2[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)]
    .map(([, id, html]) => `<li><a href="#${id}">${html.replace(/<[^>]+>/g, "")}</a></li>`).join("");
  const main = `
<section class="section page-top legal">
  <div class="wrap legal-grid">
    <nav class="crumbs" aria-label="${esc(L.breadcrumb)}"><a href="${rel(langPath(lang, "index.html"))}">${esc(L.home)}</a> <span aria-hidden="true">›</span> <a href="${rel(langPath(lang, "legal/index.html"))}">${esc(L.hubTitle)}</a> <span aria-hidden="true">›</span> <span aria-current="page">${esc(P.title)}</span></nav>
    <header class="legal-head">
      <span class="eyebrow">${esc(L.eyebrow)}</span>
      <h1 class="h2">${esc(P.title)}</h1>
      <p class="legal-dates">${esc(L.effective)}: <time datetime="${SITE.effectiveDate}">${esc(F.effectiveDate)}</time> · ${esc(L.updated)}: <time datetime="${SITE.effectiveDate}">${esc(F.effectiveDate)}</time></p>
    </header>
    <aside class="toc"><p class="toc-h">${esc(L.onThisPage)}</p>${/<li><a href="#[^"]+">\s*\d+[.．]/.test(toc) ? `<ul class="toc-plain">${toc}</ul>` : `<ol>${toc}</ol>`}</aside>
    <article class="prose">${P.body}</article>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: `${P.title} — BlockForgeo`,
    description: P.description,
    ogType: "article",
    bodyClass: "legal-page",
    jsonld: [
      webPage("WebPage", { name: P.title, description: P.description, path: langPath(lang, enPath), lang }),
      breadcrumbs([[L.home, langPath(lang, "index.html")], [L.hubTitle, langPath(lang, "legal/index.html")], [P.title, langPath(lang, enPath)]])
    ],
    scripts: ["app.js"],
    main
  });
}

export function legalHub(lang, legal) {
  const S = STRINGS[lang], L = S.legal;
  const enPath = "legal/index.html";
  const rel = relFrom(langPath(lang, enPath));
  const main = `
<section class="section page-top">
  <div class="wrap narrow-wide">
    <nav class="crumbs" aria-label="${esc(L.breadcrumb)}"><a href="${rel(langPath(lang, "index.html"))}">${esc(L.home)}</a> <span aria-hidden="true">›</span> <span aria-current="page">${esc(L.hubTitle)}</span></nav>
    <span class="eyebrow">${esc(L.eyebrow)}</span>
    <h1 class="h2">${esc(L.hubTitle)}</h1>
    <p class="lead left">${esc(L.hubSub)}</p>
    <ul class="topic-list policy-list">${legal.map((m) => `<li><a href="${rel(langPath(lang, `legal/${m.slug}.html`))}"><b>${esc(m[lang].title)}</b><span>${esc(m[lang].description)}</span></a></li>`).join("")}</ul>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.legalTitle,
    description: S.meta.legalDesc,
    bodyClass: "legal-hub",
    jsonld: [
      webPage("CollectionPage", { name: L.hubTitle, description: S.meta.legalDesc, path: langPath(lang, enPath), lang }),
      breadcrumbs([[L.home, langPath(lang, "index.html")], [L.hubTitle, langPath(lang, enPath)]])
    ],
    scripts: ["app.js"],
    main
  });
}
