import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

// Derived values, computed from FACTS so the page follows any change in config.mjs.
const zero = (price) => price.replace(/[\d.,]+/, "0");          // "US$0" / "¥0"
const zeroEn = zero(E.price), zeroJa = zero(J.price);
const unusedEn = E.refundExample.unused.toLocaleString("en-US");
const unusedJa = J.refundExample.unused.toLocaleString("ja-JP");
const H = E.trialHours === 1 ? "hour" : "hours";

export default {
  slug: "refund",
  order: 3,
  en: {
    title: "Refund Policy",
    nav: "Refunds",
    description: `${E.brand} ${E.refundDays}-Day Money-Back Guarantee: full refund on unused credits, no questions asked. How refunds are calculated, requested and paid.`,
    body: `
      <p class="lede">This Refund Policy explains when and how you get money back for ${E.brand} Pro, which is operated by ${E.company}. In short: within ${E.refundDays} days after any annual charge, you can ask for a refund for the credits of that paid year that you have not used, and we pay it with no questions asked. If you have not used any of that year&rsquo;s credits, you get the full annual fee back (${E.price}). The ${E.trial} itself is free: cancel before the ${H} ends and you are never charged.</p>

      <p class="callout"><strong>${E.refundDays}-Day Money-Back Guarantee:</strong> Full refund on unused credits. No questions asked.</p>

      <h2 id="what-you-pay">What you pay and when</h2>
      <ul>
        <li><strong>Plan:</strong> ${E.brand} Pro, billed annually, at ${E.price} per year in ${E.currencyName}. ${E.taxNote}</li>
        <li><strong>Free trial:</strong> the ${E.trial} requires a payment card and gives you ${E.trialCredits} trial credits and full access. Nothing is charged during the trial.</li>
        <li><strong>First charge:</strong> exactly ${E.trialHours} ${H} after the trial starts, your card is automatically charged ${E.price} for 12 months of ${E.brand} Pro, unless you cancel before the ${H} ends. ${E.credits} credits are added to your account when the paid year starts.</li>
        <li><strong>Renewal:</strong> the subscription renews automatically every 12 months at the then-current annual price until you cancel. Each renewal adds ${E.credits} new credits for the new paid year.</li>
        <li><strong>Currency:</strong> on our Japanese site the same plan costs ${J.price} per year in Japanese yen (JPY), consumption tax included. You are charged, and refunded, in the currency shown at checkout.</li>
      </ul>

      <h2 id="eligibility">Who can get a refund</h2>
      <p>Every ${E.brand} Pro subscriber can use the guarantee. It applies to every annual charge:</p>
      <ul>
        <li>the first annual charge, made automatically when your free trial ends; and</li>
        <li>every renewal charge, made automatically every 12 months after that.</li>
      </ul>
      <p>You can ask for a refund at any time within ${E.refundDays} days after the date of the charge shown on your receipt email. You do not need to give a reason, and we will not ask for one. The guarantee applies to each annual charge separately, so a new ${E.refundDays}-day period starts with every renewal.</p>

      <h2 id="amount">How your refund is calculated</h2>
      <p>Your refund pays back the credits of the paid year that you have not used:</p>
      <p><strong>Refund = annual fee paid &times; unused credits &divide; ${E.credits}</strong></p>
      <p>&ldquo;Unused credits&rdquo; means the ${E.credits} credits added for the paid year that the charge covers, minus the credits you have used from them. Credits that were returned automatically after a failed generation count as unused. We round the result to the nearest cent (or to the nearest yen for charges in JPY). If sales tax or VAT was added to your charge, we refund that tax in the same proportion.</p>
      <table>
        <thead>
          <tr><th>Credits used in the paid year</th><th>Unused credits</th><th>Your refund (annual fee ${E.price})</th></tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>${E.credits}</td><td>${E.price} (100%)</td></tr>
          <tr><td>0 (you used only the ${E.trialCredits} trial credits)</td><td>${E.credits}</td><td>${E.price} (100%)</td></tr>
          <tr><td>${E.refundExample.used}</td><td>${unusedEn}</td><td>${E.refundExample.amount}</td></tr>
          <tr><td>${E.credits} (all)</td><td>0</td><td>${zeroEn}</td></tr>
        </tbody>
      </table>
      <p>For charges in Japanese yen (${J.price} per year), the same formula gives a refund of ${J.price} if no credits were used, ${J.refundExample.amount} if ${J.refundExample.used} credits were used, and ${zeroJa} if all credits were used.</p>

      <h2 id="free-trial">The free trial and trial credits</h2>
      <ul>
        <li><strong>The trial is free.</strong> Nothing is charged during the ${E.trial}, so there is no trial fee to refund.</li>
        <li><strong>Cancel within the ${H}, pay nothing.</strong> If you cancel before ${E.trialHours} ${H} has passed since you started the trial, you are never charged.</li>
        <li><strong>Trial credits never count.</strong> The ${E.trialCredits} trial credits are separate from the ${E.credits} annual credits. Using them does not reduce the refund for your first annual charge.</li>
        <li><strong>Forgot to cancel?</strong> The guarantee still covers the first annual charge. If you have not used any of the annual credits, you get the full ${E.price} back.</li>
        <li><strong>Late email cancellations:</strong> if your cancellation email reached us before the trial ended but the annual charge went through before we acted on it, we refund that charge in full.</li>
      </ul>

      <h2 id="how-to-request">How to ask for a refund</h2>
      <p>Use either of these two ways:</p>
      <ol>
        <li><strong>In your account:</strong> sign in to your ${E.brand} workspace, go to Account &rarr; Billing, and request a refund for the charge.</li>
        <li><strong>By email:</strong> write to <a href="mailto:${E.email}">${E.email}</a>, preferably from the email address on your account.</li>
      </ol>
      <p>If you write to us, please include:</p>
      <ul>
        <li>the email address on your ${E.brand} account;</li>
        <li>the date and amount of the charge, from your receipt email or your card statement (where it appears as &ldquo;${E.descriptor}&rdquo;);</li>
        <li>if you are writing from a different email address, the card brand and the last four digits of the card that was charged.</li>
      </ul>
      <p>Never send your full card number, security code or password by email; we will never ask for them. You do not need to explain why you want a refund. If you write from an address that is not on your account, we may ask you to confirm the request from your account email before we refund, so that nobody else can cancel your subscription.</p>

      <h2 id="processing">Processing time, payment method and currency</h2>
      <ul>
        <li><strong>Processing:</strong> we process your refund within 5 business days after we receive your request (or, if we have asked you to confirm it from your account email, after you confirm it), and we email you to confirm the amount.</li>
        <li><strong>Bank time:</strong> after we process it, your bank or card issuer usually shows the refund within 5&ndash;10 business days. The exact time depends on your bank.</li>
        <li><strong>Payment method:</strong> we refund to the original payment method used for the charge. We cannot send a refund to a different card, a bank account or another person. If that card has been closed or replaced, your card issuer normally passes the refund on to your new card or account; if it cannot, contact us and we will help.</li>
        <li><strong>Currency:</strong> we refund in the currency of the original charge: US dollars for charges in USD and Japanese yen for charges in JPY. If your bank converted the charge into another currency, the amount it credits back can differ slightly because of exchange rates or bank fees, which we do not control.</li>
      </ul>

      <h2 id="after-refund">What happens after a refund</h2>
      <ul>
        <li>Your ${E.brand} Pro subscription, including your Pro access, ends when we process the refund. No further charges are made, including renewals, so you do not need to cancel separately.</li>
        <li>The remaining credits for that paid year are removed from your account.</li>
        <li>Assets you generated before the refund remain yours to use, as described in our <a href="terms.html">Terms of Service</a>. A refund does not delete your account: generated assets stay in your workspace until you delete them or until 30 days after your account is closed. We recommend that you download any assets you want to keep.</li>
        <li>You can subscribe again at any time at the then-current price. The free trial is available only once per person and per payment card, so a new subscription is charged when you subscribe.</li>
      </ul>

      <h2 id="after-30-days">After ${E.refundDays} days</h2>
      <p>Once ${E.refundDays} days have passed since a charge, that charge is non-refundable, except where the law requires a refund. You can still cancel at any time so that your next renewal is not charged, and you keep Pro access and your remaining credits until the end of the paid year. See our <a href="cancellation.html">Cancellation Policy</a>.</p>
      <p>We still refund the following, regardless of the ${E.refundDays}-day limit:</p>
      <ul>
        <li>duplicate or incorrect charges (see <a href="#billing-errors">Duplicate or incorrect charges</a>); and</li>
        <li>the unused credits of your current paid year, pro rata, if we end your subscription for a reason that is not your breach of our Terms (see section 17, <a href="terms.html#termination">Suspension and termination</a>, of our Terms of Service).</li>
      </ul>
      <p>Nothing in this policy limits any rights you have under consumer protection laws that apply to you, for example in Japan or the European Union.</p>

      <h2 id="renewals">Renewal reminders</h2>
      <p>Your subscription renews automatically every 12 months at the then-current annual price until you cancel. To make sure a renewal never surprises you:</p>
      <ul>
        <li>we email you a reminder at least ${E.reminderDays} days before each renewal charge, stating the amount, the renewal date and how to cancel;</li>
        <li>if the annual price changes, we email you at least ${E.priceChangeNoticeDays} days before the renewal it applies to, and a new price never applies in the middle of a paid year;</li>
        <li>after every charge, we email you a receipt.</li>
      </ul>
      <p>If a renewal goes through and you did not mean to continue, the guarantee still applies: ask for a refund within ${E.refundDays} days of the renewal charge. If you have not used any of the new year&rsquo;s credits, you get the full renewal charge back.</p>

      <h2 id="billing-errors">Duplicate or incorrect charges</h2>
      <p>If we charge you by mistake, we always refund that charge in full, no matter how much time has passed or how many credits you have used. This includes:</p>
      <ul>
        <li>being charged twice for the same period;</li>
        <li>being charged an amount different from the price shown at checkout or in your renewal reminder;</li>
        <li>being charged after you cancelled in time, before the end of the trial or before the renewal.</li>
      </ul>
      <p>Tell us at <a href="mailto:${E.email}">${E.email}</a>. Once we confirm the error, we process the refund within 5 business days.</p>

      <h2 id="chargebacks">Chargebacks and disputes</h2>
      <p>If a charge looks wrong to you, please contact us first at <a href="mailto:${E.email}">${E.email}</a> before you dispute it with your card issuer. We resolve billing issues quickly, and a refund from us usually reaches you sooner than the result of a card dispute.</p>
      <p>This policy does not limit any right you have with your card issuer. If a dispute or chargeback is opened, we respond to the card issuer through our payment processor with the records of the charge, such as your trial confirmation, renewal reminder and receipt. If we have already refunded a charge, please do not also dispute it, so that the same amount is not returned twice.</p>

      <h2 id="statement-descriptor">How charges appear on your statement</h2>
      <p>Your card statement will show <strong>&ldquo;${E.descriptor}&rdquo;</strong> for every ${E.brand} charge, and refunds appear under the same name as a credit. Some banks add a reference number or a location to the name. If you see a charge from &ldquo;${E.descriptor}&rdquo; that you do not recognise, email <a href="mailto:${E.email}">${E.email}</a> with the date and amount, and we will look into it right away.</p>

      <h2 id="contact">Contact</h2>
      <p>For questions about refunds or about a charge, contact us:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>. Related policies: <a href="terms.html">Terms of Service</a> and <a href="cancellation.html">Cancellation Policy</a>.</p>
    `
  },
  ja: {
    title: "返金ポリシー",
    nav: "返金",
    description: `${J.brand}の返金ポリシーです。年額料金の請求日から${J.refundDays}日以内なら、未使用クレジット分を理由を問わず全額返金します。返金額の計算方法、申込方法、処理期間をご案内します。`,
    body: `
      <p class="lede">本返金ポリシーは、${J.company}が運営する${J.brand} Pro の料金について、返金の条件と方法を定めるものです。要点は次のとおりです。年額料金の請求日から${J.refundDays}日以内であれば、未使用のクレジットに相当する金額を、理由を問わず返金します。その有料年度のクレジットを一切使用していない場合は、年額料金${J.price}（税込）を全額返金します。また、${J.trial}の期間中は料金が発生せず、開始から${J.trialHours}時間以内に解約すれば、料金は一切請求されません。</p>

      <p class="callout"><strong>${J.refundDays}日間返金保証：</strong>未使用クレジット分を全額返金します。理由は問いません。</p>

      <h2 id="what-you-pay">料金と請求のタイミング</h2>
      <ul>
        <li><strong>プラン：</strong>${J.brand} Pro（年払い）、${J.pricePerYear}です。お支払いは${J.currencyName}となります。</li>
        <li><strong>無料トライアル：</strong>${J.trial}の開始には、お支払い用カードの登録が必要です。トライアル期間中は、トライアル用クレジット（${J.trialCredits}クレジット）が付与され、すべての機能をご利用いただけます。トライアル期間中に料金は発生しません。</li>
        <li><strong>初回の請求：</strong>トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、登録されたカードに${J.brand} Pro 12か月分の年額料金${J.price}（税込）が自動的に請求されます。有料年度の開始時に${J.credits}クレジットが付与されます。</li>
        <li><strong>自動更新：</strong>解約されるまで、12か月ごとにその時点の年額料金で自動更新されます。更新のたびに、新しい有料年度分として${J.credits}クレジットが付与されます。</li>
        <li><strong>通貨：</strong>英語版サイトでは、同じプランを年額${E.price}（米ドル建て）で提供しています。請求および返金は、決済画面に表示された通貨で行われます。</li>
      </ul>

      <h2 id="eligibility">返金の対象</h2>
      <p>本保証は、${J.brand} Pro をご契約のすべてのお客様にご利用いただけます。対象となるのは、次のすべての年額料金の請求です。</p>
      <ul>
        <li>無料トライアル終了時に自動的に行われる初回の請求</li>
        <li>その後12か月ごとに自動的に行われる更新時の請求</li>
      </ul>
      <p>領収書メールに記載された請求日から${J.refundDays}日以内であれば、いつでも返金をお申し込みいただけます。理由をお伝えいただく必要はなく、当社からお尋ねすることもありません。本保証は請求ごとに適用されるため、更新のたびに新たに${J.refundDays}日間の保証期間が始まります。</p>

      <h2 id="amount">返金額の計算方法</h2>
      <p>返金額は、その有料年度のクレジットのうち、まだ使用していない分に相当する金額です。</p>
      <p><strong>返金額 ＝ お支払いいただいた年額料金 &times; 未使用クレジット数 &divide; ${J.credits}</strong></p>
      <p>「未使用クレジット数」とは、対象となる請求の有料年度に付与された${J.credits}クレジットから、使用済みのクレジットを差し引いた数です。生成に失敗して自動的に返還されたクレジットは、未使用として扱います。返金額の1円未満の端数は四捨五入します（米ドル建ての場合は1セント未満を四捨五入します）。米ドル建ての請求に売上税またはVATが加算されていた場合は、その税額も同じ割合で返金します。</p>
      <table>
        <thead>
          <tr><th>有料年度に使用したクレジット</th><th>未使用クレジット</th><th>返金額（年額${J.price}の場合）</th></tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>${J.credits}</td><td>${J.price}（100%）</td></tr>
          <tr><td>0（トライアル用の${J.trialCredits}クレジットのみ使用）</td><td>${J.credits}</td><td>${J.price}（100%）</td></tr>
          <tr><td>${J.refundExample.used}</td><td>${unusedJa}</td><td>${J.refundExample.amount}</td></tr>
          <tr><td>${J.credits}（すべて使用）</td><td>0</td><td>${zeroJa}</td></tr>
        </tbody>
      </table>
      <p>米ドル建ての請求（年額${E.price}）にも同じ計算式が適用され、クレジットを使用していない場合は${E.price}、${E.refundExample.used}クレジットを使用した場合は${E.refundExample.amount}、すべて使用した場合は${zeroEn}が返金額となります。</p>

      <h2 id="free-trial">無料トライアルとトライアル用クレジット</h2>
      <ul>
        <li><strong>トライアルは無料です。</strong>${J.trial}の期間中に料金は発生しないため、トライアルについて返金の対象となる料金はありません。</li>
        <li><strong>${J.trialHours}時間以内の解約なら料金は発生しません。</strong>トライアル開始から${J.trialHours}時間が経過する前に解約された場合、料金は一切請求されません。</li>
        <li><strong>トライアル用クレジットは計算に含めません。</strong>トライアル用の${J.trialCredits}クレジットは年間の${J.credits}クレジットとは別枠です。トライアル中に使用しても、初回請求分の返金額は減りません。</li>
        <li><strong>解約を忘れた場合：</strong>初回の年額料金にも本保証が適用されます。年間クレジットを一切使用していなければ、年額料金${J.price}（税込）を全額返金します。</li>
        <li><strong>メールでの解約が間に合わなかった場合：</strong>トライアル終了前に解約のメールが当社に届いていたにもかかわらず、当社が対応する前に年額料金が請求された場合は、その請求額を全額返金します。</li>
      </ul>

      <h2 id="how-to-request">返金のお申し込み方法</h2>
      <p>次のいずれかの方法でお申し込みください。</p>
      <ol>
        <li><strong>アカウント画面から：</strong>${J.brand}のワークスペースにログインし、「アカウント &rarr; お支払い」から対象の請求について返金をお申し込みください。</li>
        <li><strong>メールで：</strong><a href="mailto:${J.email}">${J.email}</a> までご連絡ください。できるだけご登録のメールアドレスからお送りください。</li>
      </ol>
      <p>メールでお申し込みの際は、次の情報をお知らせください。</p>
      <ul>
        <li>${J.brand}アカウントにご登録のメールアドレス</li>
        <li>請求日と請求額（領収書メールまたはカードのご利用明細でご確認いただけます。明細には「${J.descriptor}」と表示されます）</li>
        <li>ご登録以外のメールアドレスからご連絡いただく場合は、請求されたカードのブランドと下4桁</li>
      </ul>
      <p>カード番号の全桁、セキュリティコード、パスワードは、メールで送らないでください。当社がこれらをお尋ねすることはありません。返金の理由をお書きいただく必要もありません。ご登録以外のメールアドレスからお申し込みいただいた場合は、第三者による手続きを防ぐため、返金の前にご登録のメールアドレスからの確認をお願いすることがあります。</p>

      <h2 id="processing">返金の処理期間・返金方法・通貨</h2>
      <ul>
        <li><strong>処理期間：</strong>お申し込みを受け付けてから（ご登録のメールアドレスからの確認をお願いした場合は、ご確認をいただいてから）5営業日以内に返金処理を行い、返金額を記載した確認メールをお送りします。</li>
        <li><strong>明細への反映：</strong>処理後、カード会社のご利用明細に反映されるまでには、通常5〜10営業日かかります。反映の時期はカード会社によって異なります。</li>
        <li><strong>返金方法：</strong>返金は、請求時に使用された元のお支払い方法に対して行います。別のカード、銀行口座、または第三者への返金はできません。カードを解約・再発行されている場合は、通常、カード会社が新しいカードまたは口座に返金を振り替えます。振り替えができない場合は当社までご連絡ください。</li>
        <li><strong>通貨：</strong>返金は元の請求と同じ通貨で行います。日本円で請求された場合は日本円で、米ドルで請求された場合は米ドルで返金します。カード会社が外貨を円などに換算している場合、為替レートや手数料により返金として計上される金額がわずかに異なることがありますが、これらは当社では管理できません。</li>
      </ul>

      <h2 id="after-refund">返金後の取扱い</h2>
      <ul>
        <li>返金処理の完了をもって${J.brand} Pro のサブスクリプションは終了し、Proプランの機能もご利用いただけなくなります。以後の請求（更新時の請求を含みます）は行われないため、別途解約のお手続きは不要です。</li>
        <li>その有料年度の残りのクレジットは、アカウントから削除されます。</li>
        <li>返金前に生成した素材は、<a href="terms.html">利用規約</a>に定めるとおり、引き続きお客様のものとしてご利用いただけます。返金によってアカウントが削除されることはなく、生成した素材は、お客様が削除されるか、アカウントの閉鎖から30日が経過するまでワークスペースに保存されます。必要な素材はダウンロードして保管されることをおすすめします。</li>
        <li>いつでも再度お申し込みいただけます（その時点の料金が適用されます）。無料トライアルはお一人様・カード1枚につき1回限りのため、再度のお申し込み時に年額料金が請求されます。</li>
      </ul>

      <h2 id="after-30-days">請求日から${J.refundDays}日を過ぎた場合</h2>
      <p>請求日から${J.refundDays}日を過ぎた請求は、法令で返金が義務付けられる場合を除き、返金の対象外となります。ただし、解約はいつでも可能で、解約すれば次回の更新料金は請求されません。解約後も、現在の有料年度の終了時まで、Proプランの機能と残りのクレジットを引き続きご利用いただけます。詳しくは<a href="cancellation.html">解約ポリシー</a>をご覧ください。</p>
      <p>なお、次の場合は、${J.refundDays}日の期限にかかわらず返金します。</p>
      <ul>
        <li>二重請求や誤った請求があった場合（<a href="#billing-errors">「二重請求・誤った請求」</a>参照）</li>
        <li>お客様の規約違反以外の理由で当社がサブスクリプションを終了した場合の、現在の有料年度の未使用クレジット分の按分返金（<a href="terms.html#termination">利用規約第17条（利用停止・契約の終了）</a>参照）</li>
      </ul>
      <p>本ポリシーは、日本やEUなど、お客様に適用される消費者保護法令に基づく権利を制限するものではありません。</p>

      <h2 id="renewals">更新前のお知らせ</h2>
      <p>サブスクリプションは、解約されるまで12か月ごとにその時点の年額料金で自動更新されます。更新に気づかないまま請求されることのないよう、当社は次のとおりご案内します。</p>
      <ul>
        <li>各更新日の少なくとも${J.reminderDays}日前までに、請求額、更新日、解約方法を記載したお知らせをメールでお送りします。</li>
        <li>年額料金を変更する場合は、新料金が適用される更新日の少なくとも${J.priceChangeNoticeDays}日前までにメールでお知らせします。有料年度の途中で料金が変わることはありません。</li>
        <li>請求のたびに、領収書をメールでお送りします。</li>
      </ul>
      <p>継続するつもりがなかったのに更新料金が請求された場合も、本保証をご利用いただけます。更新時の請求日から${J.refundDays}日以内にお申し込みください。新しい有料年度のクレジットを一切使用していなければ、更新料金を全額返金します。</p>

      <h2 id="billing-errors">二重請求・誤った請求</h2>
      <p>当社の誤りによる請求については、請求日からの経過日数やクレジットの使用状況にかかわらず、その請求額を必ず全額返金します。たとえば、次のような場合です。</p>
      <ul>
        <li>同じ期間について2回請求された場合</li>
        <li>決済画面または更新前のお知らせに表示された金額と異なる金額が請求された場合</li>
        <li>トライアル終了前または更新日前に解約していたにもかかわらず請求された場合</li>
      </ul>
      <p>お気づきの際は <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。誤りを確認後、5営業日以内に返金処理を行います。</p>

      <h2 id="chargebacks">チャージバック（支払いの異議申し立て）</h2>
      <p>請求内容に疑問がある場合は、カード会社に異議を申し立てる前に、まず <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。当社は請求に関する問題に速やかに対応しており、通常はカード会社での手続きよりも早く返金をお受け取りいただけます。</p>
      <p>本ポリシーは、カード会社に対するお客様の権利を制限するものではありません。異議申し立てやチャージバックが行われた場合、当社は決済代行会社を通じて、トライアル開始の確認メール、更新前のお知らせ、領収書など、当該請求に関する記録をカード会社に提出します。すでに当社から返金した請求については、同じ金額が二重に返金されることを避けるため、異議申し立ては行わないようお願いいたします。</p>

      <h2 id="statement-descriptor">ご利用明細での表示</h2>
      <p>${J.brand}の請求は、カードのご利用明細に<strong>「${J.descriptor}」</strong>と表示されます。返金も同じ名称で、マイナスの金額として表示されます。カード会社によっては、名称に参照番号や所在地が付記される場合があります。「${J.descriptor}」からの請求に心当たりがない場合は、請求日と金額を添えて <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。速やかに確認いたします。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>返金や請求に関するご質問は、下記までお問い合わせください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。関連するポリシー：<a href="terms.html">利用規約</a>、<a href="cancellation.html">解約ポリシー</a>。</p>
      <p>本返金ポリシーの日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
