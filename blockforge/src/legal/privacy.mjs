import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

export default {
  slug: "privacy",
  order: 2,
  en: {
    title: "Privacy Policy",
    nav: "Privacy",
    description: `How ${E.company} collects, uses and protects personal data on ${E.brand}: no AI training on your content, no data sales, retention and your rights.`,
    body: `
      <p class="lede">This Privacy Policy explains what personal information ${E.company} collects when you use ${E.brand}, why we use it, who helps us process it, how long we keep it and the choices you have. In short: we collect only what we need to run the service and bill you, we never use your prompts, uploads or generated assets to train AI models, we do not sell or share your personal information, and we use no advertising or analytics cookies.</p>

      <h2 id="who-we-are">Who we are and what this policy covers</h2>
      <p>${E.brand} (blockforge.vip) is operated by ${E.company}, located at ${E.addressOneLine}. ${E.company} is the controller of your personal information for the purposes of the EU and UK General Data Protection Regulation (GDPR), the &quot;business&quot; or &quot;controller&quot; under US state privacy laws, and the business operator handling personal information under Japan's Act on the Protection of Personal Information (APPI).</p>
      <p>${E.brand} is an online creative tool for game creators. In a web workspace, subscribers describe what they want and ${E.brand} generates game assets with AI: thumbnails, icons, textures, clothing images, character renders (GFX), UI layouts and short sound effects. Everything is delivered digitally.</p>
      <p>This policy covers the ${E.brand} marketing website, the free preview mode, the signed-in workspace, checkout and billing, our emails and customer support. It does not cover third-party websites we link to, or the hosted payment page run by our payment processor, which has its own privacy notice.</p>

      <h2 id="information-we-collect">Information we collect</h2>
      <p>We collect the categories of personal information below. We do not ask for government identification numbers, precise location, health information or similar sensitive data, and we never receive your full card number.</p>
      <table>
        <thead><tr><th>Category</th><th>Examples</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>Account information</td><td>Email address, optional display name, and the session data that keeps you signed in</td><td>You, when you start a trial or sign in</td></tr>
          <tr><td>Billing information</td><td>Card brand, last four digits, expiry date, billing country and postal code; plan, charge, renewal and refund history</td><td>Our payment processor, and our own billing records</td></tr>
          <tr><td>Prompts and reference images</td><td>The text descriptions you enter in the workspace and any images you upload as a reference</td><td>You</td></tr>
          <tr><td>Generated assets</td><td>Images (PNG), sound effects (WAV) and UI layer lists the service creates for you</td><td>Created by the service at your request</td></tr>
          <tr><td>Usage records</td><td>Credit balance, credits used and returned, which tools you used and when, and the status of each generation</td><td>Recorded automatically when you use the workspace</td></tr>
          <tr><td>Support messages</td><td>Emails you send us, any attachments, and our replies</td><td>You</td></tr>
          <tr><td>Technical data</td><td>IP address, browser type and version, device type, operating system, and server logs (requests, timestamps, errors)</td><td>Your browser or device, automatically</td></tr>
          <tr><td>Email preferences</td><td>Whether you opted in to marketing emails, and any unsubscribe request</td><td>You</td></tr>
        </tbody>
      </table>
      <p>Preview mode on the marketing website draws rough previews locally in your browser. It needs no account, uses no credits and does not send what you type to us or to any AI provider. The website also keeps three small functional settings in your browser (language, theme, and whether you closed the quick-create bar); see our <a href="cookies.html">Cookie Policy</a>.</p>
      <p>You must give us an email address, and enter a payment card on our payment processor's checkout page, to start the trial and subscribe. We need them to provide and bill the service, so without them we cannot open a paid account. A display name, reference images and marketing consent are optional.</p>
      <p>Please do not put sensitive personal information, or anyone else's personal information, into prompts or reference images unless you have the right to share it.</p>

      <h2 id="how-we-use-information">How we use information and our legal bases</h2>
      <p>We use personal information only for the purposes below. If you are in the European Economic Area (EEA) or the United Kingdom, the GDPR requires us to state a legal basis for each purpose; it is shown in the right-hand column.</p>
      <table>
        <thead><tr><th>Purpose</th><th>What it involves</th><th>Legal basis (EEA/UK)</th></tr></thead>
        <tbody>
          <tr><td>Provide the service</td><td>Create and maintain your account, run generations, store your assets, add and deduct credits, automatically return credits when a generation fails, and keep the workspace working</td><td>Performance of our contract with you</td></tr>
          <tr><td>Billing</td><td>Start the ${E.trial}; charge the annual fee automatically exactly ${E.trialHours} hour after the trial starts, unless you cancel before then (${E.price} in ${E.currency} on the English site, or ${J.price} in JPY, consumption tax included, on the Japanese site; you are charged in the currency shown at checkout); renew every 12 months at the then-current annual price; process cancellations and refunds under our ${E.refundDays}-day money-back guarantee; and keep tax and accounting records. Charges appear on your card statement as &quot;${E.descriptor}&quot;.</td><td>Performance of our contract; compliance with legal obligations (tax and accounting records)</td></tr>
          <tr><td>Fraud prevention</td><td>Detect payment fraud and abuse, enforce one free trial per person and payment card, and handle chargebacks</td><td>Our legitimate interests in protecting customers and our business</td></tr>
          <tr><td>Customer support</td><td>Answer questions in English or Japanese and help with billing, refunds and cancellations</td><td>Performance of our contract; our legitimate interests in helping users</td></tr>
          <tr><td>Security</td><td>Keep you signed in safely, protect against unauthorised access, cross-site request forgery and misuse, and investigate breaches of our <a href="terms.html">Terms of Service</a></td><td>Our legitimate interests in a secure service; compliance with legal obligations</td></tr>
          <tr><td>Service emails</td><td>Send the trial confirmation (with the trial end time and how to cancel), a receipt after every charge, a reminder at least ${E.reminderDays} days before each renewal charge, notice at least ${E.priceChangeNoticeDays} days before a price change applies to your renewal, and refund, cancellation and security notices</td><td>Performance of our contract; compliance with legal obligations</td></tr>
          <tr><td>Legal compliance</td><td>Meet tax, accounting and consumer-protection obligations, respond to lawful requests, handle copyright notices, and establish or defend legal claims</td><td>Compliance with legal obligations; our legitimate interests in defending legal claims</td></tr>
          <tr><td>Marketing emails</td><td>Send product news and offers, only if you opted in</td><td>Your consent, which you can withdraw at any time</td></tr>
          <tr><td>Website fonts</td><td>Load web fonts from Google Fonts so pages display correctly</td><td>Our legitimate interests in a consistent, readable website</td></tr>
        </tbody>
      </table>
      <p>Where we rely on legitimate interests, we have weighed them against your rights, and you may object (see &quot;Your privacy rights&quot;). We do not use personal information for purposes incompatible with those listed here. We do not make decisions based solely on automated processing that produce legal or similarly significant effects about you.</p>

      <h2 id="ai-processing">AI processing and no training</h2>
      <p>When you generate an asset, your prompt and any reference image are sent to an AI model inference provider solely to create that output. The result is returned to your workspace and stored there until you delete it, or until 30 days after your account is closed.</p>
      <ul>
        <li><strong>No training.</strong> ${E.brand} does not use your prompts, uploads or generated assets to train AI models. Our AI inference providers process prompts only to generate the output, under contracts that forbid them from training on your content.</li>
        <li><strong>Limited access.</strong> Our staff look at prompts, uploads or outputs only when needed to provide the service, answer a support request you send, investigate a suspected breach of our Terms of Service, or comply with the law.</li>
        <li><strong>Your content stays yours.</strong> You keep ownership of your prompts and reference images and, to the extent the law allows, of the assets you generate. You give us a limited licence to process and store them only to provide the service.</li>
        <li><strong>No profiling.</strong> We do not use your prompts or outputs to build advertising profiles or to make decisions about you.</li>
      </ul>

      <h2 id="service-providers">Service providers and other disclosures</h2>
      <p>We disclose personal information to the service providers below, which process it for us. Under our contracts they may use it only to provide their services to us, and they must protect it. Google Fonts is the exception noted in its entry. The categories are:</p>
      <ul>
        <li><strong>Payment processor</strong> — a PCI DSS–compliant processor that handles checkout, card charges, renewals and refunds. It receives your card details directly; we receive only the card brand, last four digits, expiry date and billing country and postal code.</li>
        <li><strong>Cloud hosting</strong> — stores and runs the website, the workspace, your account data and your assets in the United States.</li>
        <li><strong>Email delivery</strong> — sends service emails and, if you opted in, marketing emails.</li>
        <li><strong>AI model inference providers</strong> — receive prompts and reference images only to generate outputs, under contracts that forbid training on them.</li>
        <li><strong>Customer-support tooling</strong> — helps us receive, track and answer support emails.</li>
        <li><strong>Google Fonts</strong> — the website loads fonts from Google's servers, so your browser sends your IP address and basic browser information to Google when a page loads. Google receives this directly from your browser and handles it under the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. We do not send Google any other information about you.</li>
      </ul>
      <p>We may also disclose personal information:</p>
      <ul>
        <li>when the law requires it, for example in response to a valid court order;</li>
        <li>to protect the rights, safety or property of our users, other people or ${E.company}, including to prevent fraud;</li>
        <li>to a successor if ${E.company} is involved in a merger, acquisition or sale of assets, in which case this policy continues to apply to your information and we will notify you; or</li>
        <li>when you direct us to.</li>
      </ul>

      <h2 id="no-sale-or-sharing">No sale, no sharing, no tracking cookies</h2>
      <p class="callout">We do not sell your personal information and do not share it for cross-context behavioural advertising. We use no advertising or analytics cookies.</p>
      <p>We have not sold or shared personal information in the past 12 months. We do not use advertising networks, tracking pixels, analytics tools or data brokers. The marketing website stores only functional preferences in your browser (<code>bf-lang</code>, <code>bf-theme</code> and <code>bf-dock</code>); the signed-in workspace uses an essential session cookie and a CSRF-protection cookie; and our payment processor's checkout page may set its own cookies for fraud prevention and security. Details are in our <a href="cookies.html">Cookie Policy</a>.</p>
      <p>We honour Global Privacy Control (GPC) signals as a valid request to opt out of the sale and sharing of personal information and of targeted advertising. Because we do not track you across websites, &quot;Do Not Track&quot; signals do not change how the site behaves. See <a href="do-not-sell.html">Do Not Sell or Share My Personal Information</a>.</p>

      <h2 id="retention">How long we keep information</h2>
      <p>We keep personal information only for as long as we need it for the purposes above:</p>
      <table>
        <thead><tr><th>Information</th><th>Retention period</th></tr></thead>
        <tbody>
          <tr><td>Account information, usage records, email preferences and support messages</td><td>While your account is open, plus 30 days after your account is closed</td></tr>
          <tr><td>Prompts, reference images and generated assets</td><td>Until you delete them, or 30 days after your account is closed, whichever comes first</td></tr>
          <tr><td>Billing and tax records (charges, refunds, receipts, card brand and last four digits)</td><td>7 years, to meet tax and accounting obligations</td></tr>
          <tr><td>Server logs, including IP addresses</td><td>90 days</td></tr>
          <tr><td>Website preferences stored in your browser</td><td><code>bf-lang</code> and <code>bf-theme</code> until you clear your browser storage; <code>bf-dock</code> until you close the browser tab</td></tr>
        </tbody>
      </table>
      <p>We keep specific information longer only where the law requires it or where it is needed to establish, exercise or defend a legal claim, and only for as long as that need lasts. When a retention period ends, we delete the information or irreversibly anonymise it. Copies of deleted information can remain in secure backups for a limited time, until the backups are overwritten in the normal backup cycle. We restore a backup only to recover from a system failure, and we do not use backup copies for any other purpose.</p>

      <h2 id="international-transfers">International data transfers</h2>
      <p>${E.company} is based in the United States, and we store and process personal information in the United States. If you use ${E.brand} from Japan, the EEA, the UK or anywhere else, your information is transferred to and processed in the United States, where data protection laws may differ from those in your country.</p>
      <p>The United States has no single comprehensive federal privacy law. Personal information is protected by sector-specific federal laws, the Federal Trade Commission Act and state laws such as the CCPA/CPRA and the Colorado Privacy Act. We protect your information as described in this policy wherever it is processed. Where the GDPR or UK GDPR requires a transfer mechanism for our service providers, we use the European Commission's Standard Contractual Clauses (with the UK Addendum) or rely on the provider's certification under the EU–US Data Privacy Framework and its UK Extension. For users in Japan, we require our service providers by contract to take measures equivalent to those required under the APPI.</p>

      <h2 id="security">Security</h2>
      <p>We use administrative, technical and physical safeguards appropriate to the risk, including:</p>
      <ul>
        <li>encryption in transit (HTTPS/TLS) for the website, the workspace and checkout;</li>
        <li>card payments handled entirely by a PCI DSS–compliant payment processor, so we never see or store full card numbers;</li>
        <li>secure session cookies and CSRF protection in the workspace;</li>
        <li>access to personal information limited to staff who need it for their work;</li>
        <li>contracts requiring service providers to keep information confidential and secure; and</li>
        <li>periodic review of our safeguards, taking into account the legal environment in the United States, where the data is stored.</li>
      </ul>
      <p>No system is perfectly secure. If a security incident affects your personal information, we will notify you and the relevant authorities as the law requires. Please keep your email account secure, because we verify requests and send billing notices through your account email.</p>

      <h2 id="your-rights">Your privacy rights</h2>
      <p>Depending on where you live, you have some or all of the rights below. We handle every request through the process in &quot;How to exercise your rights&quot;.</p>

      <h3>United States: California, Colorado and other states</h3>
      <p>Under the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), the Colorado Privacy Act and the comprehensive consumer privacy laws of other US states, you may have the rights below. The exact rights vary by state; we apply the same process, timing and appeal route to every US resident.</p>
      <ul>
        <li><strong>Know and access</strong> the categories and specific pieces of personal information we hold about you, its sources, our purposes and the categories of recipients;</li>
        <li><strong>Correct</strong> inaccurate personal information;</li>
        <li><strong>Delete</strong> personal information we collected from you, subject to legal exceptions such as billing records we must keep for tax purposes;</li>
        <li><strong>Portability</strong>: receive your personal information in a portable, commonly used format;</li>
        <li><strong>Opt out</strong> of the sale or sharing of personal information, targeted advertising, and profiling in furtherance of decisions that produce legal or similarly significant effects (we do none of these);</li>
        <li><strong>Limit</strong> the use of sensitive personal information (we use it only for purposes the law permits, such as keeping your account secure);</li>
        <li><strong>Appeal</strong> our decision on your request; and</li>
        <li><strong>Non-discrimination</strong>: we will not deny you service, charge you a different price or give you a different quality of service because you exercised your rights.</li>
      </ul>
      <p>In the past 12 months we have collected these categories of personal information as defined by the CCPA: identifiers (email address, display name, IP address); customer records (billing country and postal code, card brand, last four digits and expiry date); commercial information (plan, charges, refunds and credit usage); internet or other electronic network activity (usage records, browser and device data, server logs); audio, electronic or visual information (reference images you upload and assets you generate, to the extent they relate to you); and sensitive personal information limited to the data needed to sign in to your account. We collected them from the sources, and used them for the business purposes, described above, and disclosed each category only to the service providers listed above. We do not draw inferences about you.</p>

      <h3>Japan: Act on the Protection of Personal Information (APPI)</h3>
      <p>If you are in Japan, the APPI lets you ask us to:</p>
      <ul>
        <li>disclose the retained personal data we hold about you and our records of any provision of it to third parties;</li>
        <li>correct, add to or delete retained personal data that is inaccurate;</li>
        <li>stop using or erase data that is used beyond the purposes of use or was obtained improperly, that we no longer need, that has been involved in a data breach, or whose handling may harm your rights or legitimate interests; and</li>
        <li>stop providing your data to third parties where the law gives you that right.</li>
      </ul>
      <p>Our purposes of use are those listed in &quot;How we use information and our legal bases&quot;. We do not provide personal data to third parties except to service providers entrusted with processing on our behalf, or where the law permits. We disclose the name of our representative without delay on request. Complaints about how we handle personal information go to the address in &quot;Contact&quot; below. You may also consult Japan's Personal Information Protection Commission.</p>

      <h3>EEA and UK: GDPR</h3>
      <p>If the GDPR or UK GDPR applies to you, you have the right to:</p>
      <ul>
        <li>access your personal data and receive a copy;</li>
        <li>have inaccurate data rectified, and have data erased;</li>
        <li>restrict processing, and receive your data in a portable format;</li>
        <li>object to processing based on our legitimate interests, and object at any time to processing for direct marketing;</li>
        <li>withdraw consent at any time, without affecting processing that took place before; and</li>
        <li>not be subject to decisions based solely on automated processing that significantly affect you.</li>
      </ul>
      <p>You also have the right to lodge a complaint with the data protection authority where you live or work or where an alleged infringement took place, or, in the UK, with the Information Commissioner's Office (ICO). We would appreciate the chance to address your concern first.</p>

      <h2 id="exercising-your-rights">How to exercise your rights</h2>
      <ol>
        <li><strong>Send a request.</strong> Email <a href="mailto:${E.email}">${E.email}</a>, ideally from the email address on your ${E.brand} account, with the subject &quot;Privacy Request&quot;. Tell us which right you want to exercise and where you live, so we can apply the right law.</li>
        <li><strong>Verification.</strong> We verify your identity through your account email: we reply to the address on file and ask you to confirm the request. If you no longer have access to it, we may ask for a few details only the account holder would know, such as the date and amount of a recent charge and the last four digits of the card used. We use these details only to verify the request.</li>
        <li><strong>Timing.</strong> We confirm receipt within 10 business days and answer within 45 days. If we need more time, we may extend once by up to 45 more days, and we will tell you why before the first 45 days end. Where a law sets a shorter deadline, we meet it: for example, one month under the GDPR, and without delay under the APPI. Opt-out requests are carried out within 15 business days.</li>
        <li><strong>Authorised agents.</strong> Someone you authorise may submit a request for you if they provide permission signed by you. We may still ask you to verify your identity directly with us or to confirm that you gave permission, unless the agent holds a power of attorney that is valid under applicable law.</li>
        <li><strong>Appeals.</strong> If we decline your request in whole or in part, we will explain why. You can appeal by replying to our decision email with &quot;Appeal&quot; in the subject. We will respond in writing within 45 days, explain the outcome and, if we deny the appeal, tell you how to contact your state Attorney General (for Colorado residents, the Colorado Attorney General) or the relevant authority.</li>
      </ol>
      <p>Requests are free of charge. Where the law allows, we may decline, or charge a reasonable fee for, requests that are manifestly unfounded, excessive or repetitive, and we will explain why.</p>

      <h2 id="children">Children</h2>
      <p>${E.brand} is not directed to children under 13, and we do not knowingly collect personal information from them. If we learn that a child under 13 has created an account, we delete the account and its data. Users aged 13 to 17 may use ${E.brand} only with a parent or legal guardian who accepts our <a href="terms.html">Terms of Service</a> for them and manages billing. You must be at least 18, or the age of majority where you live if that is higher, to start a trial or make a purchase. We do not sell or share the personal information of anyone, including consumers under 16. If you believe a child under 13 has given us personal information, please email <a href="mailto:${E.email}">${E.email}</a> and we will delete it.</p>

      <h2 id="emails">Service and marketing emails</h2>
      <p><strong>Service emails.</strong> We send the emails you need to manage your subscription: the trial confirmation with the exact trial end time and how to cancel; a receipt after every charge; a reminder at least ${E.reminderDays} days before each annual renewal charge; notice at least ${E.priceChangeNoticeDays} days before a price change applies to your renewal; confirmations of cancellations and refunds; and security or legal notices. Because these emails concern your contract and your charges, you cannot unsubscribe from them while your account is active.</p>
      <p><strong>Marketing emails.</strong> We send product news or offers only if you opt in. Every marketing email contains an unsubscribe link, and you can also opt out by emailing <a href="mailto:${E.email}">${E.email}</a>. We act on opt-outs promptly, and within 10 business days at the latest. Unsubscribing from marketing does not affect service emails.</p>

      <h2 id="changes">Changes to this policy</h2>
      <p>We may update this policy when our service, our providers or our legal obligations change. We will post the new version on this page with a new &quot;Last updated&quot; date. If a change is material, for example a new purpose or a new type of recipient, we will tell you by email or with a notice in the workspace before it takes effect, and ask for your consent where the law requires it. We will not start selling or sharing personal information without first updating this policy and giving you the notice and choices the law requires.</p>

      <h2 id="contact">Contact</h2>
      <p>For privacy questions or requests, contact ${E.company}, the operator of ${E.brand}:</p>
      <address>${E.company}<br>${E.addressLines.join("<br>")}<br><a href="mailto:${E.email}">${E.email}</a></address>
      <p>We reply to emails ${E.supportResponse}, in English or Japanese. You can also reach us through our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "プライバシーポリシー",
    nav: "プライバシー",
    description: `${J.company}が運営する${J.brand}での個人情報の取得・利用・委託・保存期間と、日本・米国・EU等のお客様の権利をご説明します。AIの学習に利用しないこと、個人情報を販売しないことも明記しています。`,
    body: `
      <p class="lede">本プライバシーポリシーは、${J.company}（以下「当社」）が運営する ${J.brand}（以下「本サービス」）において、当社がどのような個人情報を取得し、何のために利用し、どの事業者に取扱いを委託し、どのくらいの期間保存するか、またお客様がどのような選択肢と権利をお持ちかをご説明するものです。要点として、当社はサービスの提供と決済に必要な情報のみを取得し、お客様のプロンプト・アップロード画像・生成物をAIモデルの学習に使用することは一切ありません。また、個人情報の販売・共有は行わず、広告目的または分析目的のCookieも使用していません。</p>

      <h2 id="who-we-are">事業者情報と本ポリシーの適用範囲</h2>
      <p>本サービス（blockforge.vip）は、${J.addressOneLine} に所在する ${J.company} が運営しています。当社は、EU・英国の一般データ保護規則（GDPR）上の管理者（controller）、米国各州のプライバシー法上の事業者（business／controller）、および日本の個人情報の保護に関する法律（以下「個人情報保護法」）上の個人情報取扱事業者にあたります。</p>
      <p>${J.brand}は、ゲームクリエイター向けのオンライン制作ツールです。サブスクリプション会員がウェブ上のワークスペースで作りたいものを文章で指示すると、AIがゲーム用のサムネイル、アイコン、テクスチャ、衣装画像、キャラクターレンダー（GFX）、UIレイアウト、短い効果音などのアセットを生成します。提供はすべてデジタルで行われます。</p>
      <p>本ポリシーは、マーケティング用ウェブサイト、無料のプレビューモード、ログイン後のワークスペース、購入・決済手続、当社からのメールおよびカスタマーサポートに適用されます。リンク先の第三者サイトや、決済代行会社が運営する決済ページには適用されず、それぞれの事業者のプライバシーポリシーが適用されます。</p>

      <h2 id="information-we-collect">取得する情報</h2>
      <p>当社は、以下の区分の個人情報を取得します。マイナンバー等の公的な識別番号、精密な位置情報、健康情報その他の機微な情報の提供をお願いすることはなく、カード番号の全桁を当社が受け取ることもありません。</p>
      <table>
        <thead><tr><th>区分</th><th>具体例</th><th>取得元</th></tr></thead>
        <tbody>
          <tr><td>アカウント情報</td><td>メールアドレス、任意の表示名、ログイン状態を維持するためのセッション情報</td><td>お客様（トライアル開始時・ログイン時）</td></tr>
          <tr><td>決済情報</td><td>カードブランド、カード番号の下4桁、有効期限、請求先の国・郵便番号、プラン・請求・更新・返金の履歴</td><td>決済代行会社、当社の請求記録</td></tr>
          <tr><td>プロンプト・参考画像</td><td>ワークスペースで入力する指示文、参考としてアップロードする画像</td><td>お客様</td></tr>
          <tr><td>生成物</td><td>本サービスが生成した画像（PNG）、効果音（WAV）、UIレイヤー一覧</td><td>お客様の指示に基づき本サービスが生成</td></tr>
          <tr><td>利用記録</td><td>クレジット残高、使用・返還されたクレジット、利用したツールと日時、各生成の処理状況</td><td>ワークスペースのご利用時に自動的に記録</td></tr>
          <tr><td>サポートのやり取り</td><td>お客様からのメール、添付ファイル、当社からの返信</td><td>お客様</td></tr>
          <tr><td>技術情報</td><td>IPアドレス、ブラウザの種類・バージョン、端末の種類、OS、サーバーログ（リクエスト、日時、エラー）</td><td>お客様のブラウザ・端末から自動的に取得</td></tr>
          <tr><td>メール配信設定</td><td>マーケティングメールの受信同意の有無、配信停止のお申し出</td><td>お客様</td></tr>
        </tbody>
      </table>
      <p>マーケティング用ウェブサイトのプレビューモードは、お客様のブラウザ内で簡易的なプレビューを描画する機能です。アカウント登録は不要で、クレジットも消費せず、入力内容が当社やAI事業者に送信されることはありません。また、ウェブサイトは表示言語、テーマ、クイック作成バーを閉じたかどうかという3つの機能的な設定のみをブラウザに保存します。詳しくは<a href="cookies.html">Cookieポリシー</a>をご覧ください。</p>
      <p>トライアルの開始とご契約には、メールアドレスのご登録と、決済代行会社の決済ページでの支払い用カードのご入力が必要です。これらはサービスの提供と料金の請求に必要な情報のため、ご提供いただけない場合は有料アカウントを開設できません。表示名、参考画像のアップロード、マーケティングメールの受信同意は任意です。</p>
      <p>プロンプトや参考画像には、要配慮個人情報その他の機微な情報や第三者の個人情報を、正当な権限なく含めないようお願いいたします。</p>

      <h2 id="how-we-use-information">利用目的と法的根拠</h2>
      <p>当社は、以下の目的の範囲内でのみ個人情報を利用します（個人情報保護法上の利用目的）。欧州経済領域（EEA）または英国のお客様については、GDPRに基づく法的根拠を右欄に記載しています。</p>
      <table>
        <thead><tr><th>目的</th><th>内容</th><th>法的根拠（EEA・英国）</th></tr></thead>
        <tbody>
          <tr><td>サービスの提供</td><td>アカウントの作成・管理、生成処理の実行、生成物の保存、クレジットの付与・消費、生成に失敗した場合のクレジットの自動返還、ワークスペースの維持・運用</td><td>契約の履行</td></tr>
          <tr><td>決済</td><td>${J.trial}の開始、トライアル開始からちょうど${J.trialHours}時間後の年額料金の自動請求（それまでに解約された場合を除きます）、以後12か月ごとの自動更新（その時点の年額料金を適用）、解約および${J.refundDays}日間返金保証に基づく返金の処理、税務・会計記録の保存。年額料金は日本語サイトでは${J.priceWithCode}、英語サイトでは${E.price}（USD）で、決済画面に表示された通貨で請求します。カードの利用明細には「${J.descriptor}」と表示されます。</td><td>契約の履行、法的義務の遵守（税務・会計記録）</td></tr>
          <tr><td>不正防止</td><td>決済の不正利用や濫用の検知、無料トライアルをお一人様・カード1枚につき1回に限る制限の運用、チャージバックへの対応</td><td>お客様と当社を保護するという当社の正当な利益</td></tr>
          <tr><td>カスタマーサポート</td><td>日本語または英語でのお問い合わせ対応、請求・返金・解約に関するサポート</td><td>契約の履行、お客様を支援するという当社の正当な利益</td></tr>
          <tr><td>セキュリティ</td><td>安全なログイン状態の維持、不正アクセス・クロスサイトリクエストフォージェリ・不正利用の防止、<a href="terms.html">利用規約</a>違反の調査</td><td>安全なサービスを提供するという当社の正当な利益、法的義務の遵守</td></tr>
          <tr><td>サービスに関するメール</td><td>トライアル確認メール（終了日時と解約方法を記載）、請求ごとの領収メール、各更新請求の${J.reminderDays}日以上前の更新案内、料金改定が適用される更新の${J.priceChangeNoticeDays}日以上前の通知、返金・解約・セキュリティに関するお知らせの送信</td><td>契約の履行、法的義務の遵守</td></tr>
          <tr><td>法令遵守</td><td>税務・会計・消費者保護に関する義務の履行、適法な要請への対応、著作権侵害の通知への対応、法的請求の立証・防御</td><td>法的義務の遵守、法的請求に対応するという当社の正当な利益</td></tr>
          <tr><td>マーケティングメール</td><td>新機能やキャンペーンのご案内（受信に同意された方のみ）</td><td>お客様の同意（いつでも撤回できます）</td></tr>
          <tr><td>ウェブフォント</td><td>ページを正しく表示するための Google Fonts からのフォントの読込み</td><td>一貫して読みやすいウェブサイトを提供するという当社の正当な利益</td></tr>
        </tbody>
      </table>
      <p>正当な利益を根拠とする場合、当社はお客様の権利・利益との比較衡量を行っており、お客様は異議を申し立てることができます（「お客様の権利」参照）。上記の目的と相容れない目的で個人情報を利用することはありません。また、お客様に法的効果またはこれと同様の重大な影響を及ぼす、自動処理のみに基づく決定は行いません。</p>

      <h2 id="ai-processing">AIによる処理と学習への不使用</h2>
      <p>アセットを生成する際、お客様のプロンプトと参考画像は、その生成物を作成する目的に限りAIモデルの推論事業者に送信されます。生成結果はお客様のワークスペースに返され、お客様が削除するか、アカウント閉鎖から30日が経過するまで保存されます。</p>
      <ul>
        <li><strong>学習への不使用。</strong>${J.brand}は、お客様のプロンプト、アップロード画像および生成物をAIモデルの学習に使用しません。AI推論事業者も、生成物を作成するためにのみプロンプトを処理し、お客様のコンテンツを学習に使用することは契約で禁止されています。</li>
        <li><strong>アクセスの制限。</strong>当社の担当者がプロンプト、アップロード画像または生成物を閲覧するのは、サービスの提供、お客様からのサポート依頼への対応、利用規約違反の疑いの調査、または法令遵守のために必要な場合に限られます。</li>
        <li><strong>コンテンツの権利はお客様に。</strong>プロンプトと参考画像の権利はお客様に帰属し、生成したアセットについても法令上認められる範囲でお客様に帰属します。お客様は当社に対し、サービスを提供する目的に限り、これらを処理・保存するための限定的なライセンスを付与します。</li>
        <li><strong>プロファイリングの不実施。</strong>プロンプトや生成物を、広告用のプロファイル作成やお客様に関する判断に使用することはありません。</li>
      </ul>

      <h2 id="service-providers">委託先およびその他の提供</h2>
      <p>当社は、以下の委託先に個人情報の取扱いを委託します。委託先は、当社との契約により、当社へのサービス提供の目的にのみ個人情報を利用でき、これを適切に保護する義務を負います。Google Fontsについては、下記のとおり取扱いが異なります。委託先の区分は次のとおりです。</p>
      <ul>
        <li><strong>決済代行会社</strong>：PCI DSSに準拠した決済代行会社で、購入手続、カード決済、更新および返金を処理します。カード情報は決済代行会社が直接受け取り、当社が受け取るのはカードブランド、下4桁、有効期限、請求先の国・郵便番号のみです。</li>
        <li><strong>クラウドホスティング</strong>：ウェブサイト、ワークスペース、アカウント情報および生成物を米国内で保存・運用します。</li>
        <li><strong>メール配信</strong>：サービスに関するメールと、同意をいただいた方へのマーケティングメールを送信します。</li>
        <li><strong>AIモデル推論事業者</strong>：生成物を作成する目的に限りプロンプトと参考画像を受け取ります。学習への使用は契約で禁止されています。</li>
        <li><strong>カスタマーサポートツール</strong>：サポートメールの受信、管理、返信に使用します。</li>
        <li><strong>Google Fonts</strong>：ウェブサイトはGoogleのサーバーからフォントを読み込むため、ページ表示時に、お客様のブラウザからGoogleにIPアドレスと基本的なブラウザ情報が送信されます。これらの情報はGoogleがお客様のブラウザから直接受け取り、<a href="https://policies.google.com/privacy">Googleプライバシーポリシー</a>に従って取り扱います。当社がこれ以外のお客様の情報をGoogleに提供することはありません。</li>
      </ul>
      <p>このほか、当社は次の場合に個人情報を開示することがあります。</p>
      <ul>
        <li>裁判所の有効な命令など、法令に基づく場合</li>
        <li>不正防止を含め、利用者その他の第三者または当社の権利、安全もしくは財産を保護するために必要な場合</li>
        <li>合併、買収または事業譲渡に伴い、承継者に引き継ぐ場合（この場合も本ポリシーは引き続きお客様の情報に適用され、当社はお客様にその旨をお知らせします）</li>
        <li>お客様のご指示による場合</li>
      </ul>

      <h2 id="no-sale-or-sharing">個人情報の販売・共有およびトラッキングを行わないこと</h2>
      <p class="callout">当社はお客様の個人情報を販売せず、クロスコンテキスト行動広告のために共有することもありません。広告目的・分析目的のCookieも一切使用していません。</p>
      <p>当社は過去12か月間、個人情報の販売・共有を行っていません。広告ネットワーク、トラッキングピクセル、アクセス解析ツール、データブローカーも利用していません。マーケティング用ウェブサイトがブラウザに保存するのは機能上の設定（<code>bf-lang</code>、<code>bf-theme</code>、<code>bf-dock</code>）のみです。ログイン後のワークスペースでは、必須のセッションCookieとCSRF対策用のCookieを使用します。また、決済代行会社の決済ページが不正防止とセキュリティのために独自のCookieを設定する場合があります。詳しくは<a href="cookies.html">Cookieポリシー</a>をご覧ください。</p>
      <p>当社は、Global Privacy Control（GPC）の信号を、個人情報の販売・共有およびターゲティング広告を拒否する有効な意思表示として尊重します。当社はウェブサイトをまたいだ追跡を行わないため、「Do Not Track」信号によってサイトの動作が変わることはありません。詳しくは<a href="do-not-sell.html">個人情報の販売・共有の拒否</a>をご覧ください。</p>

      <h2 id="retention">保存期間</h2>
      <p>当社は、上記の目的に必要な期間に限り個人情報を保存します。</p>
      <table>
        <thead><tr><th>情報</th><th>保存期間</th></tr></thead>
        <tbody>
          <tr><td>アカウント情報、利用記録、メール配信設定、サポートのやり取り</td><td>アカウントが有効な間、およびアカウント閉鎖から30日間</td></tr>
          <tr><td>プロンプト、参考画像、生成物</td><td>お客様が削除した時点、またはアカウント閉鎖から30日が経過した時点のいずれか早い時点まで</td></tr>
          <tr><td>請求・税務記録（請求、返金、領収、カードブランドと下4桁）</td><td>税務・会計上の義務を果たすため7年間</td></tr>
          <tr><td>サーバーログ（IPアドレスを含む）</td><td>90日間</td></tr>
          <tr><td>ブラウザに保存されるウェブサイトの設定</td><td><code>bf-lang</code>と<code>bf-theme</code>はお客様がブラウザのデータを消去するまで、<code>bf-dock</code>はブラウザのタブを閉じるまで</td></tr>
        </tbody>
      </table>
      <p>法令で義務付けられている場合、または法的請求の立証・行使・防御に必要な場合に限り、その必要がある期間に限って特定の情報をより長く保存することがあります。保存期間が終了した情報は、削除するか、元に戻せない形で匿名化します。削除した情報の複製が、通常のバックアップの周期で上書きされるまでの一定期間、安全に管理されたバックアップに残ることがあります。バックアップはシステム障害からの復旧の場合にのみ復元し、それ以外の目的には使用しません。</p>

      <h2 id="international-transfers">外国における取扱い（国際移転）</h2>
      <p>${J.company}は米国に所在し、個人情報を米国内で保存・処理しています。日本、EEA、英国その他の国・地域から本サービスをご利用の場合、お客様の情報は米国に移転され、米国で処理されます。米国のデータ保護法制は、お客様の国・地域の法制と異なる場合があります。</p>
      <p>米国には個人情報保護法に相当する包括的な連邦法はなく、分野ごとの連邦法、連邦取引委員会法、およびCCPA/CPRAやコロラド州プライバシー法などの州法によって個人情報が保護されています。当社は、どこで処理する場合でも本ポリシーに従ってお客様の情報を保護します。委託先への移転についてGDPRまたは英国GDPRが移転の根拠を求める場合、当社は欧州委員会の標準契約条項（英国補遺を含む）を用いるか、委託先のEU・米国データプライバシー・フレームワーク（英国拡張を含む）の認証に依拠します。日本のお客様については、個人情報保護法が求める措置に相当する措置を講じることを、契約により委託先に義務付けています。</p>

      <h2 id="security">安全管理措置</h2>
      <p>当社は、リスクに応じた組織的・技術的・物理的な安全管理措置を講じています。主な措置は次のとおりです。</p>
      <ul>
        <li>ウェブサイト、ワークスペースおよび決済手続における通信の暗号化（HTTPS/TLS）</li>
        <li>カード決済をPCI DSS準拠の決済代行会社にすべて委ねることにより、当社がカード番号の全桁を閲覧・保存しない仕組み</li>
        <li>ワークスペースにおける安全なセッションCookieとCSRF対策</li>
        <li>個人情報へのアクセスを業務上必要な担当者に限定すること</li>
        <li>委託先に対し、契約により守秘義務と安全管理を義務付けること</li>
        <li>データを保存している米国の法制度を把握したうえでの、安全管理措置の定期的な見直し</li>
      </ul>
      <p>いかなるシステムも完全に安全とはいえません。お客様の個人情報に影響するセキュリティ事故が発生した場合は、法令に従い、お客様および関係当局に通知します。当社は、権利行使のご請求に関するご本人確認やお支払いに関するお知らせを、アカウントのメールアドレス宛てにお送りします。メールアカウントの安全な管理にご協力ください。</p>

      <h2 id="your-rights">お客様の権利</h2>
      <p>お住まいの地域に応じて、お客様は以下の権利の全部または一部をお持ちです。ご請求はいずれも「権利の行使方法」に記載の手続で承ります。</p>

      <h3>米国：カリフォルニア州、コロラド州その他の州</h3>
      <p>カリフォルニア州消費者プライバシー法（カリフォルニア州プライバシー権法による改正後のもの。CCPA/CPRA）、コロラド州プライバシー法、およびその他の米国各州の包括的な消費者プライバシー法に基づき、お客様は次の権利をお持ちの場合があります。具体的な権利の内容は州によって異なりますが、当社は米国にお住まいのすべてのお客様に、同じ手続、同じ対応期間、同じ不服申立ての方法を適用します。</p>
      <ul>
        <li><strong>開示・アクセス</strong>：当社が保有するお客様の個人情報の区分と具体的な内容、取得元、利用目的、提供先の区分を知る権利</li>
        <li><strong>訂正</strong>：不正確な個人情報を訂正させる権利</li>
        <li><strong>削除</strong>：当社がお客様から取得した個人情報を削除させる権利（税務上保存が必要な請求記録など、法令上の例外があります）</li>
        <li><strong>データポータビリティ</strong>：個人情報を持ち運び可能で一般的な形式で受け取る権利</li>
        <li><strong>オプトアウト</strong>：個人情報の販売・共有、ターゲティング広告、および法的効果またはこれと同様の重大な影響を及ぼす決定のためのプロファイリングを拒否する権利（当社はいずれも行っていません）</li>
        <li><strong>利用制限</strong>：センシティブ個人情報の利用を制限する権利（当社はアカウントの安全確保など、法令で認められた目的にのみ利用します）</li>
        <li><strong>不服申立て</strong>：ご請求に対する当社の決定に不服を申し立てる権利</li>
        <li><strong>差別の禁止</strong>：権利を行使したことを理由に、サービスの拒否、異なる価格の請求、品質の異なるサービスの提供を受けない権利</li>
      </ul>
      <p>当社は過去12か月間に、CCPAの定義する次の区分の個人情報を取得しました。識別子（メールアドレス、表示名、IPアドレス）、顧客記録（請求先の国・郵便番号、カードブランド、下4桁、有効期限）、商業情報（プラン、請求、返金、クレジットの利用状況）、インターネットその他の電子的ネットワーク上の活動（利用記録、ブラウザ・端末の情報、サーバーログ）、音声・電子・視覚情報（お客様に関連する範囲で、アップロードされた参考画像と生成されたアセット）、およびアカウントへのログインに必要な情報に限られるセンシティブ個人情報です。これらは上記の取得元から取得し、上記の業務目的に利用しており、各区分を上記の委託先にのみ開示しています。お客様に関する推論情報は作成していません。</p>

      <h3>日本：個人情報保護法</h3>
      <p>日本にお住まいのお客様は、個人情報保護法に基づき、当社に対して次のご請求をすることができます。</p>
      <ul>
        <li>お客様に関する保有個人データおよび第三者提供記録の開示</li>
        <li>保有個人データの内容が事実でない場合の訂正、追加または削除</li>
        <li>目的外利用や不正な手段による取得が行われた場合、当社が利用する必要がなくなった場合、漏えい等が生じた場合、またはお客様の権利もしくは正当な利益が害されるおそれがある場合の利用停止または消去</li>
        <li>法令に定める場合の第三者への提供の停止</li>
      </ul>
      <p>利用目的は「利用目的と法的根拠」に記載のとおりです。当社は、取扱いを委託する委託先への提供その他法令で認められる場合を除き、個人データを第三者に提供しません。当社の代表者の氏名は、ご請求があった場合には遅滞なくお知らせいたします。個人情報の取扱いに関する苦情は、下記「お問い合わせ」の窓口で承ります。また、お客様は個人情報保護委員会にご相談いただくこともできます。</p>

      <h3>EEA・英国：GDPR</h3>
      <p>GDPRまたは英国GDPRが適用されるお客様は、次の権利をお持ちです。</p>
      <ul>
        <li>個人データにアクセスし、その写しを受け取る権利</li>
        <li>不正確な個人データを訂正させる権利、および個人データを消去させる権利</li>
        <li>処理の制限を求める権利と、データポータビリティの権利</li>
        <li>当社の正当な利益に基づく処理に異議を述べる権利、およびダイレクトマーケティングを目的とする処理にいつでも異議を述べる権利</li>
        <li>同意をいつでも撤回する権利（撤回前に行われた処理の適法性には影響しません）</li>
        <li>重大な影響を及ぼす、自動処理のみに基づく決定の対象とされない権利</li>
      </ul>
      <p>また、お住まいの国、勤務地または侵害が生じたとされる地のデータ保護監督機関に、英国の場合は情報コミッショナー事務局（ICO）に、苦情を申し立てる権利があります。その前に、まず当社にご相談いただけますと幸いです。</p>

      <h2 id="exercising-your-rights">権利の行使方法</h2>
      <ol>
        <li><strong>ご請求の方法。</strong>件名を「Privacy Request」として、<a href="mailto:${J.email}">${J.email}</a> までメールでご連絡ください。できるだけ ${J.brand} アカウントに登録されたメールアドレスからお送りいただき、行使したい権利とお住まいの国・地域をお知らせください。適用される法令に沿って対応いたします。</li>
        <li><strong>ご本人確認。</strong>ご本人確認はアカウントのメールアドレスを通じて行います。登録されたアドレス宛てに当社から返信し、ご請求内容の確認をお願いします。そのアドレスをご利用いただけない場合は、最近の請求の日付と金額、使用されたカードの下4桁など、アカウント保有者のみが知り得る情報をいくつかお尋ねすることがあります。これらの情報はご本人確認のためにのみ使用します。</li>
        <li><strong>対応期間。</strong>ご請求の受領から10営業日以内に受付確認のご連絡をし、45日以内にご回答します。さらに時間を要する場合は、最初の45日が経過する前に理由をお知らせしたうえで、1回に限り最大45日延長することがあります。法令がより短い期限を定める場合（GDPRでは1か月以内、個人情報保護法では遅滞なく）は、その期限に従います。オプトアウトのご請求は15営業日以内に対応します。</li>
        <li><strong>代理人によるご請求。</strong>お客様が署名した委任状をご提出いただければ、代理人がご請求を行うことができます。この場合でも、代理人が適用法令上有効な代理権授与証書（power of attorney）を有している場合を除き、お客様ご自身に当社へ直接ご本人確認をお願いするか、委任の事実を確認させていただくことがあります。</li>
        <li><strong>不服申立て。</strong>ご請求の全部または一部をお断りする場合は、その理由をご説明します。当社の決定をお知らせするメールに、件名を「Appeal」としてご返信いただくことで、不服を申し立てることができます。当社は45日以内に書面で結果と理由をお知らせし、申立てを認めない場合は、お住まいの州の司法長官（コロラド州にお住まいの方はコロラド州司法長官）その他の関係当局への連絡方法をご案内します。</li>
      </ol>
      <p>ご請求に手数料はかかりません。ただし、法令上認められる場合には、明らかに根拠がない、過度または反復的なご請求をお断りし、または合理的な手数料をいただくことがあり、その際は理由をご説明します。</p>

      <h2 id="children">お子様の個人情報</h2>
      <p>${J.brand}は13歳未満のお子様を対象としておらず、13歳未満の方から故意に個人情報を取得することはありません。13歳未満の方がアカウントを作成したことが判明した場合は、そのアカウントと関連データを削除します。13歳以上18歳未満の方は、親権者または法定代理人がご本人に代わって<a href="terms.html">利用規約</a>に同意し、お支払いを管理する場合に限り、${J.brand}をご利用いただけます。無料トライアルの開始およびご購入は、18歳以上（お住まいの地域の成年年齢が18歳を超える場合はその年齢以上）の方に限ります。当社は16歳未満の消費者を含め、どなたの個人情報も販売・共有しません。13歳未満のお子様が当社に個人情報を提供したと思われる場合は、<a href="mailto:${J.email}">${J.email}</a> までご連絡ください。速やかに削除いたします。</p>

      <h2 id="emails">サービスに関するメールとマーケティングメール</h2>
      <p><strong>サービスに関するメール。</strong>サブスクリプションの管理に必要な次のメールをお送りします。トライアルの正確な終了日時と解約方法を記載したトライアル確認メール、請求ごとの領収メール、各年額更新請求の${J.reminderDays}日以上前の更新案内、料金改定が適用される更新の${J.priceChangeNoticeDays}日以上前の通知、解約・返金の確認、セキュリティや法務に関するお知らせです。これらは契約と請求に関わるメールのため、アカウントが有効な間は配信を停止できません。</p>
      <p><strong>マーケティングメール。</strong>新機能やキャンペーンのご案内は、受信に同意された方にのみお送りします。すべてのマーケティングメールに配信停止リンクを記載しており、<a href="mailto:${J.email}">${J.email}</a> へのメールでも停止をお申し出いただけます。配信停止は速やかに、遅くとも10営業日以内に反映します。マーケティングメールを停止しても、サービスに関するメールには影響しません。</p>

      <h2 id="changes">本ポリシーの変更</h2>
      <p>当社は、サービス内容、委託先または法令上の義務の変更に応じて本ポリシーを改定することがあります。改定後のポリシーは、新しい「最終更新日」とともに本ページに掲載します。新たな利用目的や新たな種類の提供先の追加など重要な変更を行う場合は、効力発生前にメールまたはワークスペース内のお知らせでご連絡し、法令上必要な場合はお客様の同意を得ます。本ポリシーを事前に改定し、法令が求める通知と選択の機会を提供することなく、個人情報の販売・共有を開始することはありません。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>個人情報の取扱いに関するご質問やご請求は、${J.brand}の運営者である${J.company}までご連絡ください。</p>
      <address>${J.company}<br>${J.addressLines.join("<br>")}<br><a href="mailto:${J.email}">${J.email}</a></address>
      <p>メールには${J.supportResponse}に日本語または英語でご返信します。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、日本語版と英語版との間に齟齬がある場合は英語版が優先します。</p>
    `
  }
};
