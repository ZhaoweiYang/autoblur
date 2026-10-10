import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

export default {
  slug: "do-not-sell",
  order: 10,
  en: {
    title: "Do Not Sell or Share My Personal Information",
    nav: "Do Not Sell or Share",
    description: `${E.brand} does not sell or share personal information or use targeted ads. We honour Global Privacy Control; here is how to opt out and use your state rights.`,
    body: `
      <p class="lede">${E.company} does not sell your personal information and does not share it for cross-context behavioural advertising, and we have not done either in the past 12 months. We do not run targeted advertising or use profiling that produces legal or similarly significant effects. We honour Global Privacy Control signals automatically, and you can still send us an opt-out request at any time. This page explains your choices under the California, Colorado and other US state privacy laws.</p>

      <h2 id="we-do-not-sell">We do not sell or share personal information</h2>
      <p class="callout">We do not sell personal information, we do not share it for cross-context behavioural advertising, and we have not done either in the past 12 months.</p>
      <ul>
        <li>We do not exchange personal information for money or anything else of value, and we do not work with data brokers.</li>
        <li>We do not use advertising networks, tracking pixels, social-media tracking tools, or advertising or analytics cookies, on the website or in the workspace. The website stores only functional preferences, and the workspace uses only an essential session cookie and a CSRF-protection cookie (see our <a href="cookies.html">Cookie Policy</a>).</li>
        <li>We disclose personal information only to the service providers that help us run ${E.brand}, such as our payment processor, cloud hosting, email delivery, AI model inference providers and customer-support tooling, and only for business purposes such as payments, hosting, generating the assets you request and answering support emails. They may use it only to provide those services to us. Our AI inference providers process prompts only to generate your output and may not train on them. These disclosures are not a sale or sharing under the law. The full list of categories is in our <a href="privacy.html">Privacy Policy</a>.</li>
        <li>We do not sell or share the personal information of anyone, including consumers under 16.</li>
      </ul>

      <h2 id="targeted-advertising">No targeted advertising or profiling</h2>
      <p>We do not use your personal information for targeted advertising, meaning ads chosen on the basis of your activity across other companies' websites, apps or services, and we do not let others collect it on our site for that purpose. We do not use profiling to make decisions that produce legal or similarly significant effects, such as decisions about financial or lending services, housing, insurance, education, employment, health care or access to essential goods and services.</p>
      <p>Your prompts, uploads and generated assets are used only to provide the service. ${E.brand} never uses them to train AI models or to build advertising profiles.</p>

      <h2 id="global-privacy-control">Global Privacy Control</h2>
      <p>Global Privacy Control (GPC) is a setting offered by some browsers and browser extensions. When it is turned on, your browser sends a signal with every request, the <code>Sec-GPC: 1</code> header, telling each website you visit that you do not want your personal information sold or shared. California and Colorado law recognise this kind of signal as a valid opt-out request.</p>
      <p>We honour GPC automatically. When your browser sends a GPC signal, we treat it as a request to opt out of the sale and sharing of your personal information and of targeted advertising, for that browser and, if you are signed in, for your ${E.brand} account. You do not need to do anything else, and we will not ask you to confirm or reverse the choice. Because we already do not sell or share personal information, honouring the signal does not change how the site works for you.</p>

      <h2 id="opt-out-request">How to submit an opt-out request</h2>
      <p>Although there is nothing to opt out of today, you can send us an opt-out request at any time and we will record it, so that it continues to apply if our practices ever change.</p>
      <ol>
        <li>Email <a href="mailto:${E.email}">${E.email}</a> with the subject &quot;Do Not Sell or Share&quot;.</li>
        <li>Include the email address you use (or used) with ${E.brand}, or the email address you want the request to cover; your state of residence; and which choices you are making: opt out of sale, sharing, targeted advertising, profiling, or all of them. Your name is optional.</li>
        <li>If you are sending the request for someone else as their authorised agent, attach their signed permission (see &quot;Authorised agents&quot;).</li>
      </ol>
      <p>You do not need an account, and we do not ask you to prove your identity for an opt-out request; we use the details you send only to find your records and apply your choice. We act on the request and confirm it by email within 15 business days of receiving it. If we ever change our practices, we will update this page and our Privacy Policy first, and we will not sell or share the personal information of anyone who has opted out.</p>
      <p>Opting out does not affect your subscription, your credits, your trial or your billing in any way.</p>

      <h2 id="authorised-agents">Authorised agents</h2>
      <p>You may use an authorised agent to submit an opt-out or another privacy request for you. The agent must provide written permission signed by you that names the agent and describes the request. For opt-out requests, we may contact you to confirm that you gave permission. For requests to access, correct or delete personal information, we may also ask you to verify your identity directly with us, unless the agent holds a valid power of attorney under applicable law. Colorado residents may also designate an agent through a technology that sends an opt-out signal on their behalf, such as a browser setting or extension that sends GPC.</p>

      <h2 id="state-rights">Your rights in Colorado, California and other states</h2>
      <ul>
        <li><strong>Colorado.</strong> Under the Colorado Privacy Act you may opt out of the processing of your personal data for targeted advertising, for sale, and for profiling in furtherance of decisions that produce legal or similarly significant effects. You may also access, correct and delete your data and obtain a portable copy. We honour universal opt-out mechanisms recognised by the Colorado Attorney General, including GPC. If we decline a request, you can appeal by replying to our decision email with &quot;Appeal&quot; in the subject; we respond within 45 days, and if we deny the appeal you may contact the Colorado Attorney General.</li>
        <li><strong>California.</strong> Under the CCPA/CPRA you may opt out of the sale or sharing of personal information, limit the use and disclosure of sensitive personal information, and ask to know, correct or delete personal information.</li>
        <li><strong>Other states.</strong> Residents of Virginia, Connecticut, Utah, Texas, Oregon, Montana, Iowa, Delaware, Nebraska, New Hampshire, New Jersey, Tennessee, Minnesota, Maryland, Indiana, Kentucky, Rhode Island and other states with comprehensive privacy laws have similar rights to opt out of targeted advertising, sale and profiling, and to appeal our decisions. We honour these rights through the same process, and the same appeal route applies.</li>
      </ul>
      <p>We answer requests to know, access, correct or delete personal information within 45 days, and may extend that once by 45 more days with notice. Full details, including how we verify these requests, are in our <a href="privacy.html">Privacy Policy</a>.</p>

      <h2 id="sensitive-information">Sensitive personal information</h2>
      <p>We do not ask for sensitive personal information such as government identification numbers, precise geolocation, health information, racial or ethnic origin, religious or philosophical beliefs, union membership, sex life or sexual orientation, genetic or biometric data, or citizenship or immigration status. We never receive your full card number; our PCI DSS–compliant payment processor handles it. We do not use uploaded reference images to identify people.</p>
      <p>The only sensitive personal information we handle is the data needed to sign in to your account. We use it only for purposes the law permits: providing the service you asked for, keeping your account secure, preventing fraud and complying with the law. We do not use it to infer characteristics about you. Because our use is already limited to these purposes, a separate &quot;Limit the Use of My Sensitive Personal Information&quot; link is not required, but you can contact us at any time with questions or a request to limit use, and we will handle it like an opt-out request. Please do not include sensitive information in prompts or uploads.</p>

      <h2 id="no-discrimination">No discrimination</h2>
      <p>We will never discriminate against you for exercising your privacy rights. We will not deny you the service, charge a different price or rate, apply different discounts or penalties, or provide a different level or quality of service because you opted out or made any other privacy request.</p>
      <p>${E.brand} Pro costs ${E.pricePerYear} (${E.currencyName}) on the English site, or ${J.price} per year including consumption tax on the Japanese site, for everyone. Everyone gets the same ${E.trial}, after which the annual fee is charged automatically unless cancelled before the hour ends; the same ${E.credits} credits per paid year; and the same ${E.refundDays}-day money-back guarantee, whether or not they opt out.</p>

      <h2 id="more-information">More information</h2>
      <p>For the full picture of what we collect, why we collect it, who processes it, how long we keep it and how to exercise your rights to access, correction, deletion and portability, read our <a href="privacy.html">Privacy Policy</a>. Our <a href="cookies.html">Cookie Policy</a> lists the few functional cookies and browser storage items we use.</p>
      <p>If you are in Japan, requests under the Act on the Protection of Personal Information, including requests to stop providing your data to third parties, are handled through the process described in the Privacy Policy. If you are in the EEA or the UK, you can object to processing or withdraw consent through the same process.</p>

      <h2 id="contact">Contact</h2>
      <p>Send opt-out requests and privacy questions to ${E.company}, the operator of ${E.brand}:</p>
      <address>${E.company}<br>${E.addressLines.join("<br>")}<br><a href="mailto:${E.email}">${E.email}</a></address>
      <p>Use the subject &quot;Do Not Sell or Share&quot; for opt-out requests. We reply to emails ${E.supportResponse}, in English or Japanese. You can also reach us through our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "個人情報の販売・共有の拒否",
    nav: "販売・共有の拒否",
    description: `${J.brand}は個人情報の販売・共有やターゲティング広告を行っていません。Global Privacy Controlへの対応、オプトアウトの方法、米国各州法上の権利をご案内します。`,
    body: `
      <p class="lede">${J.company}は、お客様の個人情報を販売せず、クロスコンテキスト行動広告のために共有することもありません。過去12か月間においても、そのいずれも行っていません。ターゲティング広告や、法的効果またはこれと同様の重大な影響を及ぼすプロファイリングも行っていません。当社はGlobal Privacy Controlの信号を自動的に尊重しており、それとは別にいつでもオプトアウトのご請求をお送りいただけます。本ページでは、カリフォルニア州、コロラド州その他の米国各州のプライバシー法に基づくお客様の選択肢をご説明します。</p>

      <h2 id="we-do-not-sell">個人情報の販売・共有は行いません</h2>
      <p class="callout">当社は個人情報を販売せず、クロスコンテキスト行動広告のために共有することもありません。過去12か月間においても、そのいずれも行っていません。</p>
      <ul>
        <li>金銭その他の対価と引き換えに個人情報を提供することはなく、データブローカーとの取引もありません。</li>
        <li>ウェブサイトでもワークスペースでも、広告ネットワーク、トラッキングピクセル、ソーシャルメディアのトラッキングツール、広告目的・分析目的のCookieは使用していません。ウェブサイトがブラウザに保存するのは機能上の設定のみで、ワークスペースで使用するのは必須のセッションCookieとCSRF対策用のCookieのみです（<a href="cookies.html">Cookieポリシー</a>参照）。</li>
        <li>当社が個人情報を開示するのは、決済代行会社、クラウドホスティング、メール配信、AIモデル推論事業者、カスタマーサポートツールなど、${J.brand}の運営を支える委託先に限られ、その目的も決済、ホスティング、ご依頼いただいたアセットの生成、サポートメールへの対応といった業務上の目的に限られます。委託先は当社へのサービス提供のためにのみ個人情報を利用できます。AI推論事業者は生成物を作成するためにのみプロンプトを処理し、学習に使用することはできません。これらの開示は、法律上の販売・共有にはあたりません。委託先の区分の一覧は<a href="privacy.html">プライバシーポリシー</a>をご覧ください。</li>
        <li>16歳未満の消費者を含め、どなたの個人情報も販売・共有しません。</li>
      </ul>

      <h2 id="targeted-advertising">ターゲティング広告・プロファイリングは行いません</h2>
      <p>当社は、他社のウェブサイト、アプリまたはサービスにおけるお客様の行動に基づいて広告を選んで表示するターゲティング広告のために個人情報を利用せず、そのような目的で第三者が当社サイト上で情報を収集することも認めていません。また、金融・融資サービス、住宅、保険、教育、雇用、医療、生活必需品・必須サービスへのアクセスなど、法的効果またはこれと同様の重大な影響を及ぼす決定のためのプロファイリングも行っていません。</p>
      <p>お客様のプロンプト、アップロード画像および生成物は、サービスの提供のためにのみ利用されます。${J.brand}がこれらをAIモデルの学習や広告用プロファイルの作成に使用することは一切ありません。</p>

      <h2 id="global-privacy-control">Global Privacy Control（GPC）</h2>
      <p>Global Privacy Control（GPC）は、一部のブラウザや拡張機能に備わっている設定です。この設定を有効にすると、ブラウザはすべてのリクエストとともに <code>Sec-GPC: 1</code> というヘッダーを送信し、訪問先のウェブサイトに対して「個人情報の販売・共有を望まない」という意思を伝えます。カリフォルニア州法とコロラド州法は、この種の信号を有効なオプトアウトの意思表示として認めています。</p>
      <p>当社はGPCを自動的に尊重します。お客様のブラウザからGPC信号を受信した場合、当社はそれを、そのブラウザについて、またログイン中であればお客様の${J.brand}アカウントについて、個人情報の販売・共有およびターゲティング広告を拒否するご請求として取り扱います。お客様が追加の手続をする必要はなく、当社がその選択の確認や取消しを求めることもありません。当社はもともと個人情報の販売・共有を行っていないため、信号を尊重してもサイトのご利用方法が変わることはありません。</p>

      <h2 id="opt-out-request">オプトアウトのご請求方法</h2>
      <p>現時点でオプトアウトの対象となる取扱いはありませんが、いつでもオプトアウトのご請求をお送りいただけます。当社はご請求を記録し、将来当社の取扱いが変わった場合にも引き続き適用します。</p>
      <ol>
        <li>件名を「Do Not Sell or Share」として、<a href="mailto:${J.email}">${J.email}</a> までメールをお送りください。</li>
        <li>${J.brand}でご利用中（またはご利用されていた）のメールアドレス、またはご請求の対象としたいメールアドレス、お住まいの州、および選択される内容（販売、共有、ターゲティング広告、プロファイリングのいずれか、またはすべての拒否）をご記載ください。お名前の記載は任意です。</li>
        <li>代理人として他の方のためにご請求される場合は、ご本人が署名した委任状を添付してください（「代理人によるご請求」参照）。</li>
      </ol>
      <p>オプトアウトのご請求にアカウントは不要で、ご本人であることの証明もお願いしていません。お送りいただいた情報は、該当する記録を特定し、ご選択を反映するためにのみ使用します。当社はご請求の受領から15営業日以内に対応し、メールで完了をお知らせします。当社の取扱いを変更する場合は、事前に本ページとプライバシーポリシーを改定し、オプトアウトされた方の個人情報を販売・共有することはありません。</p>
      <p>オプトアウトによって、サブスクリプション、クレジット、トライアル、請求に影響が生じることは一切ありません。</p>

      <h2 id="authorised-agents">代理人によるご請求</h2>
      <p>オプトアウトその他のプライバシーに関するご請求は、代理人を通じて行うこともできます。代理人は、代理人の氏名とご請求の内容を記載し、お客様が署名した書面による委任状を提出する必要があります。オプトアウトのご請求については、委任の事実をお客様に確認させていただくことがあります。個人情報の開示・訂正・削除のご請求については、代理人が適用法令に基づく有効な委任状（power of attorney）を保有している場合を除き、お客様ご自身に当社へ直接ご本人確認をお願いすることがあります。コロラド州にお住まいの方は、GPCを送信するブラウザ設定や拡張機能など、お客様に代わってオプトアウト信号を送信する技術を代理人として指定することもできます。</p>

      <h2 id="state-rights">コロラド州、カリフォルニア州その他の州における権利</h2>
      <ul>
        <li><strong>コロラド州。</strong>コロラド州プライバシー法に基づき、ターゲティング広告、販売、および法的効果またはこれと同様の重大な影響を及ぼす決定のためのプロファイリングを目的とした個人データの処理を拒否することができます。また、データへのアクセス、訂正、削除、および持ち運び可能な形式での写しの取得を請求できます。当社は、GPCを含め、コロラド州司法長官が認める統一オプトアウトの仕組みを尊重します。当社がご請求をお断りした場合は、決定をお知らせするメールに件名「Appeal」としてご返信いただくことで不服を申し立てることができます。当社は45日以内に回答し、申立てを認めない場合、お客様はコロラド州司法長官に連絡することができます。</li>
        <li><strong>カリフォルニア州。</strong>CCPA/CPRAに基づき、個人情報の販売・共有の拒否、センシティブ個人情報の利用・開示の制限、ならびに個人情報の開示・訂正・削除の請求ができます。</li>
        <li><strong>その他の州。</strong>バージニア州、コネチカット州、ユタ州、テキサス州、オレゴン州、モンタナ州、アイオワ州、デラウェア州、ネブラスカ州、ニューハンプシャー州、ニュージャージー州、テネシー州、ミネソタ州、メリーランド州、インディアナ州、ケンタッキー州、ロードアイランド州など、包括的なプライバシー法を有する州にお住まいの方も、ターゲティング広告・販売・プロファイリングを拒否する権利や、当社の決定に不服を申し立てる権利など、同様の権利をお持ちです。当社はこれらの権利についても同じ手続で対応し、同じ不服申立ての方法が適用されます。</li>
      </ul>
      <p>個人情報の開示・アクセス・訂正・削除のご請求には45日以内に回答し、事前にお知らせしたうえで1回に限り最大45日延長することがあります。ご本人確認の方法を含む詳細は<a href="privacy.html">プライバシーポリシー</a>をご覧ください。</p>

      <h2 id="sensitive-information">センシティブ個人情報</h2>
      <p>当社は、公的な識別番号、精密な位置情報、健康情報、人種・民族的出自、宗教的・思想的信条、労働組合への加入、性生活・性的指向、遺伝・生体情報、市民権・在留資格といったセンシティブ個人情報の提供をお願いしていません。カード番号の全桁はPCI DSS準拠の決済代行会社が取り扱い、当社が受け取ることはありません。アップロードされた参考画像を、人物の特定に使用することもありません。</p>
      <p>当社が取り扱うセンシティブ個人情報は、アカウントへのログインに必要な情報のみです。これは、ご依頼いただいたサービスの提供、アカウントの安全確保、不正防止、法令遵守という、法令で認められた目的にのみ利用し、お客様の特性を推測するために利用することはありません。利用がすでにこれらの目的に限定されているため、「センシティブ個人情報の利用制限」のための専用リンクは法令上必要とされていませんが、ご質問や利用制限のご請求はいつでも承り、オプトアウトのご請求と同様に対応します。プロンプトやアップロード画像には機微な情報を含めないようお願いいたします。</p>

      <h2 id="no-discrimination">差別的な取扱いの禁止</h2>
      <p>当社は、お客様がプライバシーに関する権利を行使したことを理由に、差別的な取扱いをすることは決してありません。オプトアウトその他のご請求を理由として、サービスの提供を拒否したり、異なる価格や料率を請求したり、異なる割引や不利益を適用したり、異なる水準や品質のサービスを提供したりすることはありません。</p>
      <p>${J.brand} Proの料金は、日本語サイトでは${J.pricePerYear}（${J.currencyName}）、英語サイトでは年額${E.price}（米ドル）で、どなたにも同じ料金が適用されます。オプトアウトの有無にかかわらず、同じ${J.trial}（トライアル開始から${J.trialHours}時間が経過するまでに解約されない場合、年額料金が自動的に請求されます）、有料期間1年ごとに同じ${J.credits}クレジット、同じ${J.refundDays}日間返金保証をご利用いただけます。</p>

      <h2 id="more-information">詳しい情報</h2>
      <p>当社が取得する情報、その目的、取扱いの委託先、保存期間、ならびに開示・訂正・削除・データポータビリティの権利の行使方法については、<a href="privacy.html">プライバシーポリシー</a>をご覧ください。当社が使用するごく少数の機能的なCookieとブラウザの保存項目は、<a href="cookies.html">Cookieポリシー</a>に記載しています。</p>
      <p>日本にお住まいのお客様による、第三者提供の停止を含む個人情報保護法に基づくご請求は、プライバシーポリシーに記載の手続で承ります。EEAまたは英国にお住まいのお客様による処理への異議や同意の撤回も、同じ手続で承ります。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>オプトアウトのご請求やプライバシーに関するご質問は、${J.brand}の運営者である${J.company}までお送りください。</p>
      <address>${J.company}<br>${J.addressLines.join("<br>")}<br><a href="mailto:${J.email}">${J.email}</a></address>
      <p>オプトアウトのご請求は、件名を「Do Not Sell or Share」としてお送りください。メールには${J.supportResponse}に日本語または英語でご返信します。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、日本語版と英語版との間に齟齬がある場合は英語版が優先します。</p>
    `
  }
};
