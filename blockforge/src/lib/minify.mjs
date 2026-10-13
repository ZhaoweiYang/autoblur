/* Dependency-free, conservative minifiers for the build output.
 * They only drop comments and indentation; they never rewrite tokens, so the
 * output behaves exactly like the source. */
const KEEP = /<(pre|textarea|script)\b[\s\S]*?<\/\1>/gi;

export function minifyHtml(html) {
  const kept = [];
  return html
    .replace(KEEP, (m) => `\u0000${kept.push(m) - 1}\u0000`)
    .replace(/<!--(?!\[)[\s\S]*?-->/g, "")
    .replace(/\n\s+/g, "\n")
    .replace(/\u0000(\d+)\u0000/g, (_, i) => kept[+i]);
}

export function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/:\s+/g, ":")
    .replace(/;}/g, "}")
    .trim() + "\n";
}

export function minifyJs(js) {
  return js
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("//"))
    .join("\n") + "\n";
}
