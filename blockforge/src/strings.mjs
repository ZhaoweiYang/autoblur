/* BlockForge — page copy for English and Japanese.
 * Facts (prices, trial, credits, company) come from config.mjs via FACTS so
 * copy and policies always agree. `rt` = strings the browser script needs. */
import { FACTS, PLAN, SITE } from "./config.mjs";

const E = FACTS.en, J = FACTS.ja;

const TOOLS = ["thumbnail", "icon", "ui", "texture", "clothing", "gfx", "sfx"];

export const STRINGS = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    langName: "English",
    nav: {
      assets: "Assets", how: "How it works", ideas: "Ideas", pricing: "Pricing", faq: "FAQ", contact: "Contact",
      cta: "Start free trial", menu: "Menu", theme: "Switch light/dark theme", skip: "Skip to content",
      lang: "Language"
    },
    meta: {
      homeTitle: `BlockForge — AI game art & sound | ${E.trial}, then ${E.price}/year`,
      homeDesc: `Turn a one-line idea into cover art, icons, textures, avatar shirts, character renders, UI kits and sound effects. ${E.trial}, then ${E.priceWithCode} per year.`,
      checkoutTitle: `Start your ${E.trial} — BlockForge Pro`,
      checkoutDesc: `Review BlockForge Pro before you start: ${E.trial}, then ${E.priceWithCode} billed once a year. Cancel anytime. 30-day money-back guarantee on unused credits.`,
      contactTitle: "Contact BlockForge — CALDRIVO GLOBAL INC",
      contactDesc: `Contact BlockForge support at ${E.email}. BlockForge is operated by ${E.company}, ${E.addressOneLine}.`,
      legalTitle: "Legal & policies — BlockForge",
      legalDesc: "Terms of Service, Privacy, Refund, Cancellation, Delivery, Cookie, Accessibility, DMCA, Disclaimer and Do Not Sell or Share policies for BlockForge.",
      ogAlt: `BlockForge — prompt in, game-ready art out. ${E.trial}, then ${E.price} per year.`
    },
    tools: {
      thumbnail: "Cover art", icon: "Game icon", ui: "UI kit", texture: "Texture", clothing: "Avatar shirt", gfx: "Character render", sfx: "Sound effect"
    },
    toolsShort: {
      thumbnail: "Cover", icon: "Icon", ui: "UI kit", texture: "Texture", clothing: "Shirt", gfx: "Render", sfx: "Sound"
    },
    prompt: {
      thumbnail: { label: "Describe the cover", ph: "e.g. a neon racing track floating above the clouds", btn: "Forge a preview" },
      icon: { label: "Describe the icon", ph: "e.g. a frost bow with a blue glow", btn: "Forge a preview" },
      ui: { label: "Describe the screen", ph: "e.g. a potion shop with 8 item slots", btn: "Forge a preview" },
      texture: { label: "Describe the surface", ph: "e.g. cracked desert ground", btn: "Forge a preview" },
      clothing: { label: "Describe the shirt", ph: "e.g. an astronaut jacket with orange stripes", btn: "Forge a preview" },
      gfx: { label: "Describe the character", ph: "e.g. a knight holding a glowing sword", btn: "Forge a preview" },
      sfx: { label: "Describe the sound", ph: "e.g. a treasure chest opening", btn: "Forge a preview" }
    },
    chips: {
      thumbnail: ["castle siege at sunset", "speedrun through a candy factory", "submarine escape, 10 seconds left", "pet hatching day in a crystal cave", "rooftop chase in a rainy city"],
      icon: ["frost bow", "treasure map", "speed potion", "dragon egg", "VIP crown"],
      ui: ["potion shop with 8 slots", "quest log", "battle-pass track", "loading screen", "trading window"],
      texture: ["cracked desert ground", "rusted steel plates", "mossy cobblestone", "glowing crystal floor", "snowy roof tiles"],
      clothing: ["astronaut jacket", "samurai armor shirt", "neon tracksuit", "lumberjack flannel", "soccer kit"],
      gfx: ["knight with a glowing sword", "skater mid-trick", "desert nomad", "robot mechanic", "wizard apprentice"],
      sfx: ["treasure chest opening", "jump pad boing", "sword clash", "door creak", "victory fanfare"]
    },
    hero: {
      eyebrow: "AI asset forge for game creators",
      title1: "Prompt in.", title2: "Game-ready art out.",
      sub: "BlockForge turns a one-line idea into cover art, icons, textures, avatar shirts, character renders, UI kits and sound effects, sized for the platforms you publish on.",
      composerTitle: "What should we forge?",
      typeLabel: "Asset type",
      note: `Preview mode is free and runs in your browser. BlockForge Pro starts with a ${E.trial}, then ${E.priceWithCode} per year.`,
      examples: "Examples:",
      facts: [["7", "asset types"], [E.credits, "credits per year"], ["30 days", "money-back guarantee"]],
      boardTitle: "Inventory",
      boardNote: "Previews drawn in your browser"
    },
    assets: {
      eyebrow: "Asset types",
      title: "Seven kinds of assets, <em>one prompt box.</em>",
      sub: "Every asset type is set to the size and format your platform expects, so files go straight into your project. All of them are included in BlockForge Pro.",
      included: "Included in Pro",
      preview: "Preview",
      items: {
        thumbnail: { spec: "16:9 · 1920 × 1080 PNG", desc: "A cover that reads at a glance in a crowded discovery feed: bold subject, big type, strong contrast." },
        icon: { spec: "512 × 512 · transparent PNG", desc: "Square icons on a transparent background, ready for badges, passes and store tiles." },
        ui: { spec: "Image + layer list", desc: "A shop, inventory or HUD as a flat image plus a list of its frames, labels and buttons, so you can rebuild it in your editor." },
        texture: { spec: "512 × 512 · seamless PNG", desc: "Surfaces that repeat without visible seams: stone, metal, wood, sand, lava and more." },
        clothing: { spec: "585 × 559 · shirt template", desc: "Your design painted onto the standard shirt template, so it wraps correctly around the avatar." },
        gfx: { spec: "512 × 512 PNG", desc: "A dramatic render of a blocky character for posters, covers and social posts." },
        sfx: { spec: "WAV · 44.1 kHz", desc: "Short effects for pickups, buttons, doors and spells, made from a few words." }
      },
      proCard: { title: "All seven in one plan", body: `${E.credits} credits per year. Most assets cost 1 credit; a UI kit costs 4.`, cta: "See pricing" }
    },
    how: {
      eyebrow: "How it works",
      title: "A session takes <em>about a minute.</em>",
      steps: [
        ["Choose the asset", "Pick one of seven asset types. Each is preset to the size your platform expects."],
        ["Write one line", "Describe the subject and the mood. Attach a reference image when you want a specific style."],
        ["Refine and export", "Make variations, keep the one you like and download it as PNG or WAV."]
      ]
    },
    ideas: {
      eyebrow: "Ideas",
      title: "Need a <em>starting point?</em>",
      sub: "Pick a prompt and we'll draw a rough preview in your browser. BlockForge Pro turns it into full-resolution AI art.",
      badge: "Preview mode",
      use: "Preview",
      items: [
        ["Simulator", "mining drill breaking through a wall of gems"],
        ["Simulator", "pet evolving from egg to dragon"],
        ["Obby", "rainbow parkour bridge over a lava lake"],
        ["Obby", "timer at 0:03 on the final jump"],
        ["Tycoon", "factory upgrade from wood to solid gold"],
        ["Tycoon", "cash machine overflowing with coins"],
        ["Horror", "flashlight beam in an abandoned school"],
        ["Horror", "shadow at the far end of the hallway"],
        ["Adventure", "pirate ship sailing into a thunderstorm"],
        ["Adventure", "explorer discovering a glowing temple"]
      ]
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
        `${E.credits} credits every paid year (1 credit = 1 asset; a UI kit uses 4)`,
        "All 7 asset types: cover art (game thumbnails), icons, UI kits, textures, avatar shirts, character renders and sound effects",
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
      title: "Questions, <em>answered</em>",
      items: [
        ["How does the 1-hour free trial work?", `Start the trial with a credit or debit card. For 1 hour you get full Pro access and ${E.trialCredits} trial credits, and nothing is charged. When the hour ends, your card is automatically charged ${E.priceWithCode} for 12 months of BlockForge Pro, unless you cancel before then. One trial per person.`],
        ["When exactly will I be charged?", `Exactly 1 hour after you start the trial, then every 12 months on the same date until you cancel. We email a reminder ${E.reminderDays} days before every renewal and a receipt after every charge.`],
        ["What will I see on my card statement?", `Your card statement will show "${E.descriptor}".`],
        ["How do I cancel?", "Go to Account → Billing → Cancel subscription, or email support from your account email. Cancel within the trial hour and you are never charged. Cancel after a charge and you keep Pro and your remaining credits until the end of the paid year, with no further charges."],
        ["What is the 30-Day Money-Back Guarantee?", `Full refund on unused credits. No questions asked. Within ${E.refundDays} days of any annual charge, ask for a refund and we return the annual fee × unused credits ÷ ${E.credits}. If you haven't used any credits, that's the full ${E.price}. Refunds go back to your original card within 5 business days; your bank may take 5–10 business days to show it.`],
        ["What does BlockForge Pro include?", `${E.credits} credits per paid year, all 7 asset types, full-resolution PNG and WAV downloads, commercial use of your assets, and an English and Japanese interface. Unused credits expire at the end of each paid year.`],
        ["How many credits does each asset use?", `Cover art, icons, textures, avatar shirts, character renders and sound effects use ${PLAN.creditCosts.thumbnail} credit each. A UI kit uses ${PLAN.creditCosts.ui} credits. If a generation fails, its credits are returned automatically.`],
        ["Which payment methods and currencies do you accept?", `Visa, Mastercard, American Express, JCB and Discover credit and debit cards. The English site charges ${E.price} in US dollars (USD); the Japanese site charges ${J.price} in Japanese yen (JPY, tax included). You pay in the currency shown at checkout.`],
        ["Is preview mode free?", "Yes. Preview mode draws a quick, rough sketch in your browser, on your own device. It needs no account, uses no credits and isn't the AI output. BlockForge Pro generates the full-resolution AI assets."],
        ["Can I use the assets commercially?", "Yes. You own the assets you generate (as far as the law allows) and can use them commercially, including in monetized games. We don't use your prompts, uploads or assets to train AI models."],
        ["Is BlockForge affiliated with Roblox or other game platforms?", "No. BlockForge is an independent product of CALDRIVO GLOBAL INC and isn't affiliated with, endorsed by or sponsored by Roblox Corporation or any other game platform."]
      ]
    },
    cta: {
      title1: "Your next update", title2: "deserves better art.",
      sub: `Make a free preview right now, or start BlockForge Pro with a ${E.trial}. After the trial it's ${E.price} per year.`,
      trial: "Start 1-hour free trial",
      preview: "Make a free preview"
    },
    footer: {
      tagline: "Prompt in. Game-ready art out.",
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
      includesValue: `${E.credits} credits per year · all 7 asset types · commercial use`,
      trialCredits: "During the trial",
      trialCreditsValue: `Full access + ${E.trialCredits} trial credits`,
      timeLine: "If you start now, your card will be charged at",
      timeLineFallback: "1 hour after you start, unless you cancel first.",
      consent: `I understand that my card will be charged ${E.priceWithCode} one hour after my free trial starts unless I cancel before then, and that my plan then renews automatically every 12 months at the current annual price (now ${E.price}) until I cancel. I agree to the <a href="legal/terms.html">Terms of Service</a>, <a href="legal/refund.html">Refund Policy</a> and <a href="legal/cancellation.html">Cancellation Policy</a>.`,
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
      demo: "A rough sketch drawn in your browser. BlockForge Pro creates the full-resolution AI version.",
      generating: "Sketching your preview…",
      download: "Download preview",
      again: "Another variation",
      close: "Close",
      play: "Play sound",
      empty: "Write a short description first.",
      size: "Preview size",
      cost: "With Pro",
      upgrade: "Make it with Pro"
    },
    credit: { one: "1 credit", n: "{n} credits" }
  },

  ja: {
    htmlLang: "ja",
    ogLocale: "ja_JP",
    langName: "日本語",
    nav: {
      assets: "アセット", how: "使い方", ideas: "アイデア", pricing: "料金", faq: "よくある質問", contact: "お問い合わせ",
      cta: "無料トライアル", menu: "メニュー", theme: "ライト／ダークテーマ切替", skip: "本文へスキップ",
      lang: "言語"
    },
    meta: {
      homeTitle: `BlockForge — ゲーム制作のためのAI素材工房｜${J.trial}、以降${J.pricePerYear}`,
      homeDesc: `ひとことのアイデアから、カバー画像、アイコン、テクスチャ、アバター用シャツ、キャラクター画像、UIキット、効果音を作成。${J.trial}のあと${J.pricePerYear}。`,
      checkoutTitle: `${J.trial}を開始 — BlockForge Pro`,
      checkoutDesc: `開始前にご確認ください：${J.trial}のあと、${J.pricePerYear}を年1回お支払い。いつでも解約でき、未使用クレジット分は30日間全額返金します。`,
      contactTitle: "お問い合わせ — BlockForge（CALDRIVO GLOBAL INC）",
      contactDesc: `BlockForge サポート：${J.email}。BlockForge は ${J.company}（米国コロラド州オーロラ）が運営しています。`,
      legalTitle: "規約・ポリシー一覧 — BlockForge",
      legalDesc: "BlockForge の利用規約、プライバシー、返金、解約、配送・提供、Cookie、アクセシビリティ、DMCA、免責事項、個人情報の販売・共有の拒否、特定商取引法に基づく表記。",
      ogAlt: `BlockForge — 言葉を入れれば、ゲームで使える素材に。${J.trial}、以降${J.pricePerYear}。`
    },
    tools: {
      thumbnail: "カバー画像", icon: "ゲームアイコン", ui: "UIキット", texture: "テクスチャ", clothing: "アバター用シャツ", gfx: "キャラクター画像", sfx: "効果音"
    },
    toolsShort: {
      thumbnail: "カバー", icon: "アイコン", ui: "UIキット", texture: "テクスチャ", clothing: "シャツ", gfx: "キャラ", sfx: "効果音"
    },
    prompt: {
      thumbnail: { label: "カバー画像の内容", ph: "例：雲の上に浮かぶネオンのレーストラック", btn: "プレビューを作成" },
      icon: { label: "アイコンの内容", ph: "例：青く光る氷の弓", btn: "プレビューを作成" },
      ui: { label: "画面の内容", ph: "例：8つのアイテム枠があるポーション屋", btn: "プレビューを作成" },
      texture: { label: "素材感の内容", ph: "例：ひび割れた砂漠の地面", btn: "プレビューを作成" },
      clothing: { label: "シャツのデザイン", ph: "例：オレンジのラインが入った宇宙飛行士ジャケット", btn: "プレビューを作成" },
      gfx: { label: "キャラクターの内容", ph: "例：光る剣を構えた騎士", btn: "プレビューを作成" },
      sfx: { label: "効果音の内容", ph: "例：宝箱が開く音", btn: "プレビューを作成" }
    },
    chips: {
      thumbnail: ["夕暮れの城攻め", "お菓子工場をスピードラン", "残り10秒の潜水艦脱出", "水晶洞窟でペット孵化", "雨の街の屋上チェイス"],
      icon: ["氷の弓", "宝の地図", "スピードポーション", "ドラゴンの卵", "VIPの王冠"],
      ui: ["8枠のポーション屋", "クエスト一覧", "バトルパスの進行表", "ロード画面", "トレード画面"],
      texture: ["ひび割れた砂漠", "錆びた鉄板", "苔むした石畳", "光るクリスタルの床", "雪の積もった屋根瓦"],
      clothing: ["宇宙飛行士ジャケット", "侍の鎧シャツ", "ネオンのジャージ", "木こりのネルシャツ", "サッカーのユニフォーム"],
      gfx: ["光る剣の騎士", "トリック中のスケーター", "砂漠の旅人", "ロボット整備士", "見習い魔法使い"],
      sfx: ["宝箱が開く音", "ジャンプ台のバネ音", "剣がぶつかる音", "ドアがきしむ音", "勝利のファンファーレ"]
    },
    hero: {
      eyebrow: "ゲーム制作のためのAI素材工房",
      title1: "言葉を入れれば、", title2: "ゲームで使える素材に。",
      sub: "ひとことのアイデアから、カバー画像、アイコン、テクスチャ、アバター用シャツ、キャラクター画像、UIキット、効果音を作成。公開先のプラットフォームに合わせたサイズで書き出します。",
      composerTitle: "何をつくりますか？",
      typeLabel: "アセットの種類",
      note: `プレビューモードは無料で、ブラウザ上で動きます。BlockForge Pro は${J.trial}から始まり、その後は${J.pricePerYear}です。`,
      examples: "例：",
      facts: [["7", "種類のアセット"], [J.credits, "クレジット／年"], ["30日間", "返金保証"]],
      boardTitle: "インベントリ",
      boardNote: "ブラウザで描画したプレビュー"
    },
    assets: {
      eyebrow: "アセットの種類",
      title: "7種類のアセットを、<em>ひとつの入力欄から。</em>",
      sub: "どのアセットも、プラットフォームが求めるサイズと形式にあらかじめ設定済み。書き出したファイルをそのままプロジェクトに使えます。すべて BlockForge Pro に含まれます。",
      included: "Pro に含まれます",
      preview: "プレビュー",
      items: {
        thumbnail: { spec: "16:9 · 1920 × 1080 PNG", desc: "おすすめ欄でもひと目で伝わるカバー画像。大胆な主役、大きな文字、はっきりしたコントラスト。" },
        icon: { spec: "512 × 512 · 透過PNG", desc: "透過背景の正方形アイコン。バッジ、パス、ストア用の画像にそのまま使えます。" },
        ui: { spec: "画像＋レイヤー一覧", desc: "ショップ、インベントリ、HUD を1枚の画像と、フレーム・ラベル・ボタンのレイヤー一覧でお届け。エディタで組み直せます。" },
        texture: { spec: "512 × 512 · シームレスPNG", desc: "つなぎ目が見えずに繰り返せる素材。石、金属、木、砂、溶岩など。" },
        clothing: { spec: "585 × 559 · シャツテンプレート", desc: "デザインを標準のシャツテンプレートに描き込むので、アバターにきれいに巻き付きます。" },
        gfx: { spec: "512 × 512 PNG", desc: "ブロック調キャラクターの迫力あるレンダー。ポスター、カバー、SNS投稿に。" },
        sfx: { spec: "WAV · 44.1 kHz", desc: "アイテム取得、ボタン、ドア、魔法などの短い効果音を、数語の説明から。" }
      },
      proCard: { title: "7種類すべてをひとつのプランで", body: `年${J.credits}クレジット。ほとんどのアセットは1クレジット、UIキットは4クレジットです。`, cta: "料金を見る" }
    },
    how: {
      eyebrow: "使い方",
      title: "1回の作成は<em>およそ1分。</em>",
      steps: [
        ["アセットを選ぶ", "7種類から選びます。サイズはプラットフォームに合わせて設定済みです。"],
        ["ひとことで説明する", "主役と雰囲気を書くだけ。特定のスタイルにしたいときは参考画像を添付できます。"],
        ["調整して書き出す", "バリエーションを作って気に入ったものを選び、PNG または WAV でダウンロード。"]
      ]
    },
    ideas: {
      eyebrow: "アイデア",
      title: "<em>きっかけ</em>が欲しいときは",
      sub: "プロンプトを選ぶと、ブラウザ上で簡易プレビューを描画します。BlockForge Pro ならフル解像度の AI 作品に仕上げられます。",
      badge: "プレビューモード",
      use: "プレビュー",
      items: [
        ["シミュレーター", "宝石の壁を突き破る採掘ドリル"],
        ["シミュレーター", "卵からドラゴンへ進化するペット"],
        ["アスレチック", "溶岩湖にかかる虹色のパルクール橋"],
        ["アスレチック", "最後のジャンプで残り0:03"],
        ["タイクーン", "木造から純金へ、工場のアップグレード"],
        ["タイクーン", "コインがあふれ出すマネーマシン"],
        ["ホラー", "廃校を照らす懐中電灯の光"],
        ["ホラー", "廊下の奥に立つ黒い影"],
        ["アドベンチャー", "嵐の海へ進む海賊船"],
        ["アドベンチャー", "光る神殿を見つけた探検家"]
      ]
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
        `有料期間1年ごとに ${J.credits} クレジット（1クレジット＝アセット1点。UIキットは4クレジット）`,
        "7種類のアセットすべて：カバー画像（サムネイル）、アイコン、UIキット、テクスチャ、アバター用シャツ、キャラクター画像、効果音",
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
      title: "ご質問に<em>お答えします</em>",
      items: [
        ["1時間の無料トライアルはどのような仕組みですか？", `クレジットカードまたはデビットカードを登録してトライアルを開始します。1時間、Pro のすべての機能と${J.trialCredits}トライアルクレジットを利用でき、この間の請求はありません。1時間が経過すると、それまでに解約しない限り、BlockForge Pro 12か月分として${J.priceWithCode}が自動的に請求されます。トライアルはお一人様1回限りです。`],
        ["いつ請求されますか？", `トライアル開始のちょうど1時間後に初回の請求が行われ、その後は解約するまで12か月ごとに同じ日付で請求されます。更新の${J.reminderDays}日前までにお知らせメールを、各請求後には領収メールをお送りします。`],
        ["カード明細にはどのように表示されますか？", `カードの利用明細には「${J.descriptor}」と表示されます。`],
        ["解約方法を教えてください。", "アカウント → お支払い → サブスクリプションを解約、またはご登録のメールアドレスからサポートへご連絡ください。トライアルの1時間以内に解約すれば料金はかかりません。請求後に解約した場合は、以後の請求は行われず、お支払い済みの1年間の終わりまで Pro と残りのクレジットをご利用いただけます。"],
        ["30日間返金保証とは何ですか？", `未使用クレジット分を全額返金します。理由は問いません。各年額請求から${J.refundDays}日以内にお申し出いただくと、「年額料金 × 未使用クレジット ÷ ${J.credits}」を返金します。クレジットを使っていなければ${J.price}を全額返金します。返金は5営業日以内にお支払いに使用したカードへ処理され、明細への反映にはカード会社により5〜10営業日かかる場合があります。`],
        ["BlockForge Pro には何が含まれますか？", `有料期間1年ごとに${J.credits}クレジット、7種類のアセットすべて、フル解像度の PNG・WAV ダウンロード、作成したアセットの商用利用、日本語・英語のインターフェースが含まれます。未使用のクレジットは各有料期間の終了時に失効します。`],
        ["アセット1点に何クレジット必要ですか？", `カバー画像、アイコン、テクスチャ、アバター用シャツ、キャラクター画像、効果音は各${PLAN.creditCosts.thumbnail}クレジット、UIキットは${PLAN.creditCosts.ui}クレジットです。作成に失敗した場合、クレジットは自動的に戻ります。`],
        ["支払方法と通貨を教えてください。", `Visa、Mastercard、American Express、JCB、Discover のクレジットカード・デビットカードをご利用いただけます。日本語サイトでは${J.price}（日本円・税込）、英語サイトでは${E.price}（米ドル）でのお支払いとなり、決済画面に表示された通貨で請求されます。`],
        ["プレビューモードは無料ですか？", "はい。プレビューモードはブラウザ上（お使いの端末内）で簡易的なラフを描く機能で、アカウント不要・クレジット不要です。AI による作成結果ではありません。フル解像度の AI アセットは BlockForge Pro で作成できます。"],
        ["作成したアセットは商用利用できますか？", "はい。作成したアセットは（法律で認められる範囲で）お客様のものとなり、収益化したゲームを含めて商用利用できます。お客様のプロンプト、アップロード画像、作成物を AI の学習に使うことはありません。"],
        ["BlockForge は Roblox などのゲームプラットフォームと提携していますか？", "いいえ。BlockForge は CALDRIVO GLOBAL INC が提供する独立したサービスであり、Roblox Corporation その他のゲームプラットフォームとの提携・承認・後援関係はありません。"]
      ]
    },
    cta: {
      title1: "次のアップデートに、", title2: "もっといい素材を。",
      sub: `まずは無料でプレビューを。BlockForge Pro は${J.trial}から始められ、トライアル後は${J.pricePerYear}です。`,
      trial: "1時間の無料トライアルを開始",
      preview: "無料でプレビュー"
    },
    footer: {
      tagline: "言葉を入れれば、ゲームで使える素材に。",
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
      includesValue: `年${J.credits}クレジット・7種類のアセットすべて・商用利用`,
      trialCredits: "トライアル中",
      trialCreditsValue: `すべての機能＋${J.trialCredits}トライアルクレジット`,
      timeLine: "今すぐ開始した場合、カードへの請求日時は",
      timeLineFallback: "開始から1時間後です（それまでに解約しない場合）。",
      consent: `無料トライアル開始の1時間後（それまでに解約しない場合）に${J.priceWithCode}が請求され、その後は解約するまで12か月ごとに、その時点の年額料金（現在は${J.price}）で自動更新されることを理解しました。<a href="legal/terms.html">利用規約</a>、<a href="legal/refund.html">返金ポリシー</a>、<a href="legal/cancellation.html">解約ポリシー</a>に同意します。`,
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
      demo: "ブラウザ上で描いたラフスケッチです。フル解像度の AI 版は BlockForge Pro で作成できます。",
      generating: "プレビューを描いています…",
      download: "プレビューを保存",
      again: "別のバリエーション",
      close: "閉じる",
      play: "再生",
      empty: "まず短い説明を書いてください。",
      size: "プレビューのサイズ",
      cost: "Pro の場合",
      upgrade: "Pro で作成する"
    },
    credit: { one: "1 クレジット", n: "{n} クレジット" }
  }
};

/* Strings the browser script needs at runtime (kept small). */
export function runtimeStrings(lang) {
  const S = STRINGS[lang];
  return {
    tools: S.tools, prompt: S.prompt, chips: S.chips, ws: S.ws, credit: S.credit,
    ideas: S.ideas.items.map(([, text]) => text), toolOrder: TOOLS, creditCosts: PLAN.creditCosts,
    checkout: { timeLine: S.checkout.timeLine, timeLineFallback: S.checkout.timeLineFallback }
  };
}

export { TOOLS };
