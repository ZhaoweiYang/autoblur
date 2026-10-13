/* Blockgoer static site build.
 *   node src/build.mjs        → writes the deployable site to ./site
 * No dependencies; Node 18+. */
import { mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync, cpSync, existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE } from "./config.mjs";
import { homePage } from "./pages/home.mjs";
import { checkoutPage, contactPage, legalPage, legalHub, notFoundPage } from "./pages/other.mjs";
import { checkModule } from "./lib/check-legal.mjs";
import { langPath, BOOT_JS } from "./lib/layout.mjs";
import { abs } from "./lib/schema.mjs";
import { headChars } from "./lib/ja-head.mjs";
import { cardSprite } from "./lib/cards.mjs";
import { minifyHtml, minifyCss, minifyJs } from "./lib/minify.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const out = join(root, "site");
const LANGS = ["en", "ja"];

// 1. Load + validate policy modules.
const legalFiles = readdirSync(join(here, "legal")).filter((f) => f.endsWith(".mjs")).sort();
let failed = false;
for (const f of legalFiles) {
  const r = await checkModule(f);
  if (r.errors.length) { failed = true; console.error(`✗ ${r.slug}\n  ${r.errors.join("\n  ")}`); }
}
if (failed) { console.error("Policy validation failed — fix the errors above."); process.exit(1); }
const legal = (await Promise.all(legalFiles.map(async (f) => (await import(pathToFileURL(join(here, "legal", f)).href)).default)))
  .sort((a, b) => a.order - b.order);

// 2. Render pages.
// Empty site/ but keep the folder itself (keeps local preview servers working).
mkdirSync(out, { recursive: true });
for (const entry of readdirSync(out)) rmSync(join(out, entry), { recursive: true, force: true });
const pages = [];
const jaHead = new Set();
const write = (path, html) => {
  const file = join(out, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, path.endsWith(".html") ? minifyHtml(html) : html);
  if (path.startsWith("ja/") && path.endsWith(".html")) headChars(html, jaHead);
};
for (const lang of LANGS) {
  const add = (enPath, html, priority) => { write(langPath(lang, enPath), html); if (lang === "en") pages.push({ enPath, priority }); };
  add("index.html", homePage(lang, legal), "1.0");
  add("checkout.html", checkoutPage(lang, legal), "0.8");
  add("contact.html", contactPage(lang, legal), "0.6");
  add("legal/index.html", legalHub(lang, legal), "0.5");
  for (const m of legal) add(`legal/${m.slug}.html`, legalPage(lang, m, legal), "0.4");
  write(langPath(lang, "404.html"), notFoundPage(lang, legal)); // not in the sitemap
}

// 3. Assets.
cpSync(join(here, "assets"), join(out, "assets"), { recursive: true, filter: (p) => !p.endsWith("i18n.js") && !p.endsWith(".txt") });
write("assets/img/cards.svg", cardSprite());
for (const f of readdirSync(join(out, "assets", "css"))) { const p = join(out, "assets", "css", f); writeFileSync(p, minifyCss(readFileSync(p, "utf8"))); }
for (const f of readdirSync(join(out, "assets", "js"))) { const p = join(out, "assets", "js", f); writeFileSync(p, minifyJs(readFileSync(p, "utf8"))); }

// Fingerprint assets with ?v=<content hash> so browsers can cache them for a
// year (see _headers) and still pick up every change. Fonts first, because
// the stylesheet references them.
const hashOf = (p) => createHash("sha256").update(readFileSync(join(out, p))).digest("hex").slice(0, 10);
const version = {};
for (const f of readdirSync(join(out, "assets", "fonts"))) version[`assets/fonts/${f}`] = hashOf(`assets/fonts/${f}`);
const cssFile = join(out, "assets", "css", "style.css");
writeFileSync(cssFile, readFileSync(cssFile, "utf8").replace(/url\(\.\.\/fonts\/([\w.-]+)\)/g, (m, f) => `url(../fonts/${f}?v=${version[`assets/fonts/${f}`]})`));
for (const p of ["assets/css/style.css", "assets/js/app.js", "assets/js/gen.js", "assets/img/cards.svg"]) version[p] = hashOf(p);
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith(".html") ? [join(dir, e.name)] : []);
for (const file of htmlFiles(out)) {
  writeFileSync(file, readFileSync(file, "utf8").replace(/(assets\/(?:css|js|img|fonts)\/[\w.-]+)(?=["#])/g, (m, p) => (version[p] ? `${p}?v=${version[p]}` : p)));
}

// 4. Crawler files.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.flatMap(({ enPath, priority }) => LANGS.map((lang) => `  <url>
    <loc>${abs(langPath(lang, enPath))}</loc>
    <lastmod>${SITE.effectiveDate}</lastmod>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(enPath)}"/>
    <xhtml:link rel="alternate" hreflang="ja" href="${abs(`ja/${enPath}`)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(enPath)}"/>
  </url>`)).join("\n")}
</urlset>
`;
write("sitemap.xml", sitemap);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.siteUrl}/sitemap.xml\n`);
write("site.webmanifest", JSON.stringify({
  name: "Blockgoer", short_name: "Blockgoer", start_url: "./", display: "standalone",
  background_color: "#f9f8f6", theme_color: "#f9f8f6",
  icons: [{ src: "assets/img/logo-192.png", sizes: "192x192", type: "image/png" }, { src: "assets/img/logo-512.png", sizes: "512x512", type: "image/png" }]
}, null, 2));

// 5. Cloudflare Pages headers: security headers, a Content-Security-Policy
// that only allows this site's own files (plus the hashed boot script), long
// caching for fingerprinted assets, and noindex on *.pages.dev copies.
const bootHash = createHash("sha256").update(BOOT_JS).digest("base64");
const csp = [
  "default-src 'self'",
  `script-src 'self' 'sha256-${bootHash}'`,
  "style-src 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self' blob: data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join("; ");
write("_headers", `/*
  Content-Security-Policy: ${csp}
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()

/assets/css/*
  Cache-Control: public, max-age=31536000, immutable

/assets/js/*
  Cache-Control: public, max-age=31536000, immutable

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/assets/img/*
  Cache-Control: public, max-age=604800

https://:project.pages.dev/*
  X-Robots-Tag: noindex
`);

console.log(`Built ${pages.length * LANGS.length} pages + 404 pages → ${out}`);
const subsetFile = join(here, "assets", "fonts", "ja-head-chars.txt");
const subset = existsSync(subsetFile) ? new Set(readFileSync(subsetFile, "utf8").trim()) : new Set();
const missing = [...jaHead].filter((c) => !subset.has(c));
if (missing.length) console.warn(`⚠ Japanese headings use ${missing.length} character(s) missing from the heading font (${missing.join("")}). They render in the system font until you run: node tools/fetch-fonts.mjs && node src/build.mjs`);
if (!SITE.checkoutUrl) console.warn("⚠ SITE.checkoutUrl is empty in src/config.mjs — the trial button opens an email to support until you set your payment link.");
for (const img of ["../fonts/wix-madefor-display-latin.woff2", "../fonts/wix-madefor-text-latin.woff2", "../fonts/dm-mono-500-latin.woff2", "../fonts/zen-kaku-900-ja-head.woff2", "og-en.png", "og-ja.png", "logo-512.png", "logo-192.png", "apple-touch-icon.png", "favicon-32.png", "favicon.svg"]) {
  if (!existsSync(join(here, "assets", "img", img))) console.warn(`⚠ missing src/assets/img/${img}`);
}
