/* Checks the built site/ for SEO tags, structured data, links and placeholder text.
 *   node src/lib/check-site.mjs      (run after node src/build.mjs) */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, COMPANY, PLAN } from "../config.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const site = join(here, "..", "..", "site");
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(site);
const html = files.filter((f) => f.endsWith(".html"));
const PLACEHOLDER = /lorem|ipsum|coming soon|\bTBD\b|\bTODO\b|\[insert|example\.com|your company|placeholder text|\bXXX\b|近日公開|準備中|ダミー|stub/i;
const POLICIES = ["terms", "privacy", "refund", "cancellation", "shipping", "cookies", "accessibility", "dmca", "disclaimer", "do-not-sell", "commercial-disclosure"];
const problems = [];
const bad = (file, msg) => problems.push(`${relative(site, file)}: ${msg}`);

const one = (src, re) => { const m = src.match(re); return m ? m[1] : null; };
const visibleText = (src) => src
  .replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
  .replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/g, " ").replace(/\s+/g, " ");

for (const file of html) {
  const src = readFileSync(file, "utf8");
  const rel = relative(site, file);
  const isJa = rel.startsWith("ja/");
  // --- head tags
  const title = one(src, /<title>([^<]*)<\/title>/);
  if (!title) bad(file, "missing <title>");
  else if (title.length > 75 && !isJa) bad(file, `title long (${title.length})`);
  const desc = one(src, /<meta name="description" content="([^"]*)"/);
  if (!desc) bad(file, "missing meta description");
  else if (!isJa && (desc.length < 70 || desc.length > 175)) bad(file, `description length ${desc.length}`);
  for (const p of ["og:title", "og:description", "og:url", "og:image", "og:type", "og:site_name", "og:locale"]) if (!src.includes(`property="${p}"`)) bad(file, `missing ${p}`);
  for (const n of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) if (!src.includes(`name="${n}"`)) bad(file, `missing ${n}`);
  if (!/<link rel="canonical" href="https:\/\//.test(src)) bad(file, "missing canonical");
  for (const h of ["en", "ja", "x-default"]) if (!src.includes(`hreflang="${h}"`)) bad(file, `missing hreflang ${h}`);
  if (!new RegExp(`<html lang="${isJa ? "ja" : "en"}"`).test(src)) bad(file, "wrong html lang");
  if (/<h1[\s>]/g.test(src) === false) bad(file, "no <h1>");
  if ((src.match(/<h1[\s>]/g) || []).length > 1) bad(file, "more than one <h1>");
  // --- JSON-LD
  const ld = [...src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ld.length) bad(file, "no JSON-LD");
  for (const [, json] of ld) {
    let data;
    try { data = JSON.parse(json); } catch (e) { bad(file, `JSON-LD parse error ${e.message}`); continue; }
    const types = (data["@graph"] || [data]).map((n) => n["@type"]);
    if (!types.includes("Organization")) bad(file, "JSON-LD lacks Organization");
    const org = (data["@graph"] || []).find((n) => n["@type"] === "Organization");
    if (org && (org.name !== COMPANY.legalName || org.email !== COMPANY.email || !org.address)) bad(file, "Organization facts incomplete");
    if (rel.endsWith("index.html") && !rel.includes("legal") && !types.includes("Product")) bad(file, "home lacks Product");
    const prod = (data["@graph"] || []).find((n) => n["@type"] === "Product");
    if (prod) {
      const cur = prod.offers.map((o) => `${o.price} ${o.priceCurrency}`).join(", ");
      if (!cur.includes(`${PLAN.prices.en.amount.toFixed(2)} USD`) || !cur.includes(`${PLAN.prices.ja.amount} JPY`)) bad(file, `Product offers wrong: ${cur}`);
    }
  }
  // --- visible content
  const text = visibleText(src);
  const ph = text.match(PLACEHOLDER);
  if (ph) bad(file, `placeholder-like text "${ph[0]}"`);
  if (!text.includes(COMPANY.legalName)) bad(file, "company name not visible");
  if (!text.includes(COMPANY.email)) bad(file, "support email not visible");
  if (!text.includes(COMPANY.street)) bad(file, "address not visible");
  if (!text.includes(SITE.statementDescriptor)) bad(file, "statement descriptor not visible");
  for (const p of POLICIES) if (!src.includes(`legal/${p}.html"`)) bad(file, `footer/page lacks link to ${p}`);
  // --- links + anchors
  for (const [, href] of src.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    const [path, hash] = href.split("#");
    const target = path ? resolve(dirname(file), path) : file;
    if (!existsSync(target)) { bad(file, `broken link ${href}`); continue; }
    if (hash && target.endsWith(".html")) {
      const t = readFileSync(target, "utf8");
      if (!new RegExp(`id="${hash}"`).test(t)) bad(file, `missing anchor ${href}`);
    }
  }
  for (const [, s] of src.matchAll(/\ssrc="([^"]+)"/g)) {
    if (/^(https?:|data:)/.test(s)) continue;
    if (!existsSync(resolve(dirname(file), s))) bad(file, `missing asset ${s}`);
  }
}

// --- price display per language
const home = readFileSync(join(site, "index.html"), "utf8"), homeJa = readFileSync(join(site, "ja", "index.html"), "utf8");
if (!visibleText(home).includes("US$99")) problems.push("index.html: US$99 not visible");
if (!visibleText(homeJa).includes("¥16,999")) problems.push("ja/index.html: ¥16,999 not visible");
for (const f of ["sitemap.xml", "robots.txt", "site.webmanifest", "assets/img/og-en.png", "assets/img/og-ja.png", "assets/img/logo-512.png"]) if (!existsSync(join(site, f))) problems.push(`missing ${f}`);

console.log(`Checked ${html.length} pages.`);
if (problems.length) { console.log(problems.map((p) => "✗ " + p).join("\n")); process.exit(1); }
console.log("✓ no problems found");
