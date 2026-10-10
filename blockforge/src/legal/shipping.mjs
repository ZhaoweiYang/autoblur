import { FACTS, PLAN } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;
const C = PLAN.creditCosts;

export default {
  slug: "shipping",
  order: 5,
  en: {
    title: "Shipping & Delivery Policy",
    nav: "Shipping & Delivery",
    description: `${E.brand} is fully digital: nothing is shipped and there are no shipping fees. Learn when you get access and how AI game assets are delivered as PNG and WAV.`,
    body: `
      <p class="lede">${E.brand} is a digital service, so nothing is ever shipped to you and there are no shipping fees, customs duties or delivery addresses. You get access to the web workspace as soon as you start the ${E.trial}. Exactly ${E.trialHours} hour after the trial starts, your card is automatically charged ${E.price} (${E.currency}) for 12 months of ${E.brand} Pro unless you cancel before the hour ends, and your access simply continues. Every asset you generate is delivered in your workspace, usually within about a minute, as a PNG image or a WAV sound file that you download yourself.</p>

      <h2 id="digital-only">1. A digital-only service</h2>
      <p>${E.brand}, operated by ${E.company}, is an online creative tool for game creators. In a web workspace, you describe what you want and ${E.brand} generates game assets with AI. Everything we provide is digital:</p>
      <ul>
        <li>We do not ship any physical goods, discs, devices or printed materials.</li>
        <li>There are no shipping, handling or delivery fees, and no customs duties or import charges.</li>
        <li>We never ask for a shipping or delivery address. The billing country and postal code requested at checkout are used for card verification, fraud prevention, billing and tax records, never for shipping. See our <a href="privacy.html">Privacy Policy</a>.</li>
        <li>The only charge from us is the annual subscription fee shown at checkout: ${E.price} per year in ${E.currencyName} on the English site, or ${J.price} per year in Japanese yen (JPY, consumption tax included) on the Japanese site. ${E.taxNote}</li>
      </ul>

      <h2 id="access">2. When you get access</h2>
      <ul>
        <li><strong>Immediately when the trial starts:</strong> you start the ${E.trial} by entering a payment card on the <a href="../checkout.html">checkout page</a>. As soon as the card is accepted, your account is active and you can use all seven tools in the workspace with ${E.trialCredits} trial credits. Nothing is charged during the trial.</li>
        <li><strong>Automatic annual charge after ${E.trialHours} hour:</strong> exactly ${E.trialHours} hour after the trial starts, your card is automatically charged the annual fee of ${E.price} (${E.currency}) for 12 months of ${E.brand} Pro, unless you cancel before the hour ends. Your card statement will show <strong>&ldquo;${E.descriptor}&rdquo;</strong>.</li>
        <li><strong>Pro continues without interruption:</strong> after the first charge there is nothing to activate or wait for. Your Pro access continues automatically, your first paid year starts, and ${E.credits} credits are added to your account.</li>
        <li><strong>Cancelling during the trial:</strong> if you cancel before the hour ends, in Account &rarr; Billing &rarr; Cancel subscription or by emailing <a href="mailto:${E.email}">${E.email}</a> from your account email, you are never charged and your access ends when the trial ends. We confirm every cancellation by email.</li>
        <li><strong>Each renewal:</strong> the subscription renews automatically every 12 months at the then-current annual price until you cancel. We email you a reminder at least ${E.reminderDays} days before each renewal charge, and if the price changes we tell you by email at least ${E.priceChangeNoticeDays} days before the renewal it applies to. ${E.credits} new credits are added when each new paid year starts. Unused credits expire at the end of the paid year they belong to and do not roll over.</li>
      </ul>
      <p class="callout"><strong>${E.refundDays}-Day Money-Back Guarantee:</strong> Full refund on unused credits. No questions asked. Within ${E.refundDays} days after any annual charge, first or renewal, you can ask for a refund by email or from Account &rarr; Billing. See our <a href="refund.html">Refund Policy</a> for how the amount is calculated.</p>

      <h2 id="delivery">3. How your assets are delivered</h2>
      <p>You create assets in the signed-in web workspace. After you submit a request, ${E.brand} generates the asset and shows it in your workspace, usually within about a minute. At busy times, generation can take longer. When an asset is ready, you download it directly from the workspace. Images are delivered as PNG files and sound effects as WAV files.</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>What you receive</th><th>Size or length</th><th>File format</th><th>Credits per asset</th></tr>
        </thead>
        <tbody>
          <tr><td>Thumbnail</td><td>16:9 game thumbnail</td><td>1920&times;1080 pixels</td><td>PNG</td><td>${C.thumbnail}</td></tr>
          <tr><td>Icon</td><td>Game icon with a transparent background</td><td>512&times;512 pixels</td><td>PNG</td><td>${C.icon}</td></tr>
          <tr><td>Texture</td><td>Seamless, tileable texture</td><td>512&times;512 pixels</td><td>PNG</td><td>${C.texture}</td></tr>
          <tr><td>Clothing</td><td>Shirt-template clothing image</td><td>585&times;559 pixels</td><td>PNG</td><td>${C.clothing}</td></tr>
          <tr><td>GFX</td><td>Character render</td><td>512&times;512 pixels</td><td>PNG</td><td>${C.gfx}</td></tr>
          <tr><td>UI layout</td><td>Editable UI layout, exported as an image plus a layer list you can rebuild in a game editor</td><td>Full layout image and its layer list</td><td>PNG image and layer list</td><td>${C.ui}</td></tr>
          <tr><td>Sound effect</td><td>Short sound effect</td><td>Short clip</td><td>WAV</td><td>${C.sfx}</td></tr>
        </tbody>
      </table>
      <p>All downloads are full resolution. You own the assets you generate, to the extent the law allows, and may use them commercially, including in monetized games, as set out in our <a href="terms.html">Terms of Service</a>. The free preview mode on our marketing website is different: it draws rough previews locally in your browser, needs no account and uses no credits. Preview images are not AI-generated assets and are not part of the paid delivery described on this page.</p>

      <h2 id="confirmations">4. Delivery confirmations by email</h2>
      <p>Your generated assets are delivered in the workspace, not by email. We send service emails to the email address on your account to confirm each step of your purchase:</p>
      <ul>
        <li><strong>Trial confirmation:</strong> sent when you start the trial. It states the exact time your trial ends, when the annual charge will be made, and how to cancel.</li>
        <li><strong>Receipt:</strong> sent after the first annual charge and after every renewal charge, showing the amount charged, the currency and the date. The charge itself appears on your card statement as &ldquo;${E.descriptor}&rdquo;.</li>
        <li><strong>Renewal reminder:</strong> sent at least ${E.reminderDays} days before each renewal charge.</li>
        <li><strong>Cancellation and refund confirmations:</strong> sent when you cancel your subscription or when we process a refund.</li>
      </ul>
      <p>If an email does not arrive within a few minutes, check your spam or junk folder, then contact us and we will resend it.</p>

      <h2 id="availability">5. Where the service is available</h2>
      <p>${E.brand} is available worldwide, wherever we can legally offer it. We cannot provide the service in countries or to persons where applicable law, including sanctions law, prohibits it. The website and workspace are available in English and Japanese, and our support team answers in both languages.</p>
      <p>The language of the site decides the currency: the English site charges ${E.price} per year in ${E.currency}, and the Japanese site charges ${J.price} per year in JPY with consumption tax included. You are charged in the currency and amount shown at checkout before you confirm.</p>

      <h2 id="failed-generations">6. Failed or incomplete generations</h2>
      <ul>
        <li>If a generation fails or does not complete, the credits it used are returned to your account automatically. You can then try again.</li>
        <li>If a delivered file is incomplete, will not download or will not open, or if credits for a failed generation were not returned, contact <a href="mailto:${E.email}">${E.email}</a>. We will investigate and restore the credits or help you obtain a working file.</li>
        <li>A generation that completes but is not to your taste uses its credits like any other generation. You can refine your description and generate again. Your unused credits remain covered by the ${E.refundDays}-Day Money-Back Guarantee for ${E.refundDays} days after each annual charge.</li>
      </ul>

      <h2 id="downloads">7. Download availability and keeping your own copies</h2>
      <p>Generated assets stay in your workspace until you delete them, or until 30 days after your account is closed, whichever comes first. You can download them again at any time while they are stored. ${E.brand} is not a backup service, so we recommend that you download and keep your own copies of every asset you need, especially before you cancel your subscription or close your account. An asset you delete from the workspace may not be recoverable.</p>

      <h2 id="support">8. Delivery problems and support</h2>
      <p>If you cannot access the workspace, an asset is not delivered, or a confirmation email is missing, email <a href="mailto:${E.email}">${E.email}</a> from your account email. To help us resolve it quickly, include the tool you used, the approximate time of the request and a short description or screenshot of the problem. We reply ${E.supportResponse}, in English or Japanese.</p>
      <p>If you see a charge from &ldquo;${E.descriptor}&rdquo; that you do not recognize, or a billing issue related to delivery, please contact us before disputing the charge with your bank; we resolve billing issues quickly. For refunds and cancellations, see our <a href="refund.html">Refund Policy</a> and <a href="cancellation.html">Cancellation Policy</a>; for the full contract, see our <a href="terms.html">Terms of Service</a>.</p>

      <h2 id="contact">9. Contact</h2>
      <p>If you have questions about access or delivery, contact us:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "配送・提供ポリシー",
    nav: "配送・提供",
    description: `${J.brand}はデジタルサービスのため、商品の発送や送料はありません。ご利用開始のタイミングと、PNG・WAV形式で提供するAIゲーム素材の受け取り方法をご案内します。`,
    body: `
      <p class="lede">${J.brand}はデジタルサービスです。物品の発送は一切行わないため、送料や関税はかからず、配送先住所のご登録も不要です。${J.trial}を開始した時点から、ただちにウェブ上のワークスペースをご利用いただけます。トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、${J.brand} Pro 12か月分の年額料金${J.price}（税込）が登録カードに自動的に請求され、ご利用はそのまま継続します。生成した素材は通常1分程度でワークスペースに表示され、PNG画像またはWAV音声ファイルとしてお客様ご自身でダウンロードいただけます。</p>

      <h2 id="digital-only">1. デジタル専用のサービスです</h2>
      <p>${J.brand}は、${J.company}が運営するゲームクリエイター向けのオンライン制作ツールです。ウェブ上のワークスペースで作りたいものを入力すると、AIがゲーム素材を生成します。当社が提供するものはすべてデジタルコンテンツです。</p>
      <ul>
        <li>物理的な商品、ディスク、機器、印刷物などを発送することはありません。</li>
        <li>送料、梱包料、配送手数料は発生せず、関税や輸入手数料もかかりません。</li>
        <li>配送先住所をお伺いすることはありません。決済時にご入力いただく請求先の国・郵便番号は、カードの認証、不正利用の防止、請求・税務上の記録のために使用するもので、配送には使用しません。詳しくは<a href="privacy.html">プライバシーポリシー</a>をご覧ください。</li>
        <li>当社が請求するのは、決済画面に表示される年額のサブスクリプション料金のみです。日本語サイトでは年額${J.price}（税込）を日本円で、英語サイトでは年額${E.price}を米ドルで請求します。日本円の表示価格は消費税込みです。英語サイトの米ドル建て料金には、お住まいの地域により売上税またはVATが加算される場合があり、その場合は確定前に決済画面に表示されます。</li>
      </ul>

      <h2 id="access">2. ご利用開始のタイミング</h2>
      <ul>
        <li><strong>トライアル開始と同時にご利用いただけます：</strong>${J.trial}は、<a href="../checkout.html">決済ページ</a>でお支払い用カードを登録して開始します。カードが承認されるとすぐにアカウントが有効になり、${J.trialCredits}クレジットのトライアル用クレジットで7つのツールすべてをご利用いただけます。トライアル期間中に料金は発生しません。</li>
        <li><strong>${J.trialHours}時間後に年額料金を自動請求します：</strong>トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、${J.brand} Pro 12か月分の年額料金${J.price}（税込）が登録カードに自動的に請求されます。カードのご利用明細には<strong>「${J.descriptor}」</strong>と表示されます。</li>
        <li><strong>Proのご利用はそのまま継続します：</strong>初回の請求後に、改めて有効化の手続きをしたり、お待ちいただいたりする必要はありません。Proのご利用は自動的に継続して最初の有料年度が始まり、${J.credits}クレジットがアカウントに付与されます。</li>
        <li><strong>トライアル期間中に解約した場合：</strong>${J.trialHours}時間が経過する前に「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」から、またはご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> へのメールで解約された場合、料金は一切請求されず、トライアル終了時にご利用が終了します。解約の手続きが完了すると、確認メールをお送りします。</li>
        <li><strong>自動更新：</strong>サブスクリプションは、解約されるまで12か月ごとに、その時点の年額料金で自動更新されます。各更新請求の少なくとも${J.reminderDays}日前までにリマインダーメールをお送りします。料金を変更する場合は、新料金が適用される更新の少なくとも${J.priceChangeNoticeDays}日前までにメールでお知らせします。新しい有料年度の開始時には${J.credits}クレジットを付与します。未使用のクレジットはその有料年度の終了時に失効し、翌年度へ繰り越されません。</li>
      </ul>
      <p class="callout"><strong>${J.refundDays}日間返金保証：</strong>未使用クレジット分を全額返金します。理由は問いません。初回・更新を問わず、年額料金の請求日から${J.refundDays}日以内であれば、メールまたは「アカウント &rarr; お支払い」から返金をお申し込みいただけます。返金額の計算方法は<a href="refund.html">返金ポリシー</a>をご覧ください。</p>

      <h2 id="delivery">3. 素材の提供方法</h2>
      <p>素材の作成は、ログイン後のウェブ上のワークスペースで行います。リクエストを送信すると${J.brand}が素材を生成し、通常1分程度でワークスペースに表示します。混雑時には、生成に時間がかかる場合があります。完成した素材はワークスペースから直接ダウンロードいただけます。画像はPNGファイル、効果音はWAVファイルで提供します。</p>
      <table>
        <thead>
          <tr><th>ツール</th><th>提供内容</th><th>サイズ・長さ</th><th>ファイル形式</th><th>消費クレジット（1点あたり）</th></tr>
        </thead>
        <tbody>
          <tr><td>サムネイル</td><td>16:9のゲームサムネイル</td><td>1920&times;1080ピクセル</td><td>PNG</td><td>${C.thumbnail}</td></tr>
          <tr><td>アイコン</td><td>背景透過のゲームアイコン</td><td>512&times;512ピクセル</td><td>PNG</td><td>${C.icon}</td></tr>
          <tr><td>テクスチャ</td><td>継ぎ目なく並べられるシームレステクスチャ</td><td>512&times;512ピクセル</td><td>PNG</td><td>${C.texture}</td></tr>
          <tr><td>衣装</td><td>シャツテンプレート形式の衣装画像</td><td>585&times;559ピクセル</td><td>PNG</td><td>${C.clothing}</td></tr>
          <tr><td>GFX</td><td>キャラクターレンダー</td><td>512&times;512ピクセル</td><td>PNG</td><td>${C.gfx}</td></tr>
          <tr><td>UIレイアウト</td><td>編集可能なUIレイアウト。画像と、ゲームエディター上で再構成できるレイヤー一覧として書き出します</td><td>レイアウト全体の画像とレイヤー一覧</td><td>PNG画像およびレイヤー一覧</td><td>${C.ui}</td></tr>
          <tr><td>効果音</td><td>短い効果音</td><td>短いクリップ</td><td>WAV</td><td>${C.sfx}</td></tr>
        </tbody>
      </table>
      <p>ダウンロードいただける素材はすべてフル解像度です。生成した素材は、法令で認められる範囲でお客様に帰属し、<a href="terms.html">利用規約</a>に従って、収益化されたゲームを含め商用利用いただけます。なお、マーケティングサイトの無料プレビューモードはこれとは別の機能で、お使いのブラウザ内で簡易的なプレビューを描画するだけのものです。アカウントは不要で、クレジットも消費しません。プレビュー画像はAIが生成した素材ではなく、本ポリシーで説明する有料サービスの提供対象ではありません。</p>

      <h2 id="confirmations">4. メールによる確認のご案内</h2>
      <p>生成した素材はワークスペースでお渡しするもので、メールでお送りすることはありません。お手続きの各段階の確認として、ご登録のメールアドレス宛てに次のサービスメールをお送りします。</p>
      <ul>
        <li><strong>トライアル開始のご案内：</strong>トライアル開始時にお送りします。トライアルの正確な終了時刻、年額料金の請求タイミング、解約方法を記載しています。</li>
        <li><strong>領収書：</strong>初回の年額料金の請求後、および毎回の更新請求後にお送りします。請求金額、通貨、請求日を記載しています。なお、カードのご利用明細には「${J.descriptor}」と表示されます。</li>
        <li><strong>更新のリマインダー：</strong>各更新請求の少なくとも${J.reminderDays}日前までにお送りします。</li>
        <li><strong>解約・返金の確認：</strong>サブスクリプションの解約時、または返金処理の完了時にお送りします。</li>
      </ul>
      <p>数分たってもメールが届かない場合は、迷惑メールフォルダをご確認のうえ、当社までご連絡ください。再送いたします。</p>

      <h2 id="availability">5. ご利用いただける地域</h2>
      <p>${J.brand}は、法令上提供が認められる限り、世界中でご利用いただけます。ただし、制裁関連法令を含む適用法令により提供が禁止されている国・地域や個人に対しては、サービスを提供できません。ウェブサイトとワークスペースは日本語と英語に対応しており、サポートも両言語で承ります。</p>
      <p>請求通貨はサイトの表示言語によって決まります。日本語サイトでは年額${J.price}（税込）を日本円で、英語サイトでは年額${E.price}を米ドルで請求します。お客様には、確定前に決済画面に表示された通貨と金額で請求されます。</p>

      <h2 id="failed-generations">6. 生成に失敗した場合・不完全な場合</h2>
      <ul>
        <li>生成に失敗した場合、または生成が完了しなかった場合、消費されたクレジットは自動的にアカウントへ返還されます。改めて生成をお試しください。</li>
        <li>お渡ししたファイルが不完全である、ダウンロードできない、開けない場合、または生成失敗分のクレジットが返還されていない場合は、<a href="mailto:${J.email}">${J.email}</a> までご連絡ください。当社で調査のうえ、クレジットを返還するか、正常なファイルを取得できるようサポートいたします。</li>
        <li>生成が正常に完了したものの仕上がりがお好みに合わなかった場合は、通常の生成と同様にクレジットを消費します。指示内容を調整して再度生成いただけます。なお、年額料金の各請求日から${J.refundDays}日以内であれば、未使用クレジット分は${J.refundDays}日間返金保証の対象となります。</li>
      </ul>

      <h2 id="downloads">7. ダウンロード可能な期間とお手元での保存</h2>
      <p>生成した素材は、お客様が削除するまで、またはアカウント閉鎖から30日後のいずれか早い時点まで、ワークスペースに保存されます。保存期間中はいつでも再ダウンロードいただけます。${J.brand}はバックアップサービスではありませんので、必要な素材は必ずダウンロードしてお手元に保存してください。特にサブスクリプションの解約やアカウントの閉鎖の前には、保存をおすすめします。ワークスペースから削除した素材は、復元できない場合があります。</p>

      <h2 id="support">8. 提供に関するトラブルとサポート</h2>
      <p>ワークスペースにアクセスできない、素材が提供されない、確認メールが届かないといった場合は、ご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。迅速に対応するため、使用したツール、リクエストのおおよその日時、問題の簡単な説明またはスクリーンショットを添えてお送りください。${J.supportResponse}に日本語または英語でご返信します。</p>
      <p>「${J.descriptor}」からの身に覚えのない請求や、提供に関連するお支払いの問題がある場合は、カード会社に異議申し立てをされる前に、まず当社までご連絡ください。速やかに解決いたします。返金と解約については<a href="refund.html">返金ポリシー</a>および<a href="cancellation.html">解約ポリシー</a>を、契約内容の全体については<a href="terms.html">利用規約</a>をご覧ください。</p>

      <h2 id="contact">9. お問い合わせ</h2>
      <p>ご利用開始や素材の提供に関するご質問は、下記までお問い合わせください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本ポリシーの日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
