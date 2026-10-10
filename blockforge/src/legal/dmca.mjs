import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

export default {
  slug: "dmca",
  order: 8,
  en: {
    title: "DMCA & Copyright Policy",
    nav: "DMCA / Copyright",
    description: `How to report copyright infringement to ${E.brand} under the DMCA, send a counter-notice, our repeat-infringer policy, and notices about AI outputs.`,
    body: `
      <p class="lede">${E.brand} respects the intellectual property of creators, and we expect our users to do the same. This policy explains how copyright owners can ask us to remove material from the ${E.brand} website or the ${E.brand} service (the &ldquo;Service&rdquo;) under the U.S. Digital Millennium Copyright Act (DMCA), how a user can respond with a counter-notice, how we deal with repeat infringers, how we handle notices about AI-generated outputs, and how rights holders outside the United States, including in Japan, can send takedown requests. ${E.brand} is operated by ${E.company}.</p>

      <h2 id="respect-ip">Our respect for intellectual property</h2>
      <p>${E.brand} is an online creative tool for game creators. In a web workspace, subscribers describe what they want and ${E.brand} generates game assets with AI: thumbnails, icons, textures, clothing images, character renders (GFX), UI layouts and short sound effects. Our <a href="terms.html#acceptable-use">Terms of Service</a> forbid using the Service to create, upload or share content that infringes anyone&rsquo;s copyright, trademark or other rights, and every user is responsible for reviewing outputs before publishing them.</p>
      <p>We respond to notices of alleged copyright infringement that meet the requirements of the DMCA (17 U.S.C. &sect;512) or other applicable law. We do not charge any fee for handling notices or counter-notices.</p>

      <h2 id="scope">What this policy covers</h2>
      <p>This policy applies to material that is stored on, or made available through, systems controlled by ${E.company}, namely:</p>
      <ul>
        <li>content on our website, blockforgeo.net, including sample images, page text and FAQ answers;</li>
        <li>reference images that users upload to their ${E.brand} workspace; and</li>
        <li>prompts and generated assets stored in a user&rsquo;s ${E.brand} workspace.</li>
      </ul>
      <p>Previews made in the website&rsquo;s free preview mode are drawn locally in the visitor&rsquo;s browser and are not stored on our systems.</p>
      <p>Generated assets are stored in the workspace of the account that created them and are not displayed publicly by ${E.brand}. Once a user downloads an asset and publishes it elsewhere, for example in a game, on a game platform, on social media or on a marketplace, that copy is outside our systems and we cannot remove it. To remove material published on a third-party platform, send a notice to that platform through its own copyright process. You can also send us a notice as described below at the same time. If the notice is valid, we remove any copy stored in our Service and apply our repeat-infringer policy to the account concerned.</p>

      <h2 id="report">How to report copyright infringement</h2>
      <p>If you own a copyright, or are authorised to act for a copyright owner, and you believe that material on our website or in our Service infringes that copyright, send a written notice to our designated agent:</p>
      <address><strong>DMCA Agent</strong><br>${E.company}<br>${E.addressLines.join("<br>")}<br>Email: <a href="mailto:${E.email}?subject=DMCA%20Notice">${E.email}</a> (subject: &ldquo;DMCA Notice&rdquo;)</address>
      <p class="callout">Email is the fastest way to reach us. Write &ldquo;DMCA Notice&rdquo; in the subject line so that we recognise your message as a copyright notice and handle it under this policy.</p>
      <p>You can write in English or Japanese and send your notice by email or by post to the address above. We confirm receipt of each emailed notice ${E.supportResponse}.</p>
      <p>Please use the subject line &ldquo;DMCA Notice&rdquo; only for copyright notices. For billing, refunds or cancellation, write to the same address with a subject that describes your request, or see our <a href="refund.html">Refund Policy</a> and <a href="cancellation.html">Cancellation Policy</a>.</p>

      <h2 id="notice-requirements">What your notice must include</h2>
      <p>Under 17 U.S.C. &sect;512(c)(3), a notice of claimed infringement must be a written communication that includes substantially all of the following:</p>
      <ol>
        <li>A physical or electronic signature of the copyright owner or of a person authorised to act on the owner&rsquo;s behalf. Your typed full name at the end of an email is an acceptable electronic signature.</li>
        <li>Identification of the copyrighted work claimed to have been infringed or, if one notice covers multiple works, a representative list of those works. Where possible, include a link to or description of the original work and any copyright registration number.</li>
        <li>Identification of the material that is claimed to be infringing and that is to be removed or disabled, with information reasonably sufficient for us to locate it: for example, the URL of the page on our website, the file name or asset ID, the account email of the user if you know it, or a copy or screenshot of the material and where you found it.</li>
        <li>Information reasonably sufficient for us to contact you, such as your full name, postal address, telephone number and email address.</li>
        <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent or the law.</li>
        <li>A statement that the information in the notice is accurate and, under penalty of perjury, that you are authorised to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
      </ol>
      <p>If a notice does not substantially comply with these requirements, we may not be able to act on it. If it includes at least items 2, 3 and 4, we promptly contact you to ask for the missing information.</p>

      <h2 id="after-notice">What we do after a valid notice</h2>
      <p>When we receive a notice that meets the requirements above, we:</p>
      <ul>
        <li>review it and, where necessary, ask you to clarify it;</li>
        <li>act expeditiously to remove the material identified in the notice or to disable access to it;</li>
        <li>notify the user whose material was removed, by email to the account email address, with a copy of the notice and an explanation of how to send a counter-notice;</li>
        <li>record one strike against the user&rsquo;s account under our repeat-infringer policy (see below); and</li>
        <li>confirm to you by email what action we have taken.</li>
      </ul>
      <p>The copy of the notice that we send to the user may include your name and the contact details you provide, because the user needs them to respond and, if necessary, to serve legal papers. If you do not want your personal details shared, an authorised agent such as a lawyer can send the notice on your behalf.</p>
      <p>Removing an asset does not change the user&rsquo;s plan or billing, and the credits used to generate it are not returned. We do not decide legal disputes between rights holders and users. If a dispute is not resolved through the notice and counter-notice process, the parties can take it to court.</p>

      <h2 id="counter-notice">Counter-notification</h2>
      <p>If material you uploaded or generated was removed or disabled because of a notice, and you believe in good faith that this happened because of a mistake or misidentification of the material, you can send a counter-notice to our designated agent at the address above, with the subject line &ldquo;DMCA Counter-Notice&rdquo;. Under 17 U.S.C. &sect;512(g)(3), a counter-notice must be in writing and include substantially the following:</p>
      <ol>
        <li>Your physical or electronic signature.</li>
        <li>Identification of the material that was removed or to which access was disabled, and the location where it appeared before it was removed or disabled (for example, the file name, asset ID or URL given in our email to you).</li>
        <li>A statement, under penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
        <li>Your name, address and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located or, if your address is outside the United States, for any judicial district in which ${E.company} may be found, and that you will accept service of process from the person who provided the original notice or an agent of that person.</li>
      </ol>
      <p>When we receive a valid counter-notice, we promptly send a copy to the person who sent the original notice and tell them that we will restore the removed material, or stop disabling access to it, in 10 business days. We then restore it no less than 10 and no more than 14 business days after we receive the counter-notice, unless our designated agent first receives notice from the original complainant that they have filed an action seeking a court order to restrain you from engaging in infringing activity relating to the material on our Service.</p>
      <p>The copy we forward includes your name and contact details. If the material is restored after a valid counter-notice, we remove the strike recorded for that notice. Consider getting legal advice before you send a counter-notice.</p>

      <h2 id="repeat-infringers">Repeat-infringer policy</h2>
      <p>In line with 17 U.S.C. &sect;512(i), we terminate, in appropriate circumstances, the accounts of users who are repeat infringers.</p>
      <ul>
        <li>Each valid notice that leads us to remove material from an account counts as one strike against that account. If the notice is withdrawn, or the material is restored after a valid counter-notice, we remove the strike.</li>
        <li>An account that receives three strikes within any rolling 12-month period is terminated.</li>
        <li>We may terminate an account after fewer strikes, or immediately, if the infringement is deliberate or flagrant: for example, if an account is used mainly to copy other people&rsquo;s works, or if the user uploads again material that we removed.</li>
        <li>A user whose account is terminated under this policy may not open a new account. Creating new accounts to avoid this policy also breaks our Terms of Service.</li>
      </ul>
      <p>We tell the user by email each time a strike is recorded.</p>
      <p>Termination ends the subscription immediately, and no further charges are made. If the account is still in its ${E.trial}, the card is never charged.</p>
      <p>Termination for repeated infringement is termination for breach of our <a href="terms.html#termination">Terms of Service</a>, so fees for the rest of the paid year are not refunded, with two exceptions. First, while you are still within ${E.refundDays} days after an annual charge, you can ask for a refund under our ${E.refundDays}-Day Money-Back Guarantee by emailing <a href="mailto:${E.email}">${E.email}</a>: annual fee &times; unused credits &divide; ${E.credits}, as described in our <a href="refund.html">Refund Policy</a>. Second, we refund where the law requires it. Assets that were not removed still belong to you under our Terms of Service, and the account&rsquo;s stored data is deleted under the retention periods in our <a href="privacy.html">Privacy Policy</a>.</p>

      <h2 id="misrepresentation">Misrepresentation</h2>
      <p>Under 17 U.S.C. &sect;512(f), any person who knowingly materially misrepresents that material is infringing, or that material was removed or disabled by mistake or misidentification, may be liable for damages, including costs and attorneys&rsquo; fees, incurred by the alleged infringer, by the copyright owner or its licensee, or by us.</p>
      <p>Before you send a notice, consider whether the use might be authorised by a licence or permitted by law, for example as fair use. Copyright protects specific creative expression; it generally does not protect ideas, genres, game mechanics, art styles, common shapes or short phrases. If you are unsure whether material infringes your rights, get legal advice first. We may disregard notices and counter-notices that we reasonably believe are fraudulent, abusive or sent in bad faith.</p>

      <h2 id="ai-outputs">Notices about AI-generated outputs</h2>
      <p>${E.brand} creates assets automatically with AI models. Our Terms forbid infringing use, but an output can sometimes resemble an existing work, character, logo or trademark, for example when a user asks for something in the style of a named game or puts a protected character in a prompt or reference image. We do not review outputs before users receive them. We do not use customers&rsquo; prompts, uploads or outputs to train AI models.</p>
      <p>If you believe that a ${E.brand} output infringes your copyright, send a DMCA notice as described above. To help us locate the material, include as much of the following as you can:</p>
      <ul>
        <li>a copy or screenshot of the output and of your original work, side by side if possible;</li>
        <li>where you found the output (for example, the URL of the game, platform page or post where it is published) and the name of the account or creator that published it;</li>
        <li>the file name, asset ID or creation date of the asset, if you know it; and</li>
        <li>why you believe the output copies protected elements of your work, rather than only sharing a general idea, theme or style.</li>
      </ul>
      <p>When we can identify the asset in our Service, we remove it or disable access to it and handle the notice like any other notice: we notify the user and record a strike. If the output was generated from an infringing reference image that the user uploaded, we remove that reference image too. If we cannot match the material to an account (for example, because it was made with another tool or the user has already deleted it), we tell you. Copies published on game platforms or other websites are outside our control, so please also send a notice to those platforms.</p>
      <p>Similar prompts can produce similar outputs for different users. Removing one user&rsquo;s asset does not mean that other assets infringe, and a notice covers only the outputs it identifies.</p>

      <h2 id="other-rights">Trademarks and other rights</h2>
      <p>The DMCA process applies only to copyright. If you believe that content on our website or in our Service infringes your trademark, or violates your right of publicity, your privacy or another right, email <a href="mailto:${E.email}">${E.email}</a> with the subject line &ldquo;Rights Complaint&rdquo;. Include your contact details, the right concerned (for a trademark, the mark, its registration number and the country of registration), the material and where to find it, and an explanation of the problem.</p>
      <p>We review these complaints under our Terms of Service and the applicable law. We may remove material, ask the user for their response, or suspend or terminate accounts that break our rules. The counter-notice rules of &sect;512(g) do not apply to these complaints, but we give the user a chance to respond where appropriate.</p>

      <h2 id="outside-us">Rights holders outside the United States</h2>
      <p>We accept infringement notices from rights holders in any country. You do not need to cite U.S. law: a notice that contains the information listed in this policy is enough, whatever law it relies on. Notices can be written in English or Japanese.</p>
      <h3>Japan</h3>
      <p>Rights holders in Japan can also send takedown requests in the form commonly used under Japan&rsquo;s Information Distribution Platform Act (formerly the Provider Liability Limitation Act), such as a request for measures to prevent the transmission of infringing information. Email the request to <a href="mailto:${E.email}">${E.email}</a> in Japanese or English, with the subject line &ldquo;Takedown Request (Japan)&rdquo; or its Japanese equivalent, and include:</p>
      <ul>
        <li>your name or company name, address, and email address or telephone number;</li>
        <li>the right you hold and the work or other subject matter concerned, with any documents that show you hold the right;</li>
        <li>the material to be removed and where it is located (URL, file name or asset ID, or a screenshot);</li>
        <li>how and why the material infringes your right;</li>
        <li>a statement that the contents of the request are true, and that you agree that we may send the request, including your name, to the user concerned; and</li>
        <li>your name and signature or seal (for email, a typed name is accepted).</li>
      </ul>
      <p>After we receive a request, we review it. Where appropriate, we send the request to the user who stored the material and ask whether they agree to its removal. We remove the material or disable access to it, and tell you that we have done so, if the user does not tell us within 7 days of our inquiry that they object, or if we have reasonable grounds to believe that your right is infringed. If the user objects and the infringement is not clear, we tell you that we have not removed the material and why. You can then pursue the matter with the user directly or in court. A removal under this section counts as a strike under our repeat-infringer policy in the same way as a removal after a DMCA notice.</p>
      <p>We handle requests for disclosure of a user&rsquo;s identity (sender information) under the applicable law. We disclose information that identifies a user only with that user&rsquo;s consent or when a court order or other legal obligation requires it.</p>
      <h3>European Union, United Kingdom and other countries</h3>
      <p>Rights holders in the European Union, the United Kingdom and elsewhere can use the same email address. We assess each notice under the law that applies and act on it as described in this policy. Nothing in this policy limits any right you have under your local law.</p>

      <h2 id="our-content">Our trademarks and content</h2>
      <p>The ${E.brand} name and logo, and the text, design, graphics and software of our website and Service, belong to ${E.company} or its licensors and are protected by copyright, trademark and other laws. You may use the ${E.brand} name to refer to our Service accurately, for example in a review or tutorial. Without our prior written permission, you may not use our name or logo in a way that suggests we sponsor or endorse you, use them as part of your own product or domain name, or copy our website, text or software.</p>
      <p>Assets that you generate with ${E.brand} belong to you as described in our <a href="terms.html#your-content">Terms of Service</a>; this section does not claim any rights in them.</p>
      <p>If you see our trademarks or content being misused, or you believe that material on our own website infringes your rights, tell us at <a href="mailto:${E.email}">${E.email}</a>.</p>
      <p>${E.brand} is not affiliated with Roblox Corporation or any other game platform. Their names and trademarks belong to their respective owners.</p>

      <h2 id="changes">Changes to this policy</h2>
      <p>We may update this policy to reflect changes in the law or in our Service. The date shown on this page tells you when it was last updated.</p>

      <h2 id="contact">Contact</h2>
      <p>Send copyright notices and counter-notices to the designated agent details above. For any other question about this policy, contact:</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a> (we reply ${E.supportResponse}, in English or Japanese). You can also use our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "DMCA・著作権ポリシー",
    nav: "DMCA・著作権",
    description: `${J.brand}への著作権侵害の通知方法（DMCA）、カウンター通知、反復侵害者への対応、AI生成物に関する申立て、日本の権利者の方からの削除依頼の受付について説明します。`,
    body: `
      <p class="lede">${J.brand}は、クリエイターの知的財産を尊重しており、ユーザーの皆様にも同様の対応をお願いしています。本ポリシーでは、著作権者の方が米国デジタルミレニアム著作権法（DMCA）に基づいて当社ウェブサイトまたは${J.brand}のサービス（以下「本サービス」）上の素材の削除を求める方法、ユーザーが異議申立て（カウンター通知）を行う方法、反復侵害者への対応、AI生成物に関する通知の取扱い、および日本を含む米国外の権利者の方からの削除依頼の受付について説明します。${J.brand}は${J.company}が運営しています。</p>

      <h2 id="respect-ip">知的財産の尊重</h2>
      <p>${J.brand}は、ゲームクリエイター向けのオンライン制作ツールです。サブスクリプション会員がWebワークスペースで作りたいものを入力すると、${J.brand}がAIでゲーム用アセット（サムネイル、アイコン、テクスチャ、衣装画像、キャラクターレンダー（GFX）、UIレイアウト、短い効果音）を生成します。当社の<a href="terms.html#acceptable-use">利用規約</a>は、第三者の著作権、商標権その他の権利を侵害するコンテンツを本サービスで作成、アップロードまたは共有することを禁止しており、すべてのユーザーは、生成物を公開する前にその内容を確認する責任を負います。</p>
      <p>当社は、DMCAにより設けられた米国著作権法第512条（17 U.S.C. &sect;512）その他の適用法令の要件を満たす著作権侵害の通知に対応します。通知およびカウンター通知の処理について、手数料は一切いただきません。</p>

      <h2 id="scope">本ポリシーの対象</h2>
      <p>本ポリシーは、${J.company}が管理するシステム上に保存され、またはそのシステムを通じて提供される次の素材に適用されます。</p>
      <ul>
        <li>当社ウェブサイト（blockforgeo.net）上のコンテンツ（サンプル画像、ページの文章、よくある質問の回答を含みます）</li>
        <li>ユーザーが${J.brand}のワークスペースにアップロードした参考画像</li>
        <li>ユーザーの${J.brand}ワークスペースに保存されたプロンプトおよび生成アセット</li>
      </ul>
      <p>なお、当社ウェブサイトの無料プレビューモードで作成されるプレビューは閲覧者のブラウザ内で描画されるもので、当社のシステムには保存されません。</p>
      <p>生成アセットは、それを作成したアカウントのワークスペースに保存され、${J.brand}が一般に公開することはありません。ユーザーがアセットをダウンロードし、ゲーム、ゲームプラットフォーム、SNS、マーケットプレイスなど外部で公開した場合、その複製は当社のシステムの外にあるため、当社が削除することはできません。第三者のプラットフォームで公開されている素材の削除を求める場合は、そのプラットフォーム所定の著作権侵害の申告手続をご利用ください。あわせて、下記の方法で当社にも通知をお送りいただけます。有効な通知であれば、本サービス内に保存されている複製を削除し、該当するアカウントに反復侵害者ポリシーを適用します。</p>

      <h2 id="report">著作権侵害の通知方法</h2>
      <p>著作権者ご本人または著作権者の代理権を有する方で、当社ウェブサイトまたは本サービス上の素材が著作権を侵害しているとお考えの場合は、次の指定代理人（Designated Agent）宛てに書面（メールを含みます）で通知してください。</p>
      <address><strong>DMCA Agent（著作権侵害通知受付担当）</strong><br>${J.company}<br>${J.addressLines.join("<br>")}<br>メール：<a href="mailto:${J.email}?subject=DMCA%20Notice">${J.email}</a>（件名：「DMCA Notice」）</address>
      <p class="callout">メールでのご連絡が最も迅速です。著作権侵害の通知として本ポリシーに沿って確実に取り扱えるよう、件名に「DMCA Notice」とご記入ください。</p>
      <p>通知は日本語または英語で作成し、メールまたは上記住所への郵送でお送りください。メールで受領した通知については、${J.supportResponse}に受領のご連絡をいたします。</p>
      <p>件名「DMCA Notice」は著作権侵害の通知専用です。料金、返金、解約に関するお問い合わせは、同じアドレス宛てに内容がわかる件名でお送りいただくか、<a href="refund.html">返金ポリシー</a>および<a href="cancellation.html">解約ポリシー</a>をご覧ください。</p>

      <h2 id="notice-requirements">通知に記載すべき事項</h2>
      <p>米国著作権法第512条(c)(3)に基づき、侵害通知は書面により、次の事項を実質的にすべて含む必要があります。</p>
      <ol>
        <li>著作権者本人、または著作権者のために行動する権限を有する方の署名（自署または電子署名）。メールの末尾にフルネームを記載したものも、電子署名として受け付けます。</li>
        <li>侵害されたと主張する著作物の特定。1件の通知で複数の著作物を対象とする場合は、それらの代表的な一覧。可能であれば、原著作物へのリンクまたは説明と、著作権登録番号がある場合はその番号を記載してください。</li>
        <li>侵害していると主張し、削除またはアクセスの無効化を求める素材の特定、および当社がその所在を特定するのに合理的に十分な情報。たとえば、当社ウェブサイト上のページのURL、ファイル名またはアセットID、判明している場合はユーザーのアカウントのメールアドレス、素材の写しまたはスクリーンショットとその発見場所などです。</li>
        <li>当社が通知者に連絡するのに合理的に十分な情報（氏名、住所、電話番号、メールアドレスなど）。</li>
        <li>問題とされている態様での素材の使用が、著作権者、その代理人または法律によって許諾されていないと誠実に信じている旨の陳述。</li>
        <li>通知に記載した情報が正確であること、および、侵害されたと主張する排他的権利の権利者のために行動する権限を有することを、偽証罪の制裁のもとで（under penalty of perjury）誓約する旨の陳述。</li>
      </ol>
      <p>これらの要件を実質的に満たさない通知には、対応できない場合があります。ただし、上記2から4までの事項が含まれている場合は、不足している情報について当社から速やかにご連絡します。</p>

      <h2 id="after-notice">有効な通知を受領した後の対応</h2>
      <p>上記の要件を満たす通知を受領した場合、当社は次の対応を行います。</p>
      <ul>
        <li>通知の内容を審査し、必要に応じて通知者に補足説明を求めます。</li>
        <li>通知で特定された素材を速やかに削除し、またはその素材へのアクセスを無効にします。</li>
        <li>素材を削除されたユーザーに対し、アカウントのメールアドレス宛てに通知の写しを送付し、カウンター通知の方法をご案内します。</li>
        <li>反復侵害者ポリシー（下記）に基づき、当該アカウントに違反（ストライク）を1回記録します。</li>
        <li>当社が講じた措置を、通知者にメールでお知らせします。</li>
      </ul>
      <p>ユーザーが対応し、必要に応じて訴訟書類を送達できるよう、ユーザーに送付する通知の写しには、通知者の氏名と通知に記載された連絡先が含まれる場合があります。個人情報の開示を望まない場合は、弁護士などの代理人を通じて通知をお送りいただけます。</p>
      <p>アセットを削除しても、ユーザーのプランや請求には影響せず、そのアセットの生成に使用されたクレジットも返還されません。当社は、権利者とユーザーとの間の法的な紛争について判断を下す立場にはありません。通知とカウンター通知の手続で解決しない紛争は、当事者間で裁判所などを通じて解決していただくことになります。</p>

      <h2 id="counter-notice">異議申立て（カウンター通知）</h2>
      <p>通知によって、お客様がアップロードまたは生成した素材が削除またはアクセス無効化された場合で、それが誤りまたは素材の誤認によるものと誠実に信じるときは、上記の指定代理人宛てに、件名を「DMCA Counter-Notice」としてカウンター通知を送付できます。米国著作権法第512条(g)(3)に基づき、カウンター通知は書面により、次の事項を実質的に含む必要があります。</p>
      <ol>
        <li>お客様の署名（自署または電子署名）。</li>
        <li>削除またはアクセス無効化された素材の特定、および削除またはアクセス無効化される前にその素材があった場所（当社からのメールに記載されたファイル名、アセットIDまたはURLなど）。</li>
        <li>素材が誤りまたは対象の誤認により削除またはアクセス無効化されたと誠実に信じている旨の陳述（偽証罪の制裁のもとで行うもの）。</li>
        <li>お客様の氏名、住所および電話番号、ならびに、お客様の住所を管轄する米国連邦地方裁判所（住所が米国外の場合は、${J.company}が所在するいずれかの司法管轄区の連邦地方裁判所）の管轄に同意し、元の通知を行った者またはその代理人からの訴状等の送達を受け入れる旨の陳述。</li>
      </ol>
      <p>有効なカウンター通知を受領した場合、当社は速やかにその写しを元の通知者に送付し、10営業日後に削除した素材を復元する（またはアクセスの無効化を解除する）旨を伝えます。そのうえで、元の通知者が当該素材に関してお客様の侵害行為の差止めを求める訴訟を提起した旨の通知を当社の指定代理人が先に受領しない限り、カウンター通知の受領後10営業日以上14営業日以内に素材を復元します。</p>
      <p>元の通知者に送付する写しには、お客様の氏名と連絡先が含まれます。有効なカウンター通知によって素材が復元された場合は、その通知について記録した違反を取り消します。カウンター通知を送付する前に、弁護士などの専門家にご相談いただくことをおすすめします。</p>

      <h2 id="repeat-infringers">反復侵害者ポリシー</h2>
      <p>当社は、米国著作権法第512条(i)に従い、適切な場合には、反復して著作権を侵害するユーザーのアカウントを閉鎖し、利用契約を終了します。</p>
      <ul>
        <li>有効な通知に基づいてアカウントの素材を削除した場合、通知1件につき違反（ストライク）を1回記録します。通知が撤回された場合、または有効なカウンター通知により素材が復元された場合は、その違反の記録を取り消します。</li>
        <li>連続する12か月の間に違反が3回記録されたアカウントは閉鎖します。</li>
        <li>他者の著作物の複製を主な目的としてアカウントが使用されている場合や、削除された素材を再びアップロードした場合など、侵害が故意または悪質であるときは、違反が3回に達する前に、または直ちにアカウントを閉鎖することがあります。</li>
        <li>本ポリシーに基づいてアカウントを閉鎖されたユーザーは、新たにアカウントを作成することはできません。本ポリシーを回避する目的で新たなアカウントを作成することは、利用規約にも違反します。</li>
      </ul>
      <p>違反を記録するたびに、ユーザーにメールでお知らせします。</p>
      <p>アカウントを閉鎖するとサブスクリプションも直ちに終了し、以後の請求は一切発生しません。${J.trial}の期間中に閉鎖した場合、カードに請求されることはありません。</p>
      <p>反復侵害を理由とするアカウントの閉鎖は、<a href="terms.html#termination">利用規約</a>の違反を理由とする契約の終了にあたるため、当該有料年度の残りの期間の料金は返金しません。ただし、次の2つの場合は例外です。まず、年額料金の請求日から${J.refundDays}日以内であれば、${J.refundDays}日間返金保証に基づき、<a href="mailto:${J.email}">${J.email}</a>へのメールで未使用クレジット分の返金（年額料金 &times; 未使用クレジット数 &divide; ${J.credits}）をお申し込みいただけます。詳しくは<a href="refund.html">返金ポリシー</a>をご覧ください。また、法令により返金が義務付けられる場合は、法令に従って返金します。削除の対象とならなかったアセットは、利用規約に定めるとおり引き続きお客様に帰属します。アカウントに保存されたデータは、<a href="privacy.html">プライバシーポリシー</a>に定める保存期間に従って削除します。</p>

      <h2 id="misrepresentation">虚偽の申立てについて</h2>
      <p>米国著作権法第512条(f)により、素材が侵害している旨、または素材が誤りもしくは誤認により削除もしくは無効化された旨を、故意に重要な事実を偽って申し立てた者は、侵害したとされる者、著作権者もしくはそのライセンシー、または当社が被った損害（費用および弁護士費用を含みます）について責任を負う場合があります。</p>
      <p>通知を送付する前に、その使用がライセンスによって許諾されていないか、フェアユースなど法律で認められた利用にあたらないかをご検討ください。著作権が保護するのは具体的な創作的表現であり、アイデア、ジャンル、ゲームの仕組み、画風、ありふれた形状や短いフレーズは、一般に保護の対象となりません。素材がご自身の権利を侵害しているか判断がつかない場合は、事前に法律の専門家にご相談ください。当社は、虚偽、濫用的または不誠実であると合理的に判断した通知またはカウンター通知には対応しないことがあります。</p>

      <h2 id="ai-outputs">AI生成物に関する通知</h2>
      <p>${J.brand}は、AIモデルを用いてアセットを自動的に生成します。利用規約は権利侵害となる利用を禁止していますが、ユーザーが特定のゲームに似せた作品を求めたり、保護されたキャラクターをプロンプトや参考画像に含めたりした場合などに、生成物が既存の著作物、キャラクター、ロゴまたは商標に似ることがあります。当社は、生成物をユーザーに提供する前にその内容を確認していません。また、ユーザーのプロンプト、アップロード画像および生成物をAIモデルの学習に使用することはありません。</p>
      <p>${J.brand}の生成物がご自身の著作権を侵害しているとお考えの場合は、上記の方法でDMCA通知をお送りください。当社が素材を特定できるよう、次の情報をできるだけ多く含めてください。</p>
      <ul>
        <li>生成物と原著作物の写しまたはスクリーンショット（可能であれば並べて比較できるもの）</li>
        <li>生成物を見つけた場所（公開されているゲーム、プラットフォームのページ、投稿のURLなど）と、それを公開したアカウントまたはクリエイターの名前</li>
        <li>判明している場合は、アセットのファイル名、アセットIDまたは作成日</li>
        <li>一般的なアイデア、テーマまたは画風が共通するだけでなく、原著作物の保護される要素が複製されていると考える理由</li>
      </ul>
      <p>本サービス内で該当するアセットを特定できた場合、当社はそのアセットを削除し、またはアクセスを無効にしたうえで、他の通知と同じ手順で対応します（ユーザーへのお知らせと違反の記録を含みます）。ユーザーがアップロードした権利侵害となる参考画像から生成物が作られていた場合は、その参考画像も削除します。素材をアカウントと照合できない場合（他のツールで作成されたものである場合や、ユーザーがすでに削除している場合など）は、その旨をお知らせします。ゲームプラットフォームやその他のウェブサイトで公開されている複製は当社の管理外にあるため、それらのプラットフォームにも通知をお送りください。</p>
      <p>似たプロンプトからは、異なるユーザー間でも似た生成物が作られることがあります。あるユーザーのアセットを削除したからといって、他のアセットも侵害しているとは限りません。また、通知の対象は、その通知で特定された生成物に限られます。</p>

      <h2 id="other-rights">商標権その他の権利</h2>
      <p>DMCAの手続は、著作権にのみ適用されます。当社ウェブサイトまたは本サービス上のコンテンツが、お客様の商標権を侵害している、またはパブリシティ権、プライバシーその他の権利を侵害しているとお考えの場合は、件名を「Rights Complaint」として<a href="mailto:${J.email}">${J.email}</a>までご連絡ください。お客様の連絡先、対象となる権利（商標の場合は、商標、登録番号および登録国）、対象の素材とその所在、問題の内容をご記載ください。</p>
      <p>当社は、これらの申立てを利用規約および適用法令に照らして検討し、素材の削除、ユーザーへの意見照会、規約に違反するアカウントの利用停止または終了などの対応を行います。これらの申立てには第512条(g)のカウンター通知の規定は適用されませんが、適切な場合にはユーザーに反論の機会を設けます。</p>

      <h2 id="outside-us">米国外の権利者の方へ</h2>
      <p>当社は、あらゆる国の権利者の方からの侵害通知を受け付けています。米国法を引用していただく必要はなく、根拠とする法律にかかわらず、本ポリシーに記載した事項が含まれていれば通知として受け付けます。通知は日本語または英語で作成いただけます。</p>
      <h3>日本の権利者の方</h3>
      <p>日本の権利者の方は、情報流通プラットフォーム対処法（特定電気通信による情報の流通によって発生する権利侵害等への対処に関する法律。旧プロバイダ責任制限法）に基づく実務で一般に用いられている形式の削除依頼（侵害情報の送信防止措置の依頼）もご利用いただけます。件名を「Takedown Request (Japan)」または「削除依頼」として、<a href="mailto:${J.email}">${J.email}</a>まで日本語または英語でお送りください。依頼には、次の事項をご記載ください。</p>
      <ul>
        <li>氏名または名称、住所、メールアドレスまたは電話番号</li>
        <li>侵害されたとする権利と対象となる著作物等（権利を有することを示す資料があれば添付してください）</li>
        <li>削除を求める情報とその所在（URL、ファイル名、アセットID、スクリーンショットなど）</li>
        <li>権利が侵害されたとする理由</li>
        <li>依頼内容が事実に相違ない旨、および依頼内容（氏名を含みます）が当社から当該ユーザーに通知されることに同意する旨</li>
        <li>記名押印または署名（メールの場合はお名前の記載で受け付けます）</li>
      </ul>
      <p>依頼を受領した後、当社はその内容を検討し、必要に応じて、当該素材を保存したユーザーに依頼内容を通知して、削除に同意するかどうかを照会します（意見照会）。照会から7日以内にユーザーから削除に同意しない旨の申出がない場合、または権利が侵害されていると信じるに足りる相当の理由がある場合は、当該素材を削除し、またはアクセスを無効にして、その旨をお知らせします。ユーザーが削除に同意せず、権利侵害が明らかでない場合は、素材を削除しない旨とその理由をお知らせします。その場合は、ユーザーとの直接の協議や裁判手続などにより解決を図っていただくことになります。本項に基づく削除も、DMCA通知に基づく削除と同様に、反復侵害者ポリシー上の違反として記録します。</p>
      <p>発信者情報の開示請求には適用法令に従って対応します。ユーザーを特定できる情報は、そのユーザーの同意がある場合、または裁判所の命令その他の法令上の義務に基づく場合に限り開示します。</p>
      <h3>EU・英国その他の国の権利者の方</h3>
      <p>EU、英国その他の国の権利者の方も、同じメールアドレスをご利用いただけます。当社は、適用される法令に照らして各通知を検討し、本ポリシーに記載したとおりに対応します。本ポリシーは、お客様が現地の法令に基づいて有する権利を制限するものではありません。</p>

      <h2 id="our-content">当社の商標およびコンテンツ</h2>
      <p>${J.brand}の名称およびロゴ、ならびに当社ウェブサイトおよび本サービスの文章、デザイン、画像、ソフトウェアは、${J.company}またはそのライセンサーに帰属し、著作権法、商標法その他の法令により保護されています。レビューやチュートリアルなどで当社サービスを正確に紹介するために${J.brand}の名称を用いることは差し支えありません。ただし、当社の事前の書面による許可なく、当社がお客様を後援または推奨していると誤認させる方法で当社の名称やロゴを使用すること、お客様自身の製品名やドメイン名の一部として使用すること、または当社のウェブサイト、文章もしくはソフトウェアを複製することはできません。</p>
      <p>お客様が${J.brand}で生成したアセットは、<a href="terms.html#your-content">利用規約</a>に定めるとおりお客様に帰属します。本項は、それらのアセットについて当社が権利を主張するものではありません。</p>
      <p>当社の商標やコンテンツが不正に使用されているのを見つけた場合、または当社ウェブサイト上の素材がご自身の権利を侵害しているとお考えの場合は、<a href="mailto:${J.email}">${J.email}</a>までお知らせください。</p>
      <p>${J.brand}は、Roblox Corporationその他のゲームプラットフォームとは提携関係にありません。各社の名称および商標は、それぞれの権利者に帰属します。</p>

      <h2 id="changes">本ポリシーの変更</h2>
      <p>当社は、法令や本サービスの変更に合わせて本ポリシーを更新することがあります。最終更新日は本ページに表示されます。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>著作権侵害の通知およびカウンター通知は、上記の指定代理人宛てにお送りください。本ポリシーに関するその他のご質問は、下記までご連絡ください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本ポリシーの日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
