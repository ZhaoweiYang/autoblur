import { SITE, FACTS } from "../config.mjs";
import { STRINGS } from "../strings.mjs";
import { page, esc, langPath, relFrom } from "../lib/layout.mjs";
import { cardBadges } from "../lib/cards.mjs";
import { product, webPage, breadcrumbs, returnPolicyNode } from "../lib/schema.mjs";

const crumbs = (label, items) =>
  `<nav class="trail" aria-label="${esc(label)}">${items.map(([text, href], i) =>
    href ? `<a href="${href}">${esc(text)}</a>` : `<span aria-current="page">${esc(text)}</span>`
  ).join(`<span class="trail-sep" aria-hidden="true">/</span>`)}</nav>`;

/* ---------------- checkout ---------------- */
export function checkoutPage(lang, legal) {
  const S = STRINGS[lang], C = S.checkout, Pr = S.pricing, F = FACTS[lang];
  const enPath = "checkout.html";
  const rel = relFrom(langPath(lang, enPath));
  const mailto = `mailto:${F.email}?subject=${encodeURIComponent(lang === "ja" ? "Blockgoer Pro 無料トライアルの申し込み" : "Start my Blockgoer Pro free trial")}`;
  const target = SITE.checkoutUrl || mailto;
  const rows = [
    [C.today, C.todayValue],
    [C.trialCredits, C.trialCreditsValue],
    [C.access, C.accessValue],
    [C.afterTrial, C.afterTrialValue],
    ...(C.tax ? [[C.tax, C.taxValue]] : []),
    [C.renews, C.renewsValue],
    [C.includes, C.includesValue]
  ];
  const link = (slug) => `<a href="${rel(langPath(lang, `legal/${slug}.html`))}">${esc(legal.find((m) => m.slug === slug)[lang].title)}</a>`;
  const main = `
<section class="inner">
  <div class="wrap">
    ${crumbs(S.legal.breadcrumb, [[S.legal.home, rel(langPath(lang, "index.html"))], [C.title]])}
    <div class="pay-grid">
      <div class="pay-main">
        <p class="kick">${esc(C.eyebrow)}</p>
        <h1 class="head-xl">${esc(C.title)}</h1>
        <p class="lede-text">${esc(C.sub)}</p>

        <div class="receipt">
          <div class="receipt-head">
            <h2>${esc(C.summary)}</h2>
            <p><strong>${esc(C.plan)}</strong></p>
            <p class="receipt-price"><b>${esc(F.price)}</b> <span>${esc(Pr.per)}</span> <em>${esc(F.currency)}</em></p>
          </div>
          <table class="receipt-table">
            <tbody>${rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody>
          </table>
          <p class="receipt-when" id="chargeTime">${esc(C.timeLine)} <b>${esc(C.timeLineFallback)}</b></p>
        </div>

        <form class="agree" id="consentForm">
          <label class="agree-box"><input type="checkbox" id="consentBox" required> <span>${C.consent.replace(/href="legal\//g, `href="${rel(langPath(lang, "legal/"))}`)}</span></label>
          <a class="pill pill-orange pill-lg pill-wide" id="startTrial" href="${esc(target)}"${SITE.checkoutUrl ? ' rel="noopener"' : ""}>${esc(C.button)}</a>
          <p class="agree-hint" id="consentHint">${esc(C.buttonHint)}</p>
          <p class="agree-secure"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg> ${esc(SITE.checkoutUrl ? C.secure : C.fallback)}</p>
        </form>
      </div>

      <aside class="pay-side">
        <div class="card-block card-orange">
          <span class="seal" aria-hidden="true">30</span>
          <h2>${esc(Pr.guaranteeTitle)}</h2>
          <p class="fact-strong">${esc(Pr.guaranteeLine)}</p>
          <p>${esc(Pr.guaranteeBody)}</p>
        </div>
        <div class="card-block">
          <h2>${esc(C.whatNext)}</h2>
          <ol class="num-list">${C.next.map((n) => `<li>${esc(n)}</li>`).join("")}</ol>
        </div>
        <div class="card-block">
          <h2>${esc(Pr.cardsTitle)}</h2>
          ${cardBadges(SITE.cards, Pr.cardsTitle)}
          <p>${esc(Pr.cardsNote)}</p>
          <p><strong>${esc(Pr.descriptor)}</strong></p>
        </div>
        <div class="card-block">
          <h2>${esc(Pr.cancelTitle)}</h2>
          <p>${esc(Pr.cancelBody)}</p>
          <p class="policy-line">${link("refund")} · ${link("cancellation")} · ${link("terms")}${lang === "ja" ? ` · ${link("commercial-disclosure")}` : ""}</p>
        </div>
      </aside>
    </div>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.checkoutTitle,
    description: S.meta.checkoutDesc,
    bodyClass: "page-checkout",
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
<section class="inner">
  <div class="wrap">
    ${crumbs(S.legal.breadcrumb, [[S.legal.home, rel(langPath(lang, "index.html"))], [C.title]])}
    <div class="contact-top">
      <div>
        <p class="kick">${esc(C.eyebrow)}</p>
        <h1 class="head-xl">${esc(C.title)}</h1>
        <p class="lede-text">${esc(C.sub)}</p>
      </div>
      <div class="card-block card-blue">
        <h2>${esc(C.emailTitle)}</h2>
        <p class="mail-big"><a href="mailto:${F.email}">${F.email}</a></p>
        <p>${esc(C.hours)}: ${esc(F.supportResponse)} · ${esc(C.languages)}: ${esc(C.languagesValue)}</p>
      </div>
    </div>
    <div class="card-block company-card">
      <h2>${esc(C.companyTitle)}</h2>
      <table class="receipt-table">
        <tbody>
          <tr><th scope="row">${esc(C.legalName)}</th><td>${F.company}</td></tr>
          <tr><th scope="row">${esc(C.address)}</th><td><address>${FACTS.en.addressLines.join("<br>")}</address></td></tr>
          <tr><th scope="row">${esc(C.emailLabel)}</th><td><a href="mailto:${F.email}">${F.email}</a></td></tr>
        </tbody>
      </table>
    </div>
    <h2 class="head-m">${esc(C.topics)}</h2>
    <ul class="rows rows-links">${C.topicList.map(([t, d, href]) => `<li><a class="row" href="${rel(langPath(lang, href))}"><span class="row-main"><span class="row-name">${esc(t)}</span><span class="row-desc">${esc(d)}</span></span><svg class="circ" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M10 16h11M16.5 11l5 5-5 5"/></svg></a></li>`).join("")}</ul>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.contactTitle,
    description: S.meta.contactDesc,
    bodyClass: "page-contact",
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
    .map(([, id, html]) => `<li><a href="#${id}">${html.replace(/<[^>]+>/g, "").replace(/^\s*\d+[.．]\s*/, "")}</a></li>`).join("");
  const main = `
<section class="inner">
  <div class="wrap">
    ${crumbs(L.breadcrumb, [[L.home, rel(langPath(lang, "index.html"))], [L.hubTitle, rel(langPath(lang, "legal/index.html"))], [P.title]])}
    <header class="doc-head">
      <p class="kick">${esc(L.eyebrow)}</p>
      <h1 class="head-xl">${esc(P.title)}</h1>
      <p class="doc-dates">${esc(L.effective)}: <time datetime="${SITE.effectiveDate}">${esc(F.effectiveDate)}</time> · ${esc(L.updated)}: <time datetime="${SITE.effectiveDate}">${esc(F.effectiveDate)}</time></p>
    </header>
    <div class="doc-grid">
      <article class="doc">${P.body}</article>
      <aside class="doc-nav"><p>${esc(L.onThisPage)}</p><ol>${toc}</ol></aside>
    </div>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: `${P.title} — Blockgoer`,
    description: P.description,
    ogType: "article",
    bodyClass: "page-doc",
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
<section class="inner">
  <div class="wrap">
    ${crumbs(L.breadcrumb, [[L.home, rel(langPath(lang, "index.html"))], [L.hubTitle]])}
    <p class="kick">${esc(L.eyebrow)}</p>
    <h1 class="head-xl">${esc(L.hubTitle)}</h1>
    <p class="lede-text">${esc(L.hubSub)}</p>
    <ul class="rows rows-links">${legal.map((m) => `<li><a class="row" href="${rel(langPath(lang, `legal/${m.slug}.html`))}"><span class="row-main"><span class="row-name">${esc(m[lang].title)}</span><span class="row-desc">${esc(m[lang].description)}</span></span><svg class="circ" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M10 16h11M16.5 11l5 5-5 5"/></svg></a></li>`).join("")}</ul>
  </div>
</section>`;
  return page({
    lang, enPath, legal,
    title: S.meta.legalTitle,
    description: S.meta.legalDesc,
    bodyClass: "page-hub",
    jsonld: [
      webPage("CollectionPage", { name: L.hubTitle, description: S.meta.legalDesc, path: langPath(lang, enPath), lang }),
      breadcrumbs([[L.home, langPath(lang, "index.html")], [L.hubTitle, langPath(lang, enPath)]])
    ],
    scripts: ["app.js"],
    main
  });
}
