/* BlockForge — page copy for English and Japanese.
 * Facts (prices, trial, credits, company) come from config.mjs via FACTS so
 * copy and policies always agree. `rt` = strings the browser script needs. */
import { FACTS, PLAN, SITE } from "./config.mjs";

const E = FACTS.en, J = FACTS.ja;

const TOOLS = ["thumbnail", "ui", "texture", "clothing", "icon", "gfx", "sfx"];

export const STRINGS = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    langName: "English",
    nav: {
      tools: "Tools", ideas: "Ideas", pricing: "Pricing", faq: "FAQ", contact: "Contact",
      cta: "Start free trial", menu: "Menu", theme: "Switch light/dark theme", skip: "Skip to content",
      lang: "Language"
    },
    meta: {
      homeTitle: `BlockForge — AI game asset studio | ${E.trial}, then ${E.price}/year`,
      homeDesc: `Create game thumbnails, icons, textures, clothing, GFX, UI and sound effects with AI. ${E.trial}, then ${E.priceWithCode} per year. 30-day money-back guarantee.`,
      checkoutTitle: `Start your ${E.trial} — BlockForge Pro`,
      checkoutDesc: `Review BlockForge Pro before you start: ${E.trial}, then ${E.priceWithCode} billed once a year. Cancel anytime. 30-day money-back guarantee on unused credits.`,
      contactTitle: "Contact BlockForge — CALDRIVO GLOBAL INC",
      contactDesc: `Contact BlockForge support at ${E.email}. BlockForge is operated by ${E.company}, ${E.addressOneLine}.`,
      legalTitle: "Legal & policies — BlockForge",
      legalDesc: "Terms of Service, Privacy, Refund, Cancellation, Delivery, Cookie, Accessibility, DMCA, Disclaimer and Do Not Sell or Share policies for BlockForge.",
      ogAlt: `BlockForge — AI game asset studio. ${E.trial}, then ${E.price} per year.`
    },
    tools: {
      thumbnail: "Thumbnail", ui: "UI", texture: "Texture", clothing: "Clothing", icon: "Icon", gfx: "GFX", sfx: "SFX"
    },
    prompt: {
      thumbnail: { label: "Describe your thumbnail", ph: "e.g. a giant crystal pet in a mining simulator", btn: "Preview my thumbnail" },
      ui: { label: "Describe your interface", ph: "e.g. a candy shop with 6 item slots", btn: "Preview my UI" },
      texture: { label: "Describe your texture", ph: "e.g. mossy stone floor", btn: "Preview my texture" },
      clothing: { label: "Describe your shirt", ph: "e.g. a red varsity jacket", btn: "Preview my shirt" },
      icon: { label: "Describe your icon", ph: "e.g. a golden coin with a star", btn: "Preview my icon" },
      gfx: { label: "Describe your render", ph: "e.g. a cyberpunk racer at night", btn: "Preview my GFX" },
      sfx: { label: "Describe your sound", ph: "e.g. coin pickup", btn: "Preview my sound" }
    },
    chips: {
      thumbnail: ["neon tycoon", "zombie obby", "lava parkour", "anime simulator", "horror elevator"],
      ui: ["candy shop", "sci-fi HUD", "pet inventory", "daily rewards", "settings menu"],
      texture: ["mossy stone", "sci-fi metal", "wooden planks", "volcanic rock", "ice tiles"],
      clothing: ["varsity jacket", "space suit shirt", "pirate shirt", "racing jersey", "cozy hoodie"],
      icon: ["crystal sword", "golden coin", "health potion", "magic chest", "diamond pickaxe"],
      gfx: ["forest explorer", "cyberpunk racer", "pirate captain", "space adventurer", "ice mage"],
      sfx: ["coin pickup", "level-up chime", "laser shot", "wooden door", "magic spell"]
    },
    hero: {
      eyebrow: "AI game asset studio for creators",
      title1: "Game assets", title2: "that stand out.",
      sub: "Describe a scene in a few words. BlockForge makes thumbnails, icons, textures, clothing, GFX, UI and sound effects for your game.",
      note: `Try a free preview in your browser — no account needed. BlockForge Pro starts with a ${E.trial}, then ${E.priceWithCode} per year.`,
      try: "Try:",
      facts: [["7", "creation tools"], [E.credits, "credits every year"], ["30-day", "money-back guarantee"]]
    },
    marquee: ["7 AI creation tools", E.trial, `${E.price}/year`, "30-day money-back guarantee", "Commercial use", "English & 日本語", "16:9 thumbnails", "512×512 icons"],
    how: {
      eyebrow: "How it works",
      title: "From idea to asset in <em>three steps</em>",
      sub: "Every tool follows the same flow, from the first prompt to the finished file.",
      steps: [
        ["Pick a tool", "Thumbnail, UI, texture, clothing, icon, GFX or sound. Each one outputs your game's standard sizes."],
        ["Describe your idea", "A few words are enough. Add a reference image to steer the style."],
        ["Download and ship", "Download PNG or WAV files and drop them straight into your game."]
      ]
    },
    toolsSec: {
      eyebrow: "One workspace",
      title: "Seven tools. <em>One workspace.</em>",
      sub: "From the thumbnail that gets your game noticed to the UI, textures, clothing and sounds inside it. All tools are included in BlockForge Pro.",
      included: "Included in Pro",
      thumb: {
        name: "Thumbnails", spec: "16:9 · 1920 × 1080",
        desc: "Eye-catching 16:9 thumbnails, plus 512 × 512 game icons.",
        bullets: ["Add a reference image to steer the look", "Test several concepts before each update", "Full-resolution PNG download"],
        cta: "Try a thumbnail preview"
      },
      ui: {
        name: "UI Maker", spec: "Editable layout export",
        desc: "Shops, HUDs and menus delivered as an image plus a layer list you can rebuild in your game editor.",
        cta: "Try a UI preview", opens: "Layer list example"
      },
      small: {
        texture: { spec: "Seamless · 512 × 512", desc: "Tileable surfaces for parts, floors and walls." },
        clothing: { spec: "Shirt template · 585 × 559", desc: "Painted onto the classic clothing template, ready to upload." },
        icon: { spec: "Transparent · 512 × 512", desc: "Flat icons, badges and decals with the background removed." },
        gfx: { spec: "Character render · 512 × 512", desc: "A cinematic render of a blocky game character." },
        sfx: { spec: "WAV sound effect", desc: "Clicks, chimes and impacts from a short description." }
      }
    },
    ideas: {
      eyebrow: "Ideas to try",
      title: "Start from an <em>idea</em>",
      sub: "These example images come from preview mode, drawn in your browser. Pick an idea to preview it yourself; Pro generates the full AI version.",
      badge: "Preview mode",
      idea: "Idea to try",
      use: "Preview this idea",
      prev: "Previous ideas",
      next: "More ideas",
      items: [
        "level 1 vs level 9999 mining simulator, giant emerald",
        "minigun turret defending a bank vault from robbers",
        "golden drill digging to the core, how deep?!",
        "tornado survival, builder screaming as the fort rips apart",
        "baby dragon pet next to a treasure chest reveal",
        "boy vs girl lava obby race, 2 seconds left",
        "1 cent rusty tub vs $1B golden tub full of cash",
        "sword fighter charging a giant lava golem boss",
        "tycoon upgrade from gold mine to diamond reactor",
        "crowned player powering up, +99 levels, blue lightning"
      ]
    },
    why: {
      eyebrow: "Why it matters",
      title: "Your game deserves <em>its own world.</em>",
      sub: "Thumbnails get your game noticed. UI, textures, clothing and sounds make it feel finished. Build all of them in one workspace.",
      bullets: ["Test several concepts per update instead of one.", "Make the visuals and sounds for your next update.", "See the credit cost of every asset before you create it."],
      th: ["", "Create", "With BlockForge"],
      rows: [["Visuals", "Thumbnails & GFX", "Image assets"], ["Your world", "Texture & clothing", "Game details"], ["Interface", "UI Maker", "UI projects"], ["Audio", "SFX", "Sound effects"]]
    },
    pricing: {
      eyebrow: "Pricing",
      title: "One plan. <em>Clear terms.</em>",
      sub: `Everything in BlockForge is included in one annual plan. Prices on this page are in ${E.currencyName}.`,
      planName: "BlockForge Pro",
      planTag: "Annual plan",
      per: "/year",
      currencyNote: `Billed in ${E.currencyName}. ${E.taxNote}`,
      equivalent: `That's about ${E.perMonthEquivalent} a month, billed once a year.`,
      keyTerms: `${E.trial}, then ${E.price} billed once a year. Renews automatically every 12 months. Cancel anytime.`,
      features: [
        `${E.credits} credits every paid year (1 credit = 1 asset; UI layouts use 4)`,
        "All 7 tools: thumbnails, icons, textures, clothing, GFX, UI and sound effects",
        "Full-resolution PNG and WAV downloads",
        "Commercial use, including monetized games",
        "English and Japanese interface",
        `Email support, replies ${E.supportResponse}`
      ],
      cta: "Start 1-hour free trial",
      ctaNote: `Card required. ${E.price} is charged 1 hour after you start unless you cancel first.`,
      timelineTitle: "How billing works",
      timeline: [
        ["Now", "Start your free trial", `Add a card. You're charged ${E.price.replace(/\d[\d.,]*/, "0")}. You get full access and ${E.trialCredits} trial credits.`],
        ["After 1 hour", `${E.price} is charged`, `Your card is charged ${E.priceWithCode} for 12 months of Pro and ${E.credits} credits are added. Cancel before the hour ends and you pay nothing.`],
        ["Within 30 days", "Money-back guarantee", "Ask for a refund within 30 days of any annual charge and get your money back for unused credits. No questions asked."],
        ["Every 12 months", `Renews at ${E.price}`, `Your plan renews automatically until you cancel. We email you at least ${E.reminderDays} days before every renewal. If the price ever changes, we tell you at least ${E.priceChangeNoticeDays} days before it applies.`]
      ],
      guaranteeTitle: "30-Day Money-Back Guarantee",
      guaranteeLine: "Full refund on unused credits. No questions asked.",
      guaranteeBody: `Within ${E.refundDays} days of any annual charge, we refund the fee for every credit you haven't used. Haven't used any? You get the full ${E.price} back. Used ${E.refundExample.used}? You get ${E.refundExample.amount}.`,
      descriptorTitle: "On your card statement",
      descriptor: `Your card statement will show "${E.descriptor}".`,
      cardsTitle: "Accepted payment methods",
      cardsNote: "Visa, Mastercard, American Express, JCB and Discover credit and debit cards. Payments are processed by a PCI DSS–compliant payment processor; we never see or store your full card number.",
      cancelTitle: "Cancel anytime",
      cancelBody: "Go to Account → Billing → Cancel subscription, or email us from your account address. Cancel during the trial and you're never charged. Cancel later and you keep Pro until the end of the year you paid for.",
      policyLinks: "Full details:"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common <em>questions</em>",
      items: [
        ["How does the 1-hour free trial work?", `Start the trial with a credit or debit card. For 1 hour you get full Pro access and ${E.trialCredits} trial credits, and nothing is charged. When the hour ends, your card is automatically charged ${E.priceWithCode} for 12 months of BlockForge Pro, unless you cancel before then. One trial per person.`],
        ["When exactly will I be charged?", `Exactly 1 hour after you start the trial, then every 12 months on the same date until you cancel. We email a reminder ${E.reminderDays} days before every renewal and a receipt after every charge.`],
        ["What will I see on my card statement?", `Your card statement will show "${E.descriptor}".`],
        ["How do I cancel?", "Go to Account → Billing → Cancel subscription, or email support from your account email. Cancel within the trial hour and you are never charged. Cancel after a charge and you keep Pro and your remaining credits until the end of the paid year, with no further charges."],
        ["What is the 30-Day Money-Back Guarantee?", `Full refund on unused credits. No questions asked. Within ${E.refundDays} days of any annual charge, ask for a refund and we return the annual fee × unused credits ÷ ${E.credits}. If you haven't used any credits, that's the full ${E.price}. Refunds go back to your original card within 5 business days; your bank may take 5–10 business days to show it.`],
        ["What does BlockForge Pro include?", `${E.credits} credits per paid year, all 7 tools, full-resolution PNG and WAV downloads, commercial use of your assets, and an English and Japanese interface. Unused credits expire at the end of each paid year.`],
        ["How many credits does each asset use?", `Thumbnails, icons, textures, clothing, GFX renders and sound effects use ${PLAN.creditCosts.thumbnail} credit each. A UI layout uses ${PLAN.creditCosts.ui} credits. If a generation fails, its credits are returned automatically.`],
        ["Which payment methods and currencies do you accept?", `Visa, Mastercard, American Express, JCB and Discover credit and debit cards. The English site charges ${E.price} in US dollars (USD); the Japanese site charges ${J.price} in Japanese yen (JPY, tax included). You pay in the currency shown at checkout.`],
        ["Is the preview mode free?", "Yes. Preview mode draws quick, rough previews directly in your browser. It needs no account, uses no credits and isn't the AI output. BlockForge Pro generates the full-resolution AI assets."],
        ["Can I use the assets commercially?", "Yes. You own the assets you generate (as far as the law allows) and can use them commercially, including in monetized games. We don't use your prompts, uploads or assets to train AI models."],
        ["Is BlockForge affiliated with Roblox or other game platforms?", "No. BlockForge is an independent product of CALDRIVO GLOBAL INC and isn't affiliated with, endorsed by or sponsored by Roblox Corporation or any other game platform."]
      ]
    },
    cta: {
      title1: "Your next game asset.", title2: "Start with an idea.",
      sub: `Preview any idea for free, then create the full version with BlockForge Pro: ${E.trial}, then ${E.price}/year.`,
      trial: "Start 1-hour free trial →"
    },
    footer: {
      tagline: "AI game asset studio for creators.",
      operatedBy: "BlockForge is operated by",
      company: "Company", policies: "Policies", product: "Product",
      contact: "Contact us", pay: "We accept",
      copy: `© ${SITE.copyrightYear} ${E.company}. All rights reserved.`,
      notAffiliated: "BlockForge is not affiliated with Roblox Corporation or any other game platform."
    },
    checkout: {
      eyebrow: "Checkout",
      title: "Start your 1-hour free trial",
      sub: "Review exactly what happens before you add a card.",
      summary: "Order summary",
      plan: "BlockForge Pro — annual plan",
      today: "Due today",
      todayValue: E.price.replace(/\d[\d.,]*/, "0"),
      afterTrial: "After your 1-hour trial",
      afterTrialValue: `${E.priceWithCode} / year`,
      renews: "Renews",
      renewsValue: `Every 12 months at ${E.price} until you cancel. Any price change is emailed at least ${E.priceChangeNoticeDays} days before it applies`,
      includes: "Includes",
      includesValue: `${E.credits} credits per year · all 7 tools · commercial use`,
      trialCredits: "During the trial",
      trialCreditsValue: `Full access + ${E.trialCredits} trial credits`,
      timeLine: "If you start now, your card will be charged at",
      timeLineFallback: "1 hour after you start, unless you cancel first.",
      consent: `I understand that my card will be charged ${E.priceWithCode} one hour after my free trial starts, and ${E.price} every 12 months after that until I cancel. I agree to the <a href="legal/terms.html">Terms of Service</a>, <a href="legal/refund.html">Refund Policy</a> and <a href="legal/cancellation.html">Cancellation Policy</a>.`,
      button: "Start 1-hour free trial",
      buttonHint: "Tick the box above to continue.",
      secure: "You'll enter your card on our payment processor's secure page. We never see or store your full card number.",
      fallback: "Our team will set up your trial by email and reply within 2 business days.",
      whatNext: "What happens next",
      next: [
        `We email you a confirmation with your trial end time and a cancel link.`,
        `After 1 hour, ${E.price} is charged and ${E.credits} credits are added to your account.`,
        `${E.reminderDays} days before each renewal we email you a reminder.`,
        "Cancel anytime from Account → Billing, or by emailing support."
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact BlockForge",
      sub: `Questions about your account, billing or the product? Email us and we reply ${E.supportResponse}, in English or Japanese.`,
      emailTitle: "Email support",
      companyTitle: "Company",
      legalName: "Legal name",
      address: "Address",
      emailLabel: "Email",
      hours: "Response time",
      languages: "Languages",
      languagesValue: "English, Japanese",
      topics: "Common requests",
      topicList: [
        ["Billing, refunds and cancellations", "Include your account email. Refund requests within 30 days of a charge are approved with no questions asked.", "legal/refund.html"],
        ["Privacy requests", "Access, correction, deletion or opt-out requests.", "legal/privacy.html"],
        ["Copyright notices", "Send DMCA notices with the subject \"DMCA Notice\".", "legal/dmca.html"],
        ["Accessibility feedback", "Tell us about any barrier you meet on our site or in the workspace.", "legal/accessibility.html"]
      ]
    },
    legal: {
      eyebrow: "Legal",
      hubTitle: "Legal & policies",
      hubSub: "How BlockForge works, what you pay, and how we handle your data — in plain language.",
      effective: "Effective date",
      updated: "Last updated",
      onThisPage: "On this page",
      home: "Home",
      questions: "Questions about this policy?",
      read: "Read"
    },
    ws: {
      title: "Preview mode",
      demo: "Rough preview drawn in your browser. Pro generates the full-resolution AI version.",
      generating: "Drawing your preview…",
      download: "Download preview",
      again: "New variation",
      close: "Close",
      play: "Play sound",
      empty: "Type a short description first.",
      size: "Size",
      cost: "With Pro",
      upgrade: "Create with Pro"
    },
    credit: { one: "1 credit", n: "{n} credits" },
    fab: "Quick preview"
  },

  ja: {
    htmlLang: "ja",
    ogLocale: "ja_JP",
    langName: "日本語",
    nav: {
      tools: "ツール", ideas: "アイデア", pricing: "料金", faq: "よくある質問", contact: "お問い合わせ",
      cta: "無料トライアル", menu: "メニュー", theme: "ライト／ダークテーマ切替", skip: "本文へスキップ",
      lang: "言語"
    },
    meta: {
      homeTitle: `BlockForge — ゲームアセットAIスタジオ｜${J.trial}、以降${J.pricePerYear}`,
      homeDesc: `ゲームのサムネイル、アイコン、テクスチャ、服、GFX、UI、効果音をAIで作成。${J.trial}のあと${J.pricePerYear}。30日間返金保証付き。`,
      checkoutTitle: `${J.trial}を開始 — BlockForge Pro`,
      checkoutDesc: `開始前にご確認ください：${J.trial}のあと、${J.pricePerYear}を年1回お支払い。いつでも解約でき、未使用クレジット分は30日間全額返金します。`,
      contactTitle: "お問い合わせ — BlockForge（CALDRIVO GLOBAL INC）",
      contactDesc: `BlockForge サポート：${J.email}。BlockForge は ${J.company}（米国コロラド州オーロラ）が運営しています。`,
      legalTitle: "規約・ポリシー一覧 — BlockForge",
      legalDesc: "BlockForge の利用規約、プライバシー、返金、解約、配送・提供、Cookie、アクセシビリティ、DMCA、免責事項、個人情報の販売・共有の拒否、特定商取引法に基づく表記。",
      ogAlt: `BlockForge — ゲームアセットAIスタジオ。${J.trial}、以降${J.pricePerYear}。`
    },
    tools: {
      thumbnail: "サムネイル", ui: "UI", texture: "テクスチャ", clothing: "服", icon: "アイコン", gfx: "GFX", sfx: "効果音"
    },
    prompt: {
      thumbnail: { label: "サムネイルを説明", ph: "例：採掘シミュレーターの巨大クリスタルペット", btn: "サムネイルをプレビュー" },
      ui: { label: "UIを説明", ph: "例：6つのアイテム枠があるお菓子ショップ", btn: "UIをプレビュー" },
      texture: { label: "テクスチャを説明", ph: "例：苔むした石の床", btn: "テクスチャをプレビュー" },
      clothing: { label: "シャツを説明", ph: "例：赤いスタジャン", btn: "シャツをプレビュー" },
      icon: { label: "アイコンを説明", ph: "例：星のついた金貨", btn: "アイコンをプレビュー" },
      gfx: { label: "レンダーを説明", ph: "例：夜のサイバーパンクレーサー", btn: "GFXをプレビュー" },
      sfx: { label: "効果音を説明", ph: "例：コイン取得", btn: "効果音をプレビュー" }
    },
    chips: {
      thumbnail: ["ネオン・タイクーン", "ゾンビ・アスレチック", "溶岩パルクール", "アニメ・シミュレーター", "ホラーエレベーター"],
      ui: ["お菓子ショップ", "SF風HUD", "ペットのインベントリ", "デイリー報酬", "設定メニュー"],
      texture: ["苔むした石", "SFメタル", "木の板", "火山岩", "氷のタイル"],
      clothing: ["スタジャン", "宇宙服シャツ", "海賊シャツ", "レーシングジャージ", "もこもこパーカー"],
      icon: ["クリスタルの剣", "金貨", "回復ポーション", "魔法の宝箱", "ダイヤのツルハシ"],
      gfx: ["森の探検家", "サイバーパンクレーサー", "海賊船長", "宇宙冒険家", "氷の魔法使い"],
      sfx: ["コイン取得", "レベルアップ音", "レーザー発射", "木のドア", "魔法の呪文"]
    },
    hero: {
      eyebrow: "クリエイターのためのゲームアセットAIスタジオ",
      title1: "目を引く", title2: "ゲームアセットを。",
      sub: "シーンを短い言葉で説明するだけ。サムネイル、アイコン、テクスチャ、服、GFX、UI、効果音を BlockForge が作ります。",
      note: `ブラウザ上の無料プレビューはアカウント不要。BlockForge Pro は${J.trial}から始まり、その後は${J.pricePerYear}です。`,
      try: "例：",
      facts: [["7", "つの作成ツール"], [J.credits, "クレジット／年"], ["30日間", "返金保証"]]
    },
    marquee: ["7つのAI作成ツール", J.trial, `年額${J.price}`, "30日間返金保証", "商用利用OK", "日本語・English", "16:9 サムネイル", "512×512 アイコン"],
    how: {
      eyebrow: "使い方",
      title: "アイデアからアセットまで<em>3ステップ</em>",
      sub: "すべてのツールが同じ流れ。最初のプロンプトから完成ファイルまで。",
      steps: [
        ["ツールを選ぶ", "サムネイル、UI、テクスチャ、服、アイコン、GFX、効果音。ゲームで使う標準サイズで出力します。"],
        ["アイデアを書く", "数語で十分です。参考画像を追加すれば、雰囲気も指定できます。"],
        ["ダウンロードして使う", "PNG・WAV ファイルをダウンロードして、そのままゲームへ。"]
      ]
    },
    toolsSec: {
      eyebrow: "ひとつのワークスペース",
      title: "7つのツール。<em>ひとつの場所で。</em>",
      sub: "ゲームを見つけてもらうサムネイルから、ゲーム内のUI、テクスチャ、服、サウンドまで。すべてのツールが BlockForge Pro に含まれます。",
      included: "Pro に含まれます",
      thumb: {
        name: "サムネイル", spec: "16:9 · 1920 × 1080",
        desc: "目を引く 16:9 サムネイルと、512 × 512 のゲームアイコン。",
        bullets: ["参考画像で仕上がりをコントロール", "アップデートごとに複数の案をテスト", "フル解像度の PNG をダウンロード"],
        cta: "サムネイルをプレビュー"
      },
      ui: {
        name: "UIメーカー", spec: "編集可能なレイアウト出力",
        desc: "ショップ、HUD、メニューを、画像とレイヤー一覧でお届け。ゲームエディタ上で組み直せます。",
        cta: "UIをプレビュー", opens: "レイヤー一覧の例"
      },
      small: {
        texture: { spec: "シームレス · 512 × 512", desc: "パーツや床、壁に使えるタイル可能なテクスチャ。" },
        clothing: { spec: "シャツテンプレート · 585 × 559", desc: "定番の服テンプレートに描画。そのままアップロードできます。" },
        icon: { spec: "透過 · 512 × 512", desc: "背景を除去したフラットなアイコン、バッジ、デカール。" },
        gfx: { spec: "キャラクターレンダー · 512 × 512", desc: "ブロック風キャラクターのシネマティックなレンダー。" },
        sfx: { spec: "WAV 効果音", desc: "短い説明からクリック音、チャイム、衝撃音を作成。" }
      }
    },
    ideas: {
      eyebrow: "アイデア",
      title: "<em>アイデア</em>から始めよう",
      sub: "ここに並ぶ画像は、ブラウザ上で描画したプレビューモードの例です。アイデアを選んで試してみてください。AI によるフル品質の作成は Pro で行えます。",
      badge: "プレビュー",
      idea: "試してみたいアイデア",
      use: "このアイデアをプレビュー",
      prev: "前のアイデア",
      next: "次のアイデア",
      items: [
        "レベル1 vs レベル9999 の採掘シミュレーター、巨大エメラルド",
        "銀行の金庫を強盗から守るミニガン砲台",
        "地球の中心まで掘る黄金ドリル、どこまで行ける？！",
        "竜巻サバイバル、吹き飛ぶ砦で叫ぶビルダー",
        "宝箱の開封シーンと赤ちゃんドラゴンのペット",
        "男子 vs 女子の溶岩アスレチック対決、残り2秒",
        "1円のサビた桶 vs 札束でいっぱいの10億円の金の桶",
        "巨大な溶岩ゴーレムのボスに突撃する剣士",
        "金鉱からダイヤ原子炉へ、タイクーンのアップグレード",
        "王冠のプレイヤーがパワーアップ、+99レベル、青い稲妻"
      ]
    },
    why: {
      eyebrow: "大切な理由",
      title: "あなたのゲームに、<em>あなただけの世界を。</em>",
      sub: "サムネイルはゲームを見つけてもらうきっかけに。UI、テクスチャ、服、サウンドはゲームの完成度を高めます。すべてをひとつのワークスペースで。",
      bullets: ["アップデートごとに、ひとつではなく複数の案をテスト。", "次のアップデートに必要なビジュアルとサウンドを作成。", "作成前に、必要なクレジットを確認できます。"],
      th: ["", "作るもの", "BlockForge なら"],
      rows: [["ビジュアル", "サムネイル & GFX", "画像アセット"], ["世界観", "テクスチャ & 服", "ゲームのディテール"], ["インターフェース", "UIメーカー", "UIプロジェクト"], ["オーディオ", "効果音", "サウンドエフェクト"]]
    },
    pricing: {
      eyebrow: "料金",
      title: "プランはひとつ。<em>条件も明快に。</em>",
      sub: `BlockForge のすべての機能が、ひとつの年額プランに含まれます。このページの価格は${J.currencyName}・税込です。`,
      planName: "BlockForge Pro",
      planTag: "年額プラン",
      per: "/年（税込）",
      currencyNote: `${J.currencyName}でのお支払いです。${J.taxNote}`,
      equivalent: `月あたり${J.perMonthEquivalent}。お支払いは年1回です。`,
      keyTerms: `${J.trial}のあと、${J.price}（税込）を年1回お支払い。12か月ごとに自動更新され、いつでも解約できます。`,
      features: [
        `有料期間1年ごとに ${J.credits} クレジット（1クレジット＝アセット1点。UIレイアウトは4クレジット）`,
        "7つのツールすべて：サムネイル、アイコン、テクスチャ、服、GFX、UI、効果音",
        "フル解像度の PNG・WAV をダウンロード",
        "収益化ゲームを含む商用利用OK",
        "日本語・英語のインターフェース",
        `メールサポート（${J.supportResponse}に返信）`
      ],
      cta: "1時間の無料トライアルを開始",
      ctaNote: `カードの登録が必要です。開始から1時間後、それまでに解約しなければ${J.price}が請求されます。`,
      timelineTitle: "お支払いの流れ",
      timeline: [
        ["今すぐ", "無料トライアル開始", `カードを登録します。この時点の請求は¥0です。すべての機能と${J.trialCredits}トライアルクレジットを利用できます。`],
        ["1時間後", `${J.price}を請求`, `${J.priceWithCode}が12か月分として請求され、${J.credits}クレジットが付与されます。1時間以内に解約すれば料金は一切かかりません。`],
        ["30日以内", "返金保証", "各年額請求から30日以内にお申し出いただければ、未使用クレジット分を全額返金します。理由は問いません。"],
        ["12か月ごと", `${J.price}で自動更新`, `解約するまで自動で更新されます。更新の${J.reminderDays}日前までにメールでお知らせします。価格を変更する場合は、適用の${J.priceChangeNoticeDays}日前までにご案内します。`]
      ],
      guaranteeTitle: "30日間返金保証",
      guaranteeLine: "未使用クレジット分を全額返金。理由は問いません。",
      guaranteeBody: `各年額請求から${J.refundDays}日以内なら、まだ使っていないクレジット分の料金をすべて返金します。まったく使っていなければ${J.price}を全額返金。${J.refundExample.used}クレジット使用済みなら${J.refundExample.amount}を返金します。`,
      descriptorTitle: "カード明細の表記",
      descriptor: `カードの利用明細には「${J.descriptor}」と表示されます。`,
      cardsTitle: "ご利用いただける支払方法",
      cardsNote: "Visa、Mastercard、American Express、JCB、Discover のクレジットカード・デビットカード。決済は PCI DSS に準拠した決済代行会社が処理し、当社がカード番号全体を見たり保存したりすることはありません。",
      cancelTitle: "いつでも解約できます",
      cancelBody: "アカウント → お支払い → サブスクリプションを解約、またはご登録のメールアドレスからサポートへご連絡ください。トライアル中に解約すれば料金は一切かかりません。請求後に解約した場合も、お支払い済みの1年間の終わりまで Pro をご利用いただけます。",
      policyLinks: "詳しくはこちら："
    },
    faq: {
      eyebrow: "FAQ",
      title: "よくある<em>質問</em>",
      items: [
        ["1時間の無料トライアルはどのような仕組みですか？", `クレジットカードまたはデビットカードを登録してトライアルを開始します。1時間、Pro のすべての機能と${J.trialCredits}トライアルクレジットを利用でき、この間の請求はありません。1時間が経過すると、それまでに解約しない限り、BlockForge Pro 12か月分として${J.priceWithCode}が自動的に請求されます。トライアルはお一人様1回限りです。`],
        ["いつ請求されますか？", `トライアル開始のちょうど1時間後に初回の請求が行われ、その後は解約するまで12か月ごとに同じ日付で請求されます。更新の${J.reminderDays}日前までにお知らせメールを、各請求後には領収メールをお送りします。`],
        ["カード明細にはどのように表示されますか？", `カードの利用明細には「${J.descriptor}」と表示されます。`],
        ["解約方法を教えてください。", "アカウント → お支払い → サブスクリプションを解約、またはご登録のメールアドレスからサポートへご連絡ください。トライアルの1時間以内に解約すれば料金はかかりません。請求後に解約した場合は、以後の請求は行われず、お支払い済みの1年間の終わりまで Pro と残りのクレジットをご利用いただけます。"],
        ["30日間返金保証とは何ですか？", `未使用クレジット分を全額返金します。理由は問いません。各年額請求から${J.refundDays}日以内にお申し出いただくと、「年額料金 × 未使用クレジット ÷ ${J.credits}」を返金します。クレジットを使っていなければ${J.price}を全額返金します。返金は5営業日以内にお支払いに使用したカードへ処理され、明細への反映にはカード会社により5〜10営業日かかる場合があります。`],
        ["BlockForge Pro には何が含まれますか？", `有料期間1年ごとに${J.credits}クレジット、7つのツールすべて、フル解像度の PNG・WAV ダウンロード、作成したアセットの商用利用、日本語・英語のインターフェースが含まれます。未使用のクレジットは各有料期間の終了時に失効します。`],
        ["アセット1点に何クレジット必要ですか？", `サムネイル、アイコン、テクスチャ、服、GFX、効果音は各${PLAN.creditCosts.thumbnail}クレジット、UIレイアウトは${PLAN.creditCosts.ui}クレジットです。作成に失敗した場合、クレジットは自動的に戻ります。`],
        ["支払方法と通貨を教えてください。", `Visa、Mastercard、American Express、JCB、Discover のクレジットカード・デビットカードをご利用いただけます。日本語サイトでは${J.price}（日本円・税込）、英語サイトでは${E.price}（米ドル）でのお支払いとなり、決済画面に表示された通貨で請求されます。`],
        ["プレビューモードは無料ですか？", "はい。プレビューモードはブラウザ上で簡易的なプレビューを描画する機能で、アカウント不要・クレジット不要です。AI による作成結果ではありません。フル解像度の AI アセットは BlockForge Pro で作成できます。"],
        ["作成したアセットは商用利用できますか？", "はい。作成したアセットは（法律で認められる範囲で）お客様のものとなり、収益化したゲームを含めて商用利用できます。お客様のプロンプト、アップロード画像、作成物を AI の学習に使うことはありません。"],
        ["BlockForge は Roblox などのゲームプラットフォームと提携していますか？", "いいえ。BlockForge は CALDRIVO GLOBAL INC が提供する独立したサービスであり、Roblox Corporation その他のゲームプラットフォームとの提携・承認・後援関係はありません。"]
      ]
    },
    cta: {
      title1: "次のゲームアセットは、", title2: "ひとつのアイデアから。",
      sub: `どんなアイデアも無料でプレビュー。フル品質の作成は BlockForge Pro で：${J.trial}、以降${J.pricePerYear}。`,
      trial: "1時間の無料トライアルを開始 →"
    },
    footer: {
      tagline: "クリエイターのためのゲームアセットAIスタジオ。",
      operatedBy: "BlockForge の運営会社：",
      company: "会社情報", policies: "規約・ポリシー", product: "プロダクト",
      contact: "お問い合わせ", pay: "ご利用いただけるカード",
      copy: `© ${SITE.copyrightYear} ${J.company}. All rights reserved.`,
      notAffiliated: "BlockForge は Roblox Corporation その他のゲームプラットフォームとは提携していません。"
    },
    checkout: {
      eyebrow: "お申し込み",
      title: "1時間の無料トライアルを開始",
      sub: "カードを登録する前に、このあと何が起きるかをご確認ください。",
      summary: "ご注文内容",
      plan: "BlockForge Pro — 年額プラン",
      today: "本日のお支払い",
      todayValue: "¥0",
      afterTrial: "1時間のトライアル終了後",
      afterTrialValue: `${J.priceWithCode}／年`,
      renews: "更新",
      renewsValue: `解約するまで12か月ごとに${J.price}（税込）。価格を変更する場合は適用の${J.priceChangeNoticeDays}日前までにメールでご案内します`,
      includes: "含まれるもの",
      includesValue: `年${J.credits}クレジット・7つのツールすべて・商用利用`,
      trialCredits: "トライアル中",
      trialCreditsValue: `すべての機能＋${J.trialCredits}トライアルクレジット`,
      timeLine: "今すぐ開始した場合、カードへの請求日時は",
      timeLineFallback: "開始から1時間後です（それまでに解約しない場合）。",
      consent: `無料トライアル開始の1時間後に${J.priceWithCode}が請求され、その後は解約するまで12か月ごとに${J.price}が請求されることを理解しました。<a href="legal/terms.html">利用規約</a>、<a href="legal/refund.html">返金ポリシー</a>、<a href="legal/cancellation.html">解約ポリシー</a>に同意します。`,
      button: "1時間の無料トライアルを開始",
      buttonHint: "上のチェックボックスにチェックを入れてください。",
      secure: "カード情報は決済代行会社の安全なページで入力します。当社がカード番号全体を見たり保存したりすることはありません。",
      fallback: "担当者がメールでトライアルの設定をご案内します（2営業日以内に返信）。",
      whatNext: "このあとの流れ",
      next: [
        "トライアル終了日時と解約リンクを記載した確認メールをお送りします。",
        `1時間後に${J.price}が請求され、${J.credits}クレジットが付与されます。`,
        `更新の${J.reminderDays}日前までにお知らせメールをお送りします。`,
        "アカウント → お支払い、またはサポートへのメールでいつでも解約できます。"
      ]
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "BlockForge へのお問い合わせ",
      sub: `アカウント、お支払い、製品についてのご質問はメールでお寄せください。${J.supportResponse}に日本語または英語で返信します。`,
      emailTitle: "メールサポート",
      companyTitle: "会社情報",
      legalName: "会社名",
      address: "所在地",
      emailLabel: "メール",
      hours: "返信の目安",
      languages: "対応言語",
      languagesValue: "日本語、英語",
      topics: "よくあるご依頼",
      topicList: [
        ["お支払い・返金・解約", "ご登録のメールアドレスを添えてご連絡ください。請求から30日以内の返金のお申し出は、理由を問わず承ります。", "legal/refund.html"],
        ["個人情報に関するご請求", "開示、訂正、削除、オプトアウトのご請求。", "legal/privacy.html"],
        ["著作権侵害の通知", "件名を「DMCA Notice」としてお送りください。", "legal/dmca.html"],
        ["アクセシビリティに関するご意見", "サイトやワークスペースで利用しにくい点があればお知らせください。", "legal/accessibility.html"]
      ]
    },
    legal: {
      eyebrow: "規約・ポリシー",
      hubTitle: "規約・ポリシー",
      hubSub: "BlockForge の仕組み、お支払い、データの取り扱いをわかりやすくご説明します。",
      effective: "施行日",
      updated: "最終更新日",
      onThisPage: "このページの内容",
      home: "ホーム",
      questions: "このポリシーについてのご質問は",
      read: "読む"
    },
    ws: {
      title: "プレビューモード",
      demo: "ブラウザ上で描画した簡易プレビューです。フル解像度の AI 版は Pro で作成できます。",
      generating: "プレビューを描画中…",
      download: "プレビューをダウンロード",
      again: "別バリエーション",
      close: "閉じる",
      play: "再生",
      empty: "まず短い説明を入力してください。",
      size: "サイズ",
      cost: "Pro の場合",
      upgrade: "Pro で作成する"
    },
    credit: { one: "1 クレジット", n: "{n} クレジット" },
    fab: "クイックプレビュー"
  }
};

/* Strings the browser script needs at runtime (kept small). */
export function runtimeStrings(lang) {
  const S = STRINGS[lang];
  return {
    tools: S.tools, prompt: S.prompt, chips: S.chips, ws: S.ws, credit: S.credit,
    ideas: S.ideas.items, toolOrder: TOOLS, creditCosts: PLAN.creditCosts,
    checkout: { timeLine: S.checkout.timeLine, timeLineFallback: S.checkout.timeLineFallback }
  };
}

export { TOOLS };
