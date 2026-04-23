export interface ManualSection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export const RAKURAKUMALL_SECTIONS: ManualSection[] = [
  /* ──────────────────────────────────────────────
     Tab 1 : シーン別ガイド
     ────────────────────────────────────────────── */
  {
    id: "scene-guide",
    title: "シーン別ガイド",
    icon: "Compass",
    content: `
<h2>架電シーン別クイックナビ</h2>
<p>架電の流れを4ステップで整理しました。各カードをクリックすると該当セクションにジャンプします。</p>

<div class="callout callout-info">
  <strong>楽天市場出店者への架電ポイント</strong><br>
  楽天出店者はEC運営業務で多忙です。<strong>セール直前・セール期間中の架電は避ける</strong>のが鉄則。<br>
  スーパーSALE・お買い物マラソン開始前1週間は特に忙しいため、イベントカレンダーを事前に確認してください。<br>
  推奨時間帯は <strong>10:00〜12:00</strong> または <strong>14:00〜17:00</strong>（出荷業務の落ち着く時間帯）です。
</div>

<h3>STEP 1：架電前の準備</h3>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="service-overview" data-heading="0">
    <div class="scene-situation">らくらくモールを30秒で説明したい</div>
    <div class="scene-description">楽天市場出店者向けLINE公式アカウント運用代行。友だち獲得→自動シナリオ配信→セール連動で売上最大化。</div>
    <span class="scene-reference">→ サービス概要 > 30秒で説明する</span>
  </a>
  <a class="scene-card scene-link" data-tab="target-needs" data-heading="0">
    <div class="scene-situation">ターゲット出店者の特徴を確認したい</div>
    <div class="scene-description">楽天市場出店者（月商数百万円〜）。店舗運営責任者・EC担当者。食品・アパレル・コスメ・日用品等。</div>
    <span class="scene-reference">→ ターゲット&ニーズ > ターゲットプロファイル</span>
  </a>
  <a class="scene-card scene-link" data-tab="target-needs" data-heading="2">
    <div class="scene-situation">出店者が抱える課題を予習したい</div>
    <div class="scene-description">LINE友だち伸び悩み、レビュー収集の手動限界、セール運用の属人化、広告CPA高騰の5大課題。</div>
    <span class="scene-reference">→ ターゲット&ニーズ > よくある課題5選</span>
  </a>
  <a class="scene-card scene-link" data-tab="case-studies" data-heading="0">
    <div class="scene-situation">実績数値を手元に準備したい</div>
    <div class="scene-description">セール初速+40%、エンゲージメント+25%、配信コスト-30%の効果実績。</div>
    <span class="scene-reference">→ 導入事例 > 実績サマリー</span>
  </a>
</div>

<h3>STEP 2：受付突破</h3>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
    <div class="scene-situation">受付から先に進めない</div>
    <div class="scene-description">EC運営部門・楽天担当者へ繋ぐ4パターン。「楽天市場のLINE活用」は受付にとって判断しにくい用件。</div>
    <span class="scene-reference">→ トークスクリプト > 受付突破フレーズ集</span>
  </a>
  <a class="scene-card scene-link" data-tab="objection-handling" data-heading="6">
    <div class="scene-situation">「今忙しい」と言われた</div>
    <div class="scene-description">EC事業者は常に忙しい。15秒ミニトークで次回アポを確保するテクニック。</div>
    <span class="scene-reference">→ 反論対応 > 今忙しい</span>
  </a>
</div>

<h3>STEP 3：担当者との会話</h3>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="1">
    <div class="scene-situation">担当者に最初に何を話す？</div>
    <div class="scene-description">楽天市場の課題提起（広告CPA高騰・リピーター不足）→共感→LINE運用代行の提案。</div>
    <span class="scene-reference">→ トークスクリプト > オープニングトーク</span>
  </a>
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="3">
    <div class="scene-situation">相手の状況をヒアリングしたい</div>
    <div class="scene-description">現在の楽天売上・LINE友だち数・セール運用体制・レビュー施策を聞き出す質問フロー。</div>
    <span class="scene-reference">→ トークスクリプト > ヒアリングトーク</span>
  </a>
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="4">
    <div class="scene-situation">サービス内容を詳しく説明したい</div>
    <div class="scene-description">LINE運用代行とセール運用BPOのワンストップ提案。5大機能と5フェーズ配信を説明。</div>
    <span class="scene-reference">→ トークスクリプト > 商材説明トーク</span>
  </a>
  <a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
    <div class="scene-situation">「すでにLINE運用してます」と断られた</div>
    <div class="scene-description">セグメント配信・自動化の深さが違う。現状の運用を無料診断するご提案。</div>
    <span class="scene-reference">→ 反論対応 > すでにLINE運用してます</span>
  </a>
</div>

<h3>STEP 4：クロージング</h3>
<div class="scene-cards">
  <a class="scene-card scene-link" data-tab="talk-script" data-heading="5">
    <div class="scene-situation">アポイントを確定させたい</div>
    <div class="scene-description">無料LINE診断・事例資料送付・オンラインデモの3パターンで次のステップを設定。</div>
    <span class="scene-reference">→ トークスクリプト > クロージングトーク</span>
  </a>
  <a class="scene-card scene-link" data-tab="case-studies" data-heading="2">
    <div class="scene-situation">楽天セールの年間スケジュールを伝えたい</div>
    <div class="scene-description">スーパーSALE、お買い物マラソン、ワンダフルデー等の年間カレンダーを共有して緊急性を訴求。</div>
    <span class="scene-reference">→ 導入事例 > 楽天セール年間カレンダー</span>
  </a>
</div>
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
<h2>らくらくモール サービス概要</h2>

<h3>30秒で説明するらくらくモール</h3>
<div class="callout callout-info">
  <strong>エレベーターピッチ</strong><br>
  「らくらくモールは、<strong>楽天市場の出店者様向けにLINE公式アカウントの運用を完全代行するサービス</strong>です。
  購入者を友だちに変え、自動シナリオ配信でリピート購入を促進。さらに楽天セール時の配信運用もワンストップでお任せいただけます。
  LINE Frontliner（国内9名のみ）が監修する<strong>楽天市場に特化したLINE運用ノウハウ</strong>で、LTVの最大化を実現します。」
</div>

<h3>LINE運用代行の5大機能</h3>

<h4>1. 友だち獲得施策</h4>
<p>楽天市場で商品を購入したお客様をLINE公式アカウントの友だちに転換します。購入完了画面やサンクスメールからの誘導設計、友だち追加時のクーポン配布など、<strong>一度きりの購入者を顧客資産に変える</strong>仕組みを構築します。</p>

<h4>2. 自動シナリオ配信</h4>
<p>購入行動に基づいた自動トリガー配信を設定します。</p>
<table>
  <tr><th>商材タイプ</th><th>シナリオ例</th><th>配信タイミング</th></tr>
  <tr><td>消耗品（サプリ・化粧品等）</td><td>「そろそろなくなる頃では？」リマインド</td><td>購入後30日・60日・90日</td></tr>
  <tr><td>アパレル</td><td>コーディネート提案・新作入荷通知</td><td>配送完了後3日・14日</td></tr>
  <tr><td>食品</td><td>レシピ提案・季節商品のご案内</td><td>配送完了後7日・季節変わり目</td></tr>
  <tr><td>日用品・ギフト</td><td>リピート割引・関連商品レコメンド</td><td>購入後45日・記念日前</td></tr>
</table>

<h4>3. セグメント配信</h4>
<p>購入履歴・購入頻度・購入カテゴリに基づいて友だちをセグメント分けし、<strong>一人ひとりに最適なメッセージ</strong>を配信します。一斉配信と比較してクリック率が平均2〜3倍向上します。</p>

<h4>4. イベント連動配信</h4>
<p>楽天市場の各種イベントに連動した配信を自動化します。</p>
<ul>
  <li><strong>スーパーSALE</strong>（3月・6月・9月・12月）</li>
  <li><strong>お買い物マラソン</strong>（毎月）</li>
  <li><strong>ワンダフルデー</strong>（毎月1日）</li>
  <li><strong>5と0のつく日</strong>（5日・10日・15日・20日・25日・30日）</li>
  <li><strong>ポイントバック祭</strong>（年4回）</li>
  <li><strong>ブラックフライデー</strong>（11月）</li>
</ul>

<h4>5. レビュー促進自動化</h4>
<p>商品到着後の最適なタイミングでレビュー依頼メッセージを自動配信。レビュー投稿でクーポンを進呈する仕組みにより、<strong>楽天市場内のレビュー数・評価を効率的に増加</strong>させます。</p>

<h3>セール運用BPOサービス</h3>
<div class="callout callout-warning">
  <strong>楽天市場の鉄則</strong><br>
  「楽天の売上はセールで決まる」— 年間売上の大部分がセール期間に集中します。<br>
  特に<strong>セール開始0〜2時間の初速</strong>がランキングと露出を決定づけ、その後の売上を左右します。
</div>

<h4>初速最大化の5フェーズ配信</h4>
<table>
  <tr><th>フェーズ</th><th>タイミング</th><th>配信内容</th></tr>
  <tr><td><strong>Phase 1</strong></td><td>セール前日</td><td>タイムセール予告・クーポンプレビュー配信</td></tr>
  <tr><td><strong>Phase 2</strong></td><td>00:00（セール開始）</td><td>一斉配信 — セール開始通知・目玉商品案内</td></tr>
  <tr><td><strong>Phase 3</strong></td><td>+30分</td><td>未開封者への追撃配信・リマインド</td></tr>
  <tr><td><strong>Phase 4</strong></td><td>セール期間中</td><td>日替わり特集・在庫僅少通知・ポイント訴求</td></tr>
  <tr><td><strong>Phase 5</strong></td><td>セール終盤</td><td>ラストチャンス訴求・次回イベント予告</td></tr>
</table>

<h4>BPO 4つの完全運用</h4>
<ol>
  <li><strong>配信設計</strong> — カレンダー管理、シナリオ設計、セグメント最適化</li>
  <li><strong>クリエイティブ制作</strong> — メッセージ文面、画像、リッチメニュー作成</li>
  <li><strong>オペレーション配信</strong> — 予約配信、代行配信、リアルタイム監視</li>
  <li><strong>改善</strong> — A/Bテスト、分析レポート、週次改善提案</li>
</ol>

<h3>料金プラン</h3>
<h4>LINE運用代行</h4>
<table>
  <tr><th>プラン</th><th>初期費用</th><th>月額</th><th>主な内容</th></tr>
  <tr><td><strong>Light</strong></td><td>¥250,000</td><td>¥65,000</td><td>友だち獲得施策・基本シナリオ配信</td></tr>
  <tr><td><strong>Standard</strong></td><td>¥350,000</td><td>¥95,000</td><td>Light + セグメント配信・イベント連動</td></tr>
  <tr><td><strong>Pro</strong></td><td>¥500,000〜</td><td>¥220,000〜</td><td>Standard + 専任コンサル・カスタムシナリオ</td></tr>
</table>

<h4>セール運用BPO</h4>
<table>
  <tr><th>項目</th><th>費用</th></tr>
  <tr><td>初期設定</td><td>¥100,000〜¥300,000</td></tr>
  <tr><td>月額運用</td><td>¥50,000〜</td></tr>
</table>

<div class="memo-box">
  <span class="badge">POINT</span><br>
  LINE運用代行とセールBPOはセットでの導入がおすすめ。セット割引の適用が可能です。まずはLightプラン＋セールBPOの組み合わせからスタートし、効果を見ながらアップグレードする提案が有効です。
</div>

<h3>DOTZ株式会社 について</h3>
<table>
  <tr><th>項目</th><th>内容</th></tr>
  <tr><td>事業内容</td><td>LINE公式アカウント専門のマーケティング企業</td></tr>
  <tr><td>認定資格</td><td>LINE Frontliner認定（国内9名のみ）</td></tr>
  <tr><td>受賞歴</td><td>LINE正規取扱代理店「Bronze」受賞</td></tr>
  <tr><td>パートナー</td><td>LINE正規テクノロジーパートナー「ミニアプリ部門」受賞</td></tr>
  <tr><td>所在地</td><td>東京都目黒区青葉台4-4-12 THE N3 2F</td></tr>
</table>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 4 : ターゲット & ニーズ
     ────────────────────────────────────────────── */
  {
    id: "target-needs",
    title: "ターゲット & ニーズ",
    icon: "Target",
    content: `
<h2>ターゲット & ニーズ</h2>

<h3>ターゲットプロファイル</h3>
<table>
  <tr><th>項目</th><th>内容</th></tr>
  <tr><td>対象</td><td>楽天市場出店者（月商 数百万円〜数億円規模）</td></tr>
  <tr><td>決裁者</td><td>店舗運営責任者 / EC事業部長 / マーケティング担当</td></tr>
  <tr><td>業種</td><td>食品・飲料、アパレル・ファッション、コスメ・美容、日用品・雑貨、健康食品・サプリ</td></tr>
  <tr><td>共通の悩み</td><td>楽天内広告費の高騰、リピーター不足、セール依存の売上構造</td></tr>
</table>

<h3>出店者タイプ別アプローチ</h3>

<h4>タイプA：単独店舗型（楽天メイン）</h4>
<div class="callout callout-info">
  <strong>特徴</strong>：楽天市場が売上の大半。RPP（楽天プロモーションプラットフォーム）への依存度が高い。<br>
  <strong>訴求ポイント</strong>：「広告費を抑えながらリピート売上を伸ばす」LINE活用でRPP依存から脱却。<br>
  <strong>キラーフレーズ</strong>：「RPPのCPCが上がり続けていませんか？LINEでリピーターを増やせば広告依存を減らせます」
</div>

<h4>タイプB：複数モール出店型（楽天＋Amazon＋Yahoo!等）</h4>
<div class="callout callout-info">
  <strong>特徴</strong>：複数モール運営で人手が足りない。LINE運用まで手が回らない。<br>
  <strong>訴求ポイント</strong>：「完全代行だから追加の人員不要」。各モール横断の顧客接点としてLINEを活用。<br>
  <strong>キラーフレーズ</strong>：「複数モール運営でお忙しい中、LINE運用は我々が完全代行します。御社の工数はゼロです」
</div>

<h4>タイプC：メーカー直販型</h4>
<div class="callout callout-info">
  <strong>特徴</strong>：自社ブランドの商品を楽天で直販。ブランディングとLTV向上が課題。<br>
  <strong>訴求ポイント</strong>：「ブランドの世界観に合わせたLINEコミュニケーション設計」。購入者との直接的な関係構築。<br>
  <strong>キラーフレーズ</strong>：「御社ブランドのファンをLINEで育てませんか？自動シナリオで購入者がリピーターに変わります」
</div>

<h3>よくある課題5選</h3>

<div class="objection-block">
  <div class="objection">課題1：LINE公式アカウントの友だちが増えない</div>
  <div class="response">
    楽天で購入しても、そのままでは顧客との接点が切れてしまいます。購入導線にLINE友だち追加を組み込むことで、<strong>購入者を「顧客資産」に変える</strong>仕組みが必要です。
  </div>
</div>

<div class="objection-block">
  <div class="objection">課題2：レビュー収集が手動で限界</div>
  <div class="response">
    楽天市場ではレビュー数・評価が検索順位と転換率に直結します。手動でのレビュー依頼は漏れが発生しやすく、<strong>自動化による確実なレビュー依頼</strong>が求められています。
  </div>
</div>

<div class="objection-block">
  <div class="objection">課題3：セール時のオペレーションが属人的</div>
  <div class="response">
    スーパーSALEやマラソンの度に担当者が深夜対応。配信ミスや配信漏れのリスクが高く、<strong>セール運用の仕組み化・外部委託</strong>が急務です。
  </div>
</div>

<div class="objection-block">
  <div class="objection">課題4：配信のセグメント分けができていない</div>
  <div class="response">
    全員に同じメッセージを一斉配信してしまい、ブロック率が上昇。購入履歴・頻度に基づく<strong>セグメント配信でブロック率を抑えつつCV率を向上</strong>させる必要があります。
  </div>
</div>

<div class="objection-block">
  <div class="objection">課題5：楽天内広告のCPAが高騰</div>
  <div class="response">
    RPP（楽天プロモーションプラットフォーム）のCPC入札競争が激化し、広告費が膨らむ一方。<strong>LINEによるリピート施策で新規広告依存を低減</strong>する戦略が必要です。
  </div>
</div>

<h3>ニーズヒアリング質問集</h3>
<table>
  <tr><th>テーマ</th><th>質問例</th><th>狙い</th></tr>
  <tr><td>売上状況</td><td>「楽天市場の月商はどのくらいですか？」</td><td>規模感の把握・プラン提案の根拠</td></tr>
  <tr><td>LINE活用</td><td>「LINE公式アカウントはお持ちですか？友だち数はどのくらいですか？」</td><td>現状把握・伸びしろの確認</td></tr>
  <tr><td>リピート率</td><td>「リピート購入の割合はどのくらいですか？」</td><td>LTV課題の特定</td></tr>
  <tr><td>セール運用</td><td>「スーパーSALEやマラソン時の配信はどなたが対応されていますか？」</td><td>属人化・負荷の確認</td></tr>
  <tr><td>レビュー</td><td>「レビュー収集は何か施策をされていますか？」</td><td>自動化ニーズの確認</td></tr>
  <tr><td>広告費</td><td>「RPPやクーポンアドバンスの月間予算はどのくらいですか？」</td><td>広告費高騰の痛みを引き出す</td></tr>
  <tr><td>競合</td><td>「同ジャンルの競合店舗と比較して、どこに課題を感じていますか？」</td><td>差別化ポイントの把握</td></tr>
</table>

<div class="memo-box">
  <span class="badge">検知ポイント</span><br>
  以下のキーワードが出たら高確度見込み客：<br>
  「RPPのCPCが上がっている」「セールの度に徹夜」「LINE作ったけど放置」「レビューが増えない」「リピーターが少ない」「広告費を抑えたい」
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
<p>このスクリプトを上から順に読むだけで、受付突破からアポイント獲得まで完結します。楽天市場出店者への提案の流れを一気にマスターしましょう。</p>

<div class="callout callout-info">
  <strong>楽天出店者への架電注意</strong><br>
  セール直前・セール期間中の架電は避けてください。スーパーSALE・お買い物マラソン開始前1週間は特に多忙です。<br>
  推奨時間帯：<strong>10:00〜12:00</strong>、<strong>14:00〜17:00</strong>（出荷業務の落ち着く時間帯）
</div>

<h3>Phase 1：受付突破（〜30秒）</h3>

<div class="script-block">
<span class="label">営業</span>
お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
楽天市場のLINE公式アカウント活用について、EC運営のご担当者様にご案内したいことがございまして、お繋ぎいただけますでしょうか。
</div>

<div class="script-block">
<span class="label">相手</span>
「営業のお電話ですか？」

<span class="label">営業</span>
いえ、楽天市場のLINE連携に関する情報提供のお電話です。EC運営のご担当者様にお取り次ぎいただけますでしょうか。
</div>

<div class="script-block">
<span class="label">相手</span>
「担当者は今いないんですが…」

<span class="label">営業</span>
承知いたしました。お戻りの時間を教えていただけますか？改めてお電話いたします。
</div>

<div class="callout callout-warning">
  <strong>突破できない場合</strong><br>
  名前・部署名・戻り時間を必ず確認。「楽天市場のLINE活用」は受付にとって判断しにくい用件のため、担当者に繋がりやすい。
</div>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
  <span class="scene-reference">→ 詳しい受付突破パターンは「トークスクリプト > 受付突破フレーズ集」へ</span>
</a>

<h3>Phase 2：オープニング（〜1分）</h3>

<div class="script-block">
<span class="label">営業</span>
お忙しいところありがとうございます。DOTZ株式会社の○○と申します。
弊社はLINE Frontliner（国内9名のみの認定資格者）が監修する、楽天市場出店者様専門のLINE運用代行サービスを提供しております。

<span class="label">営業</span>
突然のお電話で恐縮ですが、1点だけ確認させてください。
御社の楽天店舗で、RPPなどの広告費が年々上がっているのに、リピーター比率がなかなか伸びない…というお悩みはございませんか？

<span class="label">相手</span>
（「まあ、確かに…」「広告費は上がってますね」等の反応）

<span class="label">営業</span>
ありがとうございます。実は今、楽天出店者様の間で「広告で獲得した新規を、LINEで自動的にリピーターに育てる」という手法が急速に広がっています。
弊社はこのLINE運用を完全代行しておりまして、御社側の追加工数はゼロです。
3分だけお時間をいただけますか？
</div>

<div class="callout callout-info">
  <strong>30秒短縮版</strong>（相手が忙しそうな場合）<br>
  「楽天出店者様向けにLINE運用を完全代行するサービスです。広告で獲った新規をリピーターに変えます。月額6.5万円から。事例資料をお送りするだけでも構いませんが、いかがでしょうか？」
</div>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="1">
  <span class="scene-reference">→ 詳しいオープニングは「トークスクリプト > オープニングトーク」へ</span>
</a>

<h3>Phase 3：ヒアリング（〜2分）</h3>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。御社に最適なご提案をするために、いくつか確認させてください。

<span class="label">営業</span>
① 楽天市場での月商はどのくらいの規模ですか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
ありがとうございます。② LINE公式アカウントはお持ちですか？友だち数はどのくらいですか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
なるほど。③ リピート購入の割合はどのくらいですか？2回目以降の購入が売上全体の何割くらい、という感覚で構いません。

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
④ スーパーSALEやお買い物マラソンの時の配信は、どなたが対応されていますか？深夜の配信もご担当ですか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
⑤ レビュー収集は何か施策をされていますか？
</div>

<div class="memo-box">
  <span class="badge">検知ポイント — 提案の力点を変える</span><br>
  ・LINE友だち1,000人以下 → <strong>友だち獲得施策</strong>を強調<br>
  ・リピート率20%以下 → <strong>自動シナリオ配信</strong>の効果を訴求<br>
  ・セール配信を1人で対応 → <strong>セールBPOサービス</strong>の必要性を訴求<br>
  ・レビュー施策なし → <strong>レビュー自動化</strong>の価値を訴求
</div>

<a class="scene-card scene-link" data-tab="target-needs" data-heading="3">
  <span class="scene-reference">→ 詳しいヒアリング質問は「ターゲット&ニーズ > ニーズヒアリング質問集」へ</span>
</a>

<h3>Phase 4：商材説明（〜2分）</h3>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。お伺いした内容を踏まえて、2つのサービスをご紹介します。

<span class="label">営業</span>
まず1つ目が「LINE運用代行」です。
楽天で購入されたお客様をLINE友だちに変え、購入履歴に基づいた自動メッセージでリピート購入を促進します。

例えば消耗品なら「そろそろなくなる頃では？」というリマインド、
アパレルなら購入商品に合うコーディネート提案を自動で配信します。
すべて弊社が設計・運用しますので、御社の工数はゼロです。

<span class="label">営業</span>
2つ目が「セール運用BPO」です。
スーパーSALEやマラソンの配信を完全代行します。

セール開始0時の一斉配信、30分後の未開封者追撃、期間中の日替わり配信、
終盤のラストチャンス配信まで、5フェーズで初速を最大化します。
セール時の深夜対応や配信ミスのリスクから、御社を完全に解放します。

<span class="label">相手</span>
（「それは助かりますね」「具体的にはいくらくらい？」等の反応）

<span class="label">営業</span>
LINE運用代行はLightプランで月額6.5万円から、セールBPOは月額5万円からです。
セットでのご導入で割引もございますので、まずは御社の状況に合わせたプランをご提案させてください。
</div>

<a class="scene-card scene-link" data-tab="service-overview" data-heading="1">
  <span class="scene-reference">→ 詳しいサービス内容は「サービス概要 > LINE運用代行の5大機能」へ</span>
</a>

<h3>Phase 5：反論が出たら</h3>

<div class="script-block">
<span class="label">相手</span>
「すでにLINE運用してます」

<span class="label">営業</span>
素晴らしいですね。ちなみに一斉配信だけでなく、購入履歴に基づくセグメント配信や自動シナリオまで運用されていますか？
多くの出店者様が一斉配信止まりなんです。無料診断で改善ポイントをお出しできますが、いかがですか？
</div>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
  <span class="scene-reference">→ 詳しい切り返しは「反論対応 > すでにLINE運用してます」へ</span>
</a>

<div class="script-block">
<span class="label">相手</span>
「費用対効果が見えない」

<span class="label">営業</span>
おっしゃる通りです。弊社の実績ではセール初速+40%、エンゲージメント+25%の効果が出ています。
御社のデータで無料シミュレーションをお作りしますので、具体的なROIを見てからご判断いただけませんか？
</div>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="2">
  <span class="scene-reference">→ 詳しい切り返しは「反論対応 > 費用対効果が見えない」へ</span>
</a>

<div class="script-block">
<span class="label">相手</span>
「楽天のコンサルに任せてます」

<span class="label">営業</span>
楽天ECCさんは楽天モール内施策のプロフェッショナルです。一方、LINEは楽天モール外の別チャネルですので、ECCさんのサポート範囲とは別領域になります。
実際、ECCさんと弊社を併用されている出店者様が増えています。併用で効果を最大化できます。
</div>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="3">
  <span class="scene-reference">→ 詳しい切り返しは「反論対応 > 楽天のコンサルに任せてます」へ</span>
</a>

<div class="script-block">
<span class="label">相手</span>
「予算がない」

<span class="label">営業</span>
Lightプランなら月額6.5万円からスタートできます。RPP広告費の一部をLINE運用に振り替えるだけでも、リピート売上の底上げでトータルROIが改善するケースが多いんです。
まずは無料の効果シミュレーションで、御社の場合のROIをお出しします。
</div>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="4">
  <span class="scene-reference">→ 詳しい切り返しは「反論対応 > 予算がない」へ</span>
</a>

<div class="memo-box">
  <span class="badge">POINT</span><br>
  反論が出ても慌てない。簡潔に切り返してクロージングに進む。詳しい切り返しパターンは反論対応タブを参照。
</div>

<h3>Phase 6：クロージング（〜1分）</h3>

<div class="callout callout-success">
  <strong>パターンA：興味が高い場合</strong>
</div>

<div class="script-block">
<span class="label">営業</span>
ぜひ一度、御社の楽天店舗のLINE活用状況を無料で診断させてください。
現在の友だち数や配信内容を分析して、改善ポイントと想定効果をレポートにまとめます。
30分のオンラインお打ち合わせで完了します。
今週か来週で、30分ほどお時間をいただけるご都合はいかがでしょうか？
</div>

<div class="callout callout-info">
  <strong>パターンB：まだ迷っている場合</strong>
</div>

<div class="script-block">
<span class="label">営業</span>
同業種の楽天出店者様で、LINE活用でリピート率が大きく改善した事例をまとめた資料がございます。
まずはこちらをお送りして、ご覧いただいた上で改めてお電話させていただくのはいかがでしょうか？
メールアドレスをお伺いしてもよろしいですか？
</div>

<div class="script-block">
<span class="label">営業</span>
（緊急性の訴求）
ちなみに、次の楽天スーパーSALE（○月開催）に間に合わせるには、最低でも2ヶ月前からの準備が必要です。
逆算すると、今月中にはキックオフできると理想的なスケジュールになります。
</div>

<div class="memo-box">
  <span class="badge">必須アクション</span><br>
  必ず次回接点を確定させる。「検討します」で終わらせない。<br>
  「資料をお送りしますので、届いた翌日にお電話させていただいてもよろしいですか？」
</div>

<a class="scene-card scene-link" data-tab="case-studies" data-heading="2">
  <span class="scene-reference">→ セール日程の確認は「導入事例 > 楽天セール年間カレンダー」へ</span>
</a>

<h3>電話終了後のアクション</h3>

<div class="callout callout-warning">
  <strong>架電直後チェックリスト</strong><br>
  ☐ ヒアリング内容をCRMに記録（楽天月商・LINE友だち数・セール体制・反応温度）<br>
  ☐ 資料送付は即日対応（当日中にメール送信）<br>
  ☐ 次回コール日をカレンダーに登録<br>
  ☐ 次のセールイベント日程を確認し、逆算スケジュールを把握<br>
  ☐ 反応メモを記録（興味の度合い・気になっていたポイント・次回の話題）
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 5 : トークスクリプト
     ────────────────────────────────────────────── */
  {
    id: "talk-script",
    title: "トークスクリプト",
    icon: "MessageSquare",
    content: `
<h2>トークスクリプト</h2>

<h3>受付突破フレーズ集</h3>

<h4>パターン1：直接型</h4>
<div class="script-block">
<span class="label">営業</span>
お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
楽天市場のLINE公式アカウント活用について、EC運営のご担当者様にご案内したいことがございまして、お繋ぎいただけますでしょうか。
</div>

<h4>パターン2：情報提供型</h4>
<div class="script-block">
<span class="label">営業</span>
お世話になっております。DOTZ株式会社の○○です。
楽天市場の出店者様向けに、セール時のLINE配信で初速売上を40%向上させた事例をご案内しておりまして、
ネットショップのご担当者様はいらっしゃいますでしょうか。
</div>

<h4>パターン3：業界トレンド型</h4>
<div class="script-block">
<span class="label">営業</span>
お忙しいところ失礼いたします。DOTZの○○です。
最近、楽天市場でRPPの入札競争が激化しておりまして、広告費を抑えながらリピート売上を伸ばす方法について
EC事業のご担当者様にお話ししたいのですが、お繋ぎいただけますか。
</div>

<h4>パターン4：紹介型</h4>
<div class="script-block">
<span class="label">営業</span>
お世話になっております。DOTZの○○です。
同じ○○（業種）の楽天出店者様からご紹介をいただきまして、LINE活用の件でお電話しました。
店舗運営のご担当者様はご在席でしょうか。
</div>

<div class="memo-box">
  <span class="badge">POINT</span><br>
  「楽天市場」「LINE」「EC運営」というキーワードを使うと、受付が自分では判断できないためEC担当者に繋ぎやすい。「営業のお電話ですか？」と聞かれたら「いえ、楽天市場のLINE連携に関する情報提供のお電話です」と返す。
</div>

<h3>オープニングトーク</h3>

<div class="script-block">
<span class="label">営業</span>
お忙しいところありがとうございます。DOTZ株式会社の○○と申します。
弊社はLINE Frontliner（国内9名のみの認定資格者）が監修する、楽天市場出店者様専門のLINE運用代行サービスを提供しております。

<span class="label">営業</span>
突然のお電話で恐縮ですが、1点だけ確認させてください。
御社の楽天店舗で、RPPなどの広告費が年々上がっているのに、リピーター比率がなかなか伸びない…というお悩みはございませんか？

<span class="label">相手</span>
（「まあ、確かに…」「広告費は上がってますね」等の反応）

<span class="label">営業</span>
ありがとうございます。実は今、楽天出店者様の間で「広告で獲得した新規を、LINEで自動的にリピーターに育てる」という手法が急速に広がっています。
弊社はこのLINE運用を完全代行しておりまして、御社側の追加工数はゼロです。
もしよろしければ、3分だけお時間をいただけますか？
</div>

<h3>オープニング 30秒短縮版</h3>
<div class="callout callout-warning">
  <strong>使うタイミング</strong>：相手が明らかに忙しそうな時、「手短にお願いします」と言われた時
</div>

<div class="script-block">
<span class="label">営業</span>
DOTZの○○です。30秒だけお時間ください。
楽天出店者様向けに、LINE公式アカウントの運用を完全代行するサービスです。
広告で獲った新規を、LINEの自動配信でリピーターに変えます。
御社の工数ゼロ、月額6.5万円からです。
事例資料をお送りするだけでも構いませんが、いかがでしょうか？
</div>

<h3>ヒアリングトーク</h3>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。御社に最適なご提案をするために、いくつか確認させてください。

<span class="label">営業</span>
まず、楽天市場での月商はどのくらいの規模でいらっしゃいますか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
ありがとうございます。LINE公式アカウントは現在お持ちですか？もしお持ちでしたら、友だち数はどのくらいですか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
なるほど。リピート購入の割合はどのくらいですか？例えば2回目以降の購入が売上全体の何割くらい、という感覚で構いません。

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
ちなみに、スーパーSALEやお買い物マラソンの時の配信作業は、どなたが対応されていますか？深夜の配信もご担当ですか？

<span class="label">相手</span>
（回答）

<span class="label">営業</span>
レビュー収集については、何か施策をされていますか？手動で対応されていますか？
</div>

<div class="memo-box">
  <span class="badge">検知ポイント</span><br>
  ヒアリング中に以下の回答が出たら、具体的な提案に踏み込むチャンス：<br>
  ・LINE友だち数が1,000人以下 → 友だち獲得施策を強調<br>
  ・リピート率20%以下 → 自動シナリオ配信の効果を訴求<br>
  ・セール配信を1人で対応 → BPOサービスの必要性を訴求<br>
  ・レビュー施策なし → レビュー自動化の価値を訴求
</div>

<h3>商材説明トーク</h3>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。お伺いした内容を踏まえて、2つのサービスをご紹介します。

<span class="label">営業</span>
まず1つ目が「LINE運用代行」です。
楽天で購入されたお客様をLINE友だちに変え、購入履歴に基づいた自動メッセージで
リピート購入を促進します。

例えば消耗品なら「そろそろなくなる頃では？」というリマインド、
アパレルなら購入商品に合うコーディネート提案を自動で配信します。
すべて弊社が設計・運用しますので、御社の工数はゼロです。

<span class="label">営業</span>
2つ目が「セール運用BPO」です。
スーパーSALEやマラソンの配信を完全代行します。
セール開始0時の一斉配信、30分後の未開封者追撃、期間中の日替わり配信、
終盤のラストチャンス配信まで、5フェーズで初速を最大化します。

セール時の深夜対応や配信ミスのリスクから、御社を完全に解放します。

<span class="label">相手</span>
（「それは助かりますね」「具体的にはいくらくらい？」等の反応）

<span class="label">営業</span>
LINE運用代行はLightプランで月額6.5万円から、
セールBPOは月額5万円からです。
セットでのご導入で割引もございますので、まずは御社の状況に合わせたプランをご提案させてください。
</div>

<h3>クロージングトーク</h3>

<h4>パターン1：無料LINE診断</h4>
<div class="script-block">
<span class="label">営業</span>
ぜひ一度、御社の楽天店舗のLINE活用状況を無料で診断させてください。
現在の友だち数や配信内容を分析して、改善ポイントと想定効果をレポートにまとめます。
診断は完全無料で、30分のオンラインお打ち合わせで完了します。
今週か来週で、30分ほどお時間をいただけるご都合はいかがでしょうか？
</div>

<h4>パターン2：事例資料送付</h4>
<div class="script-block">
<span class="label">営業</span>
同じ○○（業種）の楽天出店者様で、LINE活用でリピート率が大きく改善した事例をまとめた資料がございます。
まずはこちらをお送りして、ご覧いただいた上で改めてお電話させていただくのはいかがでしょうか？
メールアドレスをお伺いしてもよろしいですか？
</div>

<h4>パターン3：オンラインデモ</h4>
<div class="script-block">
<span class="label">営業</span>
実際の管理画面と配信イメージを15分のオンラインデモでお見せできます。
「自分の店舗だったらどう使えるか」が具体的にイメージできますので、
ぜひ一度ご覧いただけませんか？ご都合の良い日時を教えていただけますか？
</div>

<div class="memo-box">
  <span class="badge">POINT</span><br>
  クロージングでは必ず<strong>次のアクション（日時）を確定</strong>させる。「検討します」で終わらせない。<br>
  「資料をお送りしますので、届いた翌日にお電話させていただいてもよろしいですか？」と次回接点を必ず設定する。
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 6 : 反論対応
     ────────────────────────────────────────────── */
  {
    id: "objection-handling",
    title: "反論対応",
    icon: "Shield",
    content: `
<h2>反論対応集</h2>
<p>楽天市場出店者からよく返ってくる7つの反論と、それに対する切り返しトークです。</p>

<h3>「すでにLINE運用してます」</h3>
<div class="objection-block">
  <div class="objection">🗣 「うちはもうLINE公式アカウントを運用してますので」</div>
  <div class="response">
    <p>素晴らしいですね！LINE運用にすでに取り組まれているのは非常に良いことです。</p>
    <p>ただ、多くの楽天出店者様が「一斉配信だけ」になっていて、<strong>購入履歴に基づくセグメント配信や自動シナリオ</strong>までは手が回っていないケースが非常に多いんです。</p>
    <p>御社の現在の配信、<strong>無料で診断</strong>させていただくことも可能です。セグメント化するだけでクリック率が2〜3倍になった事例もありますが、ご興味ありませんか？</p>
  </div>
</div>
<div class="script-block">
<span class="label">営業</span>
「ちなみに現在、どのような配信をされていますか？一斉配信がメインですか、それともセグメント別ですか？」
→ 一斉配信の場合：「セグメント配信に切り替えるだけでも大きく改善できます。無料診断で具体的な改善案をお出しします」
→ セグメント配信の場合：「素晴らしいですね。それなら自動シナリオの部分で、さらに効率化できるポイントがあるかもしれません」
</div>

<h3>「セール運用は自社でやれてます」</h3>
<div class="objection-block">
  <div class="objection">🗣 「セールの配信は社内でやってるので大丈夫です」</div>
  <div class="response">
    <p>自社で運用されているのは素晴らしいですね。</p>
    <p>ただ、多くの出店者様から「セールの度に担当者が深夜対応」「配信ミスが怖い」「担当者が休んだ時にオペレーションが回らない」というお声をいただいています。</p>
    <p>BPOをご活用いただくと、<strong>空いたリソースを商品企画や仕入れなどの戦略業務に集中</strong>できます。属人化リスクの解消にもなります。</p>
  </div>
</div>
<div class="script-block">
<span class="label">営業</span>
「ちなみに、スーパーSALE時の0時配信は、どなたがご対応されていますか？」
→ 特定の1人が対応：「もしその方がお休みされた場合のバックアップ体制はありますか？BPOなら属人化リスクをゼロにできます」
</div>

<h3>「費用対効果が見えない」</h3>
<div class="objection-block">
  <div class="objection">🗣 「効果があるのかどうか分からないので…」</div>
  <div class="response">
    <p>おっしゃる通り、効果が見えないまま投資するのは難しいですよね。</p>
    <p>弊社の実績では、LINE運用代行とセールBPOの導入で以下の効果が出ています：</p>
    <ul>
      <li><strong>配信コスト -30%</strong>（セグメント配信によるムダ配信の削減）</li>
      <li><strong>エンゲージメント +25%</strong>（開封率・クリック率・CVRの改善）</li>
      <li><strong>セール初速 +40%</strong>（5フェーズ配信による初動売上の向上）</li>
    </ul>
    <p>まずは<strong>御社のデータで効果シミュレーション</strong>を無料でお作りします。具体的な数字を見てからご判断いただけませんか？</p>
  </div>
</div>

<h3>「楽天のコンサルに任せてます」</h3>
<div class="objection-block">
  <div class="objection">🗣 「楽天のECコンサルタントに相談してるので」</div>
  <div class="response">
    <p>楽天ECCさんのサポートを受けられているんですね。</p>
    <p>ECCさんは楽天モール内の施策（RPP、クーポン、ページ最適化等）のプロフェッショナルです。一方、<strong>LINE運用は楽天モール外のチャネル</strong>ですので、ECCさんのサポート範囲とは別領域になります。</p>
    <p>楽天内施策（ECC担当）× LINE外部チャネル施策（弊社担当）の<strong>併用で効果を最大化</strong>されている出店者様が増えています。</p>
  </div>
</div>
<div class="script-block">
<span class="label">営業</span>
「楽天ECCさんは楽天内の施策に強みがありますが、LINEは別チャネルです。実際、ECCさんと弊社を併用されている出店者様が多いんです。広告で獲得した新規をLINEでリピーターに育てる——このサイクルを回すのが弊社の役割です」
</div>

<h3>「予算がない」</h3>
<div class="objection-block">
  <div class="objection">🗣 「今は予算的に厳しいです」</div>
  <div class="response">
    <p>ご予算の制約は承知しております。</p>
    <p>Lightプランなら<strong>月額6.5万円</strong>からスタートできます。これは楽天内のRPP広告費と比較しても、非常にコストパフォーマンスが高い施策です。</p>
    <p>例えば、RPPで月10万円使っている場合、そのうち3〜5万円をLINE運用に振り替えるだけでも、リピート売上の底上げで<strong>トータルROIが改善</strong>するケースが多いです。</p>
    <p>まずは無料の効果シミュレーションで、御社の場合のROIを具体的にお出しします。</p>
  </div>
</div>

<h3>「検討します」</h3>
<div class="objection-block">
  <div class="objection">🗣 「一度社内で検討してからまた連絡します」</div>
  <div class="response">
    <p>ありがとうございます。ぜひご検討ください。</p>
    <p>検討の参考になる<strong>事例資料とシミュレーションレポート</strong>をお送りさせていただきます。</p>
    <p>ちなみに、次の楽天スーパーSALE（○月開催）に間に合わせるには、<strong>最低でも2ヶ月前からの準備</strong>が必要です。逆算すると、○月中にはキックオフできると理想的なスケジュールになります。</p>
  </div>
</div>
<div class="script-block">
<span class="label">営業</span>
「資料をお送りしますので、届いた翌日（○曜日）にお電話させていただいてもよろしいですか？5分で要点だけご説明します」
→ 必ず次回の接点日時を確定させる
</div>

<h3>「今忙しい」</h3>
<div class="objection-block">
  <div class="objection">🗣 「今ちょっと忙しいので」</div>
  <div class="response">
    <p>お忙しいところ申し訳ございません。15秒だけお伝えさせてください。</p>
    <p>「<strong>楽天出店者様向けに、LINE運用を完全代行するサービス</strong>です。セール配信の深夜対応も全てお任せいただけます。詳しい資料をメールでお送りしてもよろしいですか？」</p>
    <p>→ メールアドレスを聞いて資料送付 → 翌日フォローコール</p>
  </div>
</div>
<div class="script-block">
<span class="label">営業</span>
「15秒で結構です。楽天のセール配信を完全代行するサービスです。資料だけお送りしてもよろしいですか？」
→ OKなら：「ありがとうございます。明日お電話させていただいてもよろしいですか？」
→ NGなら：「承知しました。いつ頃でしたらお時間いただけそうですか？」
</div>
`,
  },

  /* ──────────────────────────────────────────────
     Tab 7 : 導入事例 & 数値
     ────────────────────────────────────────────── */
  {
    id: "case-studies",
    title: "導入事例 & 数値",
    icon: "BarChart3",
    content: `
<h2>導入事例 & 数値</h2>

<h3>実績サマリー</h3>
<div class="stat-grid">
  <div class="stat-highlight">
    <span class="stat-label">セール初速</span>
    +40%
  </div>
  <div class="stat-highlight">
    <span class="stat-label">エンゲージメント</span>
    +25%
  </div>
  <div class="stat-highlight">
    <span class="stat-label">配信コスト</span>
    -30%
  </div>
  <div class="stat-highlight">
    <span class="stat-label">導入期間</span>
    最短1ヶ月
  </div>
</div>

<div class="callout callout-success">
  <strong>効果の内訳</strong><br>
  ・<strong>セール初速 +40%</strong>：5フェーズ配信によるセール開始直後の売上向上<br>
  ・<strong>エンゲージメント +25%</strong>：セグメント配信による開封率・クリック率・CVRの総合改善<br>
  ・<strong>配信コスト -30%</strong>：セグメント配信でムダ配信を削減、ブロック率低下によるリーチ単価改善
</div>

<h3>セール運用の効果目標</h3>
<table>
  <tr><th>指標</th><th>導入前</th><th>導入後（目標）</th><th>改善幅</th></tr>
  <tr><td>セール初日売上</td><td>基準値</td><td>基準値 × 1.4</td><td><strong>+40%</strong></td></tr>
  <tr><td>配信開封率</td><td>15〜20%</td><td>25〜35%</td><td><strong>+10〜15pt</strong></td></tr>
  <tr><td>クリック率（CTR）</td><td>3〜5%</td><td>6〜10%</td><td><strong>+3〜5pt</strong></td></tr>
  <tr><td>配信ブロック率</td><td>5〜8%</td><td>2〜3%</td><td><strong>-3〜5pt</strong></td></tr>
  <tr><td>リピート購入率</td><td>15〜20%</td><td>25〜35%</td><td><strong>+10〜15pt</strong></td></tr>
  <tr><td>レビュー収集率</td><td>1〜3%</td><td>5〜8%</td><td><strong>+4〜5pt</strong></td></tr>
</table>

<h3>楽天セール年間カレンダー</h3>
<div class="callout callout-warning">
  <strong>なぜカレンダーが重要か</strong><br>
  楽天市場の年間売上の大半がセール期間に集中します。各イベントに合わせた配信計画を事前に準備することが成功の鍵です。<br>
  <strong>「セールに間に合わせるには2ヶ月前から準備が必要」</strong>——この緊急性を訴求に活用してください。
</div>

<table>
  <tr><th>イベント名</th><th>頻度</th><th>特徴</th></tr>
  <tr><td><strong>スーパーSALE</strong></td><td>年4回（3月・6月・9月・12月）</td><td>楽天最大のイベント。半額以下商品必須。ランキング争い激化</td></tr>
  <tr><td><strong>お買い物マラソン</strong></td><td>毎月</td><td>買い回りでポイント倍率UP。複数店舗購入を促進</td></tr>
  <tr><td><strong>ワンダフルデー</strong></td><td>毎月1日</td><td>全ショップポイント3倍。月初の販促チャンス</td></tr>
  <tr><td><strong>5と0のつく日</strong></td><td>月6回</td><td>楽天カード利用でポイント5倍。高頻度の販促機会</td></tr>
  <tr><td><strong>ポイントバック祭</strong></td><td>年4回</td><td>ポイント還元キャンペーン。お得感の訴求に最適</td></tr>
  <tr><td><strong>ブラックフライデー</strong></td><td>年1回（11月）</td><td>年末商戦の前哨戦。新規獲得のチャンス</td></tr>
  <tr><td><strong>年末年始セール</strong></td><td>年1回（12月〜1月）</td><td>年間最大の商戦期。ギフト需要が集中</td></tr>
  <tr><td><strong>スマホ限定</strong></td><td>常時</td><td>スマホユーザー限定ポイントUP。LINE配信と好相性</td></tr>
</table>

<h3>導入フロー</h3>
<div class="flow-steps">
  <span class="flow-step">① ヒアリング</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">② LINE設計</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">③ シナリオ構築</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">④ 運用開始</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">⑤ 月次レポート</span>
</div>

<table>
  <tr><th>フェーズ</th><th>期間</th><th>内容</th><th>お客様の負担</th></tr>
  <tr><td><strong>① ヒアリング</strong></td><td>1週間</td><td>現状分析・課題ヒアリング・目標設定</td><td>60分のオンライン打合せ</td></tr>
  <tr><td><strong>② LINE設計</strong></td><td>2週間</td><td>アカウント設計・友だち獲得導線設計・リッチメニュー制作</td><td>デザイン確認のみ</td></tr>
  <tr><td><strong>③ シナリオ構築</strong></td><td>2〜3週間</td><td>自動配信シナリオ設定・セグメント設計・イベント連動設定</td><td>商品情報の共有</td></tr>
  <tr><td><strong>④ 運用開始</strong></td><td>—</td><td>配信スタート・初回イベント対応</td><td>確認・承認のみ</td></tr>
  <tr><td><strong>⑤ 月次レポート</strong></td><td>毎月</td><td>効果測定・改善提案・次月計画策定</td><td>30分の月次MTG</td></tr>
</table>

<div class="callout callout-success">
  <strong>導入のしやすさ</strong><br>
  ・お客様側の負担は<strong>ヒアリング（60分）＋月次MTG（30分）</strong>のみ<br>
  ・設計・構築・運用・改善すべてDOTZが代行<br>
  ・最短1ヶ月、標準2ヶ月で運用開始可能
</div>

<div class="memo-box">
  <span class="badge">営業トーク用</span><br>
  「次のスーパーSALEに間に合わせるなら、○月中のキックオフが必要です」——<strong>直近のセールイベントを逆算して緊急性を訴求</strong>するのが最も効果的なクロージング材料です。
</div>
`,
  },
];
