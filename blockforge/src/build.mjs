/* Blockgoer static site build.
 *   node src/build.mjs        → writes the deployable site to ./site
 * No dependencies; Node 18+. */
import { mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE } from "./config.mjs";
import { homePage } from "./pages/home.mjs";
import { checkoutPage, contactPage, legalPage, legalHub } from "./pages/other.mjs";
import { checkModule } from "./lib/check-legal.mjs";
import { langPath } from "./lib/layout.mjs";
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
}

// 3. Assets.
cpSync(join(here, "assets"), join(out, "assets"), { recursive: true, filter: (p) => !p.endsWith("i18n.js") && !p.endsWith(".txt") });
write("assets/img/cards.svg", cardSprite());
for (const f of readdirSync(join(out, "assets", "css"))) { const p = join(out, "assets", "css", f); writeFileSync(p, minifyCss(readFileSync(p, "utf8"))); }
for (const f of readdirSync(join(out, "assets", "js"))) { const p = join(out, "assets", "js", f); writeFileSync(p, minifyJs(readFileSync(p, "utf8"))); }

// 4. Crawler files.
const abs = (p) => `${SITE.siteUrl}/${p.replace(/(^|\/)index\.html$/, "$1")}`;
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

console.log(`Built ${pages.length * LANGS.length} pages → ${out}`);
const subsetFile = join(here, "assets", "fonts", "ja-head-chars.txt");
const subset = existsSync(subsetFile) ? new Set(readFileSync(subsetFile, "utf8").trim()) : new Set();
const missing = [...jaHead].filter((c) => !subset.has(c));
if (missing.length) console.warn(`⚠ Japanese headings use ${missing.length} character(s) missing from the heading font (${missing.join("")}). They render in the system font until you run: node tools/fetch-fonts.mjs && node src/build.mjs`);
if (!SITE.checkoutUrl) console.warn("⚠ SITE.checkoutUrl is empty in src/config.mjs — the trial button opens an email to support until you set your payment link.");
for (const img of ["../fonts/wix-madefor-display-latin.woff2", "../fonts/wix-madefor-text-latin.woff2", "../fonts/dm-mono-500-latin.woff2", "../fonts/zen-kaku-900-ja-head.woff2", "og-en.png", "og-ja.png", "logo-512.png", "logo-192.png", "apple-touch-icon.png", "favicon-32.png", "favicon.svg"]) {
  if (!existsSync(join(here, "assets", "img", img))) console.warn(`⚠ missing src/assets/img/${img}`);
}
