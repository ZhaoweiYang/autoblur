/* Shared page shell: <head> with SEO/Open Graph/JSON-LD, header, footer. */
import { SITE, FACTS } from "../config.mjs";
import { STRINGS, runtimeStrings } from "../strings.mjs";
import { cardBadges } from "./cards.mjs";
import { organization, website, graph, abs } from "./schema.mjs";

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Paths are written relative to the English root ("legal/refund.html").
 * The Japanese twin lives under "ja/". */
export const langPath = (lang, enPath) => (lang === "ja" ? `ja/${enPath}` : enPath);
const depthOf = (path) => path.split("/").length - 1;
export const relFrom = (fromPath) => (to) => "../".repeat(depthOf(fromPath)) + to;
/* Links to directory index pages use the directory URL (matches canonical). */
export const pretty = (href) => href.replace(/(^|\/)index\.html(?=$|#)/, "$1") || "./";

export const LOGO = `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#fb923c"/><rect x="8" y="7" width="7" height="18" rx="2" fill="#141418"/><rect x="15" y="15" width="10" height="10" rx="2" fill="#141418"/><rect x="18" y="18" width="4" height="4" rx="1" fill="#fb923c"/></svg>`;

function head({ lang, enPath, title, description, ogType, jsonld, noindex }) {
  const S = STRINGS[lang];
  const path = langPath(lang, enPath);
  const url = abs(path);
  const enUrl = abs(enPath), jaUrl = abs(`ja/${enPath}`);
  const rel = relFrom(path);
  const ogImg = abs(`assets/img/og-${lang}.png`);
  const altLang = lang === "ja" ? "en" : "ja";
  const altHref = pretty(rel(langPath(altLang, enPath)));
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${enUrl}">
<link rel="alternate" hreflang="ja" href="${jaUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">
<meta property="og:type" content="${ogType || "website"}">
<meta property="og:site_name" content="${SITE.brand}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(S.meta.ogAlt)}">
<meta property="og:locale" content="${S.ogLocale}">
<meta property="og:locale:alternate" content="${STRINGS[altLang].ogLocale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ogImg}">
<meta name="twitter:image:alt" content="${esc(S.meta.ogAlt)}">
<meta name="application-name" content="${SITE.brand}">
<meta name="author" content="${FACTS.en.company}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f9f8f6">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="${rel("assets/img/favicon.svg")}" type="image/svg+xml">
<link rel="icon" href="${rel("assets/img/favicon-32.png")}" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="${rel("assets/img/apple-touch-icon.png")}">
<link rel="manifest" href="${rel("site.webmanifest")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@500;600;700;800&amp;family=Wix+Madefor+Text:wght@400;500;600;700&amp;family=DM+Mono:wght@400;500&amp;family=Zen+Kaku+Gothic+New:wght@400;500;700;900&amp;display=swap">
<link rel="stylesheet" href="${rel("assets/css/style.css")}">
<script>(function(){try{var t=localStorage.getItem("blockgoer-theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}
try{if(/[?&]lang=/.test(location.search))return;var cur="${lang}",p=localStorage.getItem("blockgoer-lang");if(p&&p!==cur){location.replace(${JSON.stringify(altHref)}+location.hash);}}catch(e){}})();</script>
<script type="application/ld+json">${graph([organization(), website(lang), ...(jsonld || [])])}</script>
</head>`;
}

function header({ lang, enPath, isHome }) {
  const S = STRINGS[lang];
  const path = langPath(lang, enPath);
  const rel = relFrom(path);
  const home = rel(langPath(lang, "index.html"));
  const sec = (id) => (isHome ? `#${id}` : `${home}#${id}`);
  const enHref = rel(enPath), jaHref = rel(`ja/${enPath}`);
  return `<a class="skiplink" href="#main">${S.nav.skip}</a>
<header class="topbar" id="topbar">
  <div class="topbar-in">
    <a class="wordmark" href="${home}" aria-label="${S.nav.homeLabel}">${LOGO}<span>blockgoer</span></a>
    <nav class="menu" id="navLinks" aria-label="${S.nav.mainNav}">
      <a href="${sec("assets")}">${S.nav.assets}</a>
      <a href="${sec("process")}">${S.nav.process}</a>
      <a href="${sec("prompts")}">${S.nav.prompts}</a>
      <a href="${sec("pricing")}">${S.nav.pricing}</a>
      <a href="${sec("faq")}">${S.nav.faq}</a>
      <a href="${rel(langPath(lang, "contact.html"))}">${S.nav.contact}</a>
    </nav>
    <div class="topbar-tools">
      <div class="langpick" role="group" aria-label="${S.nav.lang}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18"/></svg>
        <a href="${enHref}" hreflang="en" lang="en" data-lang="en"${lang === "en" ? ' aria-current="true"' : ""}>EN</a>
        <a href="${jaHref}" hreflang="ja" lang="ja" data-lang="ja"${lang === "ja" ? ' aria-current="true"' : ""}>日本語</a>
      </div>
      <button class="tool-btn" id="themeBtn" type="button" aria-label="${S.nav.theme}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>
      </button>
      <a class="pill pill-ink topbar-cta" href="${rel(langPath(lang, "checkout.html"))}">${S.nav.cta}</a>
      <button class="tool-btn menu-btn" id="burger" type="button" aria-label="${S.nav.menu}" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

function footer({ lang, enPath, legal, isHome }) {
  const S = STRINGS[lang];
  const F = FACTS[lang];
  const path = langPath(lang, enPath);
  const rel = relFrom(path);
  const home = rel(langPath(lang, "index.html"));
  const sec = (id) => (isHome ? `#${id}` : `${home}#${id}`);
  const policies = legal
    .map((m) => `<li><a href="${rel(langPath(lang, `legal/${m.slug}.html`))}">${esc(m[lang].nav)}</a></li>`)
    .join("");
  return `<footer class="base">
  <div class="base-in">
    <div class="base-top">
      <div class="base-brand">
        <a class="wordmark" href="${home}">${LOGO}<span>blockgoer</span></a>
        <p class="base-tag">${S.footer.tagline}</p>
        <p class="base-op">${S.footer.operatedBy} <strong>${F.company}</strong></p>
        <address>${F.company}<br>${FACTS.en.addressLines.join("<br>")}<br><a href="mailto:${F.email}">${F.email}</a></address>
      </div>
      <div class="base-cols">
        <section>
          <h2>${S.footer.product}</h2>
          <ul>
            <li><a href="${sec("assets")}">${S.nav.assets}</a></li>
            <li><a href="${sec("process")}">${S.nav.process}</a></li>
            <li><a href="${sec("pricing")}">${S.nav.pricing}</a></li>
            <li><a href="${sec("faq")}">${S.nav.faq}</a></li>
            <li><a href="${rel(langPath(lang, "checkout.html"))}">${S.nav.cta}</a></li>
            <li><a href="${rel(langPath(lang, "contact.html"))}">${S.footer.contact}</a></li>
          </ul>
        </section>
        <section class="base-policies">
          <h2><a href="${rel(langPath(lang, "legal/index.html"))}">${S.footer.policies}</a></h2>
          <ul>${policies}</ul>
        </section>
      </div>
    </div>
    <div class="base-pay">
      <span>${S.footer.pay}</span>
      ${cardBadges(SITE.cards, S.pricing.cardsTitle)}
      <small>${esc(S.pricing.descriptor)}</small>
    </div>
    <p class="base-legal">${S.footer.copy} ${S.footer.notAffiliated}</p>
  </div>
</footer>`;
}

const prettyLinks = (html) => html.replace(/href="([^"#:]*?)index\.html(#[^"]*)?"/g, (m, dir, hash) => `href="${dir || "./"}${hash || ""}"`);

export function page(opts) {
  const { lang, enPath, bodyClass = "", main, scripts = [] } = opts;
  const S = STRINGS[lang];
  const path = langPath(lang, enPath);
  const rel = relFrom(path);
  const runtime = { lang, checkoutUrl: SITE.checkoutUrl, email: FACTS.en.email, t: runtimeStrings(lang) };
  return prettyLinks(`<!DOCTYPE html>
<html lang="${S.htmlLang}">
${head(opts)}
<body class="${["lang-" + lang, bodyClass].filter(Boolean).join(" ")}">
${header(opts)}
<main id="main">
${main}
</main>
${footer(opts)}
<script>window.BF=${JSON.stringify(runtime).replace(/</g, "\\u003c")};</script>
${scripts.map((s) => `<script src="${rel(`assets/js/${s}`)}" defer></script>`).join("\n")}
</body>
</html>
`);
}
