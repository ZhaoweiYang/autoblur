/* BlockForge — single source of truth for business facts.
 * Every page, policy and the structured data read from here, so prices,
 * trial and refund terms can never disagree between pages.
 * Change a value here and run `node src/build.mjs` to regenerate site/. */

export const SITE = {
  brand: "BlockForge",
  // Absolute origin used for canonical URLs, Open Graph, hreflang and sitemap.
  siteUrl: "https://blockforge.vip",
  // Where "Start 1-hour free trial" sends people after they accept the terms.
  // Set this to your payment processor's hosted checkout / payment link.
  // Left empty, the button opens an email to support instead.
  checkoutUrl: "",
  // Exactly what appears on the customer's card statement.
  statementDescriptor: "BLOCKFORGE",
  // Card brands shown as accepted payment methods (order = display order).
  cards: ["visa", "mastercard", "amex", "jcb", "discover"],
  effectiveDate: "2026-10-10",
  copyrightYear: 2026
};

export const COMPANY = {
  legalName: "CALDRIVO GLOBAL INC",
  street: "14001 East Iliff Avenue",
  city: "Aurora",
  region: "CO",
  regionName: "Colorado",
  postalCode: "80014",
  country: "US",
  email: "support@blockforge.vip",
  supportResponse: { en: "within 2 business days", ja: "2営業日以内" },
  governingLaw: { en: "the State of Colorado, USA", ja: "米国コロラド州法" },
  venue: { en: "the state and federal courts located in Arapahoe County, Colorado", ja: "米国コロラド州アラパホー郡に所在する州裁判所または連邦裁判所" }
};

export const PLAN = {
  name: "BlockForge Pro",
  interval: "P1Y",
  trialHours: 1,
  trialCredits: 10,
  creditsPerYear: 1200,
  refundDays: 30,
  reminderDays: 7,
  priceChangeNoticeDays: 30,
  // Price per language. The language of the page decides the currency.
  prices: {
    en: { currency: "USD", amount: 99, decimals: 2, locale: "en-US" },
    ja: { currency: "JPY", amount: 16999, decimals: 0, locale: "ja-JP" }
  },
  // Credit cost per tool (one credit = one asset unless noted).
  creditCosts: { thumbnail: 1, ui: 4, texture: 1, clothing: 1, icon: 1, gfx: 1, sfx: 1 }
};

/* ---------- derived, human-readable facts (use these in copy) ---------- */
function money(lang, value) {
  const p = PLAN.prices[lang];
  const digits = Number.isInteger(value) ? 0 : p.decimals; // US$99, US$89.10
  const s = new Intl.NumberFormat(p.locale, { style: "currency", currency: p.currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
  return p.currency === "USD" ? s.replace(/^\$/, "US$") : s.replace(/^￥/, "¥");
}

function perCredit(lang) {
  const p = PLAN.prices[lang];
  return p.amount / PLAN.creditsPerYear;
}

function refundExample(lang, used) {
  const p = PLAN.prices[lang];
  const unused = PLAN.creditsPerYear - used;
  const raw = (p.amount * unused) / PLAN.creditsPerYear;
  const factor = Math.pow(10, p.decimals);
  return { used, unused, amount: money(lang, Math.round(raw * factor) / factor) };
}

const addressLines = [COMPANY.street, `${COMPANY.city}, ${COMPANY.region} ${COMPANY.postalCode}`];

export const FACTS = {
  en: {
    lang: "en",
    brand: SITE.brand,
    company: COMPANY.legalName,
    email: COMPANY.email,
    addressLines: [...addressLines, "United States"],
    addressOneLine: `${COMPANY.street}, ${COMPANY.city}, ${COMPANY.region} ${COMPANY.postalCode}, United States`,
    price: money("en", PLAN.prices.en.amount),          // "US$99"
    priceWithCode: `${money("en", PLAN.prices.en.amount)} USD`,
    currency: "USD",
    currencyName: "US dollars (USD)",
    pricePerYear: `${money("en", PLAN.prices.en.amount)}/year`,
    perMonthEquivalent: money("en", Math.round((PLAN.prices.en.amount / 12) * 100) / 100), // "US$8.25"
    perCredit: `US$${perCredit("en").toFixed(4)}`,       // "US$0.0825"
    trial: "1-hour free trial",
    trialHours: PLAN.trialHours,
    trialCredits: PLAN.trialCredits,
    credits: PLAN.creditsPerYear.toLocaleString("en-US"),  // "1,200"
    refundDays: PLAN.refundDays,
    reminderDays: PLAN.reminderDays,
    priceChangeNoticeDays: PLAN.priceChangeNoticeDays,
    descriptor: SITE.statementDescriptor,
    supportResponse: COMPANY.supportResponse.en,
    governingLaw: COMPANY.governingLaw.en,
    venue: COMPANY.venue.en,
    effectiveDate: "October 10, 2026",
    refundExample: refundExample("en", 120),             // used 120 → US$89.10
    taxNote: "Sales tax or VAT may apply depending on where you live. Any tax is shown at checkout before you confirm."
  },
  ja: {
    lang: "ja",
    brand: SITE.brand,
    company: COMPANY.legalName,
    email: COMPANY.email,
    addressLines: [...addressLines, "United States（アメリカ合衆国 コロラド州オーロラ）"],
    addressOneLine: `${COMPANY.street}, ${COMPANY.city}, ${COMPANY.region} ${COMPANY.postalCode}, United States（アメリカ合衆国 コロラド州 オーロラ）`,
    price: money("ja", PLAN.prices.ja.amount),           // "¥16,999"
    priceWithCode: `${money("ja", PLAN.prices.ja.amount)}（税込・JPY）`,
    currency: "JPY",
    currencyName: "日本円（JPY）",
    pricePerYear: `年額 ${money("ja", PLAN.prices.ja.amount)}（税込）`,
    perMonthEquivalent: `約${money("ja", Math.round(PLAN.prices.ja.amount / 12))}`, // "約¥1,417"
    perCredit: `約${perCredit("ja").toFixed(2)}円`,       // "約14.17円"
    trial: "1時間の無料トライアル",
    trialHours: PLAN.trialHours,
    trialCredits: PLAN.trialCredits,
    credits: PLAN.creditsPerYear.toLocaleString("ja-JP"),
    refundDays: PLAN.refundDays,
    reminderDays: PLAN.reminderDays,
    priceChangeNoticeDays: PLAN.priceChangeNoticeDays,
    descriptor: SITE.statementDescriptor,
    supportResponse: COMPANY.supportResponse.ja,
    governingLaw: COMPANY.governingLaw.ja,
    venue: COMPANY.venue.ja,
    effectiveDate: "2026年10月10日",
    refundExample: refundExample("ja", 120),             // used 120 → ¥15,299
    taxNote: "表示価格は消費税込みです。"
  }
};

export { money };
