/* Schema.org JSON-LD builders. All facts come from config.mjs. */
import { SITE, COMPANY, PLAN, FACTS } from "../config.mjs";
import { CARD_NAMES } from "./cards.mjs";

const ORG_ID = `${SITE.siteUrl}/#organization`;
const SITE_ID = `${SITE.siteUrl}/#website`;
const langRoot = (lang) => `${SITE.siteUrl}/${lang === "ja" ? "ja/" : ""}`;
const PRODUCT_ID = (lang) => `${langRoot(lang)}#product`;
const RETURN_ID = (lang) => `${langRoot(lang)}#return-policy`;
const OFFER_ID = (lang) => `${langRoot(lang)}#offer`;

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

function returnPolicy(lang) {
  const ja = lang === "ja";
  return {
    "@type": "MerchantReturnPolicy",
    "@id": RETURN_ID(lang),
    name: ja ? `${PLAN.refundDays}日間返金保証` : `${PLAN.refundDays}-Day Money-Back Guarantee`,
    description: ja
      ? `未使用クレジット分を全額返金。理由は問いません。各年額請求から${PLAN.refundDays}日以内なら、年額料金 × 未使用クレジット ÷ ${PLAN.creditsPerYear.toLocaleString("ja-JP")} を返金します（未使用なら全額）。返金をもってサブスクリプションは終了します。`
      : `Full refund on unused credits. No questions asked. Within ${PLAN.refundDays} days of any annual charge we refund the annual fee × unused credits ÷ ${PLAN.creditsPerYear.toLocaleString("en-US")} (the full fee if no credits were used). A refund ends the subscription.`,
    applicableCountry: ["US", "JP"],
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: PLAN.refundDays,
    returnFees: "https://schema.org/FreeReturn",
    merchantReturnLink: abs(ja ? "ja/legal/refund.html" : "legal/refund.html")
  };
}

const FEATURES = {
  en: ["Cover art / game thumbnails (16:9, 1920×1080 PNG)", "Game icons (512×512, transparent PNG)", "UI kits (image + layer list)", "Tileable textures (512×512 PNG)", "Avatar shirts (585×559 shirt template)", "Character renders (512×512 PNG)", "Sound effects (WAV)"],
  ja: ["カバー画像（サムネイル・16:9・1920×1080 PNG）", "ゲームアイコン（512×512・透過PNG）", "UIキット（画像＋レイヤー一覧）", "シームレステクスチャ（512×512 PNG）", "アバター用シャツ（585×559 テンプレート）", "キャラクター画像（512×512 PNG）", "効果音（WAV）"]
};

function offer(lang) {
  const ja = lang === "ja";
  const p = PLAN.prices[lang];
  const price = p.decimals ? p.amount.toFixed(p.decimals) : String(p.amount);
  return {
    "@type": "Offer",
    "@id": OFFER_ID(lang),
    name: ja ? `${PLAN.name} 年額プラン（1時間無料トライアル付き）` : `${PLAN.name} annual plan (1-hour free trial)`,
    url: abs(ja ? "ja/checkout.html" : "checkout.html"),
    category: "Subscription",
    price,
    priceCurrency: p.currency,
    availability: "https://schema.org/InStock",
    validFrom: SITE.effectiveDate,
    seller: { "@id": ORG_ID },
    acceptedPaymentMethod: SITE.cards.map((c) => ({ "@type": "PaymentMethod", name: CARD_NAMES[c] })),
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        name: ja ? "無料トライアル（1時間）" : "Free trial (1 hour)",
        price: "0",
        priceCurrency: p.currency,
        billingDuration: { "@type": "QuantitativeValue", value: PLAN.trialHours, unitCode: "HUR" }
      },
      {
        "@type": "UnitPriceSpecification",
        name: ja ? "年額料金（自動更新）" : "Annual subscription (renews automatically)",
        description: ja
          ? "無料トライアル開始の1時間後に自動で請求され、以後は解約するまで12か月ごとに、その時点の年額料金で自動更新されます。"
          : "Charged automatically 1 hour after the free trial starts, then every 12 months at the then-current annual price until cancelled.",
        price,
        priceCurrency: p.currency,
        unitCode: "ANN",
        valueAddedTaxIncluded: ja,
        billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" }
      }
    ],
    hasMerchantReturnPolicy: { "@id": RETURN_ID(lang) }
  };
}

export function product(lang) {
  const F = FACTS[lang];
  const ja = lang === "ja";
  return {
    "@type": "Product",
    "@id": PRODUCT_ID(lang),
    name: PLAN.name,
    brand: { "@type": "Brand", name: SITE.brand },
    manufacturer: { "@id": ORG_ID },
    category: ja ? "ソフトウェアのサブスクリプション" : "Software subscription",
    image: abs(ja ? "assets/img/og-ja.png" : "assets/img/og-en.png"),
    description: ja
      ? `ゲーム制作者向けのAI素材作成サービス。カバー画像（サムネイル）、アイコン、UIキット、テクスチャ、アバター用シャツ、キャラクター画像、効果音を作成できます。有料期間1年ごとに${F.credits}クレジット、商用利用可。${F.trial}のあと${F.pricePerYear}。`
      : `AI asset creation for game creators: cover art (game thumbnails), icons, UI kits, tileable textures, avatar shirts, character renders and sound effects. ${F.credits} credits per paid year, commercial use included. ${F.trial}, then ${F.priceWithCode} per year.`,
    additionalProperty: FEATURES[lang].map((value) => ({ "@type": "PropertyValue", name: ja ? "作成できるアセット" : "Asset type", value })),
    offers: [offer(lang)]
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

export function returnPolicyNode(lang) { return returnPolicy(lang); }

export function graph(nodes) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 0).replace(/</g, "\\u003c");
}

export { abs };
