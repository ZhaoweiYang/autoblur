/* Blockgoer — page copy for English and Japanese.
 * Facts (prices, trial, credits, company) come from config.mjs via FACTS so
 * copy and policies always agree. Billing, refund, descriptor and consent
 * lines are compliance text: keep them literal when restyling the voice. */
import { FACTS, PLAN, SITE } from "./config.mjs";

const E = FACTS.en, J = FACTS.ja;

export const TOOLS = ["thumbnail", "icon", "ui", "texture", "clothing", "gfx", "sfx"];

export const STRINGS = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    langName: "English",
    nav: {
      assets: "Assets", process: "How it works", prompts: "Ideas", pricing: "Pricing", faq: "FAQ", contact: "Contact",
      cta: "Start free trial", menu: "Menu", theme: "Switch light/dark theme", skip: "Skip to content",
      lang: "Language", mainNav: "Main", homeLabel: "Blockgoer home"
    },
    meta: {
      homeTitle: `Blockgoer: AI game assets from one prompt | 1-hour trial, ${E.price}/yr`,
      homeDesc: `Type one line, get game-ready thumbnails, icons, textures, shirts, UI kits and sound effects. ${E.trial}, then ${E.priceWithCode} a year.`,
      checkoutTitle: `Start your ${E.trial} — Blockgoer Pro`,
      checkoutDesc: `Review Blockgoer Pro before you start: ${E.trial}, then ${E.priceWithCode} once a year. Cancel anytime. 30-day money-back guarantee.`,
      contactTitle: "Contact Blockgoer — ARIELY WON THROUGH INC",
      contactDesc: `Email Blockgoer support at ${E.email}. Blockgoer is run by ${E.company} in Winona, Minnesota, USA.`,
      legalTitle: "Legal & policies — Blockgoer",
      legalDesc: "Terms of Service, Privacy, Refund, Cancellation, Delivery, Cookie, Accessibility, DMCA, Disclaimer and Do Not Sell or Share policies for Blockgoer.",
      ogAlt: `Blockgoer — type it, drop it in your game. ${E.trial}, then ${E.price} per year.`
    },
    tools: {
      thumbnail: "Thumbnail", icon: "Game icon", ui: "UI kit", texture: "Texture", clothing: "Avatar shirt", gfx: "Character render", sfx: "Sound effect"
    },
    toolsShort: {
      thumbnail: "Thumbnail", icon: "Icon", ui: "UI kit", texture: "Texture", clothing: "Shirt", gfx: "Character", sfx: "Sound"
    },
    prompt: {
      thumbnail: { label: "Describe your thumbnail", ph: "a noob dodging lava on a neon obby", btn: "Preview" },
      icon: { label: "Describe your icon", ph: "a 2x coins game pass badge", btn: "Preview" },
      ui: { label: "Describe the screen", ph: "a pet shop with rarity frames", btn: "Preview" },
      texture: { label: "Describe the surface", ph: "mossy dungeon bricks", btn: "Preview" },
      clothing: { label: "Describe the shirt", ph: "a racing jersey with flame stripes", btn: "Preview" },
      gfx: { label: "Describe the character", ph: "a ninja landing on a rooftop", btn: "Preview" },
      sfx: { label: "Describe the sound", ph: "a legendary drop from a loot chest", btn: "Preview" }
    },
    chips: {
      thumbnail: ["boss fight inside a volcano", "noob vs pro speedrun", "escape the haunted school", "tycoon empire at sunset", "legendary pet hatching"],
      icon: ["2x coins badge", "VIP crown pass", "speed coil", "mana crystal", "mystery egg"],
      ui: ["daily rewards", "pet inventory", "rarity shop", "leaderboard", "settings menu"],
      texture: ["mossy dungeon bricks", "lava rock", "sci-fi floor panels", "snow drift", "pirate ship planks"],
      clothing: ["racing jersey", "camo hoodie", "knight armor shirt", "galaxy tee", "pirate captain coat"],
      gfx: ["ninja on a rooftop", "tiny wizard casting", "space cadet", "viking captain", "fox mechanic"],
      sfx: ["coin pickup", "legendary loot drop", "level up jingle", "door creak", "sword swing"]
    },
    hero: {
      kicker: "AI asset studio for game devs",
      title1: "Type it.", title2: "Drop it in your game.",
      sub: "Thumbnails, icons, textures, avatar shirts, character renders, UI kits and sound effects from one line of text. Every file comes out at the size your game needs, ready for your next update.",
      aboutLabel: "What is Blockgoer?",
      askLabel: "What do you need?",
      makeLabel: "Make",
      submit: "Preview",
      note: `Previews are free and run in your browser. Blockgoer Pro starts with a ${E.trial}, then ${E.priceWithCode} a year.`,
      examples: "Try:",
      stripTitle: "Live sketches",
      stripNote: "Drawn on your device as the page loads. Pro renders the full AI version."
    },
    assets: {
      kicker: "Your loadout",
      title: "Seven asset types.<br>One prompt bar.",
      sub: "Pick a slot and Blockgoer sets the size and file format. Every type is unlocked in Blockgoer Pro.",
      open: "Try a preview",
      items: {
        thumbnail: { spec: "1920 × 1080 · PNG", desc: "16:9 thumbnails with a clear hero, big readable text and colors that stand out in a busy game list." },
        icon: { spec: "512 × 512 · transparent PNG", desc: "Square icons on a transparent background for game passes, badges and shop tiles." },
        ui: { spec: "Image + layer list", desc: "Shops, inventories and HUDs as one image plus a list of every frame, label and button." },
        texture: { spec: "512 × 512 · seamless PNG", desc: "Seamless surfaces for floors, walls and terrain: stone, metal, wood, sand, lava and more." },
        clothing: { spec: "585 × 559 · shirt template", desc: "Your design painted on the standard shirt template, so it wraps the avatar cleanly." },
        gfx: { spec: "512 × 512 · PNG", desc: "Posed character renders (GFX) for thumbnails, group banners and social posts." },
        sfx: { spec: "WAV · 44.1 kHz", desc: "Short sounds for pickups, clicks, doors, hits and spells, made from a few words." }
      }
    },
    groups: {
      kicker: "Pick your build",
      title: "Art, parts and sound for your next update.",
      items: [
        { title: "Store-page art", body: "Thumbnails, icons and character renders for your game page, passes and socials.", cta: "Make store art", tool: "thumbnail" },
        { title: "In-game parts", body: "Textures, avatar shirts and UI kits you can drop straight into your project.", cta: "Make a game part", tool: "texture" },
        { title: "Sound", body: "Pickups, buttons, doors, hits and spells. Short effects ready for any scene.", cta: "Make a sound", tool: "sfx" }
      ]
    },
    built: {
      title: "Sized to spec.<br>Yours to ship.",
      items: [
        ["Sized to spec", "Every asset type exports at the dimensions and format your platform expects. No resizing before upload."],
        ["Reroll anytime", "Not feeling it? Roll another variation and keep the one that fits."],
        ["Yours to ship", "Use what you make commercially, monetized games included. We never train models on your prompts or files."],
        ["English and Japanese", "The whole site and workspace work in both languages."]
      ]
    },
    numbers: [
      ["7", "asset types, one workspace"],
      [E.credits, "credits every paid year"],
      ["1 hr", "free trial before any charge"],
      ["30 days", "money-back guarantee on unused credits"]
    ],
    how: {
      kicker: "How it works",
      title: "Three steps<br>to a finished file.",
      steps: [
        ["Pick your asset", "Choose one of seven types. Size and format are locked in for you."],
        ["Describe the vibe", "Type the subject and the mood. Add a reference image if you want a specific style."],
        ["Grab the file", "Roll variations, keep your favorite and download it as PNG or WAV."]
      ]
    },
    ideas: {
      kicker: "Ideas",
      title: "Stuck? Grab a prompt.",
      sub: "Tap a prompt and your browser sketches a rough thumbnail. Blockgoer Pro turns the same idea into full-resolution AI art.",
      badge: "Browser sketch",
      use: "Preview",
      items: [
        ["Simulator", "a drill rig smashing through glowing ore"],
        ["Simulator", "a baby slime leveling up into a giant"],
        ["Obby", "neon platforms over a bottomless void"],
        ["Obby", "a moving bridge, three seconds to cross"],
        ["Tycoon", "a lemonade stand upgraded to a skyscraper"],
        ["Tycoon", "a vault door opening on a mountain of gold"],
        ["Horror", "a flashlight flickering in a flooded basement"],
        ["Horror", "something waiting at the end of the hall"],
        ["Adventure", "a raft racing toward a giant waterfall"],
        ["Adventure", "a hidden temple behind the jungle vines"]
      ]
    },
    pricing: {
      kicker: "Pricing",
      title: "One plan.<br>Everything unlocked.",
      sub: `Every asset type and every feature in one yearly plan. Prices on this page are in ${E.currencyName}.`,
      free: {
        name: "Preview mode",
        price: `${E.price.replace(/\d[\d.,]*/, "0")}`,
        per: "no account",
        tag: "Free",
        features: ["Sketch all seven asset types in your browser", "Download your sketches", "Runs on your device; what you type is not sent to us"],
        cta: "Try a preview"
      },
      planName: "Blockgoer Pro",
      planTag: "Yearly plan",
      per: "/year",
      currencyNote: `Billed in ${E.currencyName}. ${E.taxNote}`,
      equivalent: `About ${E.perMonthEquivalent} a month, billed once a year.`,
      keyTerms: `${E.trial}, then ${E.price} billed once a year. Renews automatically every 12 months. Cancel anytime.`,
      features: [
        `${E.credits} credits with every paid year (1 credit = 1 asset; a UI kit takes 4)`,
        "All seven asset types, from thumbnails to sound effects",
        "Full-resolution PNG and WAV downloads",
        "Commercial use, monetized games included",
        "English and Japanese interface",
        `Email support, answered ${E.supportResponse}`
      ],
      cta: "Start 1-hour free trial",
      ctaNote: `Card required. ${E.price} is charged 1 hour after you start unless you cancel first.`,
      timelineTitle: "How billing works",
      timeline: [
        ["Today", "Start the trial", `Add a card. Nothing is charged today (${E.price.replace(/\d[\d.,]*/, "0")}). You get full access and ${E.trialCredits} trial credits.`],
        ["In 1 hour", `${E.price} is charged`, `Your card is charged ${E.priceWithCode}, plus any applicable sales tax or VAT, for 12 months of Pro, and ${E.credits} credits are added. Cancel before the hour ends and you pay nothing.`],
        ["Within 30 days", "Changed your mind?", "Ask for a refund within 30 days of any annual charge and get back the cost of your unused credits. No questions asked."],
        ["Every year", "Renews on its own", `Renews at the then-current annual price (now ${E.price}) until you cancel. We email you at least ${E.reminderDays} days before every renewal, and at least ${E.priceChangeNoticeDays} days before any price change applies.`]
      ],
      guaranteeTitle: "30-Day Money-Back Guarantee",
      guaranteeLine: "Full refund on unused credits. No questions asked.",
      guaranteeBody: `Within ${E.refundDays} days of any annual charge, we refund the cost of every credit you haven't used. Used none? You get the full ${E.price} back. Used ${E.refundExample.used}? You get ${E.refundExample.amount}. A refund also ends your subscription.`,
      descriptorTitle: "On your card statement",
      descriptor: `Your card statement will show "${E.descriptor}".`,
      cardsTitle: "Accepted payment methods",
      cardsNote: "Visa, Mastercard, American Express, JCB and Discover credit and debit cards. A PCI DSS–compliant payment processor handles payment; we never see or store your full card number.",
      cancelTitle: "Cancel anytime",
      cancelBody: "Go to Account → Billing → Cancel subscription, or email us from your account address. Cancel during the trial and you're never charged. Cancel later and you keep Pro until the end of the year you paid for.",
      policyLinks: "Full details:"
    },
    faq: {
      kicker: "FAQ",
      title: "Questions before<br>you press start.",
      items: [
        ["How does the 1-hour free trial work?", `Start the trial with a credit or debit card. For 1 hour you get full Pro access and ${E.trialCredits} trial credits, and nothing is charged. When the hour ends, your card is automatically charged ${E.priceWithCode} (plus any applicable sales tax or VAT) for 12 months of Blockgoer Pro, unless you cancel before then. One trial per person and per payment card.`],
        ["When exactly will I be charged?", `Exactly 1 hour after you start the trial, then every 12 months on the same date until you cancel. We email a reminder at least ${E.reminderDays} days before every renewal and a receipt after every charge. Renewals are at the then-current annual price (now ${E.price}).`],
        ["What will I see on my card statement?", `Your card statement will show "${E.descriptor}".`],
        ["How do I cancel?", "Go to Account → Billing → Cancel subscription, or email support from your account email. Cancel within the trial hour and you are never charged. Cancel after a charge and you keep Pro and your remaining credits until the end of the paid year, with no further charges."],
        ["What is the 30-Day Money-Back Guarantee?", `Full refund on unused credits. No questions asked. Within ${E.refundDays} days of any annual charge, ask for a refund and we return the annual fee × unused credits ÷ ${E.credits}. If you haven't used any credits, that's the full ${E.price}. Refunds go back to your original card within 5 business days; your bank may take 5–10 business days to show it. A refund ends your subscription and removes that year's remaining credits; assets you already made stay yours.`],
        ["What does Blockgoer Pro include?", `${E.credits} credits per paid year, all 7 asset types, full-resolution PNG and WAV downloads, commercial use of your assets, and an English and Japanese interface. Unused credits expire at the end of each paid year.`],
        ["How many credits does each asset use?", `Thumbnails, icons, textures, avatar shirts, character renders and sound effects use ${PLAN.creditCosts.thumbnail} credit each. A UI kit uses ${PLAN.creditCosts.ui} credits. If a generation fails, its credits are returned automatically.`],
        ["Which payment methods and currencies do you accept?", `Visa, Mastercard, American Express, JCB and Discover credit and debit cards. On this site Blockgoer Pro is ${E.price} per year, charged in US dollars (USD); any sales tax or VAT for your location is shown at checkout before you confirm. Our Japanese site lists its own price in Japanese yen.`],
        ["Is preview mode free?", "Yes. Preview mode draws a quick, rough sketch in your browser, on your own device. It needs no account, uses no credits and isn't the AI output. Blockgoer Pro generates the full-resolution AI assets."],
        ["Can I use the assets in my game and sell it?", "Yes. You own the assets you generate (as far as the law allows) and can use them commercially, including in monetized games. We don't use your prompts, uploads or assets to train AI models."],
        ["Is Blockgoer affiliated with Roblox or other game platforms?", "No. Blockgoer is an independent product of ARIELY WON THROUGH INC and isn't affiliated with, endorsed by or sponsored by Roblox Corporation or any other game platform."]
      ]
    },
    cta: {
      title: "Your next update<br>starts with one prompt.",
      sub: `Sketch a free preview now, or start Blockgoer Pro with a ${E.trial}. After the trial it's ${E.price} a year.`,
      trial: "Start 1-hour free trial",
      preview: "Try a free preview"
    },
    footer: {
      operatedBy: "Blockgoer is operated by",
      company: "Company", policies: "Policies", product: "Product",
      contact: "Contact us", pay: "We accept",
      copy: `© ${SITE.copyrightYear} ${E.company}. All rights reserved.`,
      notAffiliated: "Blockgoer is not affiliated with Roblox Corporation or any other game platform."
    },
    checkout: {
      eyebrow: "Checkout",
      title: "Start your 1-hour free trial",
      sub: "Here's exactly what happens before you add a card. No surprises.",
      summary: "Order summary",
      plan: "Blockgoer Pro — yearly plan",
      today: "Due today",
      todayValue: E.price.replace(/\d[\d.,]*/, "0"),
      afterTrial: "After your 1-hour trial",
      afterTrialValue: `${E.priceWithCode} / year, plus any applicable sales tax or VAT`,
      renews: "Renews",
      renewsValue: `Every 12 months at the then-current annual price (now ${E.price}) until you cancel. Any price change is emailed at least ${E.priceChangeNoticeDays} days before it applies`,
      access: "Access",
      accessValue: "Immediately when your trial starts",
      tax: "Tax",
      taxValue: "Any sales tax or VAT for your location is added and shown on the payment page before you confirm",
      includes: "Includes",
      includesValue: `${E.credits} credits per year · all 7 asset types · commercial use`,
      trialCredits: "During the trial",
      trialCreditsValue: `Full access + ${E.trialCredits} trial credits`,
      timeLine: "When your card is charged:",
      timeLineFallback: "exactly 1 hour after your trial starts, unless you cancel before then.",
      timeLineLive: "If you start your trial now, your card will be charged at",
      consent: `I understand that my card will be charged ${E.priceWithCode}, plus any applicable sales tax or VAT, one hour after my free trial starts unless I cancel before then, and that my plan then renews automatically every 12 months at the then-current annual price (now ${E.price}) until I cancel. I agree to the <a href="legal/terms.html">Terms of Service</a>, <a href="legal/refund.html">Refund Policy</a> and <a href="legal/cancellation.html">Cancellation Policy</a>.`,
      button: "Start 1-hour free trial",
      buttonHint: "Tick the box above to continue.",
      secure: "You'll enter your card on our payment processor's secure page. We never see or store your full card number.",
      fallback: "Our team will set up your trial by email and reply within 2 business days.",
      whatNext: "What happens next",
      next: [
        "We email you a confirmation with your trial end time and a cancel link.",
        `After 1 hour, ${E.price} is charged and ${E.credits} credits are added to your account.`,
        `At least ${E.reminderDays} days before each renewal we email you a reminder with the amount and date.`,
        "Cancel anytime from Account → Billing, or by emailing support."
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Blockgoer",
      sub: `Stuck on billing, your account or a prompt? Email us and we reply ${E.supportResponse}, in English or Japanese.`,
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
    notFound: {
      eyebrow: "Error 404",
      title: "Page not found",
      sub: "This link is broken or the page has moved. Pick a spot below to respawn.",
      links: [
        ["Home", "Make a free browser sketch of any asset type.", "index.html"],
        ["Pricing", `${E.trial}, then ${E.priceWithCode} a year.`, "index.html#pricing"],
        ["Legal & policies", "Terms, privacy, refunds, cancellation and more.", "legal/index.html"],
        ["Contact", `Email ${E.email}.`, "contact.html"]
      ]
    },
    legal: {
      eyebrow: "Legal",
      hubTitle: "Legal & policies",
      hubSub: "How Blockgoer works, what you pay, and how we handle your data, in plain language.",
      effective: "Effective date",
      updated: "Last updated",
      onThisPage: "On this page",
      home: "Home",
      questions: "Questions about this policy?",
      read: "Read",
      breadcrumb: "Breadcrumb"
    },
    ws: {
      title: "Browser sketch",
      demo: "A rough sketch drawn in your browser. Blockgoer Pro creates the full-resolution AI version.",
      generating: "Sketching your preview…",
      download: "Download sketch",
      again: "Reroll",
      close: "Close",
      play: "Play sound",
      empty: "Type a short description first.",
      error: "This preview couldn't be drawn in your browser. Try another asset type or a different browser.",
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
      assets: "アセット", process: "使い方", prompts: "アイデア", pricing: "料金", faq: "よくある質問", contact: "お問い合わせ",
      cta: "無料トライアル", menu: "メニュー", theme: "ライト／ダークテーマ切替", skip: "本文へスキップ",
      lang: "言語", mainNav: "メインメニュー", homeLabel: "Blockgoer ホーム"
    },
    meta: {
      homeTitle: `Blockgoer｜ひとことでゲーム素材をつくるAI｜1時間無料、以降年額${J.price}（税込）`,
      homeDesc: `ゲーム制作者向けのAI素材ツール。ひとことでサムネイル、アイコン、テクスチャ、シャツ、UIキット、効果音を作成。${J.trial}のあと${J.pricePerYear}。`,
      checkoutTitle: `${J.trial}を開始 — Blockgoer Pro`,
      checkoutDesc: `開始前にご確認ください：${J.trial}のあと、${J.pricePerYear}を年1回お支払い。いつでも解約でき、未使用クレジット分は30日間全額返金します。`,
      contactTitle: "お問い合わせ — Blockgoer（ARIELY WON THROUGH INC）",
      contactDesc: `Blockgoer サポート：${J.email}。Blockgoer は ${J.company}（米国ミネソタ州ウィノナ）が運営しています。`,
      legalTitle: "規約・ポリシー一覧 — Blockgoer",
      legalDesc: "Blockgoer の利用規約、プライバシー、返金、解約、配送・提供、Cookie、アクセシビリティ、DMCA、免責事項、個人情報の販売・共有の拒否、特定商取引法に基づく表記。",
      ogAlt: `Blockgoer — 思いついたら、そのままゲームへ。${J.trial}、以降${J.pricePerYear}。`
    },
    tools: {
      thumbnail: "サムネイル", icon: "ゲームアイコン", ui: "UIキット", texture: "テクスチャ", clothing: "アバター用シャツ", gfx: "キャラクター画像", sfx: "効果音"
    },
    toolsShort: {
      thumbnail: "サムネ", icon: "アイコン", ui: "UIキット", texture: "テクスチャ", clothing: "シャツ", gfx: "キャラ", sfx: "効果音"
    },
    prompt: {
      thumbnail: { label: "サムネイルの内容", ph: "ネオンのアスレチックで溶岩をよける初心者", btn: "プレビュー" },
      icon: { label: "アイコンの内容", ph: "コイン2倍のゲームパス用バッジ", btn: "プレビュー" },
      ui: { label: "画面の内容", ph: "レア度で枠の色が変わるペットショップ", btn: "プレビュー" },
      texture: { label: "素材感の内容", ph: "苔むしたダンジョンのレンガ", btn: "プレビュー" },
      clothing: { label: "シャツのデザイン", ph: "炎のラインが入ったレーシングジャージ", btn: "プレビュー" },
      gfx: { label: "キャラクターの内容", ph: "屋根の上に着地する忍者", btn: "プレビュー" },
      sfx: { label: "効果音の内容", ph: "宝箱からレアアイテムが出る音", btn: "プレビュー" }
    },
    chips: {
      thumbnail: ["火山の中のボス戦", "初心者vs上級者スピードラン", "呪われた学校から脱出", "夕焼けのタイクーン帝国", "伝説ペットが誕生"],
      icon: ["コイン2倍バッジ", "VIP王冠パス", "スピードコイル", "マナ水晶", "ミステリーエッグ"],
      ui: ["デイリー報酬", "ペットのインベントリ", "レア枠ショップ", "ランキング", "設定メニュー"],
      texture: ["苔むしたレンガ", "溶岩の岩肌", "SF風の床パネル", "雪の吹きだまり", "海賊船の甲板"],
      clothing: ["レーシングジャージ", "迷彩パーカー", "騎士のよろいシャツ", "銀河Tシャツ", "海賊船長のコート"],
      gfx: ["屋根の上の忍者", "呪文を唱える魔法使い", "宇宙の訓練生", "バイキングの船長", "キツネの整備士"],
      sfx: ["コインを拾う音", "レアドロップの音", "レベルアップのジングル", "きしむドア", "剣を振る音"]
    },
    hero: {
      kicker: "ゲーム制作者のためのAI素材スタジオ",
      title1: "思いついたら、", title2: "そのままゲームへ。",
      sub: "サムネイル、アイコン、テクスチャ、アバター用シャツ、キャラクター、UIキット、効果音を、ひとことの説明から作成。どれもゲームに必要なサイズで書き出すので、次のアップデートにそのまま使えます。",
      aboutLabel: "Blockgoerとは",
      askLabel: "何が必要ですか？",
      makeLabel: "種類",
      submit: "プレビュー",
      note: `プレビューは無料で、ブラウザ上で動きます。Blockgoer Pro は${J.trial}から始まり、その後は${J.pricePerYear}です。`,
      examples: "例：",
      stripTitle: "その場で描くスケッチ",
      stripNote: "ページを開いたときにお使いの端末で描いたラフです。AI による本番版は Pro で作成します。"
    },
    assets: {
      kicker: "ロードアウト",
      title: "7種類の素材を、<br>ひとつの入力欄で。",
      sub: "スロットを選ぶだけで、サイズとファイル形式は自動でセット。すべての種類が Blockgoer Pro で使えます。",
      open: "プレビューを試す",
      items: {
        thumbnail: { spec: "1920 × 1080 · PNG", desc: "主役がはっきりして文字が大きく、ゲーム一覧の中でも目立つ 16:9 のサムネイル。" },
        icon: { spec: "512 × 512 · 透過PNG", desc: "背景透過の正方形アイコン。ゲームパス、バッジ、ショップのタイルに。" },
        ui: { spec: "画像＋レイヤー一覧", desc: "ショップ、インベントリ、HUD を1枚の画像と、フレーム・ラベル・ボタンの一覧でお届け。" },
        texture: { spec: "512 × 512 · シームレスPNG", desc: "床・壁・地形に使えるシームレス素材。石、金属、木、砂、溶岩など。" },
        clothing: { spec: "585 × 559 · シャツテンプレート", desc: "標準のシャツテンプレートに描くので、アバターにきれいに巻き付きます。" },
        gfx: { spec: "512 × 512 · PNG", desc: "ポーズを決めたキャラクターのレンダー（GFX）。サムネイル、グループのバナー、SNSに。" },
        sfx: { spec: "WAV · 44.1 kHz", desc: "アイテム取得、クリック、ドア、ヒット、魔法などの短い効果音を、数語の説明から。" }
      }
    },
    groups: {
      kicker: "何をつくる？",
      title: "次のアップデートに、絵もパーツも音も。",
      items: [
        { title: "ストア用の絵", body: "ゲームページ、パス、SNSで使うサムネイル、アイコン、キャラクター画像。", cta: "絵をつくる", tool: "thumbnail" },
        { title: "ゲーム内パーツ", body: "プロジェクトにそのまま入れられるテクスチャ、アバター用シャツ、UIキット。", cta: "パーツをつくる", tool: "texture" },
        { title: "音", body: "アイテム取得、ボタン、ドア、ヒット、魔法。どのシーンにも使える短い効果音。", cta: "音をつくる", tool: "sfx" }
      ]
    },
    built: {
      title: "サイズはぴったり。<br>商用利用もOK。",
      items: [
        ["最初から規定サイズ", "どの種類もプラットフォームが求める寸法と形式で書き出すので、アップロード前のリサイズは不要です。"],
        ["何度でもリロール", "イメージと違えば別のバリエーションを出して、しっくりくるものを選べます。"],
        ["そのまま公開できる", "収益化ゲームを含む商用利用ができます。お客様のプロンプトやファイルを AI の学習に使うことはありません。"],
        ["日本語と英語に対応", "サイトもワークスペースも、2つの言語で使えます。"]
      ]
    },
    numbers: [
      ["7", "種類の素材をひとつの場所で"],
      [J.credits, "クレジット（有料期間1年ごと）"],
      ["1時間", "請求前の無料トライアル"],
      ["30日間", "未使用クレジットの返金保証"]
    ],
    how: {
      kicker: "使い方",
      title: "3ステップで、<br>ファイルが手元に。",
      steps: [
        ["素材を選ぶ", "7種類から選ぶだけ。サイズと形式はセット済みです。"],
        ["イメージを伝える", "主役と雰囲気を書くだけ。スタイルを指定したいときは参考画像も添えられます。"],
        ["ファイルを受け取る", "バリエーションを出して、お気に入りを PNG または WAV でダウンロード。"]
      ]
    },
    ideas: {
      kicker: "アイデア",
      title: "ネタ切れなら、ここから選ぼう。",
      sub: "プロンプトをタップすると、ブラウザ上でラフなサムネイルを描きます。同じアイデアを Blockgoer Pro ならフル解像度の AI 作品に仕上げられます。",
      badge: "ブラウザスケッチ",
      use: "プレビュー",
      items: [
        ["シミュレーター", "光る鉱石を砕き進むドリル"],
        ["シミュレーター", "レベルアップで巨大化するスライム"],
        ["アスレチック", "底なしの闇に浮かぶネオンの足場"],
        ["アスレチック", "渡れるのは3秒だけの動く橋"],
        ["タイクーン", "レモネード屋から超高層ビルへ"],
        ["タイクーン", "金の山へ開く金庫の扉"],
        ["ホラー", "水浸しの地下室で揺れる懐中電灯"],
        ["ホラー", "廊下の突き当たりで待つ何か"],
        ["アドベンチャー", "巨大な滝へ突き進むいかだ"],
        ["アドベンチャー", "ジャングルの奥に隠れた神殿"]
      ]
    },
    pricing: {
      kicker: "料金",
      title: "プランはひとつ。<br>全部使える。",
      sub: `すべての素材とすべての機能が、ひとつの年額プランに。このページの価格は${J.currencyName}・税込です。`,
      free: {
        name: "プレビューモード",
        price: "¥0",
        per: "アカウント不要",
        tag: "無料",
        features: ["7種類の素材をブラウザでスケッチ", "スケッチを保存可能", "お使いの端末内で動作し、入力内容は当社に送信されません"],
        cta: "プレビューを試す"
      },
      planName: "Blockgoer Pro",
      planTag: "年額プラン",
      per: "/年（税込）",
      currencyNote: `${J.currencyName}でのお支払いです。${J.taxNote}`,
      equivalent: `月あたり${J.perMonthEquivalent}。お支払いは年1回です。`,
      keyTerms: `${J.trial}のあと、${J.price}（税込）を年1回お支払い。12か月ごとに自動更新され、いつでも解約できます。`,
      features: [
        `有料期間1年ごとに ${J.credits} クレジット（1クレジット＝アセット1点。UIキットは4クレジット）`,
        "サムネイルから効果音まで、7種類の素材すべて",
        "フル解像度の PNG・WAV をダウンロード",
        "収益化ゲームを含む商用利用OK",
        "日本語・英語のインターフェース",
        `メールサポート（${J.supportResponse}に返信）`
      ],
      cta: "1時間の無料トライアルを開始",
      ctaNote: `カードの登録が必要です。開始から1時間後、それまでに解約しなければ${J.price}が請求されます。`,
      timelineTitle: "お支払いの流れ",
      timeline: [
        ["今日", "トライアル開始", `カードを登録します。今日の請求は¥0です。すべての機能と${J.trialCredits}トライアルクレジットを利用できます。`],
        ["1時間後", `${J.price}を請求`, `${J.priceWithCode}が12か月分として請求され、${J.credits}クレジットが付与されます。1時間以内に解約すれば料金は一切かかりません。`],
        ["30日以内", "気が変わったら", "各年額請求から30日以内にお申し出いただければ、未使用クレジット分を全額返金します。理由は問いません。"],
        ["毎年", "自動で更新", `解約するまで、その時点の年額料金（現在は${J.price}）で自動更新されます。更新の${J.reminderDays}日前までにメールでお知らせし、価格を変更する場合は適用の${J.priceChangeNoticeDays}日前までにご案内します。`]
      ],
      guaranteeTitle: "30日間返金保証",
      guaranteeLine: "未使用クレジット分を全額返金。理由は問いません。",
      guaranteeBody: `各年額請求から${J.refundDays}日以内なら、まだ使っていないクレジット分の料金をすべて返金します。まったく使っていなければ${J.price}を全額返金。${J.refundExample.used}クレジット使用済みなら${J.refundExample.amount}を返金します。返金をもってサブスクリプションは終了します。`,
      descriptorTitle: "カード明細の表記",
      descriptor: `カードの利用明細には「${J.descriptor}」と表示されます。`,
      cardsTitle: "ご利用いただける支払方法",
      cardsNote: "Visa、Mastercard、American Express、JCB、Discover のクレジットカード・デビットカード。決済は PCI DSS に準拠した決済代行会社が処理し、当社がカード番号全体を見たり保存したりすることはありません。",
      cancelTitle: "いつでも解約できます",
      cancelBody: "アカウント → お支払い → サブスクリプションを解約、またはご登録のメールアドレスからサポートへご連絡ください。トライアル中に解約すれば料金は一切かかりません。請求後に解約した場合も、お支払い済みの1年間の終わりまで Pro をご利用いただけます。",
      policyLinks: "詳しくはこちら："
    },
    faq: {
      kicker: "よくある質問",
      title: "スタートの前に、<br>よくある質問。",
      items: [
        ["1時間の無料トライアルはどのような仕組みですか？", `クレジットカードまたはデビットカードを登録してトライアルを開始します。1時間、Pro のすべての機能と${J.trialCredits}トライアルクレジットを利用でき、この間の請求はありません。1時間が経過すると、それまでに解約しない限り、Blockgoer Pro 12か月分として${J.priceWithCode}が自動的に請求されます。トライアルはお一人様・カード1枚につき1回限りです。`],
        ["いつ請求されますか？", `トライアル開始のちょうど1時間後に初回の請求が行われ、その後は解約するまで12か月ごとに同じ日付で請求されます。更新の${J.reminderDays}日前までにお知らせメールを、各請求後には領収メールをお送りします。`],
        ["カード明細にはどのように表示されますか？", `カードの利用明細には「${J.descriptor}」と表示されます。`],
        ["解約方法を教えてください。", "アカウント → お支払い → サブスクリプションを解約、またはご登録のメールアドレスからサポートへご連絡ください。トライアルの1時間以内に解約すれば料金はかかりません。請求後に解約した場合は、以後の請求は行われず、お支払い済みの1年間の終わりまで Pro と残りのクレジットをご利用いただけます。"],
        ["30日間返金保証とは何ですか？", `未使用クレジット分を全額返金します。理由は問いません。各年額請求から${J.refundDays}日以内にお申し出いただくと、「年額料金 × 未使用クレジット ÷ ${J.credits}」を返金します。クレジットを使っていなければ${J.price}を全額返金します。返金は5営業日以内にお支払いに使用したカードへ処理され、明細への反映にはカード会社により5〜10営業日かかる場合があります。返金を行うとサブスクリプションは終了し、その年度の残りのクレジットは削除されます（作成済みの素材は引き続きお客様のものです）。`],
        ["Blockgoer Pro には何が含まれますか？", `有料期間1年ごとに${J.credits}クレジット、7種類のアセットすべて、フル解像度の PNG・WAV ダウンロード、作成したアセットの商用利用、日本語・英語のインターフェースが含まれます。未使用のクレジットは各有料期間の終了時に失効します。`],
        ["アセット1点に何クレジット必要ですか？", `サムネイル、アイコン、テクスチャ、アバター用シャツ、キャラクター画像、効果音は各${PLAN.creditCosts.thumbnail}クレジット、UIキットは${PLAN.creditCosts.ui}クレジットです。作成に失敗した場合、クレジットは自動的に戻ります。`],
        ["支払方法と通貨を教えてください。", `Visa、Mastercard、American Express、JCB、Discover のクレジットカード・デビットカードをご利用いただけます。このサイトでの料金は${J.pricePerYear}で、日本円（JPY）で請求されます。英語サイトでは米ドル建ての料金を表示しています。`],
        ["プレビューモードは無料ですか？", "はい。プレビューモードはブラウザ上（お使いの端末内）で簡易的なラフを描く機能で、アカウント不要・クレジット不要です。AI による作成結果ではありません。フル解像度の AI アセットは Blockgoer Pro で作成できます。"],
        ["作った素材をゲームに入れて収益化できますか？", "はい。作成したアセットは（法律で認められる範囲で）お客様のものとなり、収益化したゲームを含めて商用利用できます。お客様のプロンプト、アップロード画像、作成物を AI の学習に使うことはありません。"],
        ["Blockgoer は Roblox などのゲームプラットフォームと提携していますか？", "いいえ。Blockgoer は ARIELY WON THROUGH INC が提供する独立したサービスであり、Roblox Corporation その他のゲームプラットフォームとの提携・承認・後援関係はありません。"]
      ]
    },
    cta: {
      title: "次のアップデートは、<br>ひとことから。",
      sub: `まずは無料でプレビューを。Blockgoer Pro は${J.trial}から始められ、トライアル後は${J.pricePerYear}です。`,
      trial: "1時間の無料トライアルを開始",
      preview: "無料でプレビュー"
    },
    footer: {
      operatedBy: "Blockgoer の運営会社：",
      company: "会社情報", policies: "規約・ポリシー", product: "プロダクト",
      contact: "お問い合わせ", pay: "ご利用いただけるカード",
      copy: `© ${SITE.copyrightYear} ${J.company}. All rights reserved.`,
      notAffiliated: "Blockgoer は Roblox Corporation その他のゲームプラットフォームとは提携していません。"
    },
    checkout: {
      eyebrow: "お申し込み",
      title: "1時間の無料トライアルを開始",
      sub: "カードを登録する前に、このあと何が起きるかをすべてご確認いただけます。",
      summary: "ご注文内容",
      plan: "Blockgoer Pro — 年額プラン",
      today: "本日のお支払い",
      todayValue: "¥0",
      afterTrial: "1時間のトライアル終了後",
      afterTrialValue: `${J.priceWithCode}／年`,
      renews: "更新",
      renewsValue: `解約するまで12か月ごとに、その時点の年額料金（現在は${J.price}・税込）で自動更新。価格を変更する場合は適用の${J.priceChangeNoticeDays}日前までにメールでご案内します`,
      access: "提供時期",
      accessValue: "カード承認後、トライアル開始と同時にご利用いただけます",
      includes: "含まれるもの",
      includesValue: `年${J.credits}クレジット・7種類のアセットすべて・商用利用`,
      trialCredits: "トライアル中",
      trialCreditsValue: `すべての機能＋${J.trialCredits}トライアルクレジット`,
      timeLine: "カードへの請求時期：",
      timeLineFallback: "トライアル開始からちょうど1時間後（それまでに解約しない場合）",
      timeLineLive: "今すぐトライアルを開始した場合の請求日時：",
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
      title: "Blockgoer へのお問い合わせ",
      sub: `お支払い、アカウント、プロンプトのことで困ったらメールでどうぞ。${J.supportResponse}に日本語または英語で返信します。`,
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
    notFound: {
      eyebrow: "エラー 404",
      title: "ページが見つかりません",
      sub: "リンクが切れているか、ページが移動しました。下のリンクからリスポーンしてください。",
      links: [
        ["ホーム", "どの種類の素材も、ブラウザで無料スケッチできます。", "index.html"],
        ["料金", `${J.trial}のあと${J.pricePerYear}。`, "index.html#pricing"],
        ["規約・ポリシー", "利用規約、プライバシー、返金、解約など。", "legal/index.html"],
        ["お問い合わせ", `${J.email} までメールでどうぞ。`, "contact.html"]
      ]
    },
    legal: {
      eyebrow: "規約・ポリシー",
      hubTitle: "規約・ポリシー",
      hubSub: "Blockgoer の仕組み、お支払い、データの取り扱いをわかりやすくご説明します。",
      effective: "施行日",
      updated: "最終更新日",
      onThisPage: "このページの内容",
      home: "ホーム",
      questions: "このポリシーについてのご質問は",
      read: "読む",
      breadcrumb: "パンくずリスト"
    },
    ws: {
      title: "ブラウザスケッチ",
      demo: "ブラウザ上で描いたラフスケッチです。フル解像度の AI 版は Blockgoer Pro で作成できます。",
      generating: "スケッチ中…",
      download: "スケッチを保存",
      again: "リロール",
      close: "閉じる",
      play: "再生",
      empty: "まず短い説明を入力してください。",
      error: "このブラウザではプレビューを描画できませんでした。別のアセットの種類か、別のブラウザでお試しください。",
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
    checkout: { timeLine: S.checkout.timeLine, timeLineFallback: S.checkout.timeLineFallback, timeLineLive: S.checkout.timeLineLive }
  };
}
