/* Downloads the self-hosted web fonts into src/assets/fonts/.
 *   node src/build.mjs && node tools/fetch-fonts.mjs && node src/build.mjs
 * Run it again whenever Japanese headings change (the build warns when a
 * heading uses a character the subset lacks). Needs network access to
 * fonts.googleapis.com / fonts.gstatic.com; the site itself never calls them.
 * All three families are licensed under the SIL Open Font License 1.1. */
import { writeFileSync, readFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { headChars } from "../src/lib/ja-head.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "src", "assets", "fonts");
mkdirSync(out, { recursive: true });
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";

async function css(query) {
  const res = await fetch(`https://fonts.googleapis.com/css2?${query}&display=swap`, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`Google Fonts CSS ${res.status} for ${query}`);
  return res.text();
}
async function save(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`font ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(out, file), buf);
  console.log(`  ${file}  ${(buf.length / 1024).toFixed(1)} KB`);
}

// 1. Latin subsets (variable weight axis where the family has one).
const LATIN = [
  ["Wix+Madefor+Display:wght@400..800", "wix-madefor-display-latin.woff2"],
  ["Wix+Madefor+Text:wght@400..800", "wix-madefor-text-latin.woff2"],
  ["DM+Mono:wght@500", "dm-mono-500-latin.woff2"]
];
console.log("Latin fonts");
for (const [family, file] of LATIN) {
  const sheet = await css(`family=${family}`);
  const block = sheet.split("/* latin */")[1];
  const url = block && block.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
  if (!url) throw new Error(`no latin block for ${family}`);
  await save(url, file);
}

// 2. Japanese heading subset: exactly the characters used in heading elements.
const chars = new Set();
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).forEach((e) => {
  const p = join(dir, e.name);
  if (e.isDirectory()) walk(p); else if (p.endsWith(".html")) headChars(readFileSync(p, "utf8"), chars);
});
walk(join(root, "site", "ja"));
const text = [...chars].sort().join("");
console.log(`Japanese heading subset (${chars.size} characters)`);
const jaSheet = await css(`family=Zen+Kaku+Gothic+New:wght@900&text=${encodeURIComponent(text)}`);
const jaUrl = jaSheet.match(/url\((https:[^)]+)\)\s*format\('woff2'\)/)?.[1];
if (!jaUrl) throw new Error("no woff2 in Zen Kaku subset response");
await save(jaUrl, "zen-kaku-900-ja-head.woff2");
writeFileSync(join(out, "ja-head-chars.txt"), text + "\n");
console.log("Done. Rebuild the site: node src/build.mjs");
