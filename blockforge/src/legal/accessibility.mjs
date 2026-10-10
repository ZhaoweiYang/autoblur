import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

// Derived values, computed from FACTS so the page follows any change in config.mjs.
const H = E.trialHours === 1 ? "hour" : "hours";
const unusedEn = E.refundExample.unused.toLocaleString("en-US");
const unusedJa = J.refundExample.unused.toLocaleString("ja-JP");

export default {
  slug: "accessibility",
  order: 7,
  en: {
    title: "Accessibility Statement",
    nav: "Accessibility",
    description: `${E.brand} aims to meet WCAG 2.2 Level AA. What we do, supported browsers and screen readers, known limitations, and how to get help or send feedback.`,
    body: `
      <p class="lede">${E.company} wants everyone, including people with disabilities, to be able to learn about ${E.brand}, start a trial, buy, use and cancel it without barriers. Our target is WCAG 2.2 Level AA. This statement explains where we stand today, what we do, the limitations we know about, and how to get help by email if anything gets in your way, including help with a purchase, a cancellation or a refund.</p>

      <h2 id="commitment">Our commitment</h2>
      <p>Accessibility is part of how we build ${E.brand}, not an afterthought. We design and review the website and the signed-in workspace so that they can be used with a keyboard, a screen reader, screen magnification, high-contrast settings or reduced motion. We treat accessibility barriers as bugs and fix them as a priority.</p>
      <p>This statement covers the website at blockforgeo.net, including the English and Japanese pages, preview mode, our checkout page and the policy pages, and the signed-in ${E.brand} workspace. The payment page of our payment processor, where you enter your card details, is operated by a third party and is outside the scope of this statement. Because you need it to pay, we still list it under &quot;Known limitations and workarounds&quot; and help you by email if it causes problems.</p>

      <h2 id="conformance">Conformance target and current status</h2>
      <p>Our target is Level AA of the Web Content Accessibility Guidelines (WCAG) 2.2, published by the World Wide Web Consortium (W3C). WCAG explains how to make web content more accessible to people with a wide range of disabilities, including blindness and low vision, deafness and hearing loss, limited movement, and cognitive or learning disabilities. WCAG 2.2 builds on WCAG 2.0, the version on which the Japanese Industrial Standard JIS X 8341-3:2016 is based.</p>
      <p>${E.brand} is <strong>partially conformant</strong> with WCAG 2.2 Level AA. &quot;Partially conformant&quot; means that some parts of the content do not yet fully meet the standard. Most pages, including the home page, pricing, our checkout page and all policy pages, are built to meet Level AA. The parts that do not yet fully meet it are the preview images drawn in your browser and the sound previews, both described under &quot;Known limitations and workarounds&quot;. We will update this statement as we close these gaps.</p>
      <p>This status is based on our own evaluation (a self-assessment), combining automated checks with manual testing using a keyboard and screen readers.</p>

      <h2 id="measures">Measures we take</h2>
      <ul>
        <li><strong>Semantic HTML.</strong> Headings in a logical order, real lists, tables with header cells, page landmarks (header, navigation, main content, footer) and a &quot;Skip to content&quot; link at the top of every page.</li>
        <li><strong>Keyboard navigation.</strong> Every link, button, form field and menu works with the keyboard alone, in a logical order and without keyboard traps. The mobile menu button tells assistive technology whether the menu is open or closed.</li>
        <li><strong>Visible focus.</strong> A clear focus indicator shows where you are on the page.</li>
        <li><strong>Colour contrast.</strong> Text and controls are designed to meet WCAG AA contrast ratios (at least 4.5:1 for normal text and 3:1 for large text and interface components) in both the light and dark themes, and we do not use colour alone to convey information.</li>
        <li><strong>Reduced motion.</strong> When your device is set to reduce motion, we turn off animations and transitions.</li>
        <li><strong>Text alternatives.</strong> Meaningful images have text alternatives or captions, decorative images and icons are hidden from screen readers, and icon-only buttons, such as the theme and menu buttons, have text labels.</li>
        <li><strong>Page language.</strong> Each page declares its language, English or Japanese, and the language switch is marked up so that screen readers pronounce each label in the right language.</li>
        <li><strong>Status messages.</strong> Short notifications are announced to screen readers through a polite live region, without moving your focus.</li>
        <li><strong>Responsive layout.</strong> Pages adapt to small screens and to browser zoom.</li>
        <li><strong>Plain-language policies.</strong> Our terms and policies are web pages written in plain language, not scanned images or PDFs. The price, the ${E.trial}, automatic renewal and refund terms are stated in text before you pay.</li>
        <li><strong>Clear checkout.</strong> On our checkout page, the price, currency, trial terms and the consent checkbox are labelled and can be read by screen readers before you continue to payment.</li>
        <li><strong>Ongoing checks.</strong> We check new pages and features against these measures before we publish them.</li>
      </ul>

      <h2 id="compatibility">Compatibility with browsers and assistive technology</h2>
      <p>${E.brand} is designed to work with:</p>
      <ul>
        <li>recent versions of Google Chrome, Microsoft Edge, Apple Safari and Mozilla Firefox, on desktop and mobile;</li>
        <li>the VoiceOver screen reader on macOS, iPhone and iPad (with Safari), and the NVDA screen reader on Windows (with Chrome or Firefox);</li>
        <li>keyboard-only use, browser zoom, and operating-system settings for high contrast, larger text and reduced motion.</li>
      </ul>
      <p>The website relies on HTML, CSS, WAI-ARIA and JavaScript. The text of every page, including prices and policies, is part of the HTML itself, so you can read it even with JavaScript turned off. Interactive features, such as preview mode and the theme button, need JavaScript. Older browsers such as Internet Explorer are not supported.</p>

      <h2 id="known-limitations">Known limitations and workarounds</h2>
      <p>Despite our efforts, some content is not yet fully accessible:</p>
      <ul>
        <li><strong>Preview images.</strong> Preview mode draws rough preview images locally in your browser. They are visual and have only a short text label with your description, not a full description of what is drawn. <em>Workaround:</em> preview mode is optional and is not the AI service, so you do not need it to understand the plan, start a trial or buy. The page text describes each tool, its output size and its file format. If you would like a description of a preview or of an asset type, email us and we will describe it in writing.</li>
        <li><strong>Sound previews.</strong> Sound previews are short sound effects without a transcript or text description. They contain no speech. <em>Workaround:</em> the description you type stays on screen as text and states the intended sound. On request, we will describe a sound in writing.</li>
        <li><strong>Third-party payment page.</strong> You enter card details on our payment processor&rsquo;s hosted page, which we do not control and cannot change ourselves. <em>Workaround:</em> if you cannot complete payment, email us and we will help, as described in the next section. We report the accessibility problems we learn about to the processor.</li>
      </ul>

      <h2 id="get-help">Other ways to get help, including purchase, cancellation and refund</h2>
      <p>If any part of ${E.brand} is hard to use, you can do everything that matters by email instead. Write to <a href="mailto:${E.email}">${E.email}</a> and we will help you, in English or Japanese:</p>
      <ul>
        <li><strong>Purchase or start a trial.</strong> We explain each step, answer your questions about the plan and send you a direct link to the payment page. Never send your full card number by email; we will never ask for it.</li>
        <li><strong>Cancellation.</strong> Email us from your account email, and we cancel for you and confirm by email. You can also cancel at any time at Account &rarr; Billing &rarr; Cancel subscription.</li>
        <li><strong>Refund.</strong> Ask by email within ${E.refundDays} days after any annual charge, and we process the refund for you within 5 business days.</li>
        <li><strong>Information in another format.</strong> We can send any page of this website, including our terms and policies, as plain text in an email.</li>
      </ul>
      <p>The key terms, in one place:</p>
      <ul>
        <li><strong>Plan:</strong> ${E.brand} Pro, billed annually, at ${E.price} per year in ${E.currencyName} on the English site, or ${J.price} per year including consumption tax, in Japanese yen (${J.currency}), on the Japanese site. You are charged in the currency shown at checkout. ${E.taxNote} Each paid year includes ${E.credits} credits, added when the paid year starts. Unused credits expire at the end of that paid year and do not roll over.</li>
        <li><strong>Free trial:</strong> the ${E.trial} gives you full access and ${E.trialCredits} trial credits. A payment card is required to start it, and there is one trial per person and per payment card. Nothing is charged during the trial. Exactly ${E.trialHours} ${H} after the trial starts, your card is automatically charged the annual fee shown at checkout (${E.price}, or ${J.price} on the Japanese site) for 12 months of Pro, unless you cancel before the trial ends.</li>
        <li><strong>Renewal:</strong> the subscription renews automatically every 12 months at the then-current annual price until you cancel. We email a reminder at least ${E.reminderDays} days before each renewal charge, and a receipt after every charge.</li>
        <li><strong>Card statement:</strong> charges appear on your card statement as &quot;${E.descriptor}&quot;.</li>
        <li><strong>Cancellation:</strong> cancel anytime at Account &rarr; Billing &rarr; Cancel subscription or by email. If you cancel during the trial, you are never charged, and your access ends when the trial ends. If you cancel after a charge, there are no further charges, and you keep Pro and your remaining credits until the end of the current paid year.</li>
      </ul>
      <p class="callout"><strong>${E.refundDays}-Day Money-Back Guarantee:</strong> Full refund on unused credits. No questions asked.</p>
      <p>Within ${E.refundDays} days after any annual charge (the first charge or a renewal), the refund is the annual fee &times; unused credits &divide; ${E.credits}. If you have used no credits, you get the full ${E.price} back. For example, if you used ${E.refundExample.used} credits, ${unusedEn} are unused and the refund is ${E.refundExample.amount}. Trial credits are not counted. We process refunds to your original payment method within 5 business days, and banks usually show them within 5&ndash;10 business days. A refund ends the subscription and removes the remaining credits for that paid year.</p>
      <p>If an accessibility barrier stopped you from cancelling in time, tell us. If your cancellation email reached us before the trial ended or before a renewal was charged, but the charge went through before we acted on it, we refund that charge in full. In any other case, the money-back guarantee applies within ${E.refundDays} days of the charge. Full details are in our <a href="refund.html">Refund Policy</a> and <a href="cancellation.html">Cancellation Policy</a>.</p>

      <h2 id="feedback">Feedback and response time</h2>
      <p>We welcome your feedback. If you meet a barrier, or need content in another format, contact us:</p>
      <ul>
        <li>Email <a href="mailto:${E.email}">${E.email}</a> with the subject &quot;Accessibility&quot;.</li>
        <li>Tell us the page address (URL), what you were trying to do and the problem you met. If you like, also tell us the browser and assistive technology you use.</li>
      </ul>
      <p>We aim to answer all emails ${E.supportResponse}, and we always reply to accessibility feedback within 5 business days. If a fix will take longer, our reply explains what we will do and when, and in the meantime we give you the information or service you need in another way. You can write in English or Japanese.</p>

      <h2 id="review-date">Date of this statement</h2>
      <p>This statement was prepared and last reviewed on ${E.effectiveDate}. We review it at least once a year and whenever we make significant changes to the website or the workspace.</p>

      <h2 id="contact">Contact</h2>
      <p>Send accessibility questions and feedback to ${E.company}, the operator of ${E.brand}:</p>
      <address>${E.company}<br>${E.addressLines.join("<br>")}<br><a href="mailto:${E.email}">${E.email}</a></address>
      <p>We reply to accessibility feedback within 5 business days. You can also reach us through our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "アクセシビリティ方針",
    nav: "アクセシビリティ",
    description: `${J.brand}はWCAG 2.2 レベルAAへの準拠を目標としています。当社の取組み、対応ブラウザと支援技術、既知の制約、メールによるサポートとご意見の窓口をご案内します。`,
    body: `
      <p class="lede">${J.company}は、障害のある方を含むすべての方が、${J.brand}について知り、トライアルを開始し、購入し、利用し、解約するまでの一連の手続を支障なく行えることを目指しています。当社の目標は、WCAG 2.2 レベルAAへの準拠です。本方針では、現在の対応状況、当社の取組み、把握している制約、そしてお困りの際に、購入・解約・返金の手続を含めてメールでサポートを受ける方法をご説明します。</p>

      <h2 id="commitment">基本方針</h2>
      <p>アクセシビリティは、後から付け加えるものではなく、${J.brand}をつくるうえでの前提です。当社は、ウェブサイトとログイン後のワークスペースを、キーボード、スクリーンリーダー、画面拡大、ハイコントラスト設定、動きを減らす設定でもご利用いただけるよう設計・確認しています。アクセシビリティ上の問題は不具合として扱い、優先して修正します。</p>
      <p>本方針は、英語版・日本語版のページ、プレビューモード、当社のお申し込みページ、各種ポリシーページを含むウェブサイト（blockforgeo.net）と、ログイン後の${J.brand}ワークスペースを対象とします。カード情報を入力する決済代行会社の決済ページは、第三者が運営しているため本方針の対象外です。ただし、お支払いに必要なページであるため「既知の制約と代替手段」に記載しており、問題がある場合はメールでサポートします。</p>

      <h2 id="conformance">準拠目標と現在の対応状況</h2>
      <p>当社の目標は、W3C（World Wide Web Consortium）が公開する「ウェブコンテンツ・アクセシビリティ・ガイドライン（WCAG）2.2」のレベルAAです。WCAGは、視覚障害、聴覚障害、肢体不自由、認知・学習障害など、さまざまな障害のある方にとってウェブコンテンツをより利用しやすくするための国際的な指針です。WCAG 2.2は、日本産業規格 JIS X 8341-3:2016 の基になったWCAG 2.0を発展させた版です。</p>
      <p>現在、${J.brand}はWCAG 2.2 レベルAAに<strong>一部準拠</strong>しています。「一部準拠」とは、コンテンツの一部がまだ基準を完全には満たしていないことを意味します。トップページ、料金、当社のお申し込みページ、すべてのポリシーページを含む大部分のページはレベルAAを満たすよう作成していますが、ブラウザ内で描画するプレビュー画像とサウンドのプレビューは、まだ基準を完全には満たしていません（「既知の制約と代替手段」参照）。これらの課題の解消に応じて、本方針を更新します。</p>
      <p>この対応状況は、自動チェックツールによる検査と、キーボードおよびスクリーンリーダーを用いた手動での確認を組み合わせた、当社による自己評価に基づいています。</p>

      <h2 id="measures">当社の取組み</h2>
      <ul>
        <li><strong>セマンティックなHTML：</strong>見出しを論理的な順序で配置し、リスト、見出しセルを備えた表、ランドマーク（ヘッダー、ナビゲーション、メインコンテンツ、フッター）を使用しています。また、すべてのページの先頭に「本文へスキップ」リンクを設けています。</li>
        <li><strong>キーボード操作：</strong>すべてのリンク、ボタン、入力欄、メニューをキーボードだけで論理的な順序で操作でき、フォーカスが特定の箇所から抜け出せなくなること（キーボードトラップ）はありません。モバイル表示のメニューボタンは、メニューの開閉状態を支援技術に伝えます。</li>
        <li><strong>フォーカスの可視化：</strong>現在の操作位置がわかるよう、はっきりとしたフォーカス表示を行っています。</li>
        <li><strong>色のコントラスト：</strong>ライトテーマ・ダークテーマのいずれでも、文字と操作部品がWCAG レベルAAのコントラスト比（通常の文字は4.5:1以上、大きな文字とユーザーインターフェース部品は3:1以上）を満たすよう設計しており、色だけで情報を伝えることはしません。</li>
        <li><strong>動きの抑制：</strong>端末で動きを減らす設定（「視差効果を減らす」など）が有効になっている場合は、アニメーションと切替効果を停止します。</li>
        <li><strong>代替テキスト：</strong>意味のある画像には代替テキストまたはキャプションを付け、装飾的な画像やアイコンはスクリーンリーダーで読み上げられないようにしています。テーマ切替やメニューなど、アイコンだけのボタンにはテキストのラベルを付けています。</li>
        <li><strong>言語の指定：</strong>各ページで言語（英語または日本語）を指定し、言語切替のリンクも、スクリーンリーダーがそれぞれの言語で正しく読み上げるようマークアップしています。</li>
        <li><strong>ステータスメッセージ：</strong>短いお知らせは、フォーカスを移動させることなく、スクリーンリーダーで読み上げられるようにしています。</li>
        <li><strong>レスポンシブなレイアウト：</strong>小さな画面やブラウザの拡大表示に合わせて、ページのレイアウトが調整されます。</li>
        <li><strong>わかりやすい規約類：</strong>利用規約や各種ポリシーは、スキャン画像やPDFではなく、平易な言葉で書いたウェブページとして提供しています。料金、${J.trial}、自動更新、返金の条件は、お支払いの前にテキストで明記しています。</li>
        <li><strong>わかりやすいお申し込みページ：</strong>当社のお申し込みページでは、料金、通貨、トライアルの条件、同意のチェックボックスにラベルを付け、決済に進む前にスクリーンリーダーで内容を確認できるようにしています。</li>
        <li><strong>継続的な確認：</strong>新しいページや機能は、公開前にこれらの取組みに沿っているかを確認しています。</li>
      </ul>

      <h2 id="compatibility">対応ブラウザと支援技術</h2>
      <p>${J.brand}は、次の環境でご利用いただけるよう設計しています。</p>
      <ul>
        <li>Google Chrome、Microsoft Edge、Apple Safari、Mozilla Firefox の最新版（パソコンおよびモバイル端末）</li>
        <li>スクリーンリーダー：macOS、iPhone、iPad の VoiceOver（Safari との組み合わせ）、Windows の NVDA（Chrome または Firefox との組み合わせ）</li>
        <li>キーボードのみでの操作、ブラウザの拡大表示、OSのハイコントラスト、文字サイズの拡大、動きを減らす設定</li>
      </ul>
      <p>ウェブサイトは HTML、CSS、WAI-ARIA、JavaScript を使用しています。料金やポリシーを含む各ページの本文はHTMLそのものに含まれているため、JavaScriptを無効にしていてもお読みいただけます。プレビューモードやテーマ切替などの操作機能にはJavaScriptが必要です。Internet Explorer などの古いブラウザには対応していません。</p>

      <h2 id="known-limitations">既知の制約と代替手段</h2>
      <p>当社は改善に努めていますが、現時点で次のコンテンツは完全にはアクセシブルではありません。</p>
      <ul>
        <li><strong>プレビュー画像：</strong>プレビューモードでは、お客様のブラウザ内で簡易的なプレビュー画像を描画します。これらは視覚的なもので、お客様が入力した説明文を示す短いテキストのラベルしかなく、描画内容の詳しい説明はありません。<em>代替手段：</em>プレビューモードは任意の機能であり、AIサービスそのものではありません。プランの理解、トライアルの開始、購入にプレビューモードは必要ありません。各ツールの内容、出力サイズ、ファイル形式はページ上のテキストで説明しています。プレビューやアセットの種類について説明が必要な場合は、メールでご連絡いただければ文章でご説明します。</li>
        <li><strong>サウンドのプレビュー：</strong>サウンドのプレビューは短い効果音で、書き起こしやテキストによる説明はありません。話し言葉は含まれていません。<em>代替手段：</em>お客様が入力した説明文は画面上にテキストで表示され、意図した効果音の内容を示しています。ご希望があれば、効果音の内容を文章でご説明します。</li>
        <li><strong>第三者の決済ページ：</strong>カード情報は、決済代行会社が提供する決済ページで入力していただきます。このページは当社が管理しておらず、当社が直接変更することはできません。<em>代替手段：</em>お支払いを完了できない場合はメールでご連絡ください。次の「その他のサポート方法」のとおりサポートします。把握したアクセシビリティ上の問題は、決済代行会社に報告します。</li>
      </ul>

      <h2 id="get-help">その他のサポート方法（購入・解約・返金）</h2>
      <p>${J.brand}の操作に難しい点がある場合でも、重要な手続はすべてメールで行えます。<a href="mailto:${J.email}">${J.email}</a> までご連絡いただければ、日本語または英語でサポートします。</p>
      <ul>
        <li><strong>購入・トライアルの開始：</strong>各手順のご説明、プランに関するご質問への回答、決済ページへの直接のリンクのご案内を行います。カード番号の全桁はメールで送らないでください。当社からお尋ねすることもありません。</li>
        <li><strong>解約：</strong>アカウントのメールアドレスからご連絡いただければ、当社が解約の手続を行い、メールで確認をお送りします。「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」からも、いつでも解約できます。</li>
        <li><strong>返金：</strong>年額料金の請求日から${J.refundDays}日以内にメールでお申し出いただければ、当社が返金の手続を行い、5営業日以内に処理します。</li>
        <li><strong>別の形式での情報提供：</strong>利用規約や各種ポリシーを含む本ウェブサイトのページを、テキスト形式でメールにてお送りします。</li>
      </ul>
      <p>主な条件をまとめると、次のとおりです。</p>
      <ul>
        <li><strong>プラン：</strong>${J.brand} Pro（年払い）。日本語サイトでは日本円（${J.currency}）で${J.pricePerYear}、英語サイトでは米ドル（${E.currency}）で年額${E.price}です。お支払いは決済画面に表示された通貨で行われます。日本語サイトの${J.taxNote}英語サイトでは、お住まいの地域により売上税またはVATが加算される場合があり、その金額は確定前に決済画面に表示されます。各有料年度（12か月）には${J.credits}クレジットが含まれ、年度の開始時にアカウントに付与されます。未使用のクレジットはその有料年度の終了時に失効し、繰り越されません。</li>
        <li><strong>無料トライアル：</strong>${J.trial}では、すべての機能とトライアル用クレジット（${J.trialCredits}クレジット）をご利用いただけます。開始にはお支払い用カードの登録が必要で、トライアルはお一人様・カード1枚につき1回限りです。トライアル期間中に料金は発生しません。トライアル開始からちょうど${J.trialHours}時間後、それまでに解約されない場合は、決済画面に表示された年額料金（日本語サイトでは税込${J.price}、英語サイトでは${E.price}）が、12か月分のPro料金として登録カードに自動的に請求されます。</li>
        <li><strong>自動更新：</strong>解約されるまで、12か月ごとにその時点の年額料金で自動更新されます。各更新の請求日の少なくとも${J.reminderDays}日前にお知らせのメールを、請求のたびに領収書のメールをお送りします。</li>
        <li><strong>ご利用明細の表示：</strong>カードのご利用明細には「${J.descriptor}」と表示されます。</li>
        <li><strong>解約：</strong>「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」から、またはメールで、いつでも解約できます。トライアル期間中に解約された場合、料金は一切発生せず、トライアル終了時にご利用が終了します。請求後に解約された場合は、以後の請求は行われず、現在の有料年度の終了時までProの機能と残りのクレジットを引き続きご利用いただけます。</li>
      </ul>
      <p class="callout"><strong>${J.refundDays}日間返金保証：</strong>未使用クレジット分を全額返金します。理由は問いません。</p>
      <p>年額料金の各請求日（初回・更新のいずれも）から${J.refundDays}日以内であれば、「年額料金 &times; 未使用クレジット数 &divide; ${J.credits}」の金額を返金します。クレジットを1つも使用していない場合は、${J.price}を全額返金します。たとえば${J.refundExample.used}クレジットを使用した場合、未使用は${unusedJa}クレジットで、返金額は${J.refundExample.amount}です。トライアル用クレジットは計算に含めません。返金は元のお支払い方法に対して行い、当社は5営業日以内に処理します。カードのご利用明細に反映されるまでには、通常5〜10営業日かかります。返金を行うとサブスクリプションは終了し、その有料年度の残りのクレジットは削除されます。</p>
      <p>アクセシビリティ上の問題により期限内に解約できなかった場合は、ご連絡ください。トライアル終了前または更新の請求前に解約のメールが当社に届いていたにもかかわらず、当社が対応する前に請求が行われた場合は、その請求額を全額返金します。それ以外の場合も、請求日から${J.refundDays}日以内であれば返金保証をご利用いただけます。詳しくは<a href="refund.html">返金ポリシー</a>および<a href="cancellation.html">解約ポリシー</a>をご覧ください。</p>

      <h2 id="feedback">ご意見と回答期間</h2>
      <p>皆さまからのご意見をお待ちしています。利用上の障壁を見つけた場合や、別の形式での情報提供が必要な場合は、次の方法でご連絡ください。</p>
      <ul>
        <li><a href="mailto:${J.email}">${J.email}</a> まで、件名を「アクセシビリティ」または「Accessibility」としてメールをお送りください。</li>
        <li>該当するページのURL、行おうとしていた操作、発生した問題をお知らせください。差し支えなければ、ご利用のブラウザと支援技術もお知らせください。</li>
      </ul>
      <p>すべてのメールに${J.supportResponse}にご返信することを目指しており、アクセシビリティに関するご意見には必ず5営業日以内にご返信します。修正に時間がかかる場合は、対応内容と時期をご返信でお知らせし、それまでの間は必要な情報やサービスを別の方法でご提供します。日本語・英語のいずれでもご連絡いただけます。</p>

      <h2 id="review-date">本方針の作成日</h2>
      <p>本方針は${J.effectiveDate}に作成し、同日に最終確認を行いました。少なくとも年に1回、またウェブサイトやワークスペースに大きな変更を加えた際に見直します。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>アクセシビリティに関するご質問やご意見は、${J.brand}の運営者である${J.company}までお寄せください。</p>
      <address>${J.company}<br>${J.addressLines.join("<br>")}<br><a href="mailto:${J.email}">${J.email}</a></address>
      <p>アクセシビリティに関するご意見には、5営業日以内にご返信します。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、日本語版と英語版との間に齟齬がある場合は英語版が優先します。</p>
    `
  }
};
