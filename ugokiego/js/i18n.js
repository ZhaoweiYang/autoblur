/* Ugokiego i18n — English / Japanese.
 * Elements opt in with:
 *   data-i18n="key"        → textContent
 *   data-i18n-html="key"   → innerHTML (trusted strings from this file only)
 *   data-i18n-ph="key"     → placeholder
 *   data-i18n-title="key"  → title
 *   data-i18n-aria="key"   → aria-label
 * Strings may use {price} {zero} {currency} {descriptor} {email}; values come from js/config.js
 * and follow the current language (EN = USD, JA = JPY).
 */
(function () {
  const DICT = {
    en: {
      'meta.title': 'Ugokiego · Turn Photos into Cinematic Videos',
      'meta.desc': 'Ugokiego turns any photo into a short cinematic video in your browser. Choose a camera motion, aspect ratio and look, then download. Pro: 1-hour free trial, then {price}/year.',

      'nav.examples': 'Examples', 'nav.features': 'Features', 'nav.how': 'How it works',
      'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Start free trial', 'nav.previews': 'Free previews left',

      'hero.badge': '8 cinematic camera motions · English & 日本語',
      'hero.title': 'Turn any <span class="grad">image into video</span> in seconds',
      'hero.lead': 'Upload a photo, choose how the camera moves, and download a smooth, share-ready clip. No editing skills needed.',
      'hero.p1': '1-hour free trial of Pro', 'hero.p2': 'No watermark with Pro', 'hero.p3': 'Export up to 1080p',

      'gen.upload': '1. Upload image',
      'gen.drop': 'Click or drag an image here',
      'gen.dropHint': 'JPG / PNG / WebP · up to 10MB',
      'gen.try': 'Or try a sample:',
      'gen.prompt': '2. Describe the motion (optional)',
      'gen.promptPh': 'Slow zoom in on the subject',
      'gen.motion': 'Camera motion', 'gen.ratio': 'Aspect ratio', 'gen.duration': 'Duration',
      'gen.quality': 'Quality', 'gen.q1080': '1080p (Pro)', 'gen.effect': 'Look',
      'gen.button': 'Generate video',
      'gen.note': 'Rendered in your browser — your image is never uploaded. Free previews are 720p with a watermark.',

      'm.auto': 'Auto (from prompt)', 'm.zoomIn': 'Zoom in', 'm.zoomOut': 'Zoom out',
      'm.panLeft': 'Pan left', 'm.panRight': 'Pan right', 'm.tiltUp': 'Tilt up',
      'm.orbit': 'Orbit', 'm.dolly': 'Dolly zoom', 'm.handheld': 'Handheld',
      'fx.none': 'Natural', 'fx.cinema': 'Cinematic', 'fx.warm': 'Warm film', 'fx.mono': 'Monochrome',

      'out.empty': 'Your video will appear here',
      'out.download': 'Download', 'out.again': 'Regenerate',
      'out.rendering': 'Rendering',

      'stats.motions': 'camera motions', 'stats.ratios': 'aspect ratios',
      'stats.export': 'maximum export (Pro)', 'stats.langs': 'languages: EN / 日本語',

      'ex.title': 'See what Ugokiego can do',
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
      'f.1t': 'Cinematic camera moves', 'f.1d': 'Zoom, pan, tilt, orbit, dolly and handheld — or let your prompt decide.',
      'f.2t': 'Prompt-driven', 'f.2d': 'Describe the motion in English or Japanese and Ugokiego picks the matching camera move.',
      'f.3t': 'Any aspect ratio', 'f.3d': '16:9 for YouTube, 9:16 for TikTok and Reels, 1:1 and 4:3 for feeds.',
      'f.4t': 'Fast rendering', 'f.4d': 'A clip renders in about as long as it plays. Tweak and regenerate as often as you like.',
      'f.5t': 'Film looks', 'f.5d': 'Cinematic letterbox, warm film grain and monochrome grades built in.',
      'f.6t': 'Private by design', 'f.6d': 'Images are processed in your browser and are never uploaded to our servers.',

      'h.title': 'Image to video in 3 steps',
      'h.1t': 'Upload your image', 'h.1d': 'Drop in a photo, illustration or product shot.',
      'h.2t': 'Choose the motion', 'h.2d': 'Type a prompt or pick a camera move, ratio, length and look.',
      'h.3t': 'Generate & download', 'h.3d': 'Preview the result and download it ready to share.',

      'u.title': 'Made for creators and businesses',
      'u.1t': 'Social media', 'u.1d': 'Eye-catching Reels, Shorts and TikToks from your photo library.',
      'u.2t': 'E-commerce', 'u.2d': 'Turn product photos into short motion clips for listings and ads.',
      'u.3t': 'Real estate', 'u.3d': 'Give listing photos a smooth walkthrough feel.',
      'u.4t': 'Artists', 'u.4d': 'Animate illustrations and artwork for portfolios.',
      'u.5t': 'Memories', 'u.5d': 'Bring family photos and travel shots back to life.',
      'u.6t': 'Marketing', 'u.6d': 'Produce video variations for campaigns in minutes.',

      'pr.title': 'Simple, transparent pricing',
      'pr.sub': 'One plan. One yearly price. Everything included.',
      'pr.trialBadge': '1-hour free trial',
      'pr.plan': 'Ugokiego Pro',
      'pr.price': '{price}', 'pr.per': '/ year',
      'pr.billed': 'Billed once a year in {currency}. Free for the first hour.',
      'pr.f1': '150 credits every month (1 credit = 1 video)',
      'pr.f2': 'Export up to 1080p', 'pr.f3': 'No watermark', 'pr.f4': 'Commercial-use license',
      'pr.f5': 'All 8 camera motions and 4 looks',
      'pr.cta': 'Start 1-hour free trial',
      'pr.descriptor': 'Your card statement will show "{descriptor}".',
      'pr.secure': 'Payments are processed securely by Stripe. We never see or store your full card number.',
      'pr.howTitle': 'How billing works',
      'pr.t1h': 'Today', 'pr.t1': 'You pay {zero}. Your 1-hour free trial starts immediately. A card is required.',
      'pr.t2h': 'After 1 hour', 'pr.t2': 'We charge {price} for one year of Pro — unless you cancel before the trial ends.',
      'pr.t3h': 'Every year after', 'pr.t3': 'Pro renews automatically at {price} per year until you cancel. We email you a reminder 7 days before each renewal.',
      'pr.t4h': 'Cancel anytime', 'pr.t4': 'Use the "Manage subscription" link in your receipt email or write to {email}. Cancelling stops future renewals; you keep Pro until the end of the year you paid for.',
      'pr.gTitle': '30-Day Money-Back Guarantee',
      'pr.gText': 'Full refund on unused credits. No questions asked.',
      'pr.gLink': 'Read the refund policy',
      'pr.free': 'Not ready yet? Create 3 free previews (720p, watermarked) right now — no card and no account needed.',

      'co.title': 'Start your free trial',
      'co.plan': 'Plan', 'co.planV': 'Ugokiego Pro — yearly',
      'co.today': 'Due today', 'co.todayV': '{zero}',
      'co.trialEnd': 'Trial ends',
      'co.then': 'Then', 'co.thenV': '{price} per year, renews automatically until you cancel',
      'co.statement': 'Card statement',
      'co.agree': 'I agree to the <a href="terms.html" target="_blank">Terms of Service</a>, <a href="refund.html" target="_blank">Refund Policy</a> and <a href="cancellation.html" target="_blank">Cancellation Policy</a>. I understand my card will be charged {price} when the 1-hour trial ends and every year after that until I cancel.',
      'co.continue': 'Continue to secure checkout',
      'co.note': 'You will enter your card details on Stripe\'s secure checkout page.',
      'co.unavailable': 'Online checkout is temporarily unavailable. Please email {email} and we will set up your subscription.',

      'q.title': 'Frequently asked questions',
      'q.1q': 'What is Ugokiego?', 'q.1a': 'Ugokiego is an online tool that turns a still image into a short video with cinematic camera motion. The name comes from the Japanese word 動き (ugoki), "motion".',
      'q.2q': 'How does the free trial work?', 'q.2a': 'Pro starts with a 1-hour free trial. A card is required. If you cancel within 1 hour, you are not charged. If you do not cancel, we charge {price} when the trial ends for one year of Pro.',
      'q.3q': 'Does the subscription renew automatically?', 'q.3a': 'Yes. Pro renews every year at {price} until you cancel. We email you a reminder 7 days before each renewal.',
      'q.4q': 'How do I cancel?', 'q.4a': 'Use the "Manage subscription" link in your receipt email, or email {email}. Cancelling stops future renewals; you keep Pro until the end of the year you paid for.',
      'q.5q': 'What is your refund policy?', 'q.5a': '30-Day Money-Back Guarantee: within 30 days of any charge we give a full refund on unused credits. No questions asked.',
      'q.6q': 'What will appear on my card statement?', 'q.6a': 'Your card statement will show "{descriptor}".',
      'q.7q': 'Are my images uploaded or stored?', 'q.7a': 'No. Rendering happens in your browser, so your images never leave your device.',
      'q.8q': 'Can I use the videos commercially?', 'q.8a': 'Videos made with Pro include a commercial-use license. You must own or have permission to use the image you upload.',
      'q.9q': 'Which formats are supported?', 'q.9a': 'Upload JPG, PNG or WebP up to 10MB. Videos download as WebM in Chrome, Edge and Firefox, and as MP4 in Safari.',

      'c.title': 'Your photos are ready to move.',
      'c.sub': 'Make 3 free previews now, or start your 1-hour free trial of Pro.',
      'c.button': 'Create a video now',

      'ft.operated': 'Ugokiego is operated by:', 'ft.email': 'Email:',
      'ft.product': 'Product', 'ft.gen': 'Image to Video', 'ft.policies': 'Policies', 'ft.legal': 'Legal',
      'ft.rights': 'All rights reserved.',
      'l.refund': 'Refund Policy', 'l.cancel': 'Cancellation Policy', 'l.shipping': 'Shipping & Delivery Policy',
      'l.cookies': 'Cookie Policy', 'l.dns': 'Do Not Sell or Share My Personal Information',
      'l.terms': 'Terms of Service', 'l.privacy': 'Privacy Policy', 'l.a11y': 'Accessibility Statement',
      'l.dmca': 'DMCA / Copyright', 'l.disclaimer': 'Disclaimer',

      'toast.badFile': 'Please choose a JPG, PNG or WebP image under 10MB.',
      'toast.noCredits': 'You have used your 3 free previews. Start the 1-hour free trial of Pro to keep creating.',
      'toast.done': 'Your video is ready!',
      'toast.unsupported': 'Your browser cannot record video. Please use the latest Chrome, Edge, Firefox or Safari.',
      'toast.pro': '1080p is included with Pro — this preview renders at 720p.',
    },

    ja: {
      'meta.title': 'Ugokiego · 写真を映画のような動画に',
      'meta.desc': 'Ugokiegoは写真をブラウザ上で短いシネマティック動画に変換します。カメラワーク・比率・ルックを選んでダウンロード。Proは1時間の無料トライアル後、年額{price}。',

      'nav.examples': '作例', 'nav.features': '機能', 'nav.how': '使い方',
      'nav.pricing': '料金', 'nav.faq': 'よくある質問', 'nav.cta': '無料トライアル', 'nav.previews': '残りの無料プレビュー',

      'hero.badge': '8種類のカメラワーク · English & 日本語',
      'hero.title': '<span class="grad">画像を動画に</span>、数秒で',
      'hero.lead': '写真をアップロードしてカメラの動きを選ぶだけ。なめらかな動画をそのままダウンロードできます。編集スキルは不要です。',
      'hero.p1': 'Proは1時間の無料トライアル', 'hero.p2': 'Proはウォーターマークなし', 'hero.p3': '最大1080pで書き出し',

      'gen.upload': '1. 画像をアップロード',
      'gen.drop': 'クリックまたはドラッグ＆ドロップ',
      'gen.dropHint': 'JPG / PNG / WebP · 10MBまで',
      'gen.try': 'サンプルで試す：',
      'gen.prompt': '2. 動きを説明（任意）',
      'gen.promptPh': '被写体にゆっくりズームイン',
      'gen.motion': 'カメラワーク', 'gen.ratio': 'アスペクト比', 'gen.duration': '長さ',
      'gen.quality': '画質', 'gen.q1080': '1080p（Pro）', 'gen.effect': 'ルック',
      'gen.button': '動画を生成',
      'gen.note': 'ブラウザ内で処理され、画像がアップロードされることはありません。無料プレビューは720p・ウォーターマーク付きです。',

      'm.auto': '自動（プロンプトから判定）', 'm.zoomIn': 'ズームイン', 'm.zoomOut': 'ズームアウト',
      'm.panLeft': '左へパン', 'm.panRight': '右へパン', 'm.tiltUp': 'ティルトアップ',
      'm.orbit': 'オービット', 'm.dolly': 'ドリーズーム', 'm.handheld': '手持ち風',
      'fx.none': 'ナチュラル', 'fx.cinema': 'シネマ', 'fx.warm': 'ウォームフィルム', 'fx.mono': 'モノクロ',

      'out.empty': 'ここに動画が表示されます',
      'out.download': 'ダウンロード', 'out.again': '再生成',
      'out.rendering': 'レンダリング中',

      'stats.motions': '種類のカメラワーク', 'stats.ratios': '種類のアスペクト比',
      'stats.export': '最大書き出し画質（Pro）', 'stats.langs': '対応言語：EN / 日本語',

      'ex.title': 'Ugokiegoでできること',
      'ex.sub': 'これらの動画はすべて1枚の静止画から作られています。',
      'ex.1t': 'ゴールデンアワー', 'ex.1d': 'ゆっくりズームイン · ウォームフィルム',
      'ex.2t': 'ネオンシティ', 'ex.2d': '右へパン · シネマ',
      'ex.3t': '山あいの湖', 'ex.3d': 'ティルトアップ · ナチュラル',
      'ex.4t': '商品カット', 'ex.4d': 'オービット · スタジオライト',
      'ex.5t': '海風', 'ex.5d': 'ズームアウト · ナチュラル',
      'ex.6t': '春の富士山', 'ex.6d': 'ドリーズーム · ナチュラル',
      'ex.credit': '元画像：Unsplash（Unsplashライセンス）',

      'f.title': '写真に動きを与える機能がすべてそろっています',
      'f.sub': 'タイムラインもキーフレームもプラグインも不要。プロのような動きを。',
      'f.1t': '映画のようなカメラワーク', 'f.1d': 'ズーム、パン、ティルト、オービット、ドリー、手持ち風 — プロンプトにおまかせも可能。',
      'f.2t': 'プロンプトで指示', 'f.2d': '日本語でも英語でも、動きを書くだけで合ったカメラワークを選びます。',
      'f.3t': 'あらゆるアスペクト比', 'f.3d': 'YouTube向け16:9、TikTok・リール向け9:16、フィード向け1:1・4:3。',
      'f.4t': '高速レンダリング', 'f.4d': '再生時間とほぼ同じ時間で完成。何度でも調整・再生成できます。',
      'f.5t': 'フィルムルック', 'f.5d': 'シネマスコープ、ウォームフィルム、モノクロのグレーディングを内蔵。',
      'f.6t': 'プライバシー重視', 'f.6d': '画像はブラウザ内で処理され、当社のサーバーにアップロードされることはありません。',

      'h.title': '3ステップで画像を動画に',
      'h.1t': '画像をアップロード', 'h.1d': '写真、イラスト、商品画像をドロップ。',
      'h.2t': '動きを選ぶ', 'h.2d': 'プロンプトを入力するか、カメラワーク・比率・長さ・ルックを選択。',
      'h.3t': '生成してダウンロード', 'h.3d': 'プレビューを確認して、そのままSNSへ。',

      'u.title': 'クリエイターにもビジネスにも',
      'u.1t': 'SNS', 'u.1d': '手持ちの写真から、目を引くリール・ショート・TikTokを。',
      'u.2t': 'EC・ネットショップ', 'u.2d': '商品写真を商品ページや広告用の短い動画に。',
      'u.3t': '不動産', 'u.3d': '物件写真にルームツアーのような動きを。',
      'u.4t': 'アーティスト', 'u.4d': 'イラストや作品を動かしてポートフォリオに。',
      'u.5t': '思い出', 'u.5d': '家族写真や旅行写真をよみがえらせる。',
      'u.6t': 'マーケティング', 'u.6d': 'キャンペーン用の動画バリエーションを数分で。',

      'pr.title': 'シンプルで明快な料金',
      'pr.sub': 'プランはひとつ。年額ひとつ。すべての機能込み。',
      'pr.trialBadge': '1時間無料トライアル',
      'pr.plan': 'Ugokiego Pro',
      'pr.price': '{price}', 'pr.per': '/ 年',
      'pr.billed': '年に1回、{currency}でのお支払い。最初の1時間は無料です。',
      'pr.f1': '毎月150クレジット（1クレジット＝動画1本）',
      'pr.f2': '最大1080pで書き出し', 'pr.f3': 'ウォーターマークなし', 'pr.f4': '商用利用ライセンス',
      'pr.f5': '8種類のカメラワークと4種類のルック',
      'pr.cta': '1時間無料トライアルを始める',
      'pr.descriptor': 'カードの利用明細には「{descriptor}」と表示されます。',
      'pr.secure': '決済はStripeにより安全に処理されます。当社がカード番号全体を閲覧・保存することはありません。',
      'pr.howTitle': 'お支払いの流れ',
      'pr.t1h': '本日', 'pr.t1': 'お支払いは{zero}。1時間の無料トライアルがすぐに始まります。カードの登録が必要です。',
      'pr.t2h': '1時間後', 'pr.t2': 'トライアル終了前に解約しない場合、Pro 1年分として{price}が請求されます。',
      'pr.t3h': '以降毎年', 'pr.t3': '解約するまで、毎年{price}で自動更新されます。更新の7日前にリマインドメールをお送りします。',
      'pr.t4h': 'いつでも解約可能', 'pr.t4': '領収書メール内の「サブスクリプションの管理」リンク、または{email}へのメールで解約できます。解約後は次回以降の更新が停止され、お支払い済みの期間の終了までProをご利用いただけます。',
      'pr.gTitle': '30日間返金保証',
      'pr.gText': '未使用のクレジットは全額返金。理由は問いません。',
      'pr.gLink': '返金ポリシーを見る',
      'pr.free': 'まずは試したい方へ：カード・アカウント不要で、無料プレビュー（720p・ウォーターマーク付き）を3本作成できます。',

      'co.title': '無料トライアルを始める',
      'co.plan': 'プラン', 'co.planV': 'Ugokiego Pro — 年額',
      'co.today': '本日のお支払い', 'co.todayV': '{zero}',
      'co.trialEnd': 'トライアル終了',
      'co.then': 'その後', 'co.thenV': '年額{price}、解約するまで自動更新',
      'co.statement': 'カード明細の表示',
      'co.agree': '<a href="terms.html" target="_blank">利用規約</a>、<a href="refund.html" target="_blank">返金ポリシー</a>、<a href="cancellation.html" target="_blank">解約ポリシー</a>に同意します。1時間のトライアル終了時およびその後毎年、解約するまでカードに{price}が請求されることを理解しました。',
      'co.continue': '安全な決済ページへ進む',
      'co.note': 'カード情報はStripeの安全な決済ページで入力します。',
      'co.unavailable': '現在オンライン決済をご利用いただけません。{email}までメールでご連絡いただければ、お手続きいたします。',

      'q.title': 'よくある質問',
      'q.1q': 'Ugokiegoとは？', 'q.1a': 'Ugokiegoは、1枚の静止画から映画のようなカメラワークの短い動画を作るオンラインツールです。名前は日本語の「動き」に由来します。',
      'q.2q': '無料トライアルの仕組みは？', 'q.2a': 'Proは1時間の無料トライアルから始まります。カードの登録が必要です。1時間以内に解約すれば料金はかかりません。解約しない場合、トライアル終了時にPro 1年分として{price}が請求されます。',
      'q.3q': '自動更新されますか？', 'q.3a': 'はい。解約するまで毎年{price}で自動更新されます。更新の7日前にリマインドメールをお送りします。',
      'q.4q': '解約方法は？', 'q.4a': '領収書メール内の「サブスクリプションの管理」リンク、または{email}へのメールで解約できます。解約後は次回以降の更新が停止され、お支払い済みの期間の終了までProをご利用いただけます。',
      'q.5q': '返金ポリシーは？', 'q.5a': '30日間返金保証：各請求から30日以内であれば、未使用のクレジットを全額返金します。理由は問いません。',
      'q.6q': 'カードの明細には何と表示されますか？', 'q.6a': 'カードの利用明細には「{descriptor}」と表示されます。',
      'q.7q': '画像はアップロード・保存されますか？', 'q.7a': 'いいえ。処理はブラウザ内で行われるため、画像が端末の外に出ることはありません。',
      'q.8q': '商用利用はできますか？', 'q.8a': 'Proで作成した動画には商用利用ライセンスが含まれます。アップロードする画像の権利または使用許可をお持ちである必要があります。',
      'q.9q': '対応形式は？', 'q.9a': 'JPG・PNG・WebP（10MBまで）をアップロードできます。動画はChrome・Edge・FirefoxではWebM、SafariではMP4でダウンロードされます。',

      'c.title': 'あなたの写真、動き出す準備はできています。',
      'c.sub': '今すぐ無料プレビューを3本作るか、Proの1時間無料トライアルを始めましょう。',
      'c.button': '今すぐ動画を作る',

      'ft.operated': 'Ugokiegoの運営会社：', 'ft.email': 'メール：',
      'ft.product': 'プロダクト', 'ft.gen': '画像から動画', 'ft.policies': 'ポリシー', 'ft.legal': '規約・法的情報',
      'ft.rights': 'All rights reserved.',
      'l.refund': '返金ポリシー', 'l.cancel': '解約ポリシー', 'l.shipping': '配送・提供ポリシー',
      'l.cookies': 'Cookieポリシー', 'l.dns': '個人情報の販売・共有の拒否',
      'l.terms': '利用規約', 'l.privacy': 'プライバシーポリシー', 'l.a11y': 'アクセシビリティ方針',
      'l.dmca': 'DMCA・著作権', 'l.disclaimer': '免責事項',

      'toast.badFile': '10MB以下のJPG・PNG・WebP画像を選択してください。',
      'toast.noCredits': '無料プレビュー3本を使い切りました。続けるにはProの1時間無料トライアルを始めてください。',
      'toast.done': '動画が完成しました！',
      'toast.unsupported': 'お使いのブラウザは動画の録画に対応していません。最新のChrome・Edge・Firefox・Safariをご利用ください。',
      'toast.pro': '1080pはProに含まれます — このプレビューは720pで生成します。',
    },
  };

  const SUPPORTED = Object.keys(DICT);
  const STORE_KEY = 'ugokiego.lang';
  let current = 'en';

  function money(amount, currency) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(amount);
  }

  function vars(lang) {
    const S = window.SITE || {};
    const p = (S.prices && S.prices[lang]) || { amount: 0, currency: 'USD' };
    return {
      price: money(p.amount, p.currency),
      zero: money(0, p.currency),
      currency: p.currency,
      descriptor: S.descriptor || '',
      email: S.email || '',
    };
  }

  function t(key) {
    const raw = (DICT[current] && DICT[current][key]) ?? DICT.en[key] ?? key;
    const v = vars(current);
    return raw.replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
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
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    try { localStorage.setItem(STORE_KEY, lang); } catch (_) { /* ignore */ }
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

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

  window.I18N = { t, apply, money, get lang() { return current; } };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => apply(b.dataset.lang)));
    apply(detect());
  });
})();
