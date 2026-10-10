import { FACTS, PLAN } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;
const C = PLAN.creditCosts;
const TOOLS = Object.keys(C).length;                       // number of tools (7)
const H = E.trialHours === 1 ? "hour" : "hours";
const MBG_EN = `${E.refundDays}-Day Money-Back Guarantee`;  // "30-Day Money-Back Guarantee"
const MBG_JA = `${J.refundDays}日間返金保証`;

export default {
  slug: "terms",
  order: 1,
  en: {
    title: "Terms of Service",
    nav: "Terms",
    description: `Terms of Service for ${E.brand} Pro (${E.pricePerYear}): the ${E.trial} and automatic annual charge, renewal, credits, refunds, cancellation and your rights.`,
    body: `
      <p class="lede">These Terms of Service are the contract between you and ${E.company} for using ${E.brand}. In short: ${E.brand} Pro costs ${E.price} per year (${E.currency}). It starts with a ${E.trial} that requires a payment card. Exactly ${E.trialHours} ${H} after the trial starts, we automatically charge the annual fee to your card unless you cancel before the trial ends. The plan then renews every 12 months until you cancel. Within ${E.refundDays} days of any annual charge you can get a full refund on unused credits, no questions asked. You own the assets you generate, to the extent the law allows, and we never use your content to train AI models.</p>

      <h2 id="agreement">1. Agreement and who we are</h2>
      <p>${E.brand} (the &ldquo;Service&rdquo;) is operated by ${E.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), located at ${E.addressOneLine}. These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the ${E.brand} website at blockforge.vip, the signed-in workspace, and every tool, credit and plan we offer through them.</p>
      <p>By creating an account, starting a free trial, buying a plan or otherwise using the Service, you agree to these Terms and to the policies they refer to, including our <a href="privacy.html">Privacy Policy</a>, <a href="cookies.html">Cookie Policy</a>, <a href="refund.html">Refund Policy</a>, <a href="cancellation.html">Cancellation Policy</a>, <a href="shipping.html">Shipping &amp; Delivery Policy</a>, <a href="dmca.html">DMCA &amp; Copyright Policy</a> and <a href="disclaimer.html">Disclaimer</a>. If you do not agree, do not use the Service. If you use the Service on behalf of a business or other organisation, you confirm that you are authorised to accept these Terms for it, and &ldquo;you&rdquo; includes that organisation.</p>

      <h2 id="eligibility">2. Eligibility and age</h2>
      <ul>
        <li>You must be at least 18 years old, or the age of majority where you live if that is higher, to create a paid account, start a free trial or make a purchase.</li>
        <li>Users aged 13 to 17 may use the Service only with a parent or legal guardian who accepts these Terms on their behalf and manages billing. The parent or guardian is responsible for the minor&rsquo;s use of the Service.</li>
        <li>The Service is not directed to children under 13, and children under 13 may not use it. If we learn that an account belongs to a child under 13, we delete it.</li>
        <li>You may not use the Service if the law of your country, including applicable sanctions law, prohibits you from doing so.</li>
      </ul>

      <h2 id="accounts">3. Your account and security</h2>
      <ul>
        <li>Give us a valid email address that you control. We use it to sign you in and to send service emails.</li>
        <li>Keep your sign-in details confidential. You are responsible for all activity under your account. If you suspect unauthorised use, email <a href="mailto:${E.email}">${E.email}</a> immediately and we will help you secure the account.</li>
        <li>Each account is for one person. Do not share, sell or transfer your account, and do not create additional accounts to obtain extra free trials or credits.</li>
        <li>Service emails, such as your trial confirmation, receipts, renewal reminders, price-change notices and security alerts, are part of the Service and are sent while your account is open. Marketing emails are sent only if you opt in, and every marketing email has an unsubscribe link.</li>
      </ul>

      <h2 id="service">4. The service</h2>
      <p>${E.brand} is an online creative tool for game creators. In the web workspace, you describe what you want and ${E.brand} generates game assets with AI:</p>
      <ul>
        <li><strong>Thumbnails:</strong> 16:9 game thumbnails at 1920&times;1080 pixels.</li>
        <li><strong>Icons:</strong> 512&times;512 game icons with transparent backgrounds.</li>
        <li><strong>Textures:</strong> seamless 512&times;512 textures.</li>
        <li><strong>Clothing:</strong> shirt-template clothing images at 585&times;559 pixels.</li>
        <li><strong>GFX:</strong> 512&times;512 character renders.</li>
        <li><strong>UI layouts:</strong> editable UI layouts, exported as images plus a layer list that you can rebuild in a game editor.</li>
        <li><strong>Sound effects:</strong> short sound effects.</li>
      </ul>
      <p>Images are delivered as PNG files and sounds as WAV files. The Service is entirely digital: you download your assets from the workspace, and nothing is shipped to you.</p>
      <h3>Free preview mode</h3>
      <p>The marketing website also offers a free preview mode. Preview mode draws rough previews locally in your browser. It needs no account, uses no credits and sends nothing to our AI models. Preview mode is not the AI service: its images are simple local sketches that help you try an idea, and they do not show the quality, style or content of the assets the AI service generates.</p>

      <h2 id="plan">5. Plan and price</h2>
      <p>We offer one plan: <strong>${E.brand} Pro, billed annually</strong>.</p>
      <table>
        <thead>
          <tr><th>Site language</th><th>Annual price</th><th>Currency</th><th>Tax</th></tr>
        </thead>
        <tbody>
          <tr><td>English</td><td>${E.price} per year</td><td>${E.currencyName}</td><td>Sales tax or VAT may apply and is shown at checkout before you confirm</td></tr>
          <tr><td>Japanese</td><td>${J.price} per year</td><td>Japanese yen (${J.currency})</td><td>Consumption tax included</td></tr>
        </tbody>
      </table>
      <p>The language of the site decides the currency. You are charged in the currency and the amount shown at checkout before you confirm. Your card issuer may add its own foreign-transaction or currency-conversion fees; your bank sets those fees, not us.</p>
      <p>Each paid year includes <strong>${E.credits} credits</strong>, added to your account when the paid year starts. The plan includes all ${TOOLS} tools, full-resolution downloads, commercial use of your outputs, and the interface in English and Japanese.</p>

      <h2 id="free-trial">6. Free trial and automatic charge</h2>
      <p class="callout"><strong>Free trial, then automatic annual charge:</strong> the ${E.trial} requires a payment card. Nothing is charged during the trial. Exactly ${E.trialHours} ${H} after the trial starts, your card is automatically charged ${E.price} (${E.currency}) for 12 months of ${E.brand} Pro, unless you cancel before the trial ends.</p>
      <ul>
        <li>You start the trial from our <a href="../checkout.html">checkout page</a>. Before you continue, it shows the annual price and when your card will be charged, and asks you to confirm that you understand and accept the automatic charge. You then enter your card on our payment processor&rsquo;s secure page.</li>
        <li>During the trial, your account has ${E.trialCredits} trial credits and full access to all tools.</li>
        <li>At sign-up we email you a confirmation that states the exact time your trial ends and how to cancel.</li>
        <li>To avoid the charge, cancel before the trial ends in Account &rarr; Billing &rarr; Cancel subscription, which takes effect at once, or by emailing <a href="mailto:${E.email}">${E.email}</a> from your account email. If you cancel during the trial, you are never charged and your access ends when the trial ends. If your cancellation email reaches us before the trial ends but the annual charge goes through before we act on it, we refund that charge in full.</li>
        <li>If you do not cancel, the first annual charge happens automatically when the trial ends, your first paid year starts, and ${E.credits} credits are added to your account.</li>
        <li>One free trial per person and per payment card. We may decline a trial when we detect repeat or fraudulent sign-ups.</li>
        <li>Trial credits are separate from the annual credits and are not counted when we calculate refunds.</li>
      </ul>

      <h2 id="renewal">7. Automatic renewal and price changes</h2>
      <ul>
        <li><strong>Renewal:</strong> your subscription renews automatically every 12 months at the then-current annual price, charged to the payment card on file, until you cancel. Each renewal adds ${E.credits} new credits for the new paid year.</li>
        <li><strong>Reminder:</strong> we email you a reminder at least ${E.reminderDays} days before each renewal charge, with the amount, the date and how to cancel.</li>
        <li><strong>Receipt:</strong> we email you a receipt after every charge.</li>
        <li><strong>Price changes:</strong> if the annual price changes, we email you at least ${E.priceChangeNoticeDays} days before the renewal it applies to. A new price never applies in the middle of a paid year. If you do not accept the new price, cancel before that renewal.</li>
        <li><strong>Failed payments:</strong> if a renewal charge is declined, we email you and may retry the charge. Pro access may be paused until the payment succeeds or you cancel.</li>
      </ul>

      <h2 id="payment">8. Payment, taxes and statement descriptor</h2>
      <p>We accept major credit and debit cards: Visa, Mastercard, American Express, JCB and Discover. Payments are processed by a third-party payment processor that is PCI DSS compliant. ${E.brand} never sees or stores your full card number; we receive only the card brand, the last four digits, the expiry date, and your billing country and postal code.</p>
      <p>By starting a trial, you authorise us, through our payment processor, to charge the annual fee to your card when the trial ends, and the then-current annual fee at each renewal, until you cancel.</p>
      <p><strong>Taxes:</strong> ${E.taxNote} On the Japanese site, the price includes consumption tax.</p>
      <p><strong>Statement descriptor:</strong> your card statement will show <strong>&ldquo;${E.descriptor}&rdquo;</strong>. If you see a charge you do not recognise, email <a href="mailto:${E.email}">${E.email}</a> and we will look into it right away.</p>
      <p>Customers in Japan can find the seller details and sales terms required by Japanese law in our <a href="commercial-disclosure.html">Commercial Disclosure (Japan)</a>.</p>

      <h2 id="refunds">9. ${MBG_EN}</h2>
      <p class="callout"><strong>${E.refundDays}-Day Money-Back Guarantee:</strong> Full refund on unused credits. No questions asked.</p>
      <ul>
        <li>Within ${E.refundDays} days after any annual charge, whether it is the first charge after your trial or a renewal, you can ask for a refund by emailing <a href="mailto:${E.email}">${E.email}</a> or from Account &rarr; Billing.</li>
        <li>Refund amount = annual fee &times; unused credits &divide; ${E.credits}. If you have used no credits, you get 100% of the fee back (${E.price}).</li>
        <li>Example: you used ${E.refundExample.used} credits, so ${E.refundExample.unused.toLocaleString("en-US")} are unused and your refund is ${E.refundExample.amount}.</li>
        <li>We refund to the original payment method, in the currency of the original charge, and process the refund within 5 business days. Banks usually show it within 5&ndash;10 business days.</li>
        <li>A refund ends your subscription and removes the remaining credits for that paid year.</li>
        <li>After ${E.refundDays} days, charges are non-refundable except where the law requires otherwise, but you can still cancel so that the next renewal is not charged.</li>
      </ul>
      <p>If you have any billing problem, please contact us first; we resolve billing issues quickly. This does not limit any rights you have with your card issuer. Full details are in our <a href="refund.html">Refund Policy</a>.</p>

      <h2 id="cancellation">10. Cancellation</h2>
      <p>You can cancel at any time, in either of two ways:</p>
      <ul>
        <li>In your account: Account &rarr; Billing &rarr; Cancel subscription.</li>
        <li>By email: write to <a href="mailto:${E.email}">${E.email}</a> from the email address on your account.</li>
      </ul>
      <p>Cancellation takes effect immediately for future renewals, and we confirm it by email. If you cancel during the free trial, you are never charged and your access ends when the trial ends. If you cancel after a charge, no further charges are made, and your Pro access and remaining credits stay available until the end of the current paid year. Cancelling does not by itself refund the current year; to get money back, ask for a refund within ${E.refundDays} days of the charge under the ${MBG_EN}. Full details are in our <a href="cancellation.html">Cancellation Policy</a>.</p>

      <h2 id="credits">11. Credits</h2>
      <p>Each generated asset costs credits:</p>
      <table>
        <thead>
          <tr><th>Tool</th><th>Credits per asset</th></tr>
        </thead>
        <tbody>
          <tr><td>Thumbnail (1920&times;1080)</td><td>${C.thumbnail}</td></tr>
          <tr><td>Icon (512&times;512)</td><td>${C.icon}</td></tr>
          <tr><td>Texture (512&times;512)</td><td>${C.texture}</td></tr>
          <tr><td>Clothing (585&times;559)</td><td>${C.clothing}</td></tr>
          <tr><td>GFX character render (512&times;512)</td><td>${C.gfx}</td></tr>
          <tr><td>Sound effect (WAV)</td><td>${C.sfx}</td></tr>
          <tr><td>UI layout</td><td>${C.ui}</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Credits are deducted when you start a generation. If a generation fails, its credits are returned to your balance automatically.</li>
        <li>The ${E.credits} credits of each paid year are added when that paid year starts. Unused credits expire at the end of that paid year and do not roll over to the next year.</li>
        <li>The ${E.trialCredits} trial credits are separate from the annual credits and are not counted in refund calculations.</li>
        <li>Credits have no cash value and are not transferable: they cannot be sold, given away or moved to another account. They cannot be exchanged for money, except through a refund under the ${MBG_EN}, a pro-rata refund under section 17, or where the law requires.</li>
        <li>If credits are added or deducted by mistake, for example because of a system error, we may correct your balance.</li>
      </ul>

      <h2 id="acceptable-use">12. Acceptable use</h2>
      <p>You may not use the Service to create, upload or share content that:</p>
      <ul>
        <li>infringes anyone&rsquo;s copyright, trademark, privacy, publicity or other rights;</li>
        <li>is hateful or harassing, or promotes violence or discrimination;</li>
        <li>is sexually explicit, or sexualises minors in any way (we report content that sexualises minors to the relevant authorities as the law requires);</li>
        <li>is illegal or promotes illegal activity;</li>
        <li>impersonates any person or organisation, or falsely presents assets as official assets of a game platform or brand.</li>
      </ul>
      <p>You also may not:</p>
      <ul>
        <li>upload or distribute malware, or try to break into, overload or disrupt the Service or its systems;</li>
        <li>scrape, crawl or extract data from the Service by automated means, other than through features we provide;</li>
        <li>resell, sublicense or provide access to the Service itself to others, or share your account (you may of course use and sell the assets you generate);</li>
        <li>circumvent credit, trial or rate limits or security measures, including by creating multiple accounts;</li>
        <li>reverse engineer the Service, except where the law allows it despite this restriction.</li>
      </ul>
      <p>We may remove content that breaks these rules and may suspend or terminate accounts as described in section 17.</p>
      <p><strong>Copyright complaints:</strong> if you believe content stored in the Service infringes your copyright, send a notice as described in our <a href="dmca.html">DMCA &amp; Copyright Policy</a>. In appropriate circumstances, we terminate the accounts of users who repeatedly infringe.</p>

      <h2 id="your-content">13. Your content and ownership of outputs</h2>
      <h3>Your inputs</h3>
      <p>You keep ownership of the prompts you write and the reference images you upload (&ldquo;Inputs&rdquo;). You confirm that you have the rights needed to upload and use your Inputs.</p>
      <h3>Your outputs</h3>
      <p>As between you and us, you own the assets you generate with the Service (&ldquo;Outputs&rdquo;), to the extent the law allows, and we assign to you any rights we may have in them. You may use Outputs for any lawful purpose, including commercially and in monetised games, without crediting us. Some countries do not grant copyright to AI-generated material, and similar prompts can produce similar results for different users; your ownership does not extend to similar outputs that other users generate independently.</p>
      <h3>Licence to us</h3>
      <p>You give us a limited, non-exclusive, worldwide, royalty-free licence to host, store, copy, process and display your Inputs and Outputs only as needed to provide, secure and support the Service for you. This licence ends when the content is deleted, either by you or under the retention periods in our <a href="privacy.html">Privacy Policy</a> (for example, 30 days after your account is closed), except for records we must keep by law.</p>
      <h3>No AI training</h3>
      <p><strong>We do not use your prompts, uploads or outputs to train AI models.</strong> Our AI model inference providers process your prompts only to generate your output, under contracts that forbid them from training on your content.</p>
      <h3>Our property</h3>
      <p>The Service, including its software, design, text, and the ${E.brand} name and logo, belongs to ${E.company} or its licensors. While you follow these Terms, we give you a limited, non-exclusive, non-transferable, revocable right to use the Service. If you send us feedback or suggestions, we may use them without any obligation to you.</p>

      <h2 id="ai-output">14. AI-generated output</h2>
      <p>Outputs are created automatically by AI models. They can be inaccurate, inconsistent or unexpected, and they can resemble existing works, characters, logos or trademarks. We do not review Outputs before you receive them. You are responsible for reviewing every Output before you publish or use it, and for making sure that your use complies with the law, with the rights of others and with the rules of the platforms where you publish. See our <a href="disclaimer.html">Disclaimer</a> for more.</p>

      <h2 id="third-parties">15. Third-party platforms and services</h2>
      <p>${E.brand} is an independent product. We are not affiliated with, endorsed by or sponsored by Roblox Corporation or any other game platform. Their names and marks belong to their owners, and we use them only to describe the formats our assets are made for. You are responsible for following each platform&rsquo;s terms, community standards and asset rules; a platform may reject or remove assets under its own policies.</p>
      <p>The Service relies on third-party providers, including our payment processor, cloud hosting, email delivery and AI model inference providers. Websites and services of third parties that we link to are governed by their own terms and privacy policies, and we are not responsible for them.</p>

      <h2 id="availability">16. Availability and changes to the service</h2>
      <p>We work to keep the Service available, but it may be interrupted for maintenance, updates or reasons outside our control, and we do not guarantee uninterrupted availability. We may improve, change or remove features, or change the AI models we use. Where a change significantly affects how you use the paid plan, we tell you by email in advance where reasonably possible. If we decide to discontinue the Service entirely, we email you at least 30 days in advance and refund the unused credits of your current paid year on a pro-rata basis, as described in section 17.</p>
      <p>Generated assets stay in your workspace until you delete them, or until 30 days after your account is closed, whichever comes first. We recommend that you keep your own copies of the assets you need.</p>

      <h2 id="termination">17. Suspension and termination</h2>
      <h3>By you</h3>
      <p>You can cancel your subscription at any time as described in section 10, and you can ask us to delete your account by emailing <a href="mailto:${E.email}">${E.email}</a>. Deleting your account ends your access immediately, stops all future charges and removes your remaining credits; it does not by itself refund the current paid year. If you are within ${E.refundDays} days of an annual charge, ask for your refund under the ${MBG_EN} before or when you request deletion.</p>
      <h3>By us</h3>
      <p>We may suspend or terminate your access, with notice where reasonable, if you materially breach these Terms or the acceptable-use rules, if we suspect fraud or payment abuse, if the law requires it, or if it is necessary to protect the Service, other users or third parties.</p>
      <h3>What happens to your fees</h3>
      <ul>
        <li><strong>Termination for our convenience:</strong> if we end your subscription for a reason that is not your breach of these Terms, including discontinuing the Service, we refund the unused credits of your current paid year on a pro-rata basis: annual fee &times; unused credits &divide; ${E.credits}, to your original payment method.</li>
        <li><strong>Termination for your breach:</strong> if we terminate because you materially breached these Terms, we do not refund fees for the rest of that paid year, except where the ${MBG_EN} still applies or the law requires a refund.</li>
      </ul>
      <p>Sections that by their nature should continue after termination, including ownership, disclaimers, limitation of liability, indemnity and governing law, survive termination.</p>

      <h2 id="disclaimers">18. Disclaimers</h2>
      <p>Except as expressly stated in these Terms, and to the extent permitted by law, the Service, the Outputs and preview mode are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, title, non-infringement and accuracy, and without any warranty that the Service will be uninterrupted or error-free. We do not guarantee any particular result from using Outputs, such as views, clicks, players or revenue. Some jurisdictions do not allow certain warranties to be excluded; in those places these exclusions apply only as far as the law allows, and your statutory rights as a consumer are not affected.</p>

      <h2 id="liability">19. Limitation of liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>we are not liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data, goodwill or business opportunities, arising out of or relating to the Service or these Terms; and</li>
        <li>our total liability for all claims arising out of or relating to the Service or these Terms is limited to the amounts you paid us for the Service in the 12 months before the event giving rise to the claim.</li>
      </ul>
      <p>Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, for fraud, for gross negligence or wilful misconduct, or any other liability that cannot be limited or excluded under applicable law, including mandatory consumer protection laws such as Japan&rsquo;s Consumer Contract Act.</p>

      <h2 id="indemnity">20. Indemnity</h2>
      <p>You agree to defend, indemnify and hold harmless ${E.company} and its officers, employees and agents from third-party claims, and from the related losses, damages and reasonable legal fees, arising out of (a) your Inputs, (b) your use or publication of Outputs, (c) your breach of these Terms, or (d) your violation of any law or third-party right. We will tell you promptly about any such claim and let you take part in the defence. If you are a consumer, this section applies only to the extent permitted by law and only where you are at fault.</p>

      <h2 id="governing-law">21. Governing law and disputes</h2>
      <p>These Terms and any dispute arising out of or relating to them or the Service are governed by the laws of ${E.governingLaw}, without regard to conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply. Subject to the next paragraph, ${E.venue} have exclusive jurisdiction, and you and we consent to their jurisdiction.</p>
      <p><strong>Consumers:</strong> if you are a consumer, this choice of law and venue does not take away the protection of the mandatory consumer protection laws of the country where you live, for example Japan or a member state of the European Union, and you may bring proceedings in the courts where you live when those laws allow it.</p>
      <p>Before you file a claim, please email <a href="mailto:${E.email}">${E.email}</a> so that we can try to resolve the issue informally. We reply ${E.supportResponse}. This does not limit your right to go to court or to contact your card issuer.</p>

      <h2 id="changes">22. Changes to these Terms</h2>
      <p>We may update these Terms from time to time. For material changes, such as changes to fees, the trial, renewal, refunds or your rights, we email you at the address on your account at least ${E.priceChangeNoticeDays} days before the changes take effect, and we post the updated Terms on this page with a new effective date. Price changes also follow the rules in section 7 and never apply in the middle of a paid year. Minor changes, such as clarifications and corrections, take effect when we post them. If you do not agree to a change, you can cancel before it takes effect. If you keep using the Service after the effective date, the updated Terms apply to you. Changes do not apply to disputes that arose before they took effect.</p>

      <h2 id="general">23. General terms</h2>
      <ul>
        <li><strong>Entire agreement:</strong> these Terms, together with the policies they refer to, are the entire agreement between you and us about the Service and replace any earlier agreements on the same subject.</li>
        <li><strong>Severability:</strong> if any provision is found invalid or unenforceable, it is limited to the minimum extent necessary, and the rest of these Terms remains in effect.</li>
        <li><strong>No waiver:</strong> if we do not enforce a provision, that does not waive our right to enforce it later.</li>
        <li><strong>Assignment:</strong> you may not assign or transfer your rights under these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition or sale of assets, and we will tell you by email; your rights under these Terms are not reduced by such an assignment.</li>
        <li><strong>Events beyond our control:</strong> we are not responsible for delays or failures caused by events beyond our reasonable control, such as natural disasters, network or power outages, or failures of third-party providers.</li>
        <li><strong>Notices:</strong> we send notices to the email address on your account. You can send notices to <a href="mailto:${E.email}">${E.email}</a>.</li>
        <li><strong>Language:</strong> we may provide these Terms in other languages for convenience. To the extent permitted by law, the English version prevails if there is a conflict.</li>
      </ul>

      <h2 id="contact">24. Contact</h2>
      <p>If you have questions about these Terms, contact us:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "利用規約",
    nav: "利用規約",
    description: `${J.brand}の利用規約です。${J.pricePerYear}のProプラン、${J.trial}と終了後の自動課金、自動更新、クレジット、返金・解約、禁止事項、責任の制限などを定めます。`,
    body: `
      <p class="lede">本利用規約（以下「本規約」）は、${J.brand}（以下「本サービス」）のご利用について、お客様と${J.company}（以下「当社」）との間に適用される契約です。要点は次のとおりです。${J.brand} Pro の料金は${J.pricePerYear}です。ご利用はカード登録が必要な${J.trial}から始まり、トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り年額料金が自動的に請求されます。その後は解約されるまで12か月ごとに自動更新されます。年額料金の請求日から${J.refundDays}日以内であれば、理由を問わず未使用クレジット分を全額返金します。お客様が生成した素材は法令で認められる範囲でお客様に帰属し、当社がお客様のコンテンツをAIの学習に使用することはありません。</p>

      <h2 id="agreement">第1条（本規約への同意と運営者）</h2>
      <p>本サービスは、${J.addressOneLine}に所在する${J.company}が運営しています。本規約は、ウェブサイト blockforge.vip、ログイン後のワークスペース、ならびにこれらを通じて当社が提供するすべてのツール、クレジットおよびプランのご利用に適用されます。</p>
      <p>お客様は、アカウントの作成、無料トライアルの開始、プランの購入その他の方法で本サービスを利用することにより、本規約、ならびに本規約が参照する<a href="privacy.html">プライバシーポリシー</a>、<a href="cookies.html">Cookieポリシー</a>、<a href="refund.html">返金ポリシー</a>、<a href="cancellation.html">解約ポリシー</a>、<a href="shipping.html">配送・提供ポリシー</a>、<a href="dmca.html">DMCA・著作権ポリシー</a>および<a href="disclaimer.html">免責事項</a>に同意したものとみなされます。同意いただけない場合は、本サービスをご利用にならないでください。法人その他の団体のために本サービスを利用する場合、お客様は当該団体を代表して本規約に同意する権限を有することを表明するものとし、本規約における「お客様」には当該団体が含まれます。</p>

      <h2 id="eligibility">第2条（利用資格・年齢）</h2>
      <ul>
        <li>有料アカウントの作成、無料トライアルの開始およびご購入は、18歳以上（お住まいの地域の成年年齢が18歳を超える場合はその年齢以上）の方に限ります。</li>
        <li>13歳以上18歳未満の方は、親権者または法定代理人が本人に代わって本規約に同意し、お支払いを管理する場合に限り、本サービスをご利用いただけます。この場合、未成年者による利用については親権者または法定代理人が責任を負います。</li>
        <li>本サービスは13歳未満のお子様を対象としておらず、13歳未満の方はご利用いただけません。13歳未満の方のアカウントであることが判明した場合、当社は当該アカウントを削除します。</li>
        <li>お住まいの国の法令（適用される制裁関連法令を含みます）により利用が禁止されている方は、本サービスをご利用いただけません。</li>
      </ul>

      <h2 id="accounts">第3条（アカウントとセキュリティ）</h2>
      <ul>
        <li>お客様ご自身が管理する有効なメールアドレスをご登録ください。当社はこのメールアドレスを、ログインおよびサービスに関するメールの送信に使用します。</li>
        <li>ログイン情報は第三者に知られないよう管理してください。お客様のアカウントで行われたすべての行為について、お客様が責任を負います。不正利用のおそれがある場合は、直ちに <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。アカウントの保護をお手伝いします。</li>
        <li>アカウントはお一人につき一つです。アカウントの共有、売買、譲渡はできません。また、無料トライアルやクレジットを追加で得る目的で複数のアカウントを作成することはできません。</li>
        <li>トライアル開始の確認、領収書、更新前のリマインダー、料金変更のお知らせ、セキュリティ通知などのサービスに関するメールは本サービスの一部であり、アカウントが有効な間は送信されます。マーケティングメールは、お客様が受信を希望された場合にのみお送りし、すべてのマーケティングメールに配信停止のリンクを記載します。</li>
      </ul>

      <h2 id="service">第4条（本サービスの内容）</h2>
      <p>${J.brand}は、ゲームクリエイター向けのオンライン制作ツールです。ウェブ上のワークスペースで作りたいものを入力すると、${J.brand}がAIによって次のゲーム用素材を生成します。</p>
      <ul>
        <li><strong>サムネイル：</strong>16:9のゲームサムネイル（1920&times;1080ピクセル）</li>
        <li><strong>アイコン：</strong>背景が透明な512&times;512のゲームアイコン</li>
        <li><strong>テクスチャ：</strong>継ぎ目なく並べられる512&times;512のテクスチャ</li>
        <li><strong>衣装：</strong>シャツテンプレート形式の衣装画像（585&times;559ピクセル）</li>
        <li><strong>GFX：</strong>512&times;512のキャラクターレンダー</li>
        <li><strong>UIレイアウト：</strong>編集可能なUIレイアウト（画像と、ゲームエディタで再構成できるレイヤー一覧として書き出し）</li>
        <li><strong>効果音：</strong>短い効果音</li>
      </ul>
      <p>画像はPNG形式、音声はWAV形式で提供します。本サービスはすべてデジタルで提供され、素材はワークスペースからダウンロードしていただきます。物品の発送はありません。</p>
      <h3>無料のプレビューモード</h3>
      <p>当社のウェブサイトでは、無料のプレビューモードもご利用いただけます。プレビューモードは、お客様のブラウザ内で簡易的なプレビューを描画する機能です。アカウントは不要で、クレジットも消費せず、当社のAIモデルには何も送信されません。プレビューモードはAIサービスではありません。その画像はアイデアを試すための簡単な下書きであり、AIサービスが生成する素材の品質、スタイルまたは内容を示すものではありません。</p>

      <h2 id="plan">第5条（プランと料金）</h2>
      <p>当社が提供するプランは、<strong>${J.brand} Pro（年払い）</strong>の一つのみです。</p>
      <table>
        <thead>
          <tr><th>サイトの言語</th><th>年額料金</th><th>通貨</th><th>税金</th></tr>
        </thead>
        <tbody>
          <tr><td>日本語</td><td>${J.price}／年</td><td>${J.currencyName}</td><td>消費税込み</td></tr>
          <tr><td>英語</td><td>${E.price}／年</td><td>米ドル（${E.currency}）</td><td>お住まいの地域により売上税またはVATが加算される場合があり、確定前に決済画面に表示されます</td></tr>
        </tbody>
      </table>
      <p>請求通貨はサイトの表示言語によって決まります。お客様には、確定前に決済画面に表示された通貨と金額で請求されます。カード発行会社が独自に海外事務手数料や為替手数料を加算する場合がありますが、これらは当社ではなくカード発行会社が定めるものです。</p>
      <p>各有料年度には<strong>${J.credits}クレジット</strong>が含まれ、有料年度の開始時にアカウントへ付与されます。プランには、${TOOLS}つのツールすべて、フル解像度でのダウンロード、生成物の商用利用、英語・日本語のインターフェースが含まれます。</p>

      <h2 id="free-trial">第6条（無料トライアルと自動課金）</h2>
      <p class="callout"><strong>無料トライアル終了後、年額料金を自動請求します：</strong>${J.trial}のご利用には、お支払い用カードの登録が必要です。トライアル期間中に料金は発生しません。トライアル開始からちょうど${J.trialHours}時間後に、それまでに解約されない限り、登録されたカードに${J.brand} Pro 12か月分の年額料金${J.priceWithCode}が自動的に請求されます。</p>
      <ul>
        <li>トライアルは、当社の<a href="../checkout.html">決済ページ</a>からお申し込みいただけます。決済ページでは、お手続きの前に年額料金と請求のタイミングをご確認のうえ、自動課金に同意してお申し込みいただきます。その後、決済代行会社の安全な決済画面でカード情報をご入力ください。</li>
        <li>トライアル期間中は、トライアル用クレジット（${J.trialCredits}クレジット）が付与され、すべてのツールをご利用いただけます。</li>
        <li>お申し込み時に、トライアルの終了時刻と解約方法を記載した確認メールをお送りします。</li>
        <li>請求を避けるには、トライアル終了前に「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」から解約するか（即時に反映されます）、ご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> へご連絡ください。トライアル期間中に解約された場合、料金は一切請求されず、トライアル終了時にご利用が終了します。トライアル終了前に解約のメールが当社に届いたにもかかわらず、当社が対応する前に年額料金が請求された場合は、その請求額を全額返金します。</li>
        <li>解約されない場合は、トライアル終了時に初回の年額料金が自動的に請求され、最初の有料年度が始まり、${J.credits}クレジットがアカウントに付与されます。</li>
        <li>無料トライアルは、お一人様およびカード1枚につき1回限りです。重複または不正なお申し込みが確認された場合、トライアルをお断りすることがあります。</li>
        <li>トライアル用クレジットは年間クレジットとは別のもので、返金額の計算には含まれません。</li>
      </ul>

      <h2 id="renewal">第7条（自動更新と料金の変更）</h2>
      <ul>
        <li><strong>自動更新：</strong>サブスクリプションは、解約されるまで12か月ごとに、その時点の年額料金で自動更新され、登録されたカードに請求されます。更新のたびに、新しい有料年度分として${J.credits}クレジットが付与されます。</li>
        <li><strong>リマインダー：</strong>各更新請求の少なくとも${J.reminderDays}日前までに、請求金額、請求日および解約方法を記載したリマインダーメールをお送りします。</li>
        <li><strong>領収書：</strong>請求のたびに、領収書をメールでお送りします。</li>
        <li><strong>料金の変更：</strong>年額料金を変更する場合は、新料金が適用される更新日の少なくとも${J.priceChangeNoticeDays}日前までにメールでお知らせします。有料年度の途中で料金が変わることはありません。新料金に同意されない場合は、その更新日の前に解約してください。</li>
        <li><strong>決済が失敗した場合：</strong>更新時の請求が承認されなかった場合はメールでお知らせし、再度請求を試みることがあります。決済が完了するか解約されるまで、Proの機能を一時停止する場合があります。</li>
      </ul>

      <h2 id="payment">第8条（支払方法・税金・ご利用明細の表示）</h2>
      <p>お支払いには、Visa、Mastercard、American Express、JCB、Discover の主要なクレジットカードおよびデビットカードをご利用いただけます。決済は、PCI DSS に準拠した第三者の決済代行会社が処理します。${J.brand}がカード番号の全桁を閲覧・保存することはなく、当社が受け取るのはカードブランド、下4桁、有効期限、請求先の国および郵便番号のみです。</p>
      <p>お客様は、トライアルを開始することにより、当社が決済代行会社を通じて、トライアル終了時に年額料金を、その後は解約されるまで各更新時にその時点の年額料金を、お客様のカードに請求することを承認したものとします。</p>
      <p><strong>税金：</strong>${J.taxNote}英語版サイトの米ドル建て料金には、お住まいの地域により売上税またはVATが加算される場合があり、その場合は確定前に決済画面に表示されます。</p>
      <p><strong>ご利用明細の表示：</strong>カードのご利用明細には<strong>「${J.descriptor}」</strong>と表示されます。身に覚えのない請求がある場合は、<a href="mailto:${J.email}">${J.email}</a> までご連絡ください。速やかに確認いたします。</p>
      <p>特定商取引法に基づく販売業者の情報および販売条件は、<a href="commercial-disclosure.html">特定商取引法に基づく表記</a>に記載しています。</p>

      <h2 id="refunds">第9条（${MBG_JA}）</h2>
      <p class="callout"><strong>${J.refundDays}日間返金保証：</strong>未使用クレジット分を全額返金します。理由は問いません。</p>
      <ul>
        <li>トライアル後の初回請求か更新時の請求かを問わず、年額料金の請求日から${J.refundDays}日以内であれば、<a href="mailto:${J.email}">${J.email}</a> へのメール、または「アカウント &rarr; お支払い」から返金をお申し込みいただけます。</li>
        <li>返金額 ＝ 年額料金 &times; 未使用クレジット数 &divide; ${J.credits}。クレジットを一度も使用していない場合は、年額料金の100%（${J.price}）を返金します。</li>
        <li>例：${J.refundExample.used}クレジットを使用した場合、未使用は${J.refundExample.unused.toLocaleString("ja-JP")}クレジットとなり、返金額は${J.refundExample.amount}です。</li>
        <li>返金は、元のお支払い方法に対し、当初の請求と同じ通貨で行います。当社は5営業日以内に返金処理を行います。カード会社の明細に反映されるまでには、通常5〜10営業日かかります。</li>
        <li>返金を行うとサブスクリプションは終了し、その有料年度の残りのクレジットは削除されます。</li>
        <li>請求日から${J.refundDays}日を過ぎた請求は、法令で返金が義務付けられる場合を除き返金できません。ただし、解約していただければ次回の更新料金は請求されません。</li>
      </ul>
      <p>お支払いに関してお困りの際は、まず当社までご連絡ください。解決に向けて速やかに対応いたします。これは、カード発行会社に対するお客様の権利を制限するものではありません。詳しくは<a href="refund.html">返金ポリシー</a>をご覧ください。</p>

      <h2 id="cancellation">第10条（解約）</h2>
      <p>解約は、次のいずれかの方法でいつでも行えます。</p>
      <ul>
        <li>アカウント画面から：「アカウント &rarr; お支払い &rarr; サブスクリプションを解約」</li>
        <li>メールで：ご登録のメールアドレスから <a href="mailto:${J.email}">${J.email}</a> へご連絡ください。</li>
      </ul>
      <p>解約は以後の更新について直ちに有効となり、当社から確認のメールをお送りします。無料トライアル期間中に解約された場合、料金は一切請求されず、トライアル終了時にご利用が終了します。請求後に解約された場合、以後の請求は行われず、Proプランの機能と残りのクレジットは現在の有料年度の終了時まで引き続きご利用いただけます。解約のみでは当該年度の料金は返金されません。返金をご希望の場合は、${MBG_JA}に基づき、請求日から${J.refundDays}日以内にお申し込みください。詳しくは<a href="cancellation.html">解約ポリシー</a>をご覧ください。</p>

      <h2 id="credits">第11条（クレジット）</h2>
      <p>素材を1点生成するごとに、次のクレジットを消費します。</p>
      <table>
        <thead>
          <tr><th>ツール</th><th>1点あたりのクレジット</th></tr>
        </thead>
        <tbody>
          <tr><td>サムネイル（1920&times;1080）</td><td>${C.thumbnail}</td></tr>
          <tr><td>アイコン（512&times;512）</td><td>${C.icon}</td></tr>
          <tr><td>テクスチャ（512&times;512）</td><td>${C.texture}</td></tr>
          <tr><td>衣装（585&times;559）</td><td>${C.clothing}</td></tr>
          <tr><td>GFX キャラクターレンダー（512&times;512）</td><td>${C.gfx}</td></tr>
          <tr><td>効果音（WAV）</td><td>${C.sfx}</td></tr>
          <tr><td>UIレイアウト</td><td>${C.ui}</td></tr>
        </tbody>
      </table>
      <ul>
        <li>クレジットは生成を開始した時点で消費されます。生成に失敗した場合、その生成に使用したクレジットは自動的に残高へ戻ります。</li>
        <li>各有料年度の${J.credits}クレジットは、その有料年度の開始時に付与されます。未使用のクレジットはその有料年度の終了時に失効し、翌年度へは繰り越されません。</li>
        <li>トライアル用の${J.trialCredits}クレジットは年間クレジットとは別のもので、返金額の計算には含まれません。</li>
        <li>クレジットに現金価値はなく、売買、譲渡または他のアカウントへの移動はできません。また、${MBG_JA}に基づく返金、第17条に基づく按分返金および法令で必要な場合を除き、換金することはできません。</li>
        <li>システムの不具合などによりクレジットが誤って付与または消費された場合、当社は残高を修正することがあります。</li>
      </ul>

      <h2 id="acceptable-use">第12条（禁止事項）</h2>
      <p>お客様は、本サービスを利用して、次のコンテンツを作成、アップロードまたは共有してはなりません。</p>
      <ul>
        <li>他者の著作権、商標権、プライバシー権、パブリシティ権その他の権利を侵害するもの</li>
        <li>差別的・憎悪的な表現や嫌がらせに当たるもの、または暴力や差別を助長するもの</li>
        <li>性的に露骨なもの、または方法を問わず未成年者を性的に扱うもの（未成年者を性的に扱うコンテンツについては、法令に従い関係当局に通報します）</li>
        <li>違法なもの、または違法行為を助長するもの</li>
        <li>他の個人や団体になりすますもの、またはゲームプラットフォームやブランドの公式素材であるかのように偽るもの</li>
      </ul>
      <p>また、次の行為も禁止します。</p>
      <ul>
        <li>マルウェアをアップロードまたは配布すること、本サービスやそのシステムへの不正アクセス、過度な負荷の付与または妨害を試みること</li>
        <li>当社が提供する機能によらず、自動化された手段で本サービスからデータをスクレイピング、クロールまたは抽出すること</li>
        <li>本サービス自体を第三者に再販売、再許諾もしくは提供すること、またはアカウントを共有すること（生成した素材の利用・販売は自由に行えます）</li>
        <li>複数のアカウントの作成などにより、クレジット、トライアル、利用回数の制限またはセキュリティ対策を回避すること</li>
        <li>法令で明示的に認められる場合を除き、本サービスをリバースエンジニアリングすること</li>
      </ul>
      <p>当社は、これらの規定に違反するコンテンツを削除し、第17条に従ってアカウントの利用を停止または終了することがあります。</p>
      <p><strong>著作権侵害の申立て：</strong>本サービスに保存されたコンテンツがご自身の著作権を侵害しているとお考えの場合は、<a href="dmca.html">DMCA・著作権ポリシー</a>に従って通知をお送りください。当社は、侵害を繰り返すユーザーのアカウントを、適切な場合には終了します。</p>

      <h2 id="your-content">第13条（お客様のコンテンツと生成物の権利）</h2>
      <h3>入力内容</h3>
      <p>お客様が入力したプロンプトおよびアップロードした参考画像（以下「入力内容」）の権利は、お客様に留保されます。お客様は、入力内容をアップロードし利用するために必要な権利を有していることを表明します。</p>
      <h3>生成物</h3>
      <p>お客様と当社との間では、お客様が本サービスで生成した素材（以下「生成物」）は、法令で認められる範囲においてお客様に帰属し、当社が生成物について有する権利があればお客様に譲渡します。お客様は、生成物を商用利用や収益化されたゲームでの利用を含め、適法な目的に自由に利用でき、当社名を表示する必要もありません。なお、国によってはAIで生成された素材に著作権が認められない場合があります。また、似たプロンプトからは似た結果が生じることがあるため、他のユーザーが独自に生成した類似の生成物にまでお客様の権利が及ぶものではありません。</p>
      <h3>当社への利用許諾</h3>
      <p>お客様は当社に対し、本サービスをお客様に提供し、保護し、サポートするために必要な範囲に限り、入力内容および生成物を保管、複製、処理および表示するための、非独占的、全世界的かつ無償の限定的な利用権を許諾します。この利用権は、お客様による削除、または<a href="privacy.html">プライバシーポリシー</a>に定める保存期間（例：アカウント閉鎖から30日後）の経過により当該コンテンツが削除された時点で終了します。ただし、法令に基づき保存が義務付けられる記録を除きます。</p>
      <h3>AIの学習には使用しません</h3>
      <p><strong>当社は、お客様のプロンプト、アップロードした画像および生成物をAIモデルの学習に使用しません。</strong>当社が利用するAIモデルの推論事業者は、生成物を作成する目的に限りプロンプトを処理し、契約により当該コンテンツを学習に使用することを禁じられています。</p>
      <h3>当社の権利</h3>
      <p>本サービス（ソフトウェア、デザイン、文章、${J.brand}の名称およびロゴを含みます）に関する権利は、${J.company}またはそのライセンサーに帰属します。当社はお客様に対し、本規約を遵守いただく限りにおいて、本サービスを利用するための非独占的、譲渡不能かつ取消可能な限定的な権利を付与します。お客様からいただいたご意見やご提案は、当社がお客様に対して義務を負うことなく利用できるものとします。</p>

      <h2 id="ai-output">第14条（AI生成物について）</h2>
      <p>生成物はAIモデルによって自動的に作成されます。生成物には不正確な点、一貫しない点、予期しない内容が含まれることがあり、既存の作品、キャラクター、ロゴまたは商標に似ることがあります。当社は、生成物がお客様に提供される前にその内容を確認していません。お客様は、生成物を公開または利用する前にすべての生成物を確認し、その利用が法令、第三者の権利および公開先のプラットフォームの規約に適合していることを確認する責任を負います。詳しくは<a href="disclaimer.html">免責事項</a>をご覧ください。</p>

      <h2 id="third-parties">第15条（第三者のプラットフォーム・サービス）</h2>
      <p>${J.brand}は独立した製品であり、Roblox Corporation その他いかなるゲームプラットフォームとも提携関係になく、その承認や後援も受けていません。各プラットフォームの名称および商標はそれぞれの権利者に帰属し、当社は素材がどの形式向けに作られているかを説明する目的でのみこれらを使用しています。各プラットフォームの規約、コミュニティ基準および素材に関するルールの遵守はお客様の責任となります。プラットフォームが独自の方針に基づき素材を拒否または削除する場合があります。</p>
      <p>本サービスは、決済代行会社、クラウドホスティング、メール配信、AIモデルの推論事業者などの第三者事業者を利用して提供されています。当社がリンクする第三者のウェブサイトやサービスには、それぞれの利用規約およびプライバシーポリシーが適用され、当社はそれらについて責任を負いません。</p>

      <h2 id="availability">第16条（本サービスの提供と変更）</h2>
      <p>当社は本サービスを継続して提供できるよう努めますが、保守、更新または当社の管理が及ばない事由により中断することがあり、中断なく提供されることを保証するものではありません。当社は、機能の改善、変更もしくは廃止、または使用するAIモデルの変更を行うことがあります。有料プランのご利用に大きな影響がある変更については、合理的に可能な範囲で事前にメールでお知らせします。本サービスの提供を全面的に終了する場合は、少なくとも30日前までにメールでお知らせし、第17条に従って、現在の有料年度の年額料金を未使用クレジット数に応じて按分した金額を返金します。</p>
      <p>生成した素材は、お客様が削除するまで、またはアカウント閉鎖から30日後までのいずれか早い時点まで、ワークスペースに保存されます。必要な素材は、お客様ご自身でも保存しておくことをおすすめします。</p>

      <h2 id="termination">第17条（利用停止・契約の終了）</h2>
      <h3>お客様による終了</h3>
      <p>お客様は、第10条に従っていつでもサブスクリプションを解約でき、<a href="mailto:${J.email}">${J.email}</a> へのメールでアカウントの削除を依頼できます。アカウントを削除すると、ご利用は直ちに終了し、以後の請求はすべて停止され、残りのクレジットも削除されます。ただし、削除のみでは当該有料年度の料金は返金されません。年額料金の請求日から${J.refundDays}日以内の場合は、削除の依頼前または依頼と同時に、${MBG_JA}に基づく返金をお申し込みください。</p>
      <h3>当社による利用停止・終了</h3>
      <p>当社は、お客様が本規約または禁止事項に重大な違反をした場合、不正行為や決済の不正利用が疑われる場合、法令により必要な場合、または本サービス、他のユーザーもしくは第三者を保護するために必要な場合には、お客様の利用を停止または終了することがあります。この場合、合理的に可能な限り事前にお知らせします。</p>
      <h3>料金の取扱い</h3>
      <ul>
        <li><strong>当社の都合による終了：</strong>本サービスの提供終了を含め、お客様の規約違反以外の理由で当社がサブスクリプションを終了する場合、現在の有料年度の年額料金を未使用クレジット数に応じて按分した金額（年額料金 &times; 未使用クレジット数 &divide; ${J.credits}）を、元のお支払い方法に返金します。</li>
        <li><strong>お客様の違反による終了：</strong>お客様の本規約への重大な違反を理由に当社が終了する場合、当該有料年度の残りの期間の料金は返金しません。ただし、${MBG_JA}の対象期間内である場合、または法令で返金が義務付けられる場合を除きます。</li>
      </ul>
      <p>権利の帰属、保証の否認、責任の制限、補償、準拠法など、その性質上終了後も存続すべき規定は、契約終了後も効力を有します。</p>

      <h2 id="disclaimers">第18条（保証の否認）</h2>
      <p>本規約に明示的に定める場合を除き、法令で認められる範囲において、本サービス、生成物およびプレビューモードは「現状有姿」かつ「提供可能な範囲」で提供されます。当社は、商品性、特定目的への適合性、権原、第三者の権利の非侵害、正確性を含め、明示または黙示を問わずいかなる保証も行わず、本サービスが中断なく、または誤りなく提供されることも保証しません。生成物の利用による再生数、クリック数、プレイヤー数、収益などの特定の成果も保証しません。一部の法域では特定の保証の排除が認められていません。その場合、これらの排除は法令で認められる範囲でのみ適用され、消費者としてのお客様の法定の権利に影響を与えるものではありません。</p>

      <h2 id="liability">第19条（責任の制限）</h2>
      <p>法令で認められる最大限の範囲において、次のとおりとします。</p>
      <ul>
        <li>当社は、本サービスまたは本規約に起因または関連して生じた間接損害、付随的損害、特別損害、結果的損害もしくは懲罰的損害、または逸失利益、売上、データ、信用もしくは事業機会の損失について責任を負いません。</li>
        <li>本サービスまたは本規約に起因または関連するすべての請求に関する当社の責任の総額は、請求の原因となった事由が発生する前の12か月間にお客様が本サービスの対価として当社に支払った金額を上限とします。</li>
      </ul>
      <p>本規約のいかなる規定も、過失による生命または身体の侵害、詐欺、当社の故意または重大な過失に基づく責任、その他適用法令により制限または免除できない責任（日本の消費者契約法などの消費者保護に関する強行法規に基づくものを含みます）を制限または免除するものではありません。</p>

      <h2 id="indemnity">第20条（補償）</h2>
      <p>(a) お客様の入力内容、(b) お客様による生成物の利用または公開、(c) お客様による本規約の違反、または (d) お客様による法令もしくは第三者の権利の侵害に起因して、第三者から${J.company}またはその役員、従業員もしくは代理人（以下「当社ら」）に対して請求がなされた場合、お客様は、自らの費用と責任でこれに対応し、当該請求に関連して当社らに生じた損失、損害および合理的な弁護士費用を補償するものとします。当社は、そのような請求を受けた場合には速やかにお客様に通知し、その防御に参加する機会を提供します。お客様が消費者である場合、本条は法令で認められる範囲において、かつお客様に帰責事由がある場合に限り適用されます。</p>

      <h2 id="governing-law">第21条（準拠法・管轄裁判所）</h2>
      <p>本規約、ならびに本規約または本サービスに起因または関連する紛争は、抵触法の規定にかかわらず、${J.governingLaw}に準拠し、同法に従って解釈されます。国際物品売買契約に関する国際連合条約は適用されません。次段落の定めに従うことを条件として、${J.venue}を専属的合意管轄裁判所とし、お客様と当社はその管轄に同意します。</p>
      <p><strong>消費者の方へ：</strong>お客様が消費者である場合、本条の準拠法および管轄の定めは、お客様がお住まいの国（日本、欧州連合加盟国など）の消費者保護に関する強行法規による保護を奪うものではありません。また、当該法令が認める場合には、お客様はお住まいの地域の裁判所に訴えを提起することができます。</p>
      <p>訴えを提起される前に、まず <a href="mailto:${J.email}">${J.email}</a> までご連絡ください。協議による解決に努め、${J.supportResponse}にご返信します。これは、裁判所に訴えを提起する権利やカード発行会社に連絡する権利を制限するものではありません。</p>

      <h2 id="changes">第22条（本規約の変更）</h2>
      <p>当社は、本規約を随時変更することがあります。料金、トライアル、更新、返金またはお客様の権利に関する変更などの重要な変更については、変更の効力発生日の少なくとも${J.priceChangeNoticeDays}日前までにご登録のメールアドレス宛てにお知らせし、変更後の本規約を新しい施行日とともに本ページに掲載します。料金の変更は第7条の定めにも従い、有料年度の途中で適用されることはありません。表現の明確化や誤記の訂正などの軽微な変更は、本ページへの掲載時に効力を生じます。変更に同意されない場合は、効力発生日の前に解約することができます。効力発生日以降も本サービスを利用された場合、変更後の本規約が適用されます。変更は、効力発生日より前に生じた紛争には適用されません。</p>

      <h2 id="general">第23条（一般条項）</h2>
      <ul>
        <li><strong>完全合意：</strong>本規約および本規約が参照するポリシーは、本サービスに関するお客様と当社との間の完全な合意を構成し、同一の事項に関する従前の合意に優先します。</li>
        <li><strong>分離可能性：</strong>本規約のいずれかの規定が無効または執行不能と判断された場合でも、当該規定は必要最小限の範囲でのみ制限され、その他の規定は引き続き有効に存続します。</li>
        <li><strong>権利不放棄：</strong>当社がある規定に基づく権利を行使しなかった場合でも、当該権利を放棄したものとはみなされません。</li>
        <li><strong>譲渡：</strong>お客様は、当社の書面による同意なく、本規約上の権利を譲渡または移転することはできません。当社は、合併、買収または事業譲渡に伴い本規約上の地位を譲渡することがあり、その場合はメールでお知らせします。これによりお客様の本規約上の権利が損なわれることはありません。</li>
        <li><strong>不可抗力：</strong>当社は、天災、通信障害、停電、第三者事業者の障害など、当社の合理的な管理を超える事由による遅延または不履行について責任を負いません。</li>
        <li><strong>通知：</strong>当社からの通知は、ご登録のメールアドレス宛てにお送りします。お客様からの通知は、<a href="mailto:${J.email}">${J.email}</a> までお送りください。</li>
      </ul>

      <h2 id="contact">第24条（お問い合わせ）</h2>
      <p>本規約に関するご質問は、下記までお問い合わせください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本規約の日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
