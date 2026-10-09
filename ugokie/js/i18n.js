/* Ugokie i18n — English / Japanese.
 * Elements opt in with:
 *   data-i18n="key"        → textContent
 *   data-i18n-html="key"   → innerHTML (trusted strings from this file only)
 *   data-i18n-ph="key"     → placeholder
 */
(function () {
  const DICT = {
    en: {
      'meta.title': 'Ugokie · Image to Video AI',
      'meta.desc': 'Ugokie turns any photo into a cinematic video in seconds. Upload an image, describe the motion, and download your clip.',

      'nav.examples': 'Examples', 'nav.features': 'Features', 'nav.how': 'How it works',
      'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Start free',

      'hero.badge': '✨ New: 8 cinematic camera motions',
      'hero.title': 'Turn any <span class="grad">image into video</span> with AI',
      'hero.lead': 'Upload a photo, describe the motion, and get a smooth, share-ready clip in seconds. No editing skills needed.',
      'hero.p1': 'Free credits to start', 'hero.p2': 'No watermark on paid plans', 'hero.p3': 'Up to 1080p export',

      'gen.upload': '1. Upload image',
      'gen.drop': 'Click or drag an image here',
      'gen.dropHint': 'JPG / PNG / WebP · up to 10MB',
      'gen.try': 'Or try a sample:',
      'gen.prompt': '2. Describe the motion (optional)',
      'gen.promptPh': 'e.g. Slow zoom in on the subject, soft cinematic light',
      'gen.motion': 'Camera motion', 'gen.ratio': 'Aspect ratio', 'gen.duration': 'Duration',
      'gen.quality': 'Quality', 'gen.q1080': '1080p (Pro)', 'gen.effect': 'Look',
      'gen.button': 'Generate video',
      'gen.note': 'Runs in your browser — your image is never uploaded.',

      'm.auto': 'Auto (from prompt)', 'm.zoomIn': 'Zoom in', 'm.zoomOut': 'Zoom out',
      'm.panLeft': 'Pan left', 'm.panRight': 'Pan right', 'm.tiltUp': 'Tilt up',
      'm.orbit': 'Orbit', 'm.dolly': 'Dolly zoom', 'm.handheld': 'Handheld',
      'fx.none': 'Natural', 'fx.cinema': 'Cinematic', 'fx.warm': 'Warm film', 'fx.mono': 'Monochrome',

      'out.empty': 'Your video will appear here',
      'out.download': 'Download', 'out.again': 'Regenerate',
      'out.rendering': 'Rendering',

      'stats.videos': 'videos created', 'stats.rating': 'average rating',
      'stats.speed': 'avg. render time', 'stats.langs': 'languages: EN / 日本語',

      'ex.title': 'See what Ugokie can do',
      'ex.sub': 'Every clip below started as a single still image.',
      'ex.1t': 'Golden hour', 'ex.1d': 'Slow zoom in · warm film',
      'ex.2t': 'Neon city', 'ex.2d': 'Pan right · cinematic',
      'ex.3t': 'Mountain lake', 'ex.3d': 'Tilt up · natural',
      'ex.4t': 'Product shot', 'ex.4d': 'Orbit · studio light',
      'ex.5t': 'Ocean breeze', 'ex.5d': 'Zoom out · natural',
      'ex.6t': 'Fuji in spring', 'ex.6d': 'Dolly zoom · natural',
      'ex.credit': 'Source photos: Unsplash (Unsplash License).',

      'f.title': 'Everything you need to bring photos to life',
      'f.sub': 'Professional-looking motion without a timeline, keyframes or plug-ins.',
      'f.1t': 'Cinematic camera moves', 'f.1d': 'Zoom, pan, tilt, orbit, dolly and handheld — or let the prompt decide.',
      'f.2t': 'Prompt-driven', 'f.2d': 'Describe what you want in English or Japanese and Ugokie picks the motion.',
      'f.3t': 'Any aspect ratio', 'f.3d': '16:9 for YouTube, 9:16 for TikTok & Reels, 1:1 for feeds.',
      'f.4t': 'Fast rendering', 'f.4d': 'Get your clip in seconds, then tweak and regenerate as many times as you like.',
      'f.5t': 'Film looks', 'f.5d': 'Cinematic letterbox, warm film grain and monochrome grades built in.',
      'f.6t': 'Private by design', 'f.6d': 'Images are processed locally in your browser and never stored.',

      'h.title': 'Image to video in 3 steps',
      'h.1t': 'Upload your image', 'h.1d': 'Drop in a photo, illustration or product shot.',
      'h.2t': 'Describe the motion', 'h.2d': 'Type a prompt or choose a camera move, ratio and length.',
      'h.3t': 'Generate & download', 'h.3d': 'Preview the result and download it ready to share.',

      'u.title': 'Made for creators and businesses',
      'u.1t': 'Social media', 'u.1d': 'Scroll-stopping Reels, Shorts and TikToks from your photo library.',
      'u.2t': 'E-commerce', 'u.2d': 'Turn product photos into motion ads that convert.',
      'u.3t': 'Real estate', 'u.3d': 'Give listing photos a smooth walkthrough feel.',
      'u.4t': 'Artists', 'u.4d': 'Animate illustrations and AI art for portfolios.',
      'u.5t': 'Memories', 'u.5d': 'Bring old family photos and travel shots back to life.',
      'u.6t': 'Marketing', 'u.6d': 'Produce video variations for campaigns in minutes.',

      'p.title': 'Simple, credit-based pricing',
      'p.sub': '1 credit = 1 video. Billed yearly, cancel anytime.',
      'p.freePrice': '$0', 'p.proPrice': '$99', 'p.yr': '/year', 'p.studioPrice': 'Custom',
      'p.free': 'Free', 'p.freeD': 'Try it out, no card required.',
      'p.f1': '3 credits', 'p.f2': '720p export', 'p.f3': 'Watermark', 'p.f4': 'All camera motions',
      'p.freeCta': 'Start free', 'p.popular': 'Most popular',
      'p.proD': 'For creators posting every week.',
      'p.p1': '150 credits / month', 'p.p2': '1080p export', 'p.p3': 'No watermark', 'p.p4': 'Commercial license',
      'p.cta': 'Get Pro',
      'p.studioD': 'For teams and agencies.',
      'p.s1': '600 credits / month', 'p.s2': 'Everything in Pro', 'p.s3': 'Priority rendering', 'p.s4': 'API access',
      'p.studioCta': 'Contact sales',

      'q.title': 'Frequently asked questions',
      'q.1q': 'What is Ugokie?', 'q.1a': 'Ugokie (from Japanese 動く絵, "moving picture") is an online tool that turns a still image into a short video with cinematic camera motion.',
      'q.2q': 'Is it free?', 'q.2a': 'Yes. Every new user gets 3 free credits. Paid plans add more credits, 1080p export and remove the watermark.',
      'q.3q': 'Which image formats are supported?', 'q.3a': 'JPG, PNG and WebP up to 10MB. For best results use an image at least 1024px wide.',
      'q.4q': 'Are my images uploaded or stored?', 'q.4a': 'No. Rendering happens entirely in your browser, so your images never leave your device.',
      'q.5q': 'Can I use the videos commercially?', 'q.5a': 'Videos created on Pro and Studio plans include a commercial license. Make sure you own the rights to the image you upload.',
      'q.6q': 'What format is the downloaded video?', 'q.6a': 'Chrome, Edge and Firefox export WebM; Safari exports MP4. Both play on all major platforms and editors.',

      'c.title': 'Your photos are ready to move.',
      'c.sub': 'Create your first video free — it takes less than a minute.',
      'c.button': 'Create a video now',

      'ft.tag': 'Image to video AI. Made in Tokyo & on the web.',
      'ft.product': 'Product', 'ft.gen': 'Image to Video', 'ft.company': 'Company', 'ft.contact': 'Contact',
      'ft.legal': 'Legal', 'ft.terms': 'Terms of Service', 'ft.privacy': 'Privacy Policy', 'ft.rights': 'All rights reserved.',

      'toast.badFile': 'Please choose a JPG, PNG or WebP image under 10MB.',
      'toast.noCredits': 'You are out of credits. Upgrade to keep creating.',
      'toast.done': 'Your video is ready!',
      'toast.unsupported': 'Your browser cannot record video. Please use the latest Chrome, Edge, Firefox or Safari.',
      'toast.pro': '1080p is a Pro feature — rendering at 720p.',
      'toast.checkout': 'Checkout is not connected yet in this demo.',
    },

    ja: {
      'meta.title': 'Ugokie（うごくえ）· 画像から動画を生成するAI',
      'meta.desc': 'Ugokieは写真を数秒でシネマティックな動画に変換します。画像をアップロードし、動きを指示して、そのままダウンロード。',

      'nav.examples': '作例', 'nav.features': '機能', 'nav.how': '使い方',
      'nav.pricing': '料金', 'nav.faq': 'よくある質問', 'nav.cta': '無料で始める',

      'hero.badge': '✨ 新機能：8種類のカメラワーク',
      'hero.title': 'AIで<span class="grad">画像を動画に</span>',
      'hero.lead': '写真をアップロードして動きを指示するだけ。数秒でなめらかな動画が完成します。編集スキルは不要です。',
      'hero.p1': '無料クレジット付き', 'hero.p2': '有料プランはウォーターマークなし', 'hero.p3': '最大1080pで書き出し',

      'gen.upload': '1. 画像をアップロード',
      'gen.drop': 'クリックまたはドラッグ＆ドロップ',
      'gen.dropHint': 'JPG / PNG / WebP · 10MBまで',
      'gen.try': 'サンプルで試す：',
      'gen.prompt': '2. 動きを説明（任意）',
      'gen.promptPh': '例：被写体にゆっくりズームイン、柔らかい映画のような光',
      'gen.motion': 'カメラワーク', 'gen.ratio': 'アスペクト比', 'gen.duration': '長さ',
      'gen.quality': '画質', 'gen.q1080': '1080p（Pro）', 'gen.effect': 'ルック',
      'gen.button': '動画を生成',
      'gen.note': 'ブラウザ内で処理 — 画像がアップロードされることはありません。',

      'm.auto': '自動（プロンプトから判定）', 'm.zoomIn': 'ズームイン', 'm.zoomOut': 'ズームアウト',
      'm.panLeft': '左へパン', 'm.panRight': '右へパン', 'm.tiltUp': 'ティルトアップ',
      'm.orbit': 'オービット', 'm.dolly': 'ドリーズーム', 'm.handheld': '手持ち風',
      'fx.none': 'ナチュラル', 'fx.cinema': 'シネマ', 'fx.warm': 'ウォームフィルム', 'fx.mono': 'モノクロ',

      'out.empty': 'ここに動画が表示されます',
      'out.download': 'ダウンロード', 'out.again': '再生成',
      'out.rendering': 'レンダリング中',

      'stats.videos': '本の動画を生成', 'stats.rating': '平均評価',
      'stats.speed': '平均生成時間', 'stats.langs': '対応言語：EN / 日本語',

      'ex.title': 'Ugokieでできること',
      'ex.sub': 'これらの動画はすべて1枚の静止画から生まれました。',
      'ex.1t': 'ゴールデンアワー', 'ex.1d': 'ゆっくりズームイン · ウォームフィルム',
      'ex.2t': 'ネオンシティ', 'ex.2d': '右へパン · シネマ',
      'ex.3t': '山あいの湖', 'ex.3d': 'ティルトアップ · ナチュラル',
      'ex.4t': '商品カット', 'ex.4d': 'オービット · スタジオライト',
      'ex.5t': '海風', 'ex.5d': 'ズームアウト · ナチュラル',
      'ex.6t': '春の富士山', 'ex.6d': 'ドリーズーム · ナチュラル',
      'ex.credit': '元画像：Unsplash（Unsplashライセンス）',

      'f.title': '写真に命を吹き込む、必要な機能がすべて',
      'f.sub': 'タイムラインもキーフレームもプラグインも不要。プロのような動きを。',
      'f.1t': '映画のようなカメラワーク', 'f.1d': 'ズーム、パン、ティルト、オービット、ドリー、手持ち風 — プロンプトにおまかせも可能。',
      'f.2t': 'プロンプトで指示', 'f.2d': '日本語でも英語でも、イメージを書くだけで最適な動きを選びます。',
      'f.3t': 'あらゆるアスペクト比', 'f.3d': 'YouTube向け16:9、TikTok・リール向け9:16、フィード向け1:1。',
      'f.4t': '高速レンダリング', 'f.4d': '数秒で完成。気に入るまで何度でも調整・再生成できます。',
      'f.5t': 'フィルムルック', 'f.5d': 'シネマスコープ、ウォームフィルム、モノクロのグレーディングを内蔵。',
      'f.6t': 'プライバシー重視', 'f.6d': '画像はブラウザ内で処理され、保存されることはありません。',

      'h.title': '3ステップで画像を動画に',
      'h.1t': '画像をアップロード', 'h.1d': '写真、イラスト、商品画像をドロップ。',
      'h.2t': '動きを指示', 'h.2d': 'プロンプトを入力するか、カメラワーク・比率・長さを選択。',
      'h.3t': '生成してダウンロード', 'h.3d': 'プレビューを確認して、そのままSNSへ。',

      'u.title': 'クリエイターにもビジネスにも',
      'u.1t': 'SNS', 'u.1d': '手持ちの写真から、目を引くリール・ショート・TikTokを。',
      'u.2t': 'EC・ネットショップ', 'u.2d': '商品写真を成果につながる動画広告に。',
      'u.3t': '不動産', 'u.3d': '物件写真にルームツアーのような動きを。',
      'u.4t': 'アーティスト', 'u.4d': 'イラストやAIアートを動かしてポートフォリオに。',
      'u.5t': '思い出', 'u.5d': '昔の家族写真や旅行写真をよみがえらせる。',
      'u.6t': 'マーケティング', 'u.6d': 'キャンペーン用の動画バリエーションを数分で。',

      'p.title': 'シンプルなクレジット制料金',
      'p.sub': '1クレジット＝動画1本。年払い・いつでも解約できます。',
      'p.freePrice': '¥0', 'p.proPrice': '¥15,199', 'p.yr': '/年', 'p.studioPrice': '要相談',
      'p.free': 'フリー', 'p.freeD': 'まずはお試し。カード登録不要。',
      'p.f1': '3クレジット', 'p.f2': '720pで書き出し', 'p.f3': 'ウォーターマークあり', 'p.f4': '全カメラワーク',
      'p.freeCta': '無料で始める', 'p.popular': '一番人気',
      'p.proD': '毎週投稿するクリエイターに。',
      'p.p1': '毎月150クレジット', 'p.p2': '1080pで書き出し', 'p.p3': 'ウォーターマークなし', 'p.p4': '商用利用OK',
      'p.cta': 'Proにする',
      'p.studioD': 'チーム・代理店向け。',
      'p.s1': '毎月600クレジット', 'p.s2': 'Proの全機能', 'p.s3': '優先レンダリング', 'p.s4': 'APIアクセス',
      'p.studioCta': 'お問い合わせ',

      'q.title': 'よくある質問',
      'q.1q': 'Ugokieとは？', 'q.1a': 'Ugokie（うごくえ／動く絵）は、1枚の静止画から映画のようなカメラワークの短い動画を作るオンラインツールです。',
      'q.2q': '無料で使えますか？', 'q.2a': 'はい。新規ユーザーには3クレジットを無料で差し上げます。有料プランではクレジットの追加、1080p書き出し、ウォーターマークの削除が可能です。',
      'q.3q': '対応している画像形式は？', 'q.3a': 'JPG、PNG、WebP（10MBまで）に対応しています。幅1024px以上の画像がおすすめです。',
      'q.4q': '画像はアップロード・保存されますか？', 'q.4a': 'いいえ。処理はすべてお使いのブラウザ内で行われるため、画像が端末の外に出ることはありません。',
      'q.5q': '商用利用はできますか？', 'q.5a': 'ProおよびStudioプランで作成した動画は商用利用が可能です。アップロードする画像の権利をお持ちであることをご確認ください。',
      'q.6q': 'ダウンロードされる動画の形式は？', 'q.6a': 'Chrome・Edge・FirefoxではWebM、SafariではMP4で書き出されます。どちらも主要なプラットフォームや編集ソフトで再生できます。',

      'c.title': 'あなたの写真、動き出す準備はできています。',
      'c.sub': '最初の動画は無料。1分もかかりません。',
      'c.button': '今すぐ動画を作る',

      'ft.tag': '画像から動画へ、AIで。東京とウェブから。',
      'ft.product': 'プロダクト', 'ft.gen': '画像から動画', 'ft.company': '会社情報', 'ft.contact': 'お問い合わせ',
      'ft.legal': '規約', 'ft.terms': '利用規約', 'ft.privacy': 'プライバシーポリシー', 'ft.rights': 'All rights reserved.',

      'toast.badFile': '10MB以下のJPG・PNG・WebP画像を選択してください。',
      'toast.noCredits': 'クレジットがなくなりました。アップグレードして作成を続けましょう。',
      'toast.done': '動画が完成しました！',
      'toast.unsupported': 'お使いのブラウザは動画の録画に対応していません。最新のChrome・Edge・Firefox・Safariをご利用ください。',
      'toast.pro': '1080pはPro機能です — 720pで生成します。',
      'toast.checkout': 'このデモでは決済はまだ接続されていません。',
    },
  };

  const SUPPORTED = Object.keys(DICT);
  const STORE_KEY = 'ugokie.lang';
  let current = 'en';

  function detect() {
    const q = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(q)) return q;
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (_) { /* storage blocked */ }
    const nav = (navigator.languages || [navigator.language || 'en']).join(',').toLowerCase();
    return nav.startsWith('ja') || nav.includes(',ja') ? 'ja' : 'en';
  }

  function t(key) {
    return (DICT[current] && DICT[current][key]) ?? DICT.en[key] ?? key;
  }

  function apply(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    current = lang;
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.desc'));

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    try { localStorage.setItem(STORE_KEY, lang); } catch (_) { /* ignore */ }
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  window.I18N = { t, apply, get lang() { return current; } };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => apply(b.dataset.lang)));
    apply(detect());
  });
})();
