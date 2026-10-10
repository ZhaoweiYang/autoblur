/* Validates policy modules in src/legal/.
 * Usage: node src/lib/check-legal.mjs [slug ...]   (no args = all)
 * Exits non-zero when any module has errors. */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const legalDir = join(here, "..", "legal");

const ALLOWED = new Set(["p", "h2", "h3", "ul", "ol", "li", "strong", "em", "a", "table", "thead", "tbody", "tr", "th", "td", "address", "br", "code", "dl", "dt", "dd"]);
const VOID = new Set(["br"]);
const PLACEHOLDER = /lorem|ipsum|coming soon|\bTBD\b|\bTODO\b|\[insert|\[your|example\.com|your company|placeholder|\bXXX?\b|近日公開|準備中|ダミー/i;
// Facts that must come from FACTS, not be typed into the source.
const HARDCODED = [/US\$\s?99\b/, /16,?999/, /\b1,200\b/, /89\.10/, /15,?299/, /support@blockforgeo\.net/, /14001/];

export function checkHtml(html, where) {
  const errors = [];
  const stack = [];
  const re = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    const [full, rawTag, attrs] = m;
    const tag = rawTag.toLowerCase();
    if (!ALLOWED.has(tag)) errors.push(`${where}: tag <${tag}> not allowed`);
    if (/\sstyle=|\son\w+=/i.test(attrs)) errors.push(`${where}: inline style/handler in <${tag}>`);
    const cls = attrs.match(/class="([^"]*)"/);
    if (cls && !["lede", "callout"].includes(cls[1])) errors.push(`${where}: class "${cls[1]}" not allowed`);
    if (full.startsWith("</")) {
      const top = stack.pop();
      if (top !== tag) errors.push(`${where}: </${tag}> closes <${top || "nothing"}>`);
    } else if (!VOID.has(tag) && !full.endsWith("/>")) {
      stack.push(tag);
    }
  }
  if (stack.length) errors.push(`${where}: unclosed ${stack.map((t) => `<${t}>`).join(" ")}`);
  if (PLACEHOLDER.test(html.replace(/<[^>]+>/g, " "))) errors.push(`${where}: placeholder-like text: "${html.replace(/<[^>]+>/g, " ").match(PLACEHOLDER)[0]}"`);
  return errors;
}

const ids = (html) => [...html.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((x) => x[1]);

export async function checkModule(file) {
  const errors = [];
  const warnings = [];
  const src = readFileSync(join(legalDir, file), "utf8");
  const slug = file.replace(/\.mjs$/, "");
  const stripped = src.replace(/\$\{[^}]*\}/g, "");
  for (const re of HARDCODED) if (re.test(stripped)) errors.push(`${slug}: hard-coded fact ${re} — use FACTS`);
  let mod;
  try {
    mod = (await import(pathToFileURL(join(legalDir, file)).href + "?t=" + Date.now())).default;
  } catch (e) {
    return { slug, errors: [`${slug}: failed to import: ${e.message}`], warnings };
  }
  if (!mod || mod.slug !== slug) errors.push(`${slug}: default export missing or slug mismatch (${mod && mod.slug})`);
  if (!Number.isFinite(mod?.order)) errors.push(`${slug}: missing numeric order`);
  for (const lang of ["en", "ja"]) {
    const L = mod?.[lang];
    if (!L) { errors.push(`${slug}.${lang}: missing`); continue; }
    for (const k of ["title", "nav", "description", "body"]) if (!L[k] || typeof L[k] !== "string") errors.push(`${slug}.${lang}.${k}: missing`);
    if (!L.body) continue;
    const dl = L.description.length;
    if (lang === "en" && (dl < 90 || dl > 170)) warnings.push(`${slug}.en.description length ${dl} (aim 120–160)`);
    if (lang === "ja" && (dl < 40 || dl > 130)) warnings.push(`${slug}.ja.description length ${dl} (aim 70–120)`);
    errors.push(...checkHtml(L.body, `${slug}.${lang}.body`));
    if (!/^\s*<p class="lede">/.test(L.body)) errors.push(`${slug}.${lang}.body: must start with <p class="lede">`);
    if (!/<address>/.test(L.body)) errors.push(`${slug}.${lang}.body: missing <address> contact block`);
    if ((L.body.match(/class="callout"/g) || []).length > 2) errors.push(`${slug}.${lang}.body: more than two callouts`);
    const hs = ids(L.body);
    if (hs.length < 2) errors.push(`${slug}.${lang}.body: needs h2 sections with ids`);
    if (new Set(hs).size !== hs.length) errors.push(`${slug}.${lang}.body: duplicate h2 ids`);
    const all = [...L.body.matchAll(/<h2(?![^>]*\sid=)/g)];
    if (all.length) errors.push(`${slug}.${lang}.body: h2 without id`);
  }
  if (mod?.en?.body && mod?.ja?.body) {
    const a = ids(mod.en.body).join(","), b = ids(mod.ja.body).join(",");
    if (a !== b) errors.push(`${slug}: h2 ids differ between en [${a}] and ja [${b}]`);
    if (/[぀-ヿ]/.test(mod.en.body)) warnings.push(`${slug}.en.body contains Japanese characters`);
  }
  return { slug, errors, warnings };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const wanted = process.argv.slice(2);
  const files = readdirSync(legalDir).filter((f) => f.endsWith(".mjs") && (!wanted.length || wanted.includes(f.replace(/\.mjs$/, ""))));
  let bad = 0;
  for (const f of files) {
    const r = await checkModule(f);
    const status = r.errors.length ? "FAIL" : "ok";
    console.log(`${status}  ${r.slug}`);
    r.errors.forEach((e) => console.log("   error:", e));
    r.warnings.forEach((w) => console.log("   warn: ", w));
    if (r.errors.length) bad++;
  }
  if (!files.length) console.log("no modules found");
  process.exit(bad ? 1 : 0);
}
