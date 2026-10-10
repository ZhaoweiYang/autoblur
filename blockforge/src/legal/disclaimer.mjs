import { FACTS } from "../config.mjs";
const E = FACTS.en, J = FACTS.ja;

export default {
  slug: "disclaimer",
  order: 9,
  en: {
    title: "Disclaimer",
    nav: "Disclaimer",
    description: `${E.brand} disclaimer: review AI output before publishing, no guaranteed views or revenue, preview mode limits, and no affiliation with Roblox.`,
    body: `
      <p class="lede">This Disclaimer explains the limits of what ${E.brand} and its website promise. In short: ${E.brand} creates assets automatically with AI, so you must review every output before you publish it; we cannot guarantee views, clicks or revenue; the free preview mode is a rough sketch drawn in your browser, not AI output; and ${E.brand} is not affiliated with Roblox Corporation or any other game platform. This Disclaimer does not reduce your ${E.refundDays}-Day Money-Back Guarantee or your rights under consumer law.</p>

      <h2 id="general">General information</h2>
      <p>${E.brand} (the &ldquo;Service&rdquo;) is operated by ${E.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). The information on blockforgeo.net, including product descriptions, example images and FAQs, is provided to describe the Service in general terms. We work to keep it accurate and up to date, but we do not warrant that it is complete, current or free of errors, and we may change it at any time.</p>
      <p>To the extent permitted by law, the website, the Service and all outputs are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, express or implied. The example images on the website are drawn by preview mode in the browser. They show the kind of asset each tool makes, not the quality or style of the AI output. Your actual results depend on your prompts and reference images and will vary.</p>
      <p>The binding contract for using ${E.brand} is our <a href="terms.html">Terms of Service</a>. If this Disclaimer and the Terms of Service conflict, the Terms of Service prevail.</p>

      <h2 id="ai-output">AI-generated output</h2>
      <p>Every thumbnail, icon, texture, clothing image, GFX render, UI layout and sound effect that ${E.brand} generates is created automatically by AI models. Because of how these models work:</p>
      <ul>
        <li>outputs can contain errors, visual artefacts, misspelled or garbled text, or details you did not ask for;</li>
        <li>outputs can unintentionally resemble existing works, characters, logos, trademarks or real people;</li>
        <li>similar prompts can produce similar outputs for different users, so an output may not be unique to you.</li>
      </ul>
      <p>We do not review outputs before you receive them, and we do not guarantee that any output is accurate, original, free of third-party rights, or eligible for copyright or trademark protection in your country.</p>
      <p><strong>You must review every output before you publish or use it.</strong> In particular, check that it does not copy or closely imitate someone else&rsquo;s character, logo or brand; check any text and fine details; and make sure it meets the content and asset rules of the platform where you will publish it. For important commercial uses, such as registering a trademark, get independent legal advice. You are responsible for how you use and publish outputs. Your ownership of outputs and your right to use them commercially are described in the <a href="terms.html">Terms of Service</a>.</p>

      <h2 id="no-guarantee">No guarantee of results</h2>
      <p>Better thumbnails, icons and other assets can improve how your game is presented, but how a game performs depends on many factors outside our control, including the game itself, platform algorithms and policies, your audience, timing and competition. We do not promise that using ${E.brand} will increase your views, impressions, click-through rate, players, sales, revenue or rankings. Statements on our website about what the tools can help you do describe general goals, not guaranteed outcomes. Game platforms may also reject or remove assets under their own moderation rules.</p>

      <h2 id="preview-mode">Preview mode</h2>
      <p>The free preview mode on our marketing website draws rough previews locally in your browser using simple drawing code. It needs no account, uses no credits and sends nothing to our AI models.</p>
      <p>Preview images are not AI output. They are not a sample of the quality, style or content of the assets that the AI service generates for subscribers, and they are not intended as finished assets. Preview mode is offered free of charge, as is, only to help you try ideas.</p>

      <h2 id="not-affiliated">No affiliation with Roblox or other platforms</h2>
      <p>${E.brand} is an independent product of ${E.company}. We are not affiliated with, endorsed by, sponsored by or approved by Roblox Corporation or any other game platform, game engine or marketplace. Roblox and all other platform names, logos and trademarks belong to their respective owners. We mention them only to describe the formats and sizes that our assets are designed for.</p>
      <p>We design asset sizes and formats around common platform requirements, but platforms can change their requirements at any time. You are responsible for following the terms and rules of each platform you use.</p>

      <h2 id="third-party-links">Third-party links and services</h2>
      <p>Our website may link to third-party websites and services, such as game platforms and the checkout page of our payment processor. We provide these links for convenience only. We do not control third-party websites and are not responsible for their content, availability or privacy practices. Your use of them is governed by their own terms and policies.</p>

      <h2 id="no-advice">No professional advice</h2>
      <p>Information on our website and in our help and support messages, including information about copyright, trademarks, platform rules, taxes or monetisation, is general information only. It is not legal, financial, tax or other professional advice, and it does not create a lawyer&ndash;client or any other professional relationship. For advice about your own situation, consult a qualified professional.</p>

      <h2 id="limitation">Limitation of liability</h2>
      <p>Our liability to you is limited as set out in the <a href="terms.html#liability">Limitation of liability</a> section of our Terms of Service. In short, to the maximum extent permitted by law, we are not liable for indirect or consequential losses, and our total liability is limited to the amounts you paid us for the Service in the 12 months before the event giving rise to the claim.</p>
      <p>Nothing in this Disclaimer limits any liability that cannot be limited under applicable law, including liability for fraud, gross negligence or wilful misconduct, and nothing in it affects your ${E.refundDays}-Day Money-Back Guarantee (full refund on unused credits, no questions asked; see our <a href="refund.html">Refund Policy</a>) or your statutory rights as a consumer.</p>

      <h2 id="contact">Contact</h2>
      <p>If you have questions about this Disclaimer, or you believe an output or any content on our website infringes your rights, contact us. For copyright notices, please follow our <a href="dmca.html">DMCA &amp; Copyright Policy</a>.</p>
      <address><strong>${E.company}</strong><br>${E.addressLines.join("<br>")}</address>
      <p>Email: <a href="mailto:${E.email}">${E.email}</a>. We reply ${E.supportResponse}, in English or Japanese. You can also use our <a href="../contact.html">contact page</a>.</p>
    `
  },
  ja: {
    title: "免責事項",
    nav: "免責事項",
    description: `${J.brand}の免責事項です。AI生成物は公開前にご確認いただく必要があること、再生数や収益を保証しないこと、プレビューモードの位置付け、Robloxなどとの提携がないことを説明します。`,
    body: `
      <p class="lede">本免責事項は、${J.company}（以下「当社」）が運営する${J.brand}（以下「本サービス」）および当社ウェブサイトについて、当社が保証する内容の範囲を説明するものです。要点は次のとおりです。${J.brand}はAIによって素材を自動生成するため、公開前にすべての生成物をご確認いただく必要があります。当社は再生数、クリック数または収益を保証できません。無料のプレビューモードはブラウザ内で描画する簡易的な下書きであり、AIによる生成物ではありません。また、${J.brand}は Roblox Corporation その他いかなるゲームプラットフォームとも提携関係にありません。本免責事項は、${J.refundDays}日間返金保証や消費者法に基づくお客様の権利を制限するものではありません。</p>

      <h2 id="general">一般情報</h2>
      <p>ウェブサイト blockforgeo.net に掲載している製品説明、作例画像、よくある質問などの情報は、本サービスの概要をご説明するためのものです。当社は正確かつ最新の情報を掲載するよう努めていますが、その完全性、最新性または正確性を保証するものではなく、予告なく変更することがあります。</p>
      <p>法令で認められる範囲において、ウェブサイト、本サービスおよびすべての生成物は「現状有姿」かつ「提供可能な範囲」で提供され、当社は明示または黙示を問わずいかなる保証も行いません。ウェブサイト上の作例画像は、プレビューモードによりブラウザ内で描画したものです。各ツールで作成できる素材の種類を示すものであり、AIによる生成物の品質やスタイルを示すものではありません。実際の結果は、お客様のプロンプトや参考画像によって異なります。</p>
      <p>${J.brand}のご利用に関する契約条件は<a href="terms.html">利用規約</a>に定めています。本免責事項と利用規約の内容が異なる場合は、利用規約が優先します。</p>

      <h2 id="ai-output">AI生成物の正確性と類似性</h2>
      <p>${J.brand}が生成するサムネイル、アイコン、テクスチャ、衣装画像、GFXレンダー、UIレイアウトおよび効果音は、すべてAIモデルによって自動的に作成されます。AIモデルの性質上、次の点にご注意ください。</p>
      <ul>
        <li>生成物には、誤り、画像の乱れ、文字の誤りや崩れ、指示していない要素が含まれることがあります。</li>
        <li>生成物が、意図せず既存の作品、キャラクター、ロゴ、商標または実在の人物に似ることがあります。</li>
        <li>似たプロンプトからは、異なるユーザーに対しても似た生成物が作成されることがあるため、生成物がお客様だけのものになるとは限りません。</li>
      </ul>
      <p>当社は、生成物がお客様に提供される前にその内容を確認しておらず、生成物の正確性、独自性、第三者の権利を侵害しないこと、またはお客様の国で著作権や商標の保護を受けられることを保証しません。</p>
      <p><strong>生成物は、公開または利用する前に必ずご自身でご確認ください。</strong>特に、他者のキャラクター、ロゴまたはブランドを模倣したり酷似したりしていないか、文字や細部に誤りがないか、公開先プラットフォームのコンテンツおよび素材に関するルールに適合しているかをご確認ください。商標登録など重要な商用利用を行う場合は、専門家に助言を求めてください。生成物の利用および公開はお客様の責任で行っていただきます。生成物の権利および商用利用については、<a href="terms.html">利用規約</a>をご覧ください。</p>

      <h2 id="no-guarantee">成果を保証しないこと</h2>
      <p>質の高いサムネイルやアイコンなどの素材は、ゲームの見せ方の改善に役立つ可能性があります。しかし、ゲームの成果は、ゲームそのものの内容、プラットフォームのアルゴリズムや方針、利用者層、公開時期、競合状況など、当社の管理が及ばない多くの要因に左右されます。当社は、${J.brand}の利用によって再生数、表示回数、クリック率、プレイヤー数、売上、収益または順位が向上することを約束しません。ウェブサイト上で各ツールの効果について述べている内容は一般的な目標を示すものであり、成果を保証するものではありません。また、ゲームプラットフォームが独自の審査基準に基づき素材を拒否または削除する場合があります。</p>

      <h2 id="preview-mode">プレビューモード</h2>
      <p>当社ウェブサイトの無料プレビューモードは、簡単な描画プログラムを使って、お客様のブラウザ内で簡易的なプレビューを描画する機能です。アカウントは不要で、クレジットも消費せず、当社のAIモデルには何も送信されません。</p>
      <p>プレビュー画像はAIによる生成物ではありません。AIサービスが有料会員向けに生成する素材の品質、スタイルまたは内容を示すサンプルではなく、完成した素材として使用することを想定したものでもありません。プレビューモードは、アイデアを試していただくために無料かつ現状有姿で提供しています。</p>

      <h2 id="not-affiliated">ゲームプラットフォームとの関係</h2>
      <p>${J.brand}は${J.company}の独立した製品です。当社は、Roblox Corporation その他いかなるゲームプラットフォーム、ゲームエンジンまたはマーケットプレイスとも提携関係になく、その承認、推奨または後援を受けていません。Roblox その他のプラットフォームの名称、ロゴおよび商標は、それぞれの権利者に帰属します。当社は、素材がどの形式・サイズ向けに作られているかを説明する目的でのみ、これらの名称に言及しています。</p>
      <p>素材のサイズや形式は一般的なプラットフォームの要件を踏まえて設計していますが、各プラットフォームは要件をいつでも変更する可能性があります。ご利用になる各プラットフォームの規約やルールの遵守は、お客様の責任となります。</p>

      <h2 id="third-party-links">第三者のリンク・サービス</h2>
      <p>当社ウェブサイトには、ゲームプラットフォームや決済代行会社の決済ページなど、第三者のウェブサイトやサービスへのリンクが含まれる場合があります。これらのリンクは便宜のために提供しているものです。当社は第三者のウェブサイトを管理しておらず、その内容、利用可能性またはプライバシーの取扱いについて責任を負いません。第三者のウェブサイトやサービスのご利用には、それぞれの利用規約およびポリシーが適用されます。</p>

      <h2 id="no-advice">専門的助言ではないこと</h2>
      <p>当社ウェブサイトやヘルプ、サポートでのご案内に含まれる情報（著作権、商標、プラットフォームのルール、税金、収益化などに関する情報を含みます）は、一般的な情報提供のみを目的としたものです。法律、財務、税務その他の専門的な助言ではなく、弁護士と依頼者の関係その他の専門的な関係を生じさせるものでもありません。お客様個別の状況については、資格を有する専門家にご相談ください。</p>

      <h2 id="limitation">責任の制限</h2>
      <p>お客様に対する当社の責任は、利用規約の<a href="terms.html#liability">「責任の制限」</a>に定めるとおり制限されます。概要としては、法令で認められる最大限の範囲において、当社は間接損害および結果的損害について責任を負わず、当社が負う責任の総額は、請求の原因となった事由が発生する前の12か月間にお客様が本サービスの対価として当社に支払った金額を上限とします。</p>
      <p>本免責事項は、適用法令により制限できない責任を制限するものではなく、詐欺または当社の故意もしくは重大な過失に基づく責任も制限しません。また、${J.refundDays}日間返金保証（未使用クレジット分を全額返金、理由は問いません。詳しくは<a href="refund.html">返金ポリシー</a>をご覧ください）や、消費者としてのお客様の法定の権利に影響を与えるものではありません。</p>

      <h2 id="contact">お問い合わせ</h2>
      <p>本免責事項に関するご質問、または生成物や当社ウェブサイト上のコンテンツがお客様の権利を侵害しているとお考えの場合は、下記までご連絡ください。著作権侵害の通知は、<a href="dmca.html">DMCA・著作権ポリシー</a>に従ってお送りください。</p>
      <address><strong>${J.company}</strong><br>${J.addressLines.join("<br>")}</address>
      <p>メール：<a href="mailto:${J.email}">${J.email}</a>（${J.supportResponse}に日本語または英語でご返信します）。<a href="../contact.html">お問い合わせページ</a>からもご連絡いただけます。</p>
      <p>本免責事項の日本語版は、お客様の便宜のために英語版を翻訳したものです。適用法令で認められる範囲において、英語版と日本語版の内容に相違がある場合は英語版が優先します。</p>
    `
  }
};
