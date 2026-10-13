/* Local preview server that routes like Cloudflare Pages.
 *   node tools/serve.mjs [port]      → http://localhost:8788
 * - "/page" serves page.html, "/dir/" serves dir/index.html
 * - "/page.html" and "/dir/index.html" redirect (308) to the clean URL
 * - unknown paths get the nearest 404.html with status 404
 * - headers from site/_headers are applied (path rules only)
 * No dependencies. For an exact emulation use: npx wrangler pages dev site */
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname, dirname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const site = join(dirname(fileURLToPath(import.meta.url)), "..", "site");
const port = Number(process.argv[2]) || 8788;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8", ".json": "application/json", ".webmanifest": "application/manifest+json"
};

// "_headers": blocks of "<path pattern>" followed by indented "Name: value" lines.
const rules = [];
if (existsSync(join(site, "_headers"))) {
  let cur = null;
  for (const line of readFileSync(join(site, "_headers"), "utf8").split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (!/^\s/.test(line)) { cur = { pattern: line.trim(), headers: [] }; rules.push(cur); continue; }
    const i = line.indexOf(":");
    if (cur && i > 0) cur.headers.push([line.slice(0, i).trim(), line.slice(i + 1).trim()]);
  }
}
const matches = (pattern, path) => pattern.startsWith("/") &&
  new RegExp("^" + pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(path);

const isFile = (p) => existsSync(p) && statSync(p).isFile();
const isDir = (p) => existsSync(p) && statSync(p).isDirectory();

createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const path = decodeURIComponent(url.pathname);
  if (normalize(path).includes("..")) { res.writeHead(400).end(); return; }
  const send = (status, file, extra = {}) => {
    const headers = { "Content-Type": TYPES[extname(file)] || "application/octet-stream", ...extra };
    for (const r of rules) if (matches(r.pattern, path)) for (const [k, v] of r.headers) headers[k] = v;
    res.writeHead(status, headers).end(req.method === "HEAD" ? undefined : readFileSync(file));
  };
  const redirect = (to) => res.writeHead(308, { Location: to + url.search }).end();

  if (path.endsWith("/index.html")) return redirect(path.slice(0, -"index.html".length));
  if (path.endsWith(".html")) return redirect(path.slice(0, -".html".length));
  const fsPath = join(site, path);
  if (path.endsWith("/") && isFile(join(fsPath, "index.html"))) return send(200, join(fsPath, "index.html"));
  if (!path.endsWith("/") && isFile(fsPath) && !path.split("/").pop().startsWith("_")) return send(200, fsPath);
  if (!path.endsWith("/") && isFile(fsPath + ".html")) return send(200, fsPath + ".html");
  if (!path.endsWith("/") && isDir(fsPath)) return redirect(path + "/");
  // Nearest 404.html, walking up from the requested directory.
  let dir = path.endsWith("/") ? path : dirname(path);
  for (;;) {
    const candidate = join(site, dir, "404.html");
    if (isFile(candidate)) return send(404, candidate);
    if (dir === "/" || dir === ".") break;
    dir = dirname(dir);
  }
  res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
}).listen(port, () => console.log(`Serving ${site} at http://localhost:${port}`));
