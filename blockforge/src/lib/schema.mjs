/* Schema.org JSON-LD builders. All facts come from config.mjs. */
import { SITE, COMPANY, PLAN, FACTS } from "../config.mjs";
import { CARD_NAMES } from "./cards.mjs";

const ORG_ID = `${SITE.siteUrl}/#organization`;
const SITE_ID = `${SITE.siteUrl}/#website`;
const PRODUCT_ID = `${SITE.siteUrl}/#product`;
const RETURN_ID = `${SITE.siteUrl}/#return-policy`;

const abs = (path) => `${SITE.siteUrl}/${path.replace(/^\/+/, "").replace(/(^|\/)index\.html$/, "$1")}`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: COMPANY.legalName,
    legalName: COMPANY.legalName,
    brand: { "@type": "Brand", name: SITE.brand, logo: abs("assets/img/logo-512.png") },
    url: SITE.siteUrl + "/",
    logo: { "@type": "ImageObject", url: abs("assets/img/logo-512.png"), width: 512, height: 512 },
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.region,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country
    },
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "customer support",
      email: COMPANY.email,
      availableLanguage: ["English", "Japanese"],
      areaServed: "Worldwide"
    }]
  };
}

export function website(lang) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE.brand,
    url: SITE.siteUrl + "/",
    inLanguage: ["en", "ja"],
    publisher: { "@id": ORG_ID }
  };
}

function returnPolicy() {
  return {
    "@type": "MerchantReturnPolicy",
    "@id": RETURN_ID,
    name: "30-Day Money-Back Guarantee",
    description: "Full refund on unused credits. No questions asked. Request within 30 days of any annual charge.",
    applicableCountry: ["US", "JP"],
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: PLAN.refundDays,
    returnFees: "https://schema.org/FreeReturn",
    refundType: "https://schema.org/FullRefund",
    merchantReturnLink: abs("legal/refund.html")
  };
}

function offer(lang) {
  const p = PLAN.prices[lang];
  const price = p.decimals ? p.amount.toFixed(p.decimals) : String(p.amount);
  const path = lang === "ja" ? "ja/checkout.html" : "checkout.html";
  return {
    "@type": "Offer",
    "@id": `${SITE.siteUrl}/#offer-${p.currency.toLowerCase()}`,
    name: lang === "ja" ? "BlockForgeo Pro 年額プラン（1時間無料トライアル付き）" : "BlockForgeo Pro annual plan (1-hour free trial)",
    url: abs(path),
    category: "Subscription",
    price,
    priceCurrency: p.currency,
    availability: "https://schema.org/InStock",
    validFrom: SITE.effectiveDate,
    seller: { "@id": ORG_ID },
    acceptedPaymentMethod: SITE.cards.map((c) => ({ "@type": "PaymentMethod", name: CARD_NAMES[c] })),
    eligibleQuantity: { "@type": "QuantitativeValue", value: 1 },
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        name: lang === "ja" ? "無料トライアル（1時間）" : "Free trial (1 hour)",
        price: "0",
        priceCurrency: p.currency,
        billingDuration: { "@type": "QuantitativeValue", value: PLAN.trialHours, unitCode: "HUR" }
      },
      {
        "@type": "UnitPriceSpecification",
        name: lang === "ja" ? "年額料金（自動更新）" : "Annual subscription (renews automatically)",
        price,
        priceCurrency: p.currency,
        valueAddedTaxIncluded: lang === "ja",
        billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" },
        billingStart: 1,
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" }
      }
    ],
    hasMerchantReturnPolicy: { "@id": RETURN_ID }
  };
}

export function product(lang) {
  const F = FACTS[lang];
  return {
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: PLAN.name,
    brand: { "@type": "Brand", name: SITE.brand },
    manufacturer: { "@id": ORG_ID },
    category: "Software subscription",
    image: abs(lang === "ja" ? "assets/img/og-ja.png" : "assets/img/og-en.png"),
    description: lang === "ja"
      ? `ゲーム制作者向けのAI素材作成サービス。カバー画像（サムネイル）、アイコン、UIキット、テクスチャ、アバター用シャツ、キャラクター画像、効果音を作成できます。有料期間1年ごとに${F.credits}クレジット、商用利用可。${F.trial}のあと${F.pricePerYear}。`
      : `AI asset creation for game creators: cover art (game thumbnails), icons, UI kits, tileable textures, avatar shirts, character renders and sound effects. ${F.credits} credits per paid year, commercial use included. ${F.trial}, then ${F.priceWithCode} per year.`,
    offers: [offer(lang), offer(lang === "ja" ? "en" : "ja")]
  };
}

export function webApplication(lang) {
  return {
    "@type": "WebApplication",
    name: SITE.brand,
    url: abs(lang === "ja" ? "ja/index.html" : "index.html"),
    applicationCategory: "DesignApplication",
    operatingSystem: "Any (modern web browser)",
    inLanguage: ["en", "ja"],
    publisher: { "@id": ORG_ID },
    offers: [{ "@id": `${SITE.siteUrl}/#offer-${PLAN.prices[lang].currency.toLowerCase()}` }],
    featureList: lang === "ja"
      ? ["カバー画像（16:9・1920×1080）", "ゲームアイコン（512×512・透過）", "UIキット（画像＋レイヤー一覧）", "シームレステクスチャ（512×512）", "アバター用シャツ（585×559）", "キャラクター画像（512×512）", "効果音（WAV）"]
      : ["Cover art / game thumbnails (16:9, 1920×1080)", "Game icons (512×512, transparent)", "UI kits (image + layer list)", "Tileable textures (512×512)", "Avatar shirts (585×559 template)", "Character renders (512×512)", "Sound effects (WAV)"]
  };
}

export function faqPage(items, url) {
  return {
    "@type": "FAQPage",
    url,
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
  };
}

export function breadcrumbs(list) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: list.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) }))
  };
}

export function webPage(type, { name, description, path, lang }) {
  return {
    "@type": type,
    name,
    description,
    url: abs(path),
    inLanguage: lang,
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    dateModified: SITE.effectiveDate
  };
}

export function returnPolicyNode() { return returnPolicy(); }

export function graph(nodes) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 0).replace(/</g, "\\u003c");
}

export { abs };
