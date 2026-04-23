export interface ManualSection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export const MAJIRIPI_SECTIONS: ManualSection[] = [
  /* ──────────────────────────────────────────────
     Tab 1 : シーン別ガイド
     ────────────────────────────────────────────── */
  {
    id: "scene-guide",
    title: "シーン別ガイド",
    icon: "Compass",
    content: `
<h3>架電シーン別クイックナビ</h3>
<p>架電の流れを4ステップで整理しました。各カードをクリックすると該当セクションにジャンプします。</p>

<div class="callout callout-warning">
  <strong>架電時間の鉄則</strong><br>
  飲食店には <strong>11:00〜14:00（ランチ）</strong>と <strong>17:00〜21:00（ディナー）</strong> の架電は絶対に避けてください。<br>
  ゴールデンタイムは <strong>14:30〜16:30</strong>（アイドルタイム）です。午前中なら <strong>10:00〜10:45</strong> も有効です。
</div>

<h4>STEP 1：架電前の準備</h4>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="target-needs" data-heading="0">
    <strong>ターゲット情報を確認する</strong><br>
    業態・席数・立地・営業時間を事前に調べ、トークをカスタマイズしましょう。グルメサイトやGoogle Mapsで基本情報を確認します。
  </a>
  <a class="scene-card scene-link" data-tab="target-needs" data-heading="1">
    <strong>架電タイミングを選ぶ</strong><br>
    ランチ・ディナー帯は絶対NG。14:30〜16:30のアイドルタイムを狙いましょう。月曜午前は仕込み中で出やすい店舗も多いです。
  </a>
  <a class="scene-card scene-link" data-tab="service-overview" data-heading="0">
    <strong>サービス概要を30秒で言えるようにする</strong><br>
    「LINEで飲食店のリピーターを自動で増やすツールです」を軸に、相手の業態に合わせた一言を準備しましょう。
  </a>
  <a class="scene-card scene-link" data-tab="case-studies" data-heading="0">
    <strong>事例データを手元に用意する</strong><br>
    春水堂（売上1,200万円）・枡元（前年比120%）など、相手の業態に近い事例をすぐ出せるよう準備しましょう。
  </a>
</div>

<h4>STEP 2：受付突破</h4>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
    <strong>受付突破フレーズを使う</strong><br>
    「LINEの活用についてオーナー様にご案内がありまして」など、営業感を出さないフレーズで突破率を上げましょう。
  </a>
  <a class="scene-card scene-link" data-tab="objection-handling" data-heading="6">
    <strong>「今忙しい」と言われたら</strong><br>
    飲食店は常に忙しいのが当たり前。「15秒だけ」のミニトークで次回アポを確保する技術を身につけましょう。
  </a>
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="2">
    <strong>オープニング30秒版を準備</strong><br>
    忙しいオーナーには短縮版トークが有効です。核心を30秒で伝えるスクリプトを確認しましょう。
  </a>
</div>

<h4>STEP 3：オーナー・店長との会話</h4>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="1">
    <strong>オープニングトークで共感を作る</strong><br>
    「リピーターが増えたらいいな、と思われたことはありませんか？」から入り、課題に共感してから提案に進みましょう。
  </a>
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="3">
    <strong>ヒアリングで課題を深掘りする</strong><br>
    月間来客数・リピート率・現在の集客手段を聞き出し、マジリピがどう役立つか具体的に示せる材料を集めましょう。
  </a>
  <a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
    <strong>反論が出たら反論対応集へ</strong><br>
    「うちは小さい店だから」「効果あるの？」など、よくある7パターンの切り返しを確認しましょう。
  </a>
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="4">
    <strong>商材説明で納得感を作る</strong><br>
    「お店がやることはQRコードを案内するだけ」「あとは全自動」という2つのキーメッセージで説明しましょう。
  </a>
</div>

<h4>STEP 4：クロージング</h4>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="5">
    <strong>クロージングトークで次を決める</strong><br>
    「無料デモ」「事例資料の送付」など、相手の温度感に応じたネクストステップを提案しましょう。
  </a>
  <a class="scene-card scene-link" data-tab="case-studies" data-heading="4">
    <strong>導入フローを見せて安心させる</strong><br>
    「申込→QRコード設置→自動運用開始」のシンプルさを伝えて、導入ハードルの低さを印象づけましょう。
  </a>
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 2 : 一気通貫スクリプト
     ────────────────────────────────────────────── */
  {
    id: "full-script",
    title: "一気通貫スクリプト",
    icon: "ScrollText",
    content: `
<h2>一気通貫スクリプト</h2>
<p>このスクリプトを上から順に読むだけで、受付突破からアポイント獲得まで完結します。飲食店向けの自然な会話の流れを身につけましょう。</p>

<div class="callout callout-warning">
  <strong>飲食店への架電時間帯に注意</strong><br>
  <strong>11:00〜14:00（ランチ）</strong>、<strong>17:00〜21:00（ディナー）</strong>は絶対にかけてはいけません。<br>
  ゴールデンタイムは <strong>14:30〜16:30</strong>（アイドルタイム）です。午前なら10:00〜10:45も有効です。
</div>

<h3>Phase 1：受付突破（〜30秒）</h3>

<div class="script-block">
  <span class="label">営業</span>
  お忙しいところ恐れ入ります。飲食店様向けのLINE活用のご案内でお電話しております。オーナー様か店長様はお手すきでしょうか？
</div>

<div class="callout callout-info">
  <strong>営業感ゼロが鉄則</strong><br>
  「ご案内」「お伝えしたいことがある」というスタンスで。「ご提案」「ご紹介」は営業ワードなので避けましょう。
</div>

<p><strong>▼「営業ですか？」と聞かれたら</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  営業のお電話ですか？
</div>
<div class="script-block">
  <span class="label">営業</span>
  いえ、LINE社の公認プログラムに基づいた情報提供です。1分だけお時間いただけますか？
</div>

<p><strong>▼「今忙しい」と言われたら → 15秒ミニトーク</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  今ちょっと忙しいんだけど。
</div>
<div class="script-block">
  <span class="label">営業</span>
  大変失礼しました！15秒だけお伝えさせてください。LINEで飲食店のリピーターを自動で増やすツールを500店舗以上に提供しております。お店の作業はQRコードを案内するだけで、あとは全自動です。資料だけお送りしてもよろしいですか？
</div>
<p>→ 「はい」の場合は <strong>Phase 6B（資料送付クロージング）</strong>へ進んでください。</p>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
  <strong>受付突破フレーズをもっと見る →</strong><br>
  3パターンの突破フレーズと切り返しの詳細はこちら
</a>

<h3>Phase 2：オープニング（〜1分）</h3>

<p>オーナー・店長に繋がったら、いきなり商材の話をしない。まず共感から入ります。</p>

<div class="script-block">
  <span class="label">営業</span>
  お忙しいところありがとうございます。DOTZ株式会社の〇〇と申します。飲食店様のリピーター集客のお手伝いをしている者です。
</div>

<div class="script-block">
  <span class="label">営業</span>
  突然のお電話で恐縮なのですが、1つだけお伺いしてもいいですか？…「一度来てくれたお客様が、もっとリピートしてくれたらいいのに」と思われたことはありませんか？
</div>

<div class="script-block">
  <span class="label">相手</span>
  まあ、それは思いますね。
</div>

<div class="script-block">
  <span class="label">営業</span>
  ですよね。実は今、全国の飲食店様で「LINEを使ってリピーターを自動で増やす」という仕組みがすごく成果を出しておりまして。累計500店舗以上に導入いただいて、平均でリピート率が20%以上になっているんです。しかも、お店側の作業はお会計時にQRコードをご案内するだけで、あとは全部自動なんですね。
</div>

<div class="script-block">
  <span class="label">営業</span>
  2〜3分だけ、どんな仕組みかご説明させていただいてもよろしいですか？
</div>

<div class="callout callout-info">
  <strong>【短縮30秒版】忙しそうなオーナーにはこちら</strong><br>
  「30秒だけいいですか？…LINEで飲食店のリピーターを自動で増やすツールです。お店がやることはQRコード案内だけ。あとは全自動でメッセージやクーポンが届きます。500店舗以上で実績、リピート率平均20%超。詳しい資料をお送りしてもいいですか？」
</div>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="1">
  <strong>オープニングトークの詳細を見る →</strong><br>
  共感の作り方・会話例の深掘りはこちら
</a>

<h3>Phase 3：ヒアリング（〜2分）</h3>

<p>興味を持ってもらえたら、相手の状況を聞き出します。一問一答ではなく、共感を挟みながら自然に進めましょう。</p>

<p><strong>質問①：来客数を把握する</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  ありがとうございます。少しだけお店の状況をお聞かせください。ちなみに、月間の来客数ってどのくらいでいらっしゃいますか？
</div>
<div class="script-block">
  <span class="label">相手</span>
  うーん、月に2,000人くらいかな。
</div>
<div class="script-block">
  <span class="label">営業</span>
  2,000人、ありがとうございます。
</div>

<p><strong>質問②：リピート率を確認する</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  そのうち、リピーターの方ってどのくらいの割合ですか？感覚で構いません。
</div>
<div class="script-block">
  <span class="label">相手</span>
  うーん、3割くらいかなぁ…。
</div>
<div class="script-block">
  <span class="label">営業</span>
  なるほど、3割。実はそれ、すごくもったいないんです。マジリピを導入された店舗さんは、メッセージを受け取ったお客様の再来店率が3倍以上になっているんですよ。
</div>

<p><strong>質問③：現在の集客手段を聞く</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  今、集客ってどんな方法をされていますか？グルメサイトとか、SNSとか…
</div>
<div class="script-block">
  <span class="label">相手</span>
  食べログは出してるけど、正直高くて…。Instagramもやらなきゃと思ってるけど、時間がなくて。
</div>
<div class="script-block">
  <span class="label">営業</span>
  わかります、本当にそうおっしゃる方多いんです。
</div>

<p><strong>質問④：グルメサイトの費用感を把握する</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  ちなみに、グルメサイトの掲載費って月にどのくらいですか？
</div>
<div class="script-block">
  <span class="label">相手</span>
  月5万くらいかな…。
</div>
<div class="script-block">
  <span class="label">営業</span>
  5万円…。食べログなどのグルメサイトは新規集客には強いんですけど、リピーターを増やすのは別の仕組みが必要なんですよね。しかもSNSは更新し続けないといけないので、現場を回しながらだと本当に大変ですよね。マジリピがお役に立てるのは、まさにその「忙しくても自動でリピーターを増やせる」という点なんです。
</div>

<div class="memo-box">
  <span class="badge">検知ポイント</span>
  以下のサインが出たらマジリピの提案チャンスです：<br>
  ・リピート率が低い（30%以下）<br>
  ・グルメサイトの掲載費が高い（月3万円以上）<br>
  ・SNS運用に手が回っていない<br>
  ・紙のスタンプカードを使っている（紛失・管理の手間）
</div>

<a class="scene-card scene-link" data-tab="target-needs" data-heading="2">
  <strong>ニーズヒアリング質問集の詳細を見る →</strong><br>
  業態別の深掘り質問や課題一覧はこちら
</a>

<h3>Phase 4：商材説明（〜2分）</h3>

<p>ヒアリングで課題を共有できたら、マジリピの仕組みを「3ステップ」で説明します。シンプルに、わかりやすく。</p>

<div class="script-block">
  <span class="label">営業</span>
  マジリピの仕組みは3ステップです。とてもシンプルなので、すぐイメージしていただけると思います。
</div>

<div class="script-block">
  <span class="label">営業</span>
  まず1つ目。お客様が来店されたら、お会計のときにQRコードを読み取っていただきます。これだけでLINEの友だち追加と会員登録が同時に完了します。アプリのダウンロードも、面倒な入力フォームも一切ありません。
</div>

<div class="script-block">
  <span class="label">営業</span>
  2つ目。来店後は自動でフォローメッセージが届きます。来店翌日に「昨日はありがとうございました」、1週間後に「またお待ちしています」、しばらく来店がなければ「お久しぶりです、クーポンをお送りします」という具合に、全部自動です。
</div>

<div class="script-block">
  <span class="label">営業</span>
  3つ目が、デジタルスタンプカードです。来店するたびにスタンプが貯まって、特典がもらえる。紙のスタンプカードと違って、LINEの中にあるので紛失もありません。お客様に「また来よう」と思っていただける仕掛けです。
</div>

<div class="script-block">
  <span class="label">営業</span>
  これ、お店側でやることは本当に「QRコードを案内する」だけなんです。メッセージの内容も、配信タイミングも、クーポンの出し分けも、全部システムが自動でやります。新人のアルバイトさんでも初日から対応できるレベルです。
</div>

<div class="callout callout-success">
  <strong>信頼感を高めるひと言</strong><br>
  「ちなみに実績としては、累計500店舗以上に導入いただいていて、利用者は80万人を超えています。運営元のDOTZ株式会社は、国内わずか9名のLINE公認コンサルタント『LINE Frontliner』の認定企業です。」
</div>

<a class="scene-card scene-link" data-tab="service-overview" data-heading="0">
  <strong>サービス概要の全体を見る →</strong><br>
  4つの主要機能・LINEミニアプリの強み・会社概要はこちら
</a>

<h3>Phase 5：反論が出たら</h3>

<p>飲食店オーナーは忙しいので、反論には共感→事実で簡潔に返しましょう。長々と説得しないのがコツです。</p>

<p><strong>反論①「うちは小さい店だから」</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  うちは小さい店だから、そういうのは大手向けでしょ。
</div>
<div class="script-block">
  <span class="label">営業</span>
  おっしゃる気持ちわかります。でも実は個人店こそ効果大なんです。大手はアプリを自社開発できますが、個人店にはその予算がないですよね。LINEなら初期投資も少なく、お客様も使い慣れている。むしろ常連さんとの距離が近い個人店の強みを活かせるんです。
</div>
<a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
  <strong>この反論の詳しい対応を見る →</strong>
</a>

<p><strong>反論②「スタッフが対応できない」</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  スタッフが対応できないよ。
</div>
<div class="script-block">
  <span class="label">営業</span>
  そうですよね、お忙しいですもんね。実はスタッフさんに覚えていただくことは1つだけです。「お会計のときにQRコードを読み取ってくださいね」とお客様にお伝えするだけ。新人バイトさんでも初日からOKです。あとは全部自動なので、仕事は増えません。
</div>
<a class="scene-card scene-link" data-tab="objection-handling" data-heading="2">
  <strong>この反論の詳しい対応を見る →</strong>
</a>

<p><strong>反論③「効果あるの？」</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  本当に効果あるの？
</div>
<div class="script-block">
  <span class="label">営業</span>
  当然のご質問です。データでお伝えすると、メッセージを受け取ったお客様は3倍以上再来店しています。具体例では、台湾茶カフェの春水堂さんでLINE経由の売上1,200万円を達成されました。まずは事例資料をご覧いただくだけでもイメージが湧くと思います。
</div>
<a class="scene-card scene-link" data-tab="objection-handling" data-heading="3">
  <strong>この反論の詳しい対応を見る →</strong>
</a>

<p><strong>反論④「グルメサイトで十分」</strong></p>
<div class="script-block">
  <span class="label">相手</span>
  食べログ出してるし、それで十分かな。
</div>
<div class="script-block">
  <span class="label">営業</span>
  グルメサイトをしっかり活用されているんですね。実はマジリピは代わりではなく、組み合わせて使うツールなんです。グルメサイトは「新規を呼ぶ」のが得意。マジリピは「来てくれたお客様をリピーター化する」仕組み。組み合わせることで、せっかく掲載費を払って来てもらったお客様を無駄にしない流れが完成します。
</div>
<a class="scene-card scene-link" data-tab="objection-handling" data-heading="5">
  <strong>この反論の詳しい対応を見る →</strong>
</a>

<div class="memo-box">
  <span class="badge">POINT</span>
  飲食店オーナーは忙しい。共感→事実で簡潔に返すのが鉄則です。「いえ、そんなことはありません」は絶対NG。「おっしゃる通りです」「わかります」から入りましょう。
</div>

<h3>Phase 6：クロージング（〜1分）</h3>

<p>必ず「次の接点」を確定して電話を終えます。曖昧なまま切らないでください。</p>

<p><strong>パターンA：興味が高い場合（デモ提案）</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  ありがとうございます。実際の画面をお見せしながら、5分程度のデモをお見せすることもできます。今週の14時〜16時あたりはいかがですか？
</div>
<div class="script-block">
  <span class="label">営業</span>
  オンラインで画面を共有するだけなので、お気軽にご覧いただければ。もちろん、見ていただいた上で「うちには合わないな」と思われたら、全然大丈夫ですので。
</div>

<p><strong>パターンB：まだ迷っている場合（資料送付 + 次回アポ）</strong></p>
<div class="script-block">
  <span class="label">営業</span>
  もちろん、今すぐ決めていただく必要はまったくありません。まずは、導入店舗様の事例と効果データをまとめた資料をお送りさせてください。LINEとメール、どちらがご確認しやすいですか？
</div>
<div class="script-block">
  <span class="label">相手</span>
  LINEのほうがいいかな。
</div>
<div class="script-block">
  <span class="label">営業</span>
  かしこまりました、LINEでお送りしますね。資料をご覧いただいた後に、もしご質問があれば改めてお電話させてください。来週の火曜日か水曜日の14時〜16時あたりで、ご都合の良いお時間はありますか？
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  必ず次回接点の日時を確定させましょう。「いつがいいですか？」とオープンに聞かず、「来週火曜か水曜の14時〜16時は？」と<strong>アイドルタイム（14:30〜16:30）</strong>の選択肢を提案するのがコツです。
</div>

<a class="scene-card scene-link" data-tab="case-studies" data-heading="0">
  <strong>導入事例・実績データを見る →</strong><br>
  春水堂・枡元などの具体事例で説得力を高めましょう
</a>

<h3>電話終了後のアクション</h3>

<div class="callout callout-info">
  <strong>電話を切ったら、すぐにこの4つを実行してください。</strong>
</div>

<ul>
  <li><strong>ヒアリング内容をCRMに記録</strong> — 業態・席数・月間来客数・リピート率・現在の集客方法・グルメサイト費用など</li>
  <li><strong>資料送付は即日対応</strong> — 「あとで送ります」は忘れられる原因。電話を切って5分以内に送りましょう</li>
  <li><strong>次回コール日をカレンダーに登録</strong> — 必ずアイドルタイム（14:30〜16:30）で設定</li>
  <li><strong>反応メモを記録</strong> — 温度感（A:高/B:中/C:低）・出た反論・気になっていたポイントなどを残す</li>
</ul>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 3 : サービス概要
     ────────────────────────────────────────────── */
  {
    id: "service-overview",
    title: "サービス概要",
    icon: "Zap",
    content: `
<h3>30秒で説明するマジリピ</h3>
<div class="callout callout-info">
  <strong>ワンフレーズ定義</strong><br>
  マジリピは、<strong>飲食店のリピーターをLINEで自動的に増やす</strong>ツールです。<br>
  お客様がLINEでQRコードを読み取るだけで会員登録が完了し、来店後のフォローメッセージやクーポン配信がすべて自動で行われます。
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  お客様に伝えるときは「<strong>LINEで飲食店のリピーターを自動で増やすツール</strong>」の一言から始めてください。難しい機能説明は後回しにし、まず「自動」「LINE」「リピーター」の3つのキーワードを印象づけましょう。
</div>

<h3>4つの主要機能</h3>
<table>
  <thead>
    <tr><th>機能</th><th>概要</th><th>お店のメリット</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>スタンプ型会員証</strong></td>
      <td>LINEミニアプリ上でデジタルスタンプカードを提供。来店ごとにスタンプが貯まり、特典と交換できます。</td>
      <td>紙のスタンプカード不要。お客様がLINEを開くたびにお店を思い出してもらえます。</td>
    </tr>
    <tr>
      <td><strong>クーポン自動配信</strong></td>
      <td>来店回数・最終来店日・属性に応じて、最適なクーポンを自動で配信します。</td>
      <td>「そろそろ来なくなりそうなお客様」にピンポイントでアプローチでき、離脱を防ぎます。</td>
    </tr>
    <tr>
      <td><strong>メッセージ自動配信</strong></td>
      <td>来店後のお礼・再来店促進・季節のご挨拶など、シナリオに沿ったメッセージが全自動で届きます。</td>
      <td>忙しい店舗でも、一人ひとりに合わせたフォローが手間ゼロで実現します。</td>
    </tr>
    <tr>
      <td><strong>顧客データ分析</strong></td>
      <td>来店頻度・リピート率・クーポン利用率などをダッシュボードでリアルタイム確認できます。</td>
      <td>「どのお客様が何回来ているか」が見える化され、次の打ち手が明確になります。</td>
    </tr>
  </tbody>
</table>

<div class="callout callout-success">
  <strong>業態別シナリオを完全網羅</strong><br>
  居酒屋・ラーメン・カフェ・レストラン・焼肉・ファストフードなど、業態ごとに最適化されたメッセージシナリオがあらかじめ用意されています。お店側でシナリオを考える必要はありません。
</div>

<h3>LINEミニアプリの強み</h3>
<div class="stat-grid">
  <div class="stat-highlight">
    <span class="stat-label">アプリDL</span>
    <span class="stat-value">不要</span>
  </div>
  <div class="stat-highlight">
    <span class="stat-label">会員登録</span>
    <span class="stat-value">不要</span>
  </div>
  <div class="stat-highlight">
    <span class="stat-label">国内LINE利用率</span>
    <span class="stat-value">96%</span>
  </div>
</div>
<ul>
  <li><strong>アプリのダウンロードが不要</strong> — LINEの中で動くので、お客様に新しいアプリを入れてもらう必要がありません。</li>
  <li><strong>会員登録が不要</strong> — QRコードを読み取るだけ。名前やメールアドレスの入力は一切なし。お客様のストレスはゼロです。</li>
  <li><strong>日本人の96%がLINEを使っている</strong> — 年齢層を問わず使えるプラットフォームなので、幅広い客層に対応できます。</li>
  <li><strong>プッシュ通知でリーチできる</strong> — メールと違い、LINEメッセージは開封率が圧倒的に高く、確実にお客様に届きます。</li>
</ul>

<h3>店舗の負担はQRコード案内のみ</h3>
<div class="flow-steps">
  <span class="flow-step">お客様が来店</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">QRコードを読み取り</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">自動で友だち追加&会員登録</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">以降のフォローは全自動</span>
</div>

<div class="callout callout-info">
  <strong>店舗スタッフがやることは本当にこれだけ</strong><br>
  「お会計の際にこちらのQRコードをLINEで読み取っていただけますか？」と一言ご案内するだけ。あとはマジリピが自動でスタンプ付与、メッセージ配信、クーポン送付をすべて行います。スタッフの負担は限りなくゼロです。
</div>

<h3>DOTZ株式会社 について</h3>
<table>
  <thead>
    <tr><th>項目</th><th>内容</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>会社名</strong></td><td>DOTZ株式会社</td></tr>
    <tr><td><strong>LINE Frontliner</strong></td><td>国内わずか9名のLINE公認コンサルタント在籍</td></tr>
    <tr><td><strong>運用実績</strong></td><td>累計10億通以上のメッセージ配信運用</td></tr>
    <tr><td><strong>社員のスキル</strong></td><td>従業員の90%以上がLINE Green Badge取得</td></tr>
    <tr><td><strong>導入実績</strong></td><td>累計500店舗以上が導入</td></tr>
  </tbody>
</table>

<div class="memo-box">
  <span class="badge">POINT</span>
  「LINE Frontliner」は国内にわずか9名しかいないLINEの公認コンサルタントです。この肩書きがあるだけで信頼感が大きく変わります。架電時には必ず伝えましょう。
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 3 : ターゲット & ニーズ
     ────────────────────────────────────────────── */
  {
    id: "target-needs",
    title: "ターゲット & ニーズ",
    icon: "Target",
    content: `
<h3>ターゲットプロファイル</h3>
<p>マジリピのメインターゲットは <strong>飲食店のオーナー・店長・マーケティング担当者</strong> です。業態別の特徴を把握して、トークをカスタマイズしましょう。</p>

<table>
  <thead>
    <tr><th>業態</th><th>特徴・傾向</th><th>刺さるキーワード</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>居酒屋</strong></td>
      <td>常連客が売上の柱。宴会・コース予約が重要。スタッフの入れ替わりが激しい。</td>
      <td>「常連さんの来店頻度UP」「宴会リマインド自動化」</td>
    </tr>
    <tr>
      <td><strong>ラーメン店</strong></td>
      <td>回転率重視。SNS映え意識。オーナー自ら厨房に立つことが多い。</td>
      <td>「スタンプカードのデジタル化」「トッピング無料クーポン」</td>
    </tr>
    <tr>
      <td><strong>カフェ</strong></td>
      <td>女性客が多い。雰囲気・ブランド重視。リピート頻度が高い。</td>
      <td>「ドリンク1杯無料で再来店」「季節メニュー自動告知」</td>
    </tr>
    <tr>
      <td><strong>レストラン</strong></td>
      <td>客単価が高い。記念日利用が多い。予約管理が重要。</td>
      <td>「記念日リマインド自動配信」「VIP顧客の特別対応」</td>
    </tr>
    <tr>
      <td><strong>焼肉店</strong></td>
      <td>ファミリー・グループ利用が中心。週末に集中。平日の集客が課題。</td>
      <td>「平日限定クーポンで稼働率UP」「家族向け特典」</td>
    </tr>
    <tr>
      <td><strong>ファストフード</strong></td>
      <td>低単価・高回転。若年層中心。アプリ疲れが顕著。</td>
      <td>「アプリ不要のLINEスタンプカード」「来店ポイント自動付与」</td>
    </tr>
  </tbody>
</table>

<h3>架電タイミングのコツ</h3>
<div class="callout callout-warning">
  <strong>絶対に避ける時間帯</strong><br>
  <ul>
    <li><strong>11:00〜14:00</strong>（ランチタイム）— 厨房もホールもフル稼働。電話に出られても迷惑がられます。</li>
    <li><strong>17:00〜21:00</strong>（ディナータイム）— 仕込み〜ピーク。絶対にかけてはいけません。</li>
  </ul>
</div>

<div class="callout callout-success">
  <strong>ゴールデンタイム</strong><br>
  <ul>
    <li><strong>14:30〜16:30</strong>（アイドルタイム）— 最も電話が繋がりやすく、オーナーも余裕がある時間帯です。</li>
    <li><strong>10:00〜10:45</strong>（開店準備中）— 仕込みが始まる前。比較的落ち着いている店舗が多いです。</li>
    <li><strong>月曜日の午前中</strong> — 定休日の翌日や週明けは、仕込みをしながら電話に出てくれるケースが多いです。</li>
  </ul>
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  「お忙しい時間帯にすみません」ではなく、アイドルタイムに電話して「今お時間よろしいですか？」と聞くのがベスト。飲食店の方は「この人、飲食のことわかってるな」と感じてくれます。
</div>

<h3>よくある課題5選</h3>
<ol>
  <li><strong>リピーターが増えない</strong> — 新規客は来るがリピートに繋がらない。一度来たお客様が思い出してくれない。</li>
  <li><strong>売上が安定しない</strong> — 曜日・天気・季節で波がある。平日や雨の日の集客に苦戦。</li>
  <li><strong>忙しくて顧客フォローができない</strong> — 営業中は接客に追われ、閉店後は疲れて何もできない。</li>
  <li><strong>グルメサイトの掲載費が高い</strong> — 月額数万円〜十数万円かけても費用対効果が見えない。新規集客頼みになっている。</li>
  <li><strong>SNS運用に手が回らない</strong> — Instagram・X(Twitter)を更新する時間がない。投稿しても効果が測れない。</li>
</ol>

<h3>ニーズヒアリング質問集</h3>
<p>以下の質問を自然な会話の中で使いましょう。一問一答ではなく、相手の回答に共感しながら深掘りするのがポイントです。</p>

<div class="callout callout-info">
  <strong>基本情報を把握する質問</strong>
</div>
<ol>
  <li>「ちなみに、月間の来客数はどのくらいでいらっしゃいますか？」</li>
  <li>「お客様のうち、リピーターの方ってどのくらいの割合ですか？」</li>
  <li>「現在、集客ってどんな方法をされていますか？（グルメサイト・SNS・チラシなど）」</li>
  <li>「LINE公式アカウントは今お使いですか？」</li>
  <li>「スタンプカードや会員カードのようなものは出されていますか？」</li>
</ol>

<div class="callout callout-info">
  <strong>課題を深掘りする質問</strong>
</div>
<ol start="6">
  <li>「一度来てくださったお客様が、なかなかリピートしてくれない…というお悩みはありませんか？」</li>
  <li>「平日や雨の日など、お客様が少ない日の集客って何か対策されていますか？」</li>
  <li>「グルメサイトの費用対効果って、正直なところいかがですか？」</li>
  <li>「来店されたお客様に、後日フォローのメッセージを送ったりはされていますか？」</li>
  <li>「もし手間ゼロでリピーターが増える仕組みがあったら、ご興味ありますか？」</li>
</ol>

<div class="callout callout-info">
  <strong>ニーズを確認する質問</strong>
</div>
<ol start="11">
  <li>「お客様の来店データ（何回来ているか、最後にいつ来たか）って、今把握できていますか？」</li>
  <li>「もしリピート率が今より20%上がったら、売上にどのくらいのインパクトがありそうですか？」</li>
  <li>「新規集客と既存客のリピート、今どちらに力を入れたいとお考えですか？」</li>
</ol>

<div class="memo-box">
  <span class="badge">POINT</span>
  すべての質問を聞く必要はありません。会話の流れの中で自然に3〜5問使えればOKです。大切なのは「聞く→共感する→深掘りする」のサイクルです。
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 4 : トークスクリプト
     ────────────────────────────────────────────── */
  {
    id: "talk-script",
    title: "トークスクリプト",
    icon: "MessageSquare",
    content: `
<h3>受付突破フレーズ集</h3>
<div class="callout callout-warning">
  <strong>飲食店の受付突破は「営業感ゼロ」が鉄則</strong><br>
  飲食店はセールス電話に慣れており、「営業電話かな？」と思った瞬間に切られます。「ご案内」「ご確認」「お伝えしたいことがある」というスタンスで突破しましょう。
</div>

<div class="script-block">
  <span class="label">営業</span>
  お忙しいところ恐れ入ります。LINEの運用について、オーナー様にお伝えしたいことがございましてお電話しました。オーナー様はいらっしゃいますか？
</div>

<div class="script-block">
  <span class="label">営業</span>
  お世話になります。飲食店様向けのLINE活用のご案内でお電話しております。店長様かオーナー様はお手すきでしょうか？
</div>

<div class="script-block">
  <span class="label">営業</span>
  失礼いたします。近隣の飲食店様にLINEを使ったリピーター集客のご案内をしておりまして、オーナー様に1分だけお時間いただけないでしょうか？
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  「営業のお電話ですか？」と聞かれた場合は、「いえ、LINE社の公認プログラムに基づいたご案内でして、営業というよりは情報提供です」と切り返しましょう。
</div>

<h3>オープニングトーク</h3>
<p>オーナー・店長に繋がったら、まず共感から入ります。いきなり商材説明をしないでください。</p>

<div class="script-block">
  <span class="label">営業</span>
  お忙しいところありがとうございます。DOTZ株式会社の〇〇と申します。本日は、飲食店様のリピーター集客のお手伝いをしている者としてご連絡しました。
</div>

<div class="script-block">
  <span class="label">営業</span>
  突然のお電話で恐縮なのですが、1つだけお伺いしてもよろしいですか？…「一度来てくれたお客様が、もっとリピートしてくれたらいいのに」と思われたことはありませんか？
</div>

<div class="script-block">
  <span class="label">相手</span>
  まあ、それは思いますね。
</div>

<div class="script-block">
  <span class="label">営業</span>
  ですよね。実は今、全国の飲食店様で「LINEを使ってリピーターを自動で増やす」という仕組みがすごく成果を出しておりまして。累計500店舗以上に導入いただいて、平均でリピート率が20%以上になっているんです。しかも、お店側の作業は来店されたお客様にQRコードをご案内するだけで、あとは全部自動なんですね。
</div>

<div class="script-block">
  <span class="label">営業</span>
  2〜3分だけ、どんな仕組みかご説明させていただいてもよろしいですか？
</div>

<h3>オープニングトーク【短縮30秒版】</h3>
<div class="callout callout-info">
  忙しいオーナーや「手短にお願い」と言われた場合に使う30秒バージョンです。
</div>

<div class="script-block">
  <span class="label">営業</span>
  お忙しいところすみません、DOTZの〇〇です。30秒だけいいですか？…ありがとうございます。一言で言うと、LINEで飲食店のリピーターを自動で増やすツールをご案内しています。お店がやることはQRコードを案内するだけ。あとは全自動でメッセージやクーポンが届いて、リピーターが増えます。500店舗以上で実績があって、リピート率平均20%超です。詳しい資料をLINEかメールでお送りしてもいいですか？
</div>

<h3>ヒアリングトーク</h3>
<p>オープニングで興味を引けたら、ヒアリングに移ります。相手の状況を聞きながら、マジリピがフィットする理由を一緒に確認していきましょう。</p>

<div class="script-block">
  <span class="label">営業</span>
  ありがとうございます。少しだけお店の状況をお聞かせいただけますか？…ちなみに、月間の来客数ってどのくらいでいらっしゃいますか？
</div>

<div class="script-block">
  <span class="label">相手</span>
  うーん、月に2,000人くらいかな。
</div>

<div class="script-block">
  <span class="label">営業</span>
  2,000人、ありがとうございます。そのうち、リピーターの方ってどのくらいの割合ですか？感覚で構いません。
</div>

<div class="script-block">
  <span class="label">相手</span>
  うーん、3割くらいかなぁ…。
</div>

<div class="script-block">
  <span class="label">営業</span>
  なるほど、3割。実はそれ、すごくもったいないんです。一般的に飲食店のリピート率は20〜30%と言われているんですが、マジリピを導入された店舗さんは平均20%以上のリピート率を安定的にキープされていて、メッセージを受け取ったお客様は受け取っていないお客様に比べて3倍以上再来店されているんです。
</div>

<div class="script-block">
  <span class="label">営業</span>
  今、集客ってどんな方法をされていますか？グルメサイトとか、SNSとか…
</div>

<div class="script-block">
  <span class="label">相手</span>
  食べログは出してるけど、正直高くて…。Instagramもやらなきゃと思ってるけど、時間がなくて。
</div>

<div class="script-block">
  <span class="label">営業</span>
  わかります、本当にそうおっしゃる方多いんです。食べログなどのグルメサイトは新規集客には強いんですけど、リピーターを増やすのは別の仕組みが必要なんですよね。しかもSNSは更新し続けないといけないので、現場を回しながらだと本当に大変だと思います。
</div>

<div class="script-block">
  <span class="label">営業</span>
  マジリピがお役に立てるのは、まさにその「忙しくても自動でリピーターを増やせる」という点なんです。ちょっとだけ仕組みをご説明させてください。
</div>

<h3>商材説明トーク</h3>

<div class="script-block">
  <span class="label">営業</span>
  マジリピは、LINEのミニアプリを使ったリピーター自動集客ツールです。仕組みはとてもシンプルで、大きく3つのステップです。
</div>

<div class="script-block">
  <span class="label">営業</span>
  まず、お客様が来店されたら、お会計のときにQRコードを読み取っていただきます。これだけでLINEの友だち追加と会員登録が同時に完了します。アプリのダウンロードも、面倒な会員登録フォームも一切ありません。
</div>

<div class="script-block">
  <span class="label">営業</span>
  次に、来店後は自動でフォローメッセージが届きます。例えば、来店翌日に「昨日はありがとうございました」、1週間後に「またお待ちしています」、しばらく来店がなければ「お久しぶりです、クーポンをお送りします」という具合に、全部自動です。
</div>

<div class="script-block">
  <span class="label">営業</span>
  3つ目が、デジタルスタンプカードです。来店するたびにスタンプが貯まって、特典がもらえる。お客様に「また来よう」と思っていただける仕掛けになっています。
</div>

<div class="script-block">
  <span class="label">営業</span>
  これ、お店側でやることは本当に「QRコードを案内する」だけなんです。メッセージの内容も、配信タイミングも、クーポンの出し分けも、全部システムが自動でやります。居酒屋さん・ラーメン店さん・カフェさんなど、業態別に最適化されたシナリオがあらかじめ用意されているので、「何を送ればいいかわからない」という心配もありません。
</div>

<div class="script-block">
  <span class="label">営業</span>
  ちなみに、実績としては累計500店舗以上に導入いただいていて、利用者は80万人を超えています。運営しているDOTZ株式会社は、LINE社の公認コンサルタント「LINE Frontliner」の認定を受けた会社で、累計10億通以上のLINEメッセージ配信の運用実績があります。
</div>

<h3>クロージングトーク</h3>

<div class="callout callout-info">
  <strong>温度感に応じた2段階クロージング</strong><br>
  興味がある → 無料デモ提案。まだ迷っている → 事例資料の送付を提案。必ずネクストステップを設定しましょう。
</div>

<p><strong>パターンA：興味が高い場合（無料デモ提案）</strong></p>

<div class="script-block">
  <span class="label">営業</span>
  ありがとうございます。ちなみに、実際の画面をお見せしながら5分程度でデモをお見せすることもできるんですが、お時間的にはいつ頃がご都合よろしいですか？今週の14時〜16時あたりはいかがでしょう？
</div>

<div class="script-block">
  <span class="label">営業</span>
  デモはオンラインで、画面を共有しながらお見せするだけなので、お気軽に見ていただければ。もちろん、見ていただいた上で「うちには合わないな」と思われたら、それで全然大丈夫ですので。
</div>

<p><strong>パターンB：まだ迷っている場合（資料送付）</strong></p>

<div class="script-block">
  <span class="label">営業</span>
  もちろん、今すぐ決めていただく必要はまったくありません。まずは、導入店舗様の事例と効果データをまとめた資料をお送りさせてください。LINE、メール、どちらがご確認しやすいですか？
</div>

<div class="script-block">
  <span class="label">営業</span>
  資料をご覧いただいた後で、もしご質問があれば改めてお電話させてください。来週の火曜日か水曜日の14時〜16時あたりでご都合の良いお時間はありますか？
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  クロージングでは「いつがいいですか？」とオープンに聞くのではなく、「来週の火曜か水曜の14時〜16時あたりは？」と選択肢を絞って提案しましょう。飲食店のアイドルタイムに合わせた提案が好印象です。
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 5 : 反論対応
     ────────────────────────────────────────────── */
  {
    id: "objection-handling",
    title: "反論対応",
    icon: "Shield",
    content: `
<h3>よくある反論 7パターン</h3>
<p>飲食店オーナーから出やすい反論と、その背景、切り返しトーク、フォローアップをまとめました。大切なのは「反論=興味のサイン」と捉えることです。</p>

<div class="callout callout-info">
  反論は「NO」ではなく「もう少し納得させてほしい」というサインです。落ち着いて共感→切り返し→質問の流れで対応しましょう。
</div>

<!-- 反論 1 -->
<div class="objection-block">
  <div class="objection">「うちは小さい店だから、そういうのは大手向けでしょ」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>個人経営や小規模店舗のオーナーは、ITツール＝大規模チェーン向けという先入観があります。「自分には関係ない」と感じて断ろうとしています。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      おっしゃる通り、最初は大手向けなんじゃないかと思われる方が多いんです。でも実は、マジリピは個人店や小規模のお店にこそ効果が出やすいんです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      なぜかと言うと、大手チェーンさんは自社アプリとか大きなシステムを持てるんですけど、個人店さんはそこまで投資できないですよね。マジリピはLINEを使うので、初期投資も少なく、お客様も使い慣れたLINEで登録できる。むしろ小さいお店ほど「常連さんとの距離が近い」という強みを活かせるんです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      実際、席数20席以下のお店でも導入されて、リピーターが増えている事例がたくさんあります。一度、事例だけでもご覧になりませんか？
    </div>
  </div>
</div>

<!-- 反論 2 -->
<div class="objection-block">
  <div class="objection">「LINE使ってないんだよね」「やり方がよくわからなくて」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>50代以上のオーナーに多い反応。テクノロジーへの苦手意識が根本にあります。本人がLINEを使っていない場合と、LINE公式アカウントの運用がわからない場合の2パターンがあります。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      あ、それ全然大丈夫です。実は、マジリピはオーナー様がLINEの操作をする必要がないんです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      初期設定はすべて弊社が行いますし、運用も完全自動なので、日々LINEを触っていただく必要がありません。お店側でやることは、お客様に「このQRコードを読み取ってください」とご案内するだけ。それだけで、あとは自動的にメッセージやクーポンが届く仕組みになっています。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      しかも弊社は従業員の90%以上がLINEの公式資格を持っているので、わからないことがあればいつでもサポートします。「LINEは苦手だけど導入した」というオーナー様もたくさんいらっしゃいますので、ご安心ください。
    </div>
  </div>
</div>

<!-- 反論 3 -->
<div class="objection-block">
  <div class="objection">「スタッフが対応できないよ」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>飲食店はスタッフの入れ替わりが激しく、新しいオペレーションを教える余裕がないと感じています。「また仕事が増える」という懸念です。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      本当にそうですよね、飲食店のスタッフさんは毎日忙しいですから、新しいことを覚える余裕がないのはよくわかります。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      実はマジリピの場合、スタッフさんに覚えていただくことは1つだけなんです。それは「お会計のときに、こちらのQRコードを読み取ってくださいね、とお客様にお伝えする」ということだけ。新人のアルバイトさんでも、初日から対応できるレベルです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      それ以降のメッセージ配信やクーポン送付は全部自動なので、スタッフさんの手間は一切増えません。むしろ、紙のスタンプカードを渡す手間がなくなるので、オペレーションはシンプルになるくらいです。
    </div>
  </div>
</div>

<!-- 反論 4 -->
<div class="objection-block">
  <div class="objection">「本当に効果あるの？」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>過去にグルメサイトやチラシなどで費用対効果を感じられなかった経験がある。「また無駄金になるのでは」という不安。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      当然のご質問ですよね。過去にいろいろ試されて、あまり効果を感じられなかった経験がおありなのかもしれません。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      具体的な数字でお伝えすると、マジリピを導入された店舗さんの平均リピート率は20%を超えています。さらに、マジリピのメッセージを受け取ったお客様は、受け取っていないお客様に比べて3倍以上の確率で再来店されています。これは実際のA/Bテストで検証されたデータです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      具体的な事例ですと、台湾茶カフェの春水堂さんではLINE友だち15万人を獲得し、売上1,200万円を達成されています。ラーメンチェーンの枡元さんでは前年比120%の売上成長、友だち1.2万人という実績があります。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      もちろんお店の状況によって成果は変わりますが、まずは事例資料を見ていただくだけでも、イメージが湧くと思いますよ。
    </div>
  </div>
</div>

<!-- 反論 5 -->
<div class="objection-block">
  <div class="objection">「費用が心配なんだよね」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>飲食店は利益率が低いビジネスです。「月々いくらかかるのか」「元が取れるのか」が最大の関心事です。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      費用のことは一番気になりますよね、飲食店様は本当に1円単位でコストを見ていらっしゃると思います。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      正直に申し上げると、グルメサイトに月額数万円〜十数万円を払い続けることを考えると、マジリピはかなりコストパフォーマンスが良いと思います。グルメサイトは「新規のお客様を呼ぶ」ことしかできませんが、マジリピは「来てくれたお客様を繰り返し呼ぶ」仕組みです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      リピーターが1組増えるだけで、客単価×来店回数分の売上になりますよね。例えば客単価3,000円のお客様が月に1回多く来てくれるだけで、年間36,000円の売上増。それが10組なら36万円です。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      費用の詳細は、お店の状況に合わせてご説明しますので、まずは具体的にどれくらいの効果が見込めるか、一緒にシミュレーションしてみませんか？
    </div>
  </div>
</div>

<!-- 反論 6 -->
<div class="objection-block">
  <div class="objection">「グルメサイトで十分だから」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>食べログやホットペッパーなど、既存の集客手段で「なんとかなっている」と感じている。新しいものを入れる必要性を感じていません。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      グルメサイトをしっかり活用されているんですね、素晴らしいと思います。実は、マジリピはグルメサイトの代わりではなく、グルメサイトと一緒に使うことでより効果が出るツールなんです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      どういうことかと言うと、グルメサイトは「新規のお客様を呼ぶ」のが得意ですよね。でも、一度来てくれたお客様をリピートさせる機能は弱い。マジリピは、グルメサイト経由で来てくれた新規のお客様を「リピーター化」する仕組みです。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      つまり、グルメサイトで集めたお客様を無駄にしないためのツールなんですね。せっかく掲載費を払って来てもらったお客様が一度きりで終わるのって、もったいないと思いませんか？
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      グルメサイト + マジリピの組み合わせで「新規獲得 → リピーター化」の流れが完成します。グルメサイトの費用対効果もグンと上がりますよ。
    </div>
  </div>
</div>

<!-- 反論 7 -->
<div class="objection-block">
  <div class="objection">「今忙しいんで」</div>
  <div class="objection-why">
    <strong>なぜ言うのか：</strong>本当に忙しいケースと、断り文句として使っているケースの両方があります。飲食店は常に忙しいので、「忙しい＝興味がない」とは限りません。
  </div>
  <div class="objection-response">
    <div class="script-block">
      <span class="label">営業</span>
      大変失礼しました！お忙しいところすみません。15秒だけ、1つだけお伝えさせてください。
    </div>
    <div class="script-block">
      <span class="label">営業</span>
      LINEで飲食店のリピーターを自動で増やすツールを500店舗以上に提供しております。お店の作業はQRコードを案内するだけで、あとは全自動です。お手すきのお時間に、資料だけお送りしてもよろしいですか？
    </div>
  </div>
  <div class="objection-followup">
    <strong>フォローアップ：</strong>
    <div class="script-block">
      <span class="label">営業</span>
      「今忙しい」は多くの場合、タイミングの問題です。「では、いつ頃ならお時間いただけますか？」と聞いて、具体的な曜日と時間帯を確保しましょう。「明日か明後日の14時〜16時あたりはいかがですか？」とアイドルタイムを提案するのがベストです。
    </div>
  </div>
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  すべての反論に共通する鉄則は「否定しない・共感する・事実で返す」です。「いえ、そんなことはありません」はNGワード。「おっしゃる通りです」「そう思われるのは当然です」から始めましょう。
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 6 : 導入事例 & 数値
     ────────────────────────────────────────────── */
  {
    id: "case-studies",
    title: "導入事例 & 数値",
    icon: "BarChart3",
    content: `
<h3>実績サマリー</h3>
<div class="stat-grid">
  <div class="stat-highlight">
    <span class="stat-label">累計導入店舗</span>
    <span class="stat-value">500店舗以上</span>
  </div>
  <div class="stat-highlight">
    <span class="stat-label">累計利用者数</span>
    <span class="stat-value">80万人</span>
  </div>
  <div class="stat-highlight">
    <span class="stat-label">平均リピート率</span>
    <span class="stat-value">20%超</span>
  </div>
  <div class="stat-highlight">
    <span class="stat-label">メッセージ受信者の再来店</span>
    <span class="stat-value">3倍以上</span>
  </div>
</div>

<div class="callout callout-success">
  <strong>この数字を架電で使うときのコツ</strong><br>
  「500店舗以上」は信頼感、「3倍以上の再来店」はインパクトを伝えるのに最適です。最初に「500店舗」で実績を示し、興味を持ったら「3倍」で驚きを与えましょう。
</div>

<h3>春水堂（しゅんすいどう）</h3>
<table>
  <thead>
    <tr><th>項目</th><th>内容</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>業態</strong></td><td>台湾茶カフェ（タピオカミルクティー発祥の店）</td></tr>
    <tr><td><strong>課題</strong></td><td>新規来店客は多いが、一度きりで終わるケースが多い。既存顧客へのアプローチ手段がなかった。</td></tr>
    <tr><td><strong>導入後の施策</strong></td><td>来店時にLINEミニアプリのQRコードを案内。スタンプカード + 来店後の自動フォローメッセージを実施。季節限定メニューの先行案内をLINEで配信。</td></tr>
    <tr><td><strong>LINE友だち数</strong></td><td><strong>15万人</strong>を達成</td></tr>
    <tr><td><strong>売上効果</strong></td><td>LINE経由の売上 <strong>1,200万円</strong>を達成</td></tr>
    <tr><td><strong>成功のポイント</strong></td><td>スタッフのQRコード案内の徹底。季節限定メニューとクーポン配信のタイミング最適化。全自動シナリオにより運用負荷ゼロ。</td></tr>
  </tbody>
</table>

<div class="script-block">
  <span class="label">営業</span>
  春水堂さんの事例をお伝えすると、台湾茶カフェで、タピオカミルクティーで有名なお店なんですけど、マジリピを導入されてLINEの友だちを15万人集められて、LINE経由の売上が1,200万円に達しました。ポイントは、スタッフがお会計のときに「LINEのQRコード読み取ってくださいね」と案内を徹底したこと。たったそれだけで、あとは自動のメッセージ配信で売上が積み上がったんです。
</div>

<h3>ラーメンチェーン 枡元（ますもと）</h3>
<table>
  <thead>
    <tr><th>項目</th><th>内容</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>業態</strong></td><td>ラーメンチェーン（複数店舗展開）</td></tr>
    <tr><td><strong>課題</strong></td><td>ラーメン店特有の「一度食べたら満足」現象。新規客は来るがリピートに繋がりにくい。紙のスタンプカードの紛失率が高い。</td></tr>
    <tr><td><strong>導入後の施策</strong></td><td>紙のスタンプカードをLINEミニアプリのデジタルスタンプカードに移行。トッピング無料クーポンの自動配信。来店3回目以降の顧客にVIP特典を自動付与。</td></tr>
    <tr><td><strong>LINE友だち数</strong></td><td><strong>1.2万人</strong>を達成</td></tr>
    <tr><td><strong>売上効果</strong></td><td>売上 <strong>前年比120%</strong>を達成</td></tr>
    <tr><td><strong>成功のポイント</strong></td><td>ラーメン店に最適化されたシナリオ（来店翌日のお礼→3日後のトッピング無料クーポン→2週間後の再来店促進）。紙のスタンプカードからの移行で顧客データの可視化に成功。</td></tr>
  </tbody>
</table>

<div class="script-block">
  <span class="label">営業</span>
  ラーメンチェーンの枡元さんの例もご紹介しますね。ラーメン店って、お客様は「美味しかったけど、次いつ行こうかな」となかなか思い出してもらえないという課題があったんです。そこでマジリピを導入して、来店翌日に自動でお礼メッセージ、3日後にトッピング無料クーポン、2週間来店がなければ再来店促進メッセージを自動配信したところ、友だち1.2万人、売上前年比120%を達成されました。
</div>

<h3>「3倍以上の再来店」検証データ</h3>
<div class="callout callout-info">
  <strong>A/Bテストの概要</strong><br>
  マジリピのメッセージを受け取ったお客様グループと、受け取っていないお客様グループの再来店率を比較した検証結果です。
</div>

<table>
  <thead>
    <tr><th>グループ</th><th>再来店率</th><th>倍率</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>メッセージ <strong>受信あり</strong>（マジリピ利用者）</td>
      <td>高い再来店率</td>
      <td rowspan="2"><strong>3倍以上</strong></td>
    </tr>
    <tr>
      <td>メッセージ <strong>受信なし</strong>（未利用者）</td>
      <td>低い再来店率</td>
    </tr>
  </tbody>
</table>

<p>このデータが示すのは、<strong>「お客様は忘れているだけ」</strong>ということです。美味しかった、また来たいと思ってくれていても、日常に戻ると忘れてしまう。マジリピのメッセージが「あ、またあのお店行こう」と思い出させるきっかけになり、再来店に繋がっています。</p>

<div class="script-block">
  <span class="label">営業</span>
  実はマジリピで面白いデータがありまして。メッセージを受け取ったお客様と受け取っていないお客様を比較したA/Bテストの結果、メッセージを受け取った方の再来店率が3倍以上だったんです。つまり、お客様は「また来たい」と思ってくれているのに、ただ忘れているだけ。ちょっとしたメッセージ1通が「あ、そうだ、あのお店行こう」に変わるんですね。
</div>

<h3>導入フロー</h3>
<div class="flow-steps">
  <span class="flow-step">① お申込み</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">② 初期設定（DOTZ対応）</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">③ QRコード設置</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">④ 自動運用開始</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">⑤ 効果測定・改善</span>
</div>

<table>
  <thead>
    <tr><th>ステップ</th><th>内容</th><th>お店側の作業</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>① お申込み</strong></td>
      <td>契約手続き・ヒアリング</td>
      <td>業態・メニュー・ターゲット層などをお伝えいただくだけ</td>
    </tr>
    <tr>
      <td><strong>② 初期設定</strong></td>
      <td>LINEミニアプリ・シナリオ設定・スタンプカードデザイン</td>
      <td>なし（すべてDOTZが対応）</td>
    </tr>
    <tr>
      <td><strong>③ QRコード設置</strong></td>
      <td>レジ横・テーブル・メニューにQRコードを設置</td>
      <td>QRコードのPOPを設置するだけ</td>
    </tr>
    <tr>
      <td><strong>④ 自動運用開始</strong></td>
      <td>来店客へのメッセージ自動配信が開始</td>
      <td>スタッフがQRコードを案内するだけ</td>
    </tr>
    <tr>
      <td><strong>⑤ 効果測定・改善</strong></td>
      <td>ダッシュボードで成果確認・シナリオ最適化</td>
      <td>月次レポートを確認（DOTZが改善提案）</td>
    </tr>
  </tbody>
</table>

<div class="script-block">
  <span class="label">営業</span>
  導入の流れもとてもシンプルです。お申込みいただいたら、初期設定はすべて弊社が行います。業態に合わせたシナリオ設定もこちらで完了させます。お店にお届けするのはQRコードのPOPだけ。それをレジ横に置いていただいたら、もう運用スタートです。最初の1か月で友だちが集まり始めて、2〜3か月目から目に見えてリピーターが増えてきます。
</div>

<div class="memo-box">
  <span class="badge">POINT</span>
  導入フローを伝えるときは「お店がやることの少なさ」を強調してください。「初期設定は全部弊社がやります」「届いたQRコードを置くだけ」「あとは自動」の3つを伝えれば、オーナーの不安はかなり和らぎます。
</div>
`,
  },
];
