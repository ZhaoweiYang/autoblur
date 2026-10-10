import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

const H = E.trialHours === 1 ? "hour" : "hours";

export default {
  slug: "cancellation",
  order: 4,
  en: {
    title: "Cancellation Policy",
    nav: "Cancellation",
    description: `How to cancel ${E.brand} Pro at any time: two clicks in your account or one email. Cancel during the ${E.trial} and you are never charged.`,
    body: `
      <p class="lede">This Cancellation Policy explains how to cancel your ${E.brand} Pro subscription, which is operated by ${E.company}, and what happens when you do. You can cancel at any time, during the ${E.trial} or after a charge, and there is no cancellation fee. Cancel within the trial ${H} and you are never charged. Cancel later and no further charges are made, while you keep Pro and your remaining credits until the end of the year you paid for.</p>

      <p class="callout"><strong>Cancel anytime:</strong> in two clicks from Account &rarr; Billing &rarr; Cancel subscription, or by sending one email to <a href="mailto:${E.email}">${E.email}</a> from your account email. No cancellation fee and no notice period.</p>

      <h2 id="your-subscription">What you are cancelling</h2>
      <p>${E.brand} Pro is a single plan billed annually: ${E.price} per year in ${E.currencyName} on our English site, or ${J.price} per year in Japanese yen (JPY, consumption tax included) on our Japanese site. ${E.taxNote}</p>
      <ul>
        <li>It starts with a ${E.trial}. A payment card is required, and you get ${E.trialCredits} trial credits and full access. Nothing is charged during the trial.</li>
        <li><strong>Exactly ${E.trialHours} ${H} after the trial starts, your card is automatically charged the annual fee for 12 months of ${E.brand} Pro, unless you cancel before the ${H} ends.</strong> ${E.credits} credits are added to your account when the paid year starts.</li>
        <li>The subscription then renews automatically every 12 months at the then-current annual price, until you cancel.</li>
      </ul>
      <p>Cancelling stops these automatic charges. Charges appear on your card statement as &ldquo;${E.descriptor}&rdquo;.</p>

      <h2 id="how-to-cancel">How to cancel</h2>
      <h3>Option 1: in your account (two clicks)</h3>
      <ol>
        <li>Sign in to your ${E.brand} workspace.</li>
        <li>Go to Account &rarr; Billing.</li>
        <li>Click <strong>Cancel subscription</strong>, then confirm.</li>
      </ol>
      <p>Cancelling in your account takes effect at once, and we send you a confirmation email straight away.</p>
      <h3>Option 2: by email</h3>
      <ol>
        <li>Write to <a href="mailto:${E.email}">${E.email}</a> from the email address on your ${E.brand} account.</li>
        <li>Say that you want to cancel your subscription, for example with the subject line &ldquo;Cancel subscription&rdquo;. You do not need to give a reason.</li>
        <li>We cancel your subscription and reply with a confirmation email.</li>
      </ol>
      <p>If you write from a different address, we may ask you to confirm from your account email first, so that nobody else can cancel your subscription. If you can no longer access your account email, tell us and we will verify your identity using the card brand and last four digits of the card on file. If you need help cancelling for any reason, including accessibility needs, email us and we will complete the cancellation for you.</p>
      <p>Simply not using ${E.brand}, or deleting the confirmation emails, does not cancel your subscription. Please use one of the two options above.</p>

      <h2 id="during-trial">Cancelling during the free trial</h2>
      <ul>
        <li><strong>You are never charged.</strong> If you cancel before the trial ${H} ends, your card is not charged at all.</li>
        <li><strong>Access ends when the trial ends.</strong> You keep full access and any remaining trial credits until the end of the trial ${H}; then your access ends.</li>
        <li><strong>Know your deadline.</strong> The confirmation email we send when you start the trial states the exact time your trial ends and how to cancel.</li>
        <li><strong>Fastest option:</strong> cancelling in Account &rarr; Billing takes effect at once. If you cancel by email and your email reaches us before the trial ends but the annual charge goes through before we act on it, we refund that charge in full.</li>
        <li><strong>One trial only.</strong> The free trial is available once per person and per payment card. Cancelling a trial does not give you a new trial later.</li>
      </ul>

      <h2 id="after-charge">Cancelling after a charge</h2>
      <ul>
        <li><strong>No further charges.</strong> Your subscription will not renew, and we will not charge your card again.</li>
        <li><strong>You keep what you paid for.</strong> Your ${E.brand} Pro access and your remaining credits stay available until the end of the current paid year, which is 12 months after the charge.</li>
        <li><strong>At the end of the paid year</strong> your subscription ends and any unused credits expire, as they do at the end of every paid year. Credits never roll over.</li>
        <li><strong>Your account is not deleted.</strong> Your account and the assets you generated stay in your workspace until you delete them, or until 30 days after your account is closed.</li>
        <li><strong>No automatic refund.</strong> Cancelling stops future charges but does not by itself refund the current year. To get money back, use the ${E.refundDays}-Day Money-Back Guarantee within ${E.refundDays} days of the charge (see <a href="#refunds">Cancellation and refunds</a>).</li>
      </ul>

      <h2 id="timing">When to cancel and when it takes effect</h2>
      <table>
        <thead>
          <tr><th>To avoid</th><th>Cancel before</th></tr>
        </thead>
        <tbody>
          <tr><td>The first annual charge of ${E.price}</td><td>The end of the trial: ${E.trialHours} ${H} after you started it. The exact time is in your trial confirmation email.</td></tr>
          <tr><td>A renewal charge</td><td>Your renewal time: 12 months after your current paid year started. The date is in the reminder email we send at least ${E.reminderDays} days before each renewal.</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>In your account:</strong> cancellation takes effect immediately for all future charges. There is no notice period, so you can cancel at any time before the trial ends or before the renewal.</li>
        <li><strong>By email:</strong> cancellation takes effect when we process your email, which we do promptly. If your email reached us before the trial ended or before the renewal, but the charge went through before we processed it, we refund that charge in full.</li>
      </ul>

      <h2 id="confirmation">Confirmation email</h2>
      <p>Every time you cancel, we send a confirmation email to the email address on your account. It confirms that your subscription is cancelled, that no further charges will be made, and the date your access ends. Please keep it for your records. If you do not receive it, check your spam folder and then contact us, so that we can check that the cancellation went through.</p>

      <h2 id="renewal-reminder">Renewal reminders</h2>
      <p>So that you always have time to decide, we email you a reminder at least ${E.reminderDays} days before each renewal charge, stating the amount, the renewal date and how to cancel. If the annual price changes, we email you at least ${E.priceChangeNoticeDays} days before the renewal it applies to; a new price never applies in the middle of a paid year, and you can cancel before that renewal if you do not accept it. After every charge, we email you a receipt.</p>

      <h2 id="refunds">Cancellation and refunds</h2>
      <p>Cancelling and getting a refund are two different things: cancelling stops future charges, and a refund gives back money for a charge that has already been made.</p>
      <ul>
        <li><strong>${E.refundDays}-Day Money-Back Guarantee:</strong> Full refund on unused credits. No questions asked. Within ${E.refundDays} days after any annual charge, first or renewal, you can ask for a refund by emailing <a href="mailto:${E.email}">${E.email}</a> or from Account &rarr; Billing.</li>
        <li><strong>Amount:</strong> annual fee &times; unused credits &divide; ${E.credits}. If you have used none of the year&rsquo;s credits, you get the full ${E.price} back. For example, if you used ${E.refundExample.used} credits, your refund is ${E.refundExample.amount}. Trial credits never count.</li>
        <li><strong>A refund also cancels.</strong> A refund ends your subscription and removes the remaining credits for that paid year, so you do not need to cancel separately.</li>
        <li><strong>After ${E.refundDays} days</strong>, charges are non-refundable except where the law requires otherwise, but you can still cancel so that the next renewal is not charged.</li>
      </ul>
      <p>Full details are in our <a href="refund.html">Refund Policy</a>.</p>

      <h2 id="resubscribe">Subscribing again</h2>
      <p>You can subscribe again at any time from the <a href="../checkout.html">checkout page</a>, at the then-current annual price. The free trial is available only once per person and per payment card, so a new subscription does not include a new trial: your card is charged the annual fee when you subscribe, and a new paid year with ${E.credits} credits starts at once. That charge is covered by the ${E.refundDays}-Day Money-Back Guarantee like every other annual charge.</p>

      <h2 id="account-deletion">Cancelling versus deleting your account</h2>
      <ul>
        <li><strong>Cancelling</strong> stops future charges. Your account stays open, you keep access until the end of the trial or paid year, and your generated assets stay in your workspace.</li>
        <li><strong>Deleting your account</strong> closes it for good. To delete it, email <a href="mailto:${E.email}">${E.email}</a> from your account email. Deletion ends your access immediately, removes your remaining credits and stops all future charges.</li>
        <li>After deletion, we keep account data for 30 days and generated assets for 30 days after the account is closed, then delete them. We keep billing and tax records for 7 years because the law requires it. See our <a href="privacy.html">Privacy Policy</a>.</li>
        <li>Deleting your account does not by itself refund the current year. If you are within ${E.refundDays} days of an annual charge, ask for your refund before or when you request deletion.</li>
        <li>Download any assets you want to keep before you ask us to delete your account.</li>
      </ul>

      <h2 id="termination">If we cancel or end your subscription</h2>
      <p>We may suspend or terminate your access, with notice where reasonable, if you materially breach our <a href="terms.html">Terms of Service</a> or the acceptable-use rules, if we suspect fraud or payment abuse, if the law requires it, or if it is necessary to protect the Service, other users or third parties.</p>
      <ul>
        <li><strong>Not your breach:</strong> if we end your subscription for a reason that is not your breach of the Terms, including discontinuing the Service, we refund the unused credits of your current paid year on a pro-rata basis (annual fee &times; unused credits &divide; ${E.credits}) to your original payment method. If we discontinue the Service entirely, we email you at least 30 days in advance.</li>
        <li><strong>Your breach:</strong> if we terminate because you materially breached the Terms, we do not refund fees for the rest of that paid year, except where the ${E.refundDays}-Day Money-Back Guarantee still applies or the law requires a refund.</li>
        <li><strong>Declined renewal payment:</strong> if a renewal charge is declined, we email you and may retry the charge. Pro access may be paused until the payment succeeds or you cancel.</li>
      </ul>
      <p>Full details are in <a href="terms.html#termination">Suspension and termination</a> in our Terms of Service.</p>

      <h2 id="contact">Contact</h2>
      <p>For help with cancelling or any question about your subscription, contact us:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>. Related policies: <a href="terms.html">Terms of Service</a> and <a href="refund.html">Refund Policy</a>.</p>
    `
  },
  ja: {
    title: "解約ポリシー",
    nav: "解約",
    description: `${J.brand} Pro はアカウント画面から2クリック、またはメール1通でいつでも解約できます。${J.trial}中に解約すれば料金は一切かかりません。`,
    body: `
      <p class="lede">本解約ポリシーは、${J.company}が運営する${J.brand} Pro のサブスクリプションの解約方法と、解約した場合の取扱いを定めるものです。解約は、${J.trial}の期間中でも請求後でも、いつでも行うことができ、解約手数料はかかりません。トライアル開始から${J.trialHours}時間以内に解約すれば料金は一切請求されません。請求後に解約した場合は、以後の請求は行われず、お支払い済みの1年間の終了時まで Pro と残りのクレジットをご利用いただけます。</p>

      <p class="callout"><strong>いつでも解約できます：</strong>「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」の2クリック、またはご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> へのメール1通で解約できます。解約手数料や事前の予告期間はありません。</p>

      <h2 id="your-subscription">解約の対象となるサブスクリプション</h2>
      <p>${J.brand} Pro は年払いの単一プランで、日本語版サイトでは${J.pricePerYear}（${J.currencyName}）、英語版サイトでは年額${E.price}（米ドル建て）です。${J.taxNote}</p>
      <ul>
        <li>${J.trial}から始まります。お支払い用カードの登録が必要で、トライアル中は${J.trialCredits}クレジットのトライアル用クレジットとすべての機能をご利用いただけます。トライアル期間中に料金は発生しません。</li>
        <li><strong>トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、登録されたカードに${J.brand} Pro 12か月分の年額料金が自動的に請求されます。</strong>有料年度の開始時に${J.credits}クレジットが付与されます。</li>
        <li>その後は、解約されるまで12か月ごとにその時点の年額料金で自動更新されます。</li>
      </ul>
      <p>解約すると、これらの自動請求が停止します。カードのご利用明細には「${J.descriptor}」と表示されます。</p>

      <h2 id="how-to-cancel">解約の方法</h2>
      <h3>方法1：アカウント画面から（2クリック）</h3>
      <ol>
        <li>${J.brand}のワークスペースにログインします。</li>
        <li>「アカウント &rarr; お支払い」を開きます。</li>
        <li><strong>「サブスクリプションを解約」</strong>をクリックし、解約を確定します。</li>
      </ol>
      <p>アカウント画面からの解約は直ちに有効となり、すぐに確認のメールをお送りします。</p>
      <h3>方法2：メールで</h3>
      <ol>
        <li>${J.brand}アカウントにご登録のメールアドレスから、<a href="mailto:${J.email}">${J.email}</a> までメールをお送りください。</li>
        <li>サブスクリプションの解約を希望する旨をお書きください（件名を「解約希望」または「Cancel subscription」としていただくとスムーズです）。理由をお書きいただく必要はありません。</li>
        <li>当社が解約の手続きを行い、確認のメールでご返信します。</li>
      </ol>
      <p>ご登録以外のメールアドレスからご連絡いただいた場合は、第三者による解約を防ぐため、ご登録のメールアドレスからの確認をお願いすることがあります。ご登録のメールアドレスをご利用いただけない場合はその旨をお知らせください。登録カードのブランドと下4桁により、ご本人確認を行います。障がいなどの理由で手続きが難しい場合を含め、解約にお手伝いが必要なときはメールでご連絡いただければ、当社が解約を代わりに完了します。</p>
      <p>${J.brand}をご利用にならないだけ、または確認メールを削除しただけでは、解約にはなりません。必ず上記いずれかの方法でお手続きください。</p>

      <h2 id="during-trial">無料トライアル期間中の解約</h2>
      <ul>
        <li><strong>料金は一切請求されません。</strong>トライアル開始から${J.trialHours}時間が経過する前に解約された場合、カードへの請求は一切行われません。</li>
        <li><strong>ご利用はトライアル終了時までです。</strong>解約後もトライアルが終了するまでは、すべての機能と残りのトライアル用クレジットをご利用いただけます。トライアル終了時にご利用が終了します。</li>
        <li><strong>期限をご確認ください。</strong>トライアル開始時にお送りする確認メールに、トライアルの正確な終了時刻と解約方法を記載しています。</li>
        <li><strong>最も確実な方法：</strong>「アカウント &rarr; お支払い」からの解約は直ちに有効となります。メールで解約される場合、トライアル終了前にメールが当社に届いていたにもかかわらず、当社が対応する前に年額料金が請求されたときは、その請求額を全額返金します。</li>
        <li><strong>トライアルは1回限りです。</strong>無料トライアルはお一人様・カード1枚につき1回限りです。トライアル中に解約しても、後日あらためてトライアルをご利用いただくことはできません。</li>
      </ul>

      <h2 id="after-charge">請求後の解約</h2>
      <ul>
        <li><strong>以後の請求はありません。</strong>サブスクリプションは更新されず、カードに再び請求されることはありません。</li>
        <li><strong>お支払い済みの期間はご利用いただけます。</strong>${J.brand} Pro のご利用と残りのクレジットは、現在の有料年度（請求日から12か月間）の終了時までご利用いただけます。</li>
        <li><strong>有料年度の終了時に</strong>サブスクリプションは終了し、未使用のクレジットは失効します。これはすべての有料年度に共通の取扱いで、クレジットを翌年度に繰り越すことはできません。</li>
        <li><strong>アカウントは削除されません。</strong>アカウントおよび生成した素材は、お客様が削除されるか、アカウントの閉鎖から30日が経過するまでワークスペースに保存されます。</li>
        <li><strong>解約だけでは返金されません。</strong>解約により以後の請求は停止しますが、当該年度の料金が自動的に返金されることはありません。返金をご希望の場合は、請求日から${J.refundDays}日以内に${J.refundDays}日間返金保証をご利用ください（<a href="#refunds">「解約と返金」</a>参照）。</li>
      </ul>

      <h2 id="timing">解約の期限と効力発生のタイミング</h2>
      <table>
        <thead>
          <tr><th>請求を避けたい場合</th><th>解約の期限</th></tr>
        </thead>
        <tbody>
          <tr><td>初回の年額料金${J.price}</td><td>トライアル終了時（開始から${J.trialHours}時間後）まで。正確な時刻はトライアル開始時の確認メールに記載しています。</td></tr>
          <tr><td>更新時の請求</td><td>更新日時（現在の有料年度の開始から12か月後）まで。日付は、各更新日の少なくとも${J.reminderDays}日前までにお送りするお知らせメールに記載しています。</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>アカウント画面から：</strong>解約は以後のすべての請求について直ちに有効となります。予告期間はないため、トライアル終了前または更新日前であれば、いつでも解約できます。</li>
        <li><strong>メールで：</strong>解約は当社がメールを処理した時点で有効となります。当社は速やかに対応しますが、トライアル終了前または更新日前にメールが届いていたにもかかわらず、処理の前に請求が行われた場合は、その請求額を全額返金します。</li>
      </ul>

      <h2 id="confirmation">解約確認メール</h2>
      <p>解約のたびに、ご登録のメールアドレスへ確認のメールをお送りします。サブスクリプションが解約されたこと、以後の請求が行われないこと、ご利用の終了日を記載していますので、記録として保管してください。確認メールが届かない場合は、迷惑メールフォルダをご確認のうえ、当社までご連絡ください。解約が完了しているかをお調べします。</p>

      <h2 id="renewal-reminder">更新前のお知らせ</h2>
      <p>継続するかどうかを検討いただけるよう、各更新日の少なくとも${J.reminderDays}日前までに、請求額、更新日、解約方法を記載したお知らせをメールでお送りします。年額料金を変更する場合は、新料金が適用される更新日の少なくとも${J.priceChangeNoticeDays}日前までにメールでお知らせします。有料年度の途中で料金が変わることはなく、新料金に同意されない場合は、その更新日の前に解約できます。請求のたびに、領収書をメールでお送りします。</p>

      <h2 id="refunds">解約と返金</h2>
      <p>解約と返金は別の手続きです。解約は今後の請求を停止するもので、返金はすでに行われた請求について料金をお返しするものです。</p>
      <ul>
        <li><strong>${J.refundDays}日間返金保証：</strong>未使用クレジット分を全額返金します。理由は問いません。初回の請求か更新時の請求かを問わず、年額料金の請求日から${J.refundDays}日以内であれば、<a href="mailto:${J.email}">${J.email}</a> へのメール、または「アカウント &rarr; お支払い」から返金をお申し込みいただけます。</li>
        <li><strong>返金額：</strong>年額料金 &times; 未使用クレジット数 &divide; ${J.credits}。その年度のクレジットを1つも使用していない場合は${J.price}を全額返金します。たとえば${J.refundExample.used}クレジットを使用した場合の返金額は${J.refundExample.amount}です。トライアル用クレジットは計算に含めません。</li>
        <li><strong>返金をもって解約となります。</strong>返金を行うとサブスクリプションは終了し、その有料年度の残りのクレジットは削除されます。別途解約のお手続きは不要です。</li>
        <li><strong>請求日から${J.refundDays}日を過ぎた場合</strong>は、法令で返金が義務付けられる場合を除き返金できませんが、解約していただければ次回の更新料金は請求されません。</li>
      </ul>
      <p>詳しくは<a href="refund.html">返金ポリシー</a>をご覧ください。</p>

      <h2 id="resubscribe">再度のお申し込み</h2>
      <p><a href="../checkout.html">お申し込みページ</a>から、その時点の年額料金でいつでも再度お申し込みいただけます。無料トライアルはお一人様・カード1枚につき1回限りのため、再度のお申し込みには新たなトライアルは含まれません。お申し込み時に年額料金が請求され、${J.credits}クレジットが付与された新しい有料年度がただちに始まります。この請求にも、他の年額料金と同様に${J.refundDays}日間返金保証が適用されます。</p>

      <h2 id="account-deletion">解約とアカウント削除の違い</h2>
      <ul>
        <li><strong>解約</strong>は今後の請求を停止する手続きです。アカウントはそのまま残り、トライアルまたは有料年度の終了時までご利用いただけます。生成した素材もワークスペースに保存されたままです。</li>
        <li><strong>アカウントの削除</strong>は、アカウントを完全に閉鎖する手続きです。ご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> までご依頼ください。削除と同時にご利用は終了し、残りのクレジットは削除され、以後の請求もすべて停止します。</li>
        <li>削除後、アカウント情報は30日間、生成した素材はアカウントの閉鎖から30日間保管した後に削除します。請求・税務に関する記録は、法令に基づき7年間保管します。詳しくは<a href="privacy.html">プライバシーポリシー</a>をご覧ください。</li>
        <li>アカウントを削除しても、当該年度の料金が自動的に返金されることはありません。年額料金の請求日から${J.refundDays}日以内の場合は、削除のご依頼の前または同時に返金をお申し込みください。</li>
        <li>残しておきたい素材は、削除をご依頼いただく前にダウンロードしてください。</li>
      </ul>

      <h2 id="termination">当社による解約・利用停止</h2>
      <p>お客様が<a href="terms.html">利用規約</a>または禁止事項に重大な違反をした場合、不正利用や決済の不正が疑われる場合、法令により必要な場合、または本サービス、他の利用者もしくは第三者を保護するために必要な場合、当社は、合理的な範囲で事前に通知したうえで、ご利用を停止し、または契約を終了することがあります。</p>
      <ul>
        <li><strong>お客様の違反によらない場合：</strong>本サービスの提供終了を含め、お客様の規約違反以外の理由で当社がサブスクリプションを終了する場合は、現在の有料年度の未使用クレジット分を按分して（年額料金 &times; 未使用クレジット数 &divide; ${J.credits}）、元のお支払い方法に返金します。本サービスの提供を全面的に終了する場合は、少なくとも30日前までにメールでお知らせします。</li>
        <li><strong>お客様の違反による場合：</strong>お客様の重大な規約違反を理由に契約を終了する場合、当該有料年度の残りの期間の料金は返金しません。ただし、${J.refundDays}日間返金保証の対象期間内である場合や、法令により返金が義務付けられる場合は除きます。</li>
        <li><strong>更新時の決済が承認されなかった場合：</strong>メールでお知らせし、再度請求を試みることがあります。決済が完了するか解約されるまで、Proのご利用を一時停止する場合があります。</li>
      </ul>
      <p>詳しくは<a href="terms.html#termination">利用規約第17条（利用停止・契約の終了）</a>をご覧ください。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>解約のお手続きやサブスクリプションに関するご質問は、下記までお問い合わせください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。関連するポリシー：<a href="terms.html">利用規約</a>、<a href="refund.html">返金ポリシー</a></p>
      <p>本解約ポリシーの日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
