/* Accepted-payment badges as inline SVG (no external requests).
 * Each badge is 48×32 with an accessible name. */
const W = 48, H = 32;
const frame = (fill, inner, label, stroke = "none") =>
  `<svg class="paycard" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${label}"><title>${label}</title><rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="5" fill="${fill}" stroke="${stroke}"/>${inner}</svg>`;

const CARDS = {
  visa: () => frame("#ffffff",
    `<text x="24" y="21.5" text-anchor="middle" font-family="Arial Black, Arial, Helvetica, sans-serif" font-weight="900" font-style="italic" font-size="13.5" letter-spacing="-.4" fill="#1a1f71">VISA</text>`,
    "Visa", "#d9d9d9"),
  mastercard: () => frame("#1b1b1f",
    `<circle cx="19.5" cy="16" r="8.6" fill="#eb001b"/><circle cx="28.5" cy="16" r="8.6" fill="#f79e1b"/><path d="M24 8.67a8.6 8.6 0 0 1 0 14.66a8.6 8.6 0 0 1 0-14.66z" fill="#ff5f00"/>`,
    "Mastercard"),
  amex: () => frame("#1f72cd",
    `<text x="24" y="19.6" text-anchor="middle" font-family="Arial Black, Arial, Helvetica, sans-serif" font-weight="900" font-size="9.6" letter-spacing=".2" fill="#ffffff">AMEX</text>`,
    "American Express"),
  jcb: () => frame("#ffffff",
    `<rect x="9" y="6" width="9" height="20" rx="3" fill="#0e4c96"/><rect x="19.5" y="6" width="9" height="20" rx="3" fill="#e21836"/><rect x="30" y="6" width="9" height="20" rx="3" fill="#00a14b"/><text x="13.5" y="19.6" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="8.5" fill="#fff">J</text><text x="24" y="19.6" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="8.5" fill="#fff">C</text><text x="34.5" y="19.6" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="8.5" fill="#fff">B</text>`,
    "JCB", "#d9d9d9"),
  discover: () => frame("#ffffff",
    `<text x="5" y="19.4" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="7.4" fill="#231f20">DISC</text><circle cx="28.4" cy="16.6" r="3.9" fill="#f76f20"/><text x="32.6" y="19.4" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="7.4" fill="#231f20">VER</text><path d="M30 31.5h12.5a5 5 0 0 0 5-5V21C42 26 36 29.5 30 31.5z" fill="#f76f20"/>`,
    "Discover", "#d9d9d9")
};

export function cardBadges(list, label) {
  return `<ul class="paycards" aria-label="${label}">${list.map((c) => `<li>${CARDS[c]()}</li>`).join("")}</ul>`;
}

export const CARD_NAMES = { visa: "Visa", mastercard: "Mastercard", amex: "American Express", jcb: "JCB", discover: "Discover" };
