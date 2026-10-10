import { FACTS, SITE } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

const CARD_NAMES = { visa: "Visa", mastercard: "Mastercard", amex: "American Express", jcb: "JCB", discover: "Discover" };
const cardList = SITE.cards.map((c) => CARD_NAMES[c] || c);
const cardsEn = cardList.length > 1 ? `${cardList.slice(0, -1).join(", ")} and ${cardList[cardList.length - 1]}` : cardList.join("");
const cardsJa = cardList.join("、");
const jaUrl = `${SITE.siteUrl}/ja/`;
const enUrl = `${SITE.siteUrl}/`;
const unusedEn = E.refundExample.unused.toLocaleString("en-US");
const unusedJa = J.refundExample.unused.toLocaleString("ja-JP");

export default {
  slug: "commercial-disclosure",
  order: 11,
  en: {
    title: "Commercial Disclosure (Japan)",
    nav: "Commercial Disclosure",
    description: `Disclosures under Japan's Act on Specified Commercial Transactions for ${E.brand} Pro: seller, address, price, payment timing, delivery, refunds, cancellation.`,
    body: `
      <p class="lede">This page sets out the information that Japan&rsquo;s Act on Specified Commercial Transactions requires for online sales of ${E.brand} Pro, the annual plan sold on our Japanese site. It is an English translation provided for convenience. The Japanese version of this page is the authoritative version, and it prevails if the two versions differ.</p>

      <h2 id="disclosure">Disclosures under the Act on Specified Commercial Transactions</h2>
      <table>
        <tbody>
          <tr><th>Seller</th><td>${E.company}</td></tr>
          <tr><th>Head of operations</th><td>We will disclose this without delay upon request. Please send your request to <a href="mailto:${E.email}">${E.email}</a>.</td></tr>
          <tr><th>Address</th><td>${E.addressLines.join("<br>")}</td></tr>
          <tr><th>Telephone number</th><td>We will disclose this without delay upon request. We handle all inquiries by email so that we have a written record and can answer accurately; please contact <a href="mailto:${E.email}">${E.email}</a>.</td></tr>
          <tr><th>Email address</th><td><a href="mailto:${E.email}">${E.email}</a> (replies ${E.supportResponse}, in Japanese or English)</td></tr>
          <tr><th>Sales URL</th><td><a href="${jaUrl}">${jaUrl}</a> (Japanese site). The English site is <a href="${enUrl}">${enUrl}</a>.</td></tr>
          <tr><th>Product</th><td>${E.brand} Pro, an annual subscription to an online service that generates game assets with AI (thumbnails, icons, textures, clothing images, character renders, UI layouts and sound effects), delivered digitally as PNG and WAV files. Each paid year includes ${E.credits} credits.</td></tr>
          <tr><th>Selling price</th><td>Japanese site: <strong>${J.price} per year</strong> (consumption tax included, charged in JPY), billed annually.<br>English site: <strong>${E.price} per year</strong> (${E.currency}); sales tax or VAT may apply depending on where you live and is shown at checkout before you confirm.<br>The language of the site decides the currency, and you are charged the amount and currency shown at checkout. The plan starts with a ${E.trial} (${E.trialCredits} trial credits), during which nothing is charged.</td></tr>
          <tr><th>Charges other than the price</th><td>Internet connection and data charges needed to use the service are paid by the customer. There are no shipping or handling fees. Some card issuers may add an overseas transaction or currency-conversion fee because the seller is located in the United States; any such fee is set by your card issuer.</td></tr>
          <tr><th>Payment methods</th><td>Credit and debit cards: ${cardsEn}. Payments are processed by a third-party payment processor that is PCI DSS compliant. We never see or store your full card number.</td></tr>
          <tr><th>Payment timing</th><td>A payment card is registered when you start the ${E.trial}. Nothing is charged during the trial. Exactly ${E.trialHours} hour after the trial starts, the first annual fee is charged automatically, unless you cancel before the hour ends. After that, the subscription renews automatically every 12 months on the same date at the then-current annual price, until you cancel. We email a reminder at least ${E.reminderDays} days before each renewal charge, and at least ${E.priceChangeNoticeDays} days&rsquo; notice before any price change applies to a renewal.</td></tr>
          <tr><th>Delivery timing</th><td>The service is available immediately when the trial starts, once your card is accepted. After the first annual charge, Pro access continues without interruption and ${E.credits} credits are added to your account. Generated assets usually appear in your workspace within about a minute (longer at busy times) and are downloaded there. See our <a href="shipping.html">Shipping &amp; Delivery Policy</a>.</td></tr>
          <tr><th>Contract term and renewal</th><td>12 months per paid year, renewing automatically until cancelled. Unused credits expire at the end of each paid year and do not roll over. One free trial per person and per payment card.</td></tr>
          <tr><th>Returns, refunds and cancellation</th><td>Because the service is digital, it cannot be returned. Instead, we offer a <strong>${E.refundDays}-Day Money-Back Guarantee: Full refund on unused credits. No questions asked.</strong> Within ${E.refundDays} days after any annual charge (the first charge or a renewal), you can request a refund by email or from Account &rarr; Billing. Refund amount = annual fee &times; unused credits &divide; ${E.credits}; if you have used no credits, you receive 100% of the fee (for example, ${E.refundExample.used} credits used leaves ${unusedEn} unused, and the refund is ${E.refundExample.amount}, or ${J.refundExample.amount} on the Japanese site). Refunds go back to the original payment method; we process them within 5 business days, and banks usually show them within 5 to 10 business days. A refund ends the subscription.<br>You can cancel at any time in Account &rarr; Billing &rarr; Cancel subscription or by email. If you cancel during the trial, you are never charged. If you cancel after a charge, no further charges are made and you keep Pro access and your remaining credits until the end of the current paid year. See our <a href="refund.html">Refund Policy</a> and <a href="cancellation.html">Cancellation Policy</a>.</td></tr>
          <tr><th>Withdrawal of application</th><td>The statutory cooling-off period does not apply to online sales (mail-order sales) under the Act. Instead, you can cancel before the trial ends without any charge, and our ${E.refundDays}-day money-back guarantee applies after every annual charge.</td></tr>
          <tr><th>System requirements</th><td>The latest version of Google Chrome, Microsoft Edge, Apple Safari or Mozilla Firefox, and an internet connection.</td></tr>
          <tr><th>Name on card statement</th><td>Charges appear on your card statement as <strong>&ldquo;${E.descriptor}&rdquo;</strong>.</td></tr>
        </tbody>
      </table>

      <h2 id="contact">Contact</h2>
      <p>For questions about this disclosure, or to request the name of the head of operations or our telephone number, contact us:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>.</p>
      <p>This English page is a translation of our Japanese commercial disclosure. The Japanese version is authoritative and prevails in case of any conflict.</p>
    `
  },
  ja: {
    title: "特定商取引法に基づく表記",
    nav: "特定商取引法に基づく表記",
    description: `${J.brand} Proの特定商取引法に基づく表記です。販売業者、所在地、販売価格（年額${J.price}・税込）、支払時期、提供時期、返金・解約などを記載しています。`,
    body: `
      <p class="lede">特定商取引に関する法律に基づき、当社が日本語サイトで通信販売する${J.brand} Pro（年額プラン）について、以下のとおり表示します。本ページは日本語版を正本とし、英語版は参考訳です。</p>

      <h2 id="disclosure">特定商取引法に基づく表示事項</h2>
      <table>
        <tbody>
          <tr><th>販売業者</th><td>${J.company}</td></tr>
          <tr><th>運営統括責任者</th><td>請求があった場合には遅滞なく開示いたします。<a href="mailto:${J.email}">${J.email}</a> までご請求ください。</td></tr>
          <tr><th>所在地</th><td>${J.addressLines.join("<br>")}</td></tr>
          <tr><th>電話番号</th><td>請求があった場合には遅滞なく開示いたします。お問い合わせは、記録を残し正確にご回答するため、メール（<a href="mailto:${J.email}">${J.email}</a>）にて承っております。</td></tr>
          <tr><th>メールアドレス</th><td><a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）</td></tr>
          <tr><th>販売URL</th><td><a href="${jaUrl}">${jaUrl}</a>（日本語サイト）<br>英語サイト：<a href="${enUrl}">${enUrl}</a></td></tr>
          <tr><th>商品の内容</th><td>${J.brand} Pro（年額サブスクリプション）。AIでゲーム素材（サムネイル、アイコン、テクスチャ、衣装画像、キャラクターレンダー、UIレイアウト、効果音）を生成するオンラインサービスで、PNGおよびWAVファイルとしてデジタルで提供します。有料年度ごとに${J.credits}クレジットが含まれます。</td></tr>
          <tr><th>販売価格</th><td>日本語サイト：<strong>${J.pricePerYear}</strong>（日本円建て）<br>英語サイト：<strong>年額${E.price}</strong>（米ドル）。お住まいの地域により売上税またはVATが加算される場合があり、その場合は確定前に決済画面に表示されます。<br>請求通貨はサイトの表示言語によって決まり、決済画面に表示された通貨と金額で請求されます。ご利用は${J.trial}（${J.trialCredits}トライアルクレジット付き）から始まり、トライアル期間中に料金は発生しません。</td></tr>
          <tr><th>商品代金以外の必要料金</th><td>本サービスのご利用に必要なインターネット接続料金・通信料金は、お客様のご負担となります。送料・手数料はかかりません。なお、販売業者が米国に所在するため、カード発行会社によっては日本円でのお支払いであっても海外事務手数料等が加算される場合があります。これらはカード発行会社が定めるものです。</td></tr>
          <tr><th>支払方法</th><td>クレジットカード・デビットカード（${cardsJa}）。決済は、PCI DSSに準拠した第三者の決済代行会社が処理します。当社がカード番号の全桁を閲覧・保存することはありません。</td></tr>
          <tr><th>支払時期</th><td>${J.trial}の開始時にお支払い用カードをご登録いただきます。トライアル期間中に料金は発生しません。無料トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、初回の年額料金を自動的に請求します。以後、解約されるまで毎年同日に、その時点の年額料金で自動更新・請求します。各更新請求の少なくとも${J.reminderDays}日前までにリマインダーメールをお送りし、料金を変更する場合は、適用される更新の少なくとも${J.priceChangeNoticeDays}日前までにお知らせします。</td></tr>
          <tr><th>引渡時期（提供時期）</th><td>トライアル開始時（カード承認後）ただちにご利用いただけます。初回の年額料金の決済完了後も、Proのご利用は途切れることなく継続し、${J.credits}クレジットがアカウントに付与されます。生成した素材は通常1分程度（混雑時はそれ以上）でワークスペースに表示され、そこからダウンロードいただけます。詳しくは<a href="shipping.html">配送・提供ポリシー</a>をご覧ください。</td></tr>
          <tr><th>契約期間・自動更新</th><td>1有料年度は12か月で、解約されるまで自動更新されます。未使用のクレジットは各有料年度の終了時に失効し、翌年度へ繰り越されません。無料トライアルはお一人様・カード1枚につき1回限りです。</td></tr>
          <tr><th>返品・キャンセル（返金）</th><td>デジタルサービスの性質上、返品はお受けできません。その代わりに、<strong>${J.refundDays}日間返金保証（未使用クレジット分を全額返金。理由は問いません）</strong>を設けています。年額料金の各請求日（初回・更新のいずれも）から${J.refundDays}日以内に、メールまたは「アカウント &rarr; お支払い」からお申し出いただけます。返金額は「年額料金 &times; 未使用クレジット数 &divide; ${J.credits}」で計算し、クレジットを一切使用していない場合は全額（100%）を返金します（例：${J.refundExample.used}クレジット使用、未使用${unusedJa}クレジットの場合、返金額は${J.refundExample.amount}）。返金は元のお支払い方法に対して行い、当社は5営業日以内に処理します。カード会社の明細に反映されるまでには、通常5〜10営業日かかります。返金を行うとサブスクリプションは終了します。<br>解約は「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」またはメールで、いつでも可能です。トライアル期間中に解約された場合、料金は一切請求されません。請求後に解約された場合、以後の請求は行われず、現在の有料年度の終了時まで、Proの機能と残りのクレジットを引き続きご利用いただけます。詳しくは<a href="refund.html">返金ポリシー</a>および<a href="cancellation.html">解約ポリシー</a>をご覧ください。</td></tr>
          <tr><th>申込みの撤回（クーリング・オフ）</th><td>通信販売には、特定商取引法に定めるクーリング・オフ制度は適用されません。その代わりに、トライアル終了前であれば料金なしで解約でき、各年額料金の請求後は当社独自の${J.refundDays}日間返金保証が適用されます。</td></tr>
          <tr><th>動作環境</th><td>最新版の Google Chrome、Microsoft Edge、Apple Safari、Mozilla Firefox のいずれか、およびインターネット接続環境</td></tr>
          <tr><th>カード明細の表示名</th><td>カードのご利用明細には<strong>「${J.descriptor}」</strong>と表示されます。</td></tr>
        </tbody>
      </table>

      <h2 id="contact">お問い合わせ</h2>
      <p>本表記に関するご質問、ならびに運営統括責任者の氏名または電話番号の開示のご請求は、下記までお問い合わせください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
    `
  }
};
