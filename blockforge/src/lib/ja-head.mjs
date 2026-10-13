/* Characters set in the Japanese heading face.
 * Japanese body text uses the reader's system font; only headings use the
 * self-hosted Zen Kaku Gothic New subset, which contains exactly the
 * characters these elements need. Mark any new heading element with one of
 * the classes below so its characters are included. */
export const JA_HEAD_CLASSES = ["mega", "head-xxl", "head-xl", "head-m", "jh"];

const ELEMENT = new RegExp(
  `<(h[1-6]|b|p|span|div)\\b[^>]*\\bclass="(?:[^"]*\\s)?(?:${JA_HEAD_CLASSES.join("|")})(?:\\s[^"]*)?"[^>]*>([\\s\\S]*?)</\\1>`,
  "g"
);
const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };

export function headChars(html, into = new Set()) {
  for (const [, , inner] of html.matchAll(ELEMENT)) {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&[#\w]+;/g, (e) => ENTITIES[e] ?? "");
    for (const ch of text) if (ch.trim()) into.add(ch);
  }
  return into;
}
