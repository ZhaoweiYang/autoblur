import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

// Derived values, computed from FACTS so the page follows any change in config.mjs.
const H = E.trialHours === 1 ? "hour" : "hours";

export default {
  slug: "cookies",
  order: 6,
  en: {
    title: "Cookie Policy",
    nav: "Cookies",
    description: `${E.brand} uses only functional browser storage and essential cookies, with no advertising, tracking or analytics cookies. What we store and how to delete it.`,
    body: `
      <p class="lede">This Cookie Policy explains the cookies and browser storage used on the ${E.brand} website and in the ${E.brand} workspace, both operated by ${E.company}. In short: the website keeps at most two small functional settings in your browser, the signed-in workspace uses two essential cookies, and our payment processor&rsquo;s payment page may set its own cookies for fraud prevention and security. We use no advertising, tracking or analytics cookies, so there is nothing to opt out of and no cookie banner to click through.</p>

      <h2 id="what-are-cookies">What cookies and browser storage are</h2>
      <p>A cookie is a small text file that a website asks your browser to save and to send back with later requests to the same site. Websites use cookies to keep you signed in, to protect forms against misuse and to remember settings. First-party cookies are set by the site you are visiting; third-party cookies are set by a different domain.</p>
      <p>Browsers also offer similar storage that works without cookies, called localStorage:</p>
      <ul>
        <li><strong>localStorage</strong> keeps small pieces of data for a website with no expiry date, until you or your browser delete them.</li>
      </ul>
      <p>Unlike cookies, localStorage is not sent to our servers with your requests. It stays on your device and are read only by our own pages, inside your browser. In this policy, &quot;cookies&quot; covers both cookies and these similar technologies.</p>

      <h2 id="website-storage">What the website stores</h2>
      <p>The public website at blockforge.vip, including the English and Japanese pages, the free preview mode, our checkout page and the policy pages, sets no cookies. It saves at most the two items below in your browser, and each one is saved only after you make the choice it remembers:</p>
      <table>
        <thead>
          <tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr><td><code>bf-lang</code></td><td>localStorage (first party)</td><td>Remembers whether you chose English or Japanese with the language switch (EN / 日本語), so that later visits open in that language. Saved only when you click the switch. Value: <code>en</code> or <code>ja</code>.</td><td>Until you delete it (no automatic expiry)</td></tr>
          <tr><td><code>bf-theme</code></td><td>localStorage (first party)</td><td>Remembers whether you chose the light or the dark theme with the theme button. Saved only when you click the button. Value: <code>light</code> or <code>dark</code>.</td><td>Until you delete it (no automatic expiry)</td></tr>
        </tbody>
      </table>
      <p>These items contain no personal information, are never sent to our servers, and are not used to identify or track you.</p>
      <p>Your language choice also decides which currency you see. English pages show ${E.brand} Pro at ${E.price} per year in ${E.currencyName}; Japanese pages show ${J.price} per year in Japanese yen (${J.currency}), including consumption tax. You are always charged in the currency shown at checkout.</p>

      <h2 id="workspace-cookies">Cookies in the signed-in workspace</h2>
      <p>When you sign in to the workspace to generate assets, check your credits or manage billing, we set two first-party cookies. Both are strictly necessary: the workspace cannot work securely without them.</p>
      <table>
        <thead>
          <tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr><td>Session cookie</td><td>First-party cookie, strictly necessary</td><td>Keeps you signed in as you move between pages, so we know which account your generations, credits and billing settings belong to. It holds a random session identifier, not your password or card details.</td><td>Until you sign out or your sign-in session expires</td></tr>
          <tr><td>CSRF-protection cookie</td><td>First-party cookie, strictly necessary</td><td>Holds a random security token that we check whenever you take an action, such as starting a generation, changing billing settings or cancelling your subscription. This blocks cross-site request forgery, where another website tries to act in your account without your knowledge.</td><td>For the length of your sign-in session</td></tr>
        </tbody>
      </table>
      <p>We do not use these cookies for advertising, analytics or tracking, and we do not share them with anyone.</p>

      <h2 id="payment-processor">Payment processor cookies at checkout</h2>
      <p>Our own checkout page, where you review the plan and accept the terms, sets no cookies. When you start the ${E.trial}, you enter your card details on the secure payment page of our third-party, PCI DSS&ndash;compliant payment processor. That page may set its own cookies and use similar technologies to detect fraud, verify payments and keep the transaction secure. These are third-party cookies: the processor controls them and decides how long they last, and we cannot read them. The processor describes them in the privacy and cookie notices linked from its payment page. If you block them, you may not be able to complete payment.</p>
      <p>We never see or store your full card number. From the processor we receive only the card brand, the last four digits, the expiry date and your billing country and postal code.</p>
      <p>A payment card is required to start the trial, and nothing is charged during the trial. Exactly ${E.trialHours} ${H} after the trial starts, your card is automatically charged ${E.price} (${E.currency}) for 12 months of ${E.brand} Pro, unless you cancel before the trial ends. The subscription then renews automatically every 12 months at the then-current annual price until you cancel, and we email a reminder at least ${E.reminderDays} days before each renewal charge. ${E.taxNote} Charges appear on your card statement as &quot;${E.descriptor}&quot;. Within ${E.refundDays} days after any annual charge, our ${E.refundDays}-Day Money-Back Guarantee applies: Full refund on unused credits. No questions asked. See our <a href="refund.html">Refund Policy</a> and <a href="cancellation.html">Cancellation Policy</a>.</p>

      <h2 id="google-fonts">Google Fonts</h2>
      <p>To display our typefaces, the website loads font files from Google Fonts (<code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code>). When a page loads, your browser connects directly to Google&rsquo;s servers, and Google receives your IP address, information about your browser and device (the user-agent string) and the address of the page that requested the font. We do not set any cookie through this request, and according to Google, requests to the Google Fonts API are made without cookies. Google handles this information under its own privacy policy at <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.</p>
      <p>If you prefer that your browser does not connect to Google, block those two domains in your browser or with a content blocker. The site keeps working and uses your device&rsquo;s built-in fonts instead.</p>
      <p>This section and the payment processor section above also tell you what information your browser sends to third parties, who receives it and why.</p>

      <h2 id="no-tracking">No advertising, tracking or analytics cookies</h2>
      <p class="callout">We use no advertising, tracking or analytics cookies, on the website or in the workspace.</p>
      <ul>
        <li>No advertising cookies, advertising networks or retargeting.</li>
        <li>No analytics or audience-measurement tools, such as Google Analytics, and no session recording.</li>
        <li>No social-media pixels, &quot;like&quot; buttons or embedded social plugins that track you.</li>
        <li>No device fingerprinting and no tracking across other websites.</li>
      </ul>
      <p>Every item on this page is either strictly necessary to provide a service you asked for (signing in, protecting your account, processing your payment safely) or remembers a choice you made yourself and is saved only after you make it. Under the EU and UK ePrivacy rules, consent is not required for storage that is strictly necessary to provide a service you ask for, and this includes storage that remembers a preference you set yourself, such as your language. That is why we do not show a cookie consent banner.</p>
      <p>If we ever want to add cookies that are not strictly necessary, such as analytics, we will update this policy first and, where the law requires it, ask for your consent before setting them, with an equally easy way to refuse.</p>

      <h2 id="managing-cookies">How to control or delete cookies and storage</h2>
      <p>You control everything described on this page. You can:</p>
      <ul>
        <li><strong>Delete stored items.</strong> Clear the cookies and site data for blockforge.vip in your browser settings. This removes <code>bf-lang</code>, <code>bf-theme</code> and any workspace cookies.</li>
        <li><strong>Block cookies and site data.</strong> Most browsers let you block all cookies, block only third-party cookies, or block storage for specific sites.</li>
        <li><strong>Use a private window.</strong> Private or incognito windows delete their cookies and site data when you close them.</li>
      </ul>
      <p>Where to find these settings (menu names vary by browser version):</p>
      <ul>
        <li><strong>Chrome:</strong> Settings &rarr; Privacy and security &rarr; Delete browsing data, or Third-party cookies.</li>
        <li><strong>Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies and site data.</li>
        <li><strong>Safari:</strong> on Mac, Settings &rarr; Privacy &rarr; Manage Website Data; on iPhone and iPad, Settings &rarr; Safari &rarr; Advanced &rarr; Website Data.</li>
        <li><strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.</li>
      </ul>
      <p>What happens when you delete or block them:</p>
      <ul>
        <li><strong><code>bf-lang</code>:</strong> the site forgets your language. Each page opens in its own language, except that if your browser&rsquo;s language is Japanese, English pages switch to the Japanese version automatically. You can choose again at any time with the language switch. Because the currency follows the page language, prices are then shown in the currency of the page you are viewing.</li>
        <li><strong><code>bf-theme</code>:</strong> the site returns to its default theme until you choose again.</li>
        <li><strong>All browser storage blocked:</strong> the website still works; it simply cannot remember these choices.</li>
        <li><strong>Workspace cookies:</strong> deleting them signs you out, and blocking them means you cannot sign in to the workspace. Signing out or deleting cookies does not cancel your subscription and does not affect your credits. To cancel, use Account &rarr; Billing &rarr; Cancel subscription or email us from your account email (see our <a href="cancellation.html">Cancellation Policy</a>).</li>
        <li><strong>Payment processor cookies:</strong> blocking them may stop you from completing payment.</li>
      </ul>

      <h2 id="global-privacy-control">Global Privacy Control and Do Not Sell or Share</h2>
      <p>We honour Global Privacy Control (GPC). When your browser sends a GPC signal, we treat it as a request to opt out of the sale and sharing of your personal information and of targeted advertising. We do not sell or share personal information, and none of the cookies or storage items on this page are used for advertising, so the signal does not change how the site works for you. The older Do Not Track browser setting likewise changes nothing, because we do not track you.</p>
      <p>To learn more or to send an opt-out request anyway, see <a href="do-not-sell.html">Do Not Sell or Share My Personal Information</a> and our <a href="privacy.html">Privacy Policy</a>.</p>

      <h2 id="changes">Changes to this policy</h2>
      <p>We update this policy whenever we change the cookies or storage we use, and the &quot;Last updated&quot; date at the top of the page shows when it last changed. We list any new cookie or storage item here before we start using it. If a change is material, such as adding a cookie that is not strictly necessary, we tell you by email or with a notice in the workspace before it takes effect, and ask for your consent where the law requires it.</p>

      <h2 id="contact">Contact</h2>
      <p>Send questions about this policy or about cookies to ${E.company}, the operator of ${E.brand}:</p>
      <address>${E.company}<br>${E.addressLines.join("<br>")}<br><a href="mailto:${E.email}">${E.email}</a></address>
      <p>We reply to emails ${E.supportResponse}, in English or Japanese. You can also reach us through our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "Cookieポリシー",
    nav: "Cookie",
    description: `${J.brand}が使用するCookieとブラウザの保存領域についてご説明します。広告・トラッキング・アクセス解析用のCookieは使用していません。保存する項目と削除方法をご案内します。`,
    body: `
      <p class="lede">本Cookieポリシーは、${J.company}が運営する${J.brand}のウェブサイトおよびワークスペースで使用するCookieとブラウザの保存領域についてご説明するものです。ウェブサイトがお客様のブラウザに保存するのは、機能上の設定に関する最大2項目のみです。ログイン後のワークスペースでは、必要不可欠なCookieを2種類使用します。また、決済代行会社の決済ページが、不正防止とセキュリティのために独自のCookieを設定する場合があります。広告・トラッキング・アクセス解析を目的とするCookieは一切使用していないため、オプトアウトの手続やCookieバナーでの同意操作は必要ありません。</p>

      <h2 id="what-are-cookies">Cookieとブラウザの保存領域について</h2>
      <p>Cookieとは、ウェブサイトがお客様のブラウザに保存させる小さなテキストファイルで、以後同じサイトにアクセスするたびに、ブラウザからそのサイトへ送信されます。ログイン状態の維持、フォームの不正利用の防止、設定の記憶などに使われます。閲覧中のサイト自身が設定するものをファーストパーティCookie、別のドメインが設定するものをサードパーティCookieといいます。</p>
      <p>ブラウザには、Cookie以外にも次のような類似の保存領域があります。</p>
      <ul>
        <li><strong>localStorage（ローカルストレージ）：</strong>サイトごとに小さなデータを保存する領域です。有効期限はなく、お客様またはブラウザが削除するまで保持されます。</li>
      </ul>
      <p>localStorageは、Cookieと異なり、リクエストのたびに当社のサーバーへ送信されることはありません。データはお客様の端末内にとどまり、ブラウザ上で当社のページだけが読み取ります。本ポリシーでは、Cookieとこれらの類似技術をあわせて「Cookie等」といいます。</p>

      <h2 id="website-storage">ウェブサイトが保存する項目</h2>
      <p>英語版・日本語版のページ、無料のプレビューモード、当社のお申し込みページ、各種ポリシーページを含む公開ウェブサイト（blockforge.vip）は、Cookieを設定しません。ブラウザに保存するのは次の最大2項目のみで、いずれも、お客様が該当する操作をしたときにはじめて保存されます。</p>
      <table>
        <thead>
          <tr><th>名称</th><th>種類</th><th>目的</th><th>保存期間</th></tr>
        </thead>
        <tbody>
          <tr><td><code>bf-lang</code></td><td>localStorage（ファーストパーティ）</td><td>言語切替（EN／日本語）で選んだ表示言語を記憶し、次回以降も同じ言語でページを表示します。言語切替をクリックしたときにのみ保存されます。値：<code>en</code> または <code>ja</code></td><td>お客様が削除するまで（有効期限なし）</td></tr>
          <tr><td><code>bf-theme</code></td><td>localStorage（ファーストパーティ）</td><td>テーマボタンで選んだライトテーマまたはダークテーマを記憶します。テーマボタンをクリックしたときにのみ保存されます。値：<code>light</code> または <code>dark</code></td><td>お客様が削除するまで（有効期限なし）</td></tr>
        </tbody>
      </table>
      <p>これらの項目には個人情報は含まれません。当社のサーバーに送信されることはなく、お客様の識別や追跡に使用することもありません。</p>
      <p>なお、表示言語によって料金の表示通貨も決まります。日本語版のページでは${J.brand} Proの料金を日本円（${J.currency}）で${J.pricePerYear}、英語版のページでは米ドル（${E.currency}）で年額${E.price}と表示します。お支払いは、常に決済画面に表示された通貨で行われます。</p>

      <h2 id="workspace-cookies">ログイン後のワークスペースで使用するCookie</h2>
      <p>アセットの生成、クレジットの確認、お支払い設定の管理のためにワークスペースにログインすると、当社は次の2つのファーストパーティCookieを設定します。いずれも、ワークスペースを安全に提供するために必要不可欠なものです。</p>
      <table>
        <thead>
          <tr><th>名称</th><th>種類</th><th>目的</th><th>保存期間</th></tr>
        </thead>
        <tbody>
          <tr><td>セッションCookie</td><td>ファーストパーティCookie（必須）</td><td>ページを移動してもログイン状態を維持し、生成したアセット、クレジット、お支払い設定がどのアカウントに属するかを識別します。保存されるのはランダムなセッション識別子のみで、パスワードやカード情報は含まれません。</td><td>ログアウトするか、ログインセッションの有効期限が切れるまで</td></tr>
          <tr><td>CSRF対策用Cookie</td><td>ファーストパーティCookie（必須）</td><td>アセットの生成、お支払い設定の変更、サブスクリプションの解約などの操作のたびに照合する、ランダムなセキュリティトークンを保持します。これにより、他のウェブサイトがお客様の知らないうちにお客様のアカウントで操作を行う「クロスサイトリクエストフォージェリ（CSRF）」を防ぎます。</td><td>ログインセッションの間</td></tr>
        </tbody>
      </table>
      <p>これらのCookieを広告、アクセス解析、トラッキングに使用することはなく、第三者と共有することもありません。</p>

      <h2 id="payment-processor">決済代行会社が決済時に設定するCookie</h2>
      <p>プランの内容を確認し、規約に同意していただく当社のお申し込みページは、Cookieを設定しません。${J.trial}を開始する際は、PCI DSSに準拠した第三者の決済代行会社が提供する安全な決済ページでカード情報を入力していただきます。この決済ページでは、不正利用の検知、決済の確認および取引の安全確保のため、決済代行会社が独自のCookieや類似の技術を使用する場合があります。これらは決済代行会社が管理するサードパーティCookieで、保存期間も決済代行会社が定めており、当社が読み取ることはできません。詳しくは、決済ページに掲載されている決済代行会社のプライバシーおよびCookieに関する案内をご覧ください。これらをブロックすると、決済を完了できない場合があります。</p>
      <p>当社がカード番号の全桁を取得・保存することはありません。決済代行会社から受け取るのは、カードブランド、カード番号の下4桁、有効期限、請求先の国・郵便番号のみです。</p>
      <p>トライアルの開始にはお支払い用カードの登録が必要ですが、トライアル期間中に料金は発生しません。トライアル開始からちょうど${J.trialHours}時間後、それまでに解約されない場合は、12か月分の${J.brand} Proの年額料金${J.price}（税込）が登録カードに自動的に請求されます。以後は解約されるまで、12か月ごとにその時点の年額料金で自動更新され、各更新の請求日の少なくとも${J.reminderDays}日前にお知らせのメールをお送りします。カードのご利用明細には「${J.descriptor}」と表示されます。年額料金の各請求日から${J.refundDays}日以内であれば${J.refundDays}日間返金保証の対象となり、未使用クレジット分を全額返金します。理由は問いません。詳しくは<a href="refund.html">返金ポリシー</a>および<a href="cancellation.html">解約ポリシー</a>をご覧ください。</p>

      <h2 id="google-fonts">Google Fonts</h2>
      <p>ウェブサイトでは、書体を表示するためにGoogle Fonts（<code>fonts.googleapis.com</code> および <code>fonts.gstatic.com</code>）からフォントファイルを読み込んでいます。ページを開くと、お客様のブラウザがGoogleのサーバーに直接接続し、Googleは、お客様のIPアドレス、ブラウザや端末に関する情報（ユーザーエージェント）、フォントを読み込んだページのURLを受け取ります。当社がこの通信を通じてCookieを設定することはなく、Googleによれば、Google Fonts APIへのリクエストにCookieは使用されません。これらの情報は、Googleのプライバシーポリシー（<a href="https://policies.google.com/privacy">policies.google.com/privacy</a>）に従って取り扱われます。</p>
      <p>Googleへの接続を避けたい場合は、ブラウザの設定やコンテンツブロッカーでこの2つのドメインへの接続をブロックしてください。その場合もサイトは引き続きご利用いただけ、文字は端末に搭載されているフォントで表示されます。</p>
      <p>本項目と上記の決済代行会社に関する項目では、お客様の端末から第三者に送信される情報（外部送信）について、送信先、送信される情報およびその利用目的をお知らせしています。</p>

      <h2 id="no-tracking">広告・トラッキング・アクセス解析用Cookieは使用しません</h2>
      <p class="callout">当社は、ウェブサイトでもワークスペースでも、広告・トラッキング・アクセス解析を目的とするCookieを一切使用していません。</p>
      <ul>
        <li>広告用Cookieや広告ネットワークは使用せず、リターゲティング広告も行いません。</li>
        <li>Google Analyticsなどのアクセス解析ツールやオーディエンス測定ツールは使用せず、画面操作の録画（セッションリプレイ）も行いません。</li>
        <li>ソーシャルメディアのピクセル、「いいね」ボタン、追跡を伴うソーシャルプラグインは設置していません。</li>
        <li>デバイスフィンガープリンティングや、他のウェブサイトをまたいだ追跡は行いません。</li>
      </ul>
      <p>本ポリシーに記載した項目はすべて、お客様が求めたサービス（ログイン、アカウントの保護、安全な決済処理）の提供に必要不可欠なもの、またはお客様ご自身が選んだ設定を記憶するもののいずれかであり、後者はお客様が選択したときにはじめて保存されます。EUや英国のeプライバシー規制でも、お客様が求めたサービスの提供に必要不可欠な保存（表示言語など、お客様ご自身が選んだ設定を記憶するものを含みます）には、同意は不要とされています。そのため、当社はCookieの同意バナーを表示していません。</p>
      <p>今後、アクセス解析など必要不可欠ではないCookieを導入する場合は、事前に本ポリシーを改定し、法令上必要な場合は設定前にお客様の同意を求めます。その際は、同意しない選択も、同意する場合と同じく簡単に行えるようにします。</p>

      <h2 id="managing-cookies">Cookie等の管理・削除方法</h2>
      <p>本ポリシーに記載したすべての項目は、お客様ご自身で管理できます。</p>
      <ul>
        <li><strong>削除する：</strong>ブラウザの設定で blockforge.vip のCookieとサイトデータを消去すると、<code>bf-lang</code>、<code>bf-theme</code>、ワークスペースのCookieが削除されます。</li>
        <li><strong>ブロックする：</strong>多くのブラウザでは、すべてのCookie、サードパーティCookieのみ、または特定のサイトのデータ保存をブロックするよう設定できます。</li>
        <li><strong>プライベートウィンドウを使う：</strong>プライベートウィンドウ（シークレットウィンドウ）では、ウィンドウを閉じるとCookieとサイトデータが削除されます。</li>
      </ul>
      <p>主なブラウザの設定場所は次のとおりです（メニュー名はブラウザのバージョンにより異なります）。</p>
      <ul>
        <li><strong>Chrome：</strong>設定 &rarr; プライバシーとセキュリティ &rarr; 閲覧履歴データの削除、またはサードパーティCookie</li>
        <li><strong>Edge：</strong>設定 &rarr; Cookieとサイトのアクセス許可 &rarr; Cookieとサイトデータの管理と削除</li>
        <li><strong>Safari：</strong>Macでは 設定 &rarr; プライバシー &rarr; Webサイトデータを管理、iPhone・iPadでは 設定 &rarr; Safari &rarr; 詳細 &rarr; Webサイトデータ</li>
        <li><strong>Firefox：</strong>設定 &rarr; プライバシーとセキュリティ &rarr; Cookieとサイトデータ</li>
      </ul>
      <p>削除またはブロックした場合の影響は次のとおりです。</p>
      <ul>
        <li><strong><code>bf-lang</code>：</strong>表示言語の選択が記憶されなくなります。各ページはそのページの言語で表示されますが、ブラウザの言語設定が日本語の場合は、英語版のページが自動的に日本語版に切り替わります。言語切替でいつでも選び直せます。表示通貨はページの言語に連動するため、料金は表示中のページの通貨で表示されます。</li>
        <li><strong><code>bf-theme</code>：</strong>選び直すまで、既定のテーマで表示されます。</li>
        <li><strong>ブラウザの保存をすべてブロックした場合：</strong>ウェブサイトは引き続きご利用いただけますが、これらの設定は記憶されません。</li>
        <li><strong>ワークスペースのCookie：</strong>削除するとログアウトされ、ブロックするとワークスペースにログインできなくなります。ログアウトやCookieの削除によってサブスクリプションが解約されることはなく、クレジットにも影響しません。解約は、「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」から行うか、アカウントに登録されたメールアドレスから当社にメールでご連絡ください（<a href="cancellation.html">解約ポリシー</a>参照）。</li>
        <li><strong>決済代行会社のCookie：</strong>ブロックすると、決済を完了できない場合があります。</li>
      </ul>

      <h2 id="global-privacy-control">Global Privacy Controlと個人情報の販売・共有の拒否</h2>
      <p>当社はGlobal Privacy Control（GPC）に対応しています。お客様のブラウザからGPCシグナルが送信された場合は、個人情報の販売・共有およびターゲティング広告に対するオプトアウトのご請求として取り扱います。当社はもともと個人情報を販売・共有しておらず、本ポリシーに記載したCookie等を広告に使用することもないため、GPCシグナルの有無によってサイトの動作が変わることはありません。従来のDo Not Track（トラッキング拒否）設定についても、当社は追跡を行っていないため、同様に動作は変わりません。</p>
      <p>詳しい内容やオプトアウトのご請求方法は、<a href="do-not-sell.html">個人情報の販売・共有の拒否</a>および<a href="privacy.html">プライバシーポリシー</a>をご覧ください。</p>

      <h2 id="changes">本ポリシーの変更</h2>
      <p>使用するCookie等を変更する場合は本ポリシーを改定し、ページ上部の「最終更新日」を更新します。新しいCookieや保存項目は、使用を開始する前に本ポリシーに記載します。必要不可欠ではないCookieの追加など重要な変更を行う場合は、効力発生前にメールまたはワークスペース内のお知らせでご連絡し、法令上必要な場合はお客様の同意を得ます。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>本ポリシーやCookie等に関するご質問は、${J.brand}の運営者である${J.company}までお寄せください。</p>
      <address>${J.company}<br>${J.addressLines.join("<br>")}<br><a href="mailto:${J.email}">${J.email}</a></address>
      <p>メールには${J.supportResponse}に、日本語または英語でご返信します。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、日本語版と英語版との間に齟齬がある場合は英語版が優先します。</p>
    `
  }
};
