export interface ManualSection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export const KARITORUCHAT_SECTIONS: ManualSection[] = [
  // ──────────────────────────────────────────
  // Tab 1: シーン別ガイド
  // ──────────────────────────────────────────
  {
    id: "scene-guide",
    title: "シーン別ガイド",
    icon: "Compass",
    content: `
<h2>シーン別クイックガイド</h2>
<p>架電前の準備からクロージングまで、場面ごとに必要な情報にすぐアクセスできます。<br>カードをクリックすると該当セクションに移動します。</p>

<h3>STEP 1: 架電前の準備</h3>

<a class="scene-card scene-link" data-tab="service-overview" data-heading="0">
  <div class="scene-situation">カリトルチャットを30秒で説明したい</div>
  <div class="scene-description">完全成果報酬型のLINE運用代行。離脱防止→LINE誘導→チャットボット→プッシュ配信でCV増加。初期・月額0円。</div>
  <span class="scene-reference">→ サービス概要 > 30秒で説明する</span>
</a>

<a class="scene-card scene-link" data-tab="target-needs" data-heading="0">
  <div class="scene-situation">ターゲット企業の特徴を確認したい</div>
  <div class="scene-description">EC年商1億円以上、広告運用担当者/マーケ責任者。アパレル・D2C・化粧品・健康食品等。</div>
  <span class="scene-reference">→ ターゲット&ニーズ > ターゲットプロファイル</span>
</a>

<a class="scene-card scene-link" data-tab="target-needs" data-heading="1">
  <div class="scene-situation">相手が抱えていそうな課題を予習したい</div>
  <div class="scene-description">CPA高騰、LINE放置、LP直帰率60-90%、Cookie規制、リソース不足の5大課題。</div>
  <span class="scene-reference">→ ターゲット&ニーズ > よくある課題5選</span>
</a>

<a class="scene-card scene-link" data-tab="case-studies" data-heading="0">
  <div class="scene-situation">実績数値を手元に準備したい</div>
  <div class="scene-description">500アカウント超の運用実績。洋服の青山で売上4倍、ロート製薬でLTV2倍の実績。</div>
  <span class="scene-reference">→ 導入事例 > 実績サマリー</span>
</a>

<h3>STEP 2: 受付突破</h3>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
  <div class="scene-situation">受付から先に進めない</div>
  <div class="scene-description">直接型・情報提供型・業界トレンド型・紹介型の4パターンで突破。EC/マーケ部門は受付にとって判断しにくい用件。</div>
  <span class="scene-reference">→ トークスクリプト > 受付突破フレーズ集</span>
</a>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="1">
  <div class="scene-situation">受付のタイプに合わせた対応を知りたい</div>
  <div class="scene-description">おっとりタイプ・マニュアルタイプ・ガードマンタイプ・ベテランタイプ別の突破法。</div>
  <span class="scene-reference">→ トークスクリプト > 受付タイプ別対応</span>
</a>

<h3>STEP 3: 担当者との会話</h3>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="2">
  <div class="scene-situation">担当者に最初に何を話す？</div>
  <div class="scene-description">広告CPA高騰の課題提起→共感→成果報酬型LINE運用の提案。30秒で興味を引くオープニング。</div>
  <span class="scene-reference">→ トークスクリプト > オープニングトーク</span>
</a>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="3">
  <div class="scene-situation">相手の状況をヒアリングしたい</div>
  <div class="scene-description">現在の広告費・LINE運用状況・CVR・CPAを聞き出す具体的な質問フロー。</div>
  <span class="scene-reference">→ トークスクリプト > ヒアリングトーク</span>
</a>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
  <div class="scene-situation">「間に合ってます」と断られた</div>
  <div class="scene-description">成果報酬なのでリスクゼロ。既存施策と併用可能であることを伝える。</div>
  <span class="scene-reference">→ 反論対応 > 間に合ってます</span>
</a>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="2">
  <div class="scene-situation">「予算がない」と言われた</div>
  <div class="scene-description">初期・月額0円の成果報酬型。成果が出なければ費用ゼロ。</div>
  <span class="scene-reference">→ 反論対応 > 予算がない</span>
</a>

<h3>STEP 4: クロージング</h3>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="5">
  <div class="scene-situation">興味を持ってもらえた → 次のステップへ</div>
  <div class="scene-description">無料相談・資料送付・次回アポ取得の3パターンでクロージング。</div>
  <span class="scene-reference">→ トークスクリプト > クロージングトーク</span>
</a>

<a class="scene-card scene-link" data-tab="case-studies" data-heading="4">
  <div class="scene-situation">導入の流れを説明したい</div>
  <div class="scene-description">ヒアリング→タグ設置→運用開始→レポーティング。クライアント負担は最小限。</div>
  <span class="scene-reference">→ 導入事例 > 導入フロー</span>
</a>
`,
  },

  // ──────────────────────────────────────────
  // Tab 3: サービス概要
  // ──────────────────────────────────────────
  {
    id: "service-overview",
    title: "サービス概要",
    icon: "Zap",
    content: `
<h2>カリトルチャット サービス概要</h2>

<h3>30秒で説明するカリトルチャット</h3>

<div class="callout callout-info">
<strong>エレベーターピッチ（30秒版）</strong><br>
「カリトルチャットは、御社のECサイトに来訪したお客様の<strong>離脱を防止</strong>してLINEに誘導し、
チャットボットとプッシュ配信で<strong>コンバージョンを増やす</strong>サービスです。
<strong>完全成果報酬型</strong>なので初期費用も月額費用もゼロ。
成果が出た時だけお支払いいただく仕組みです。
500アカウント以上の運用実績があり、洋服の青山様ではLINE経由売上が<strong>4倍</strong>になった実績もあります。」
</div>

<h3>3つのコア機能</h3>

<h4>1. 離脱防止ポップアップバナー</h4>
<p>訪問者がサイトを離れようとするアクション（ブラウザバック、タブ閉じ等）を検知し、LINE誘導バナーを表示します。</p>
<ul>
<li>月4〜12本のクリエイティブを検証し、最適なバナーを特定</li>
<li>LP直帰率60〜90%の「逃しているユーザー」を効率的にLINEへ誘導</li>
<li>Cookie規制の影響を受けない自社チャネル（LINE）への囲い込み</li>
</ul>

<h4>2. チャットボットナーチャリング</h4>
<p>LINE登録後のユーザーに対し、クライアントに合わせたシナリオでナーチャリングを行います。</p>
<ul>
<li><strong>レコメンド型</strong>：ユーザーの興味に合わせた商品を自動提案</li>
<li><strong>診断型</strong>：質問に回答していくと最適な商品が提案される</li>
<li><strong>FAQ型</strong>：よくある質問に自動回答し、購入障壁を除去</li>
</ul>

<h4>3. 多彩なプッシュ配信</h4>
<p>複数の手法を組み合わせ、最適なタイミングでユーザーにアプローチします。</p>
<ul>
<li><strong>STEP配信</strong>：登録後○日目に自動でメッセージ送信</li>
<li><strong>自動RTG配信</strong>：サイト訪問・カート放棄をトリガーに配信</li>
<li><strong>セグメントPUSH配信</strong>：属性・行動データで絞り込み配信</li>
<li><strong>都度配信</strong>：セール・新商品など任意タイミングで配信</li>
</ul>

<h3>完全成果報酬モデル</h3>

<table>
<tr><th>項目</th><th>金額</th></tr>
<tr><td>初期費用</td><td><strong>0円</strong></td></tr>
<tr><td>月額費用</td><td><strong>0円</strong></td></tr>
<tr><td>成果報酬（単一商材）</td><td>成果1件あたりの単価</td></tr>
<tr><td>成果報酬（多商材）</td><td>売上に応じた料率</td></tr>
</table>

<div class="memo-box">
<span class="badge">POINT</span>
<p>企画立案・クリエイティブ制作・シナリオ構築・配信運用・レポーティング・システム保守管理まで<strong>全て代行</strong>。<br>
クライアント側の負担は<strong>ヒアリングとタグ設置のみ</strong>です。</p>
</div>

<h3>競合との差別化ポイント</h3>

<table>
<tr><th>差別化ポイント</th><th>詳細</th></tr>
<tr><td>完全成果報酬型</td><td>導入リスクゼロ。成果が出なければ費用は一切かからない</td></tr>
<tr><td>500アカウント超の運用実績</td><td>豊富なデータに基づく最適な施策提案。業種別のノウハウが蓄積</td></tr>
<tr><td>包括的な代行体制</td><td>企画から保守管理まで全面サポート。社内リソース不要</td></tr>
<tr><td>Cookie規制への対応</td><td>リタゲ広告の代替手段。自社LINE公式アカウントで顧客を直接保有</td></tr>
</table>

<h3>DOTZ株式会社 について</h3>

<p><strong>国内唯一のLINE公式アカウント専門マーケティング企業</strong>です。</p>
<ul>
<li><strong>LINE Frontliner</strong> 認定（日本国内にわずか9名の認定講師）</li>
<li>LINE正規取扱代理店「<strong>Bronze</strong>」受賞</li>
<li>LINE正規テクノロジーパートナー「<strong>ミニアプリ部門</strong>」受賞</li>
<li>所在地：東京都目黒区青葉台4-4-12 THE N3 2F</li>
</ul>

<div class="callout callout-info">
<strong>追加オプション</strong>：CVを増やすだけではなく、CV後のCRMまで対応可能。CVを増やしLTVを伸ばす運用も可能です。（別途オプション）
</div>

<div class="callout callout-success">
<strong>営業トークでの使い方</strong>：「LINEの公式認定講師が国内にわずか9名しかいないのですが、弊社DOTZの代表がその1人です。LINE活用のプロ集団が御社のLINE運用を完全代行します。」
</div>
`,
  },

  // ──────────────────────────────────────────
  // Tab 3: ターゲット & ニーズ
  // ──────────────────────────────────────────
  {
    id: "target-needs",
    title: "ターゲット & ニーズ",
    icon: "Target",
    content: `
<h2>ターゲット & ニーズ把握</h2>

<h3>ターゲットプロファイル</h3>

<table>
<tr><th>項目</th><th>詳細</th></tr>
<tr><td>企業規模</td><td>EC年商 <strong>約1億円以上</strong></td></tr>
<tr><td>担当者</td><td>広告運用担当者 / マーケティング責任者 / EC事業部長</td></tr>
<tr><td>業種</td><td>アパレル、D2C、化粧品、健康食品、家電、食品、サブスクリプション等</td></tr>
<tr><td>特徴</td><td>Web広告に一定の予算を投じている。CPAの管理意識が高い</td></tr>
</table>

<div class="callout callout-info">
<strong>狙い目の企業シグナル</strong><br>
・LINE公式アカウントを開設済みだが更新が止まっている<br>
・リスティング広告・SNS広告に月100万円以上出稿<br>
・D2C/EC事業を始めて1〜3年で拡大フェーズ<br>
・Cookie規制対応の広告戦略を模索中
</div>

<h3>よくある課題5選</h3>

<h4>課題1: 広告CPAが高騰している</h4>
<p>リスティング広告やSNS広告の競争激化でCPAが上昇。特にリターゲティング広告はCookie規制で効果が低下し、同じ予算で以前ほど成果が出なくなっている。</p>
<div class="memo-box">
<span class="badge">検知ポイント</span>
<p>「最近広告の費用対効果が下がってきた」「CPAが○○円を超えてしまった」「リタゲの効果が落ちている」等の発言</p>
</div>

<h4>課題2: LINE公式アカウントを作ったが放置</h4>
<p>LINEアカウントは開設したものの、配信するコンテンツがない・運用する人手がない・何を配信すれば良いかわからないという状態。</p>
<div class="memo-box">
<span class="badge">検知ポイント</span>
<p>「LINEはあるんですけど、あまり動かせてなくて…」「配信ネタがなくて…」等の発言</p>
</div>

<h4>課題3: LPの直帰率が60-90%</h4>
<p>広告費をかけてLPに集客しても、6〜9割が購入せずに離脱。せっかくの訪問者を逃しており、広告費が無駄になっている。</p>
<div class="memo-box">
<span class="badge">検知ポイント</span>
<p>「LPのCVRが低い」「流入は取れてるが購入に繋がらない」「直帰率が高い」等の発言</p>
</div>

<h4>課題4: Cookie規制でリタゲ効果低下</h4>
<p>ITP（Intelligent Tracking Prevention）やサードパーティCookie廃止の流れで、リターゲティング広告のターゲティング精度が低下。以前のように「一度訪問したユーザーを追いかける」ことが困難に。</p>
<div class="memo-box">
<span class="badge">検知ポイント</span>
<p>「リタゲが効かなくなった」「Cookie規制が心配」「代替手段を探している」等の発言</p>
</div>

<h4>課題5: LINE運用の社内リソース不足</h4>
<p>LINE運用の重要性は理解しているが、専任担当をつけられない。配信設計・クリエイティブ制作・分析まで手が回らない。</p>
<div class="memo-box">
<span class="badge">検知ポイント</span>
<p>「LINE運用できる人がいない」「他の業務が忙しくてLINEまで手が回らない」等の発言</p>
</div>

<h3>ニーズヒアリング質問集</h3>

<div class="callout callout-info">
<strong>ヒアリングの基本原則</strong>：いきなり質問攻めにせず、まずオープニングトークで課題に共感してから自然にヒアリングに入る。
</div>

<h4>現状把握の質問</h4>
<div class="script-block">
<span class="label">質問1</span>
「現在、ECサイトの集客にはどのような広告チャネルをお使いですか？」

<span class="label">質問2</span>
「月間の広告予算はおおよそどのくらいの規模感でしょうか？」

<span class="label">質問3</span>
「直近のCPAの推移はいかがですか？半年前と比べて変化はありますか？」

<span class="label">質問4</span>
「LINE公式アカウントはお持ちですか？現在どのように活用されていますか？」

<span class="label">質問5</span>
「LINEの友だち数は現在どのくらいでしょうか？」
</div>

<h4>課題深掘りの質問</h4>
<div class="script-block">
<span class="label">質問6</span>
「リターゲティング広告の効果について、最近何か変化を感じていらっしゃいますか？」

<span class="label">質問7</span>
「サイトに来訪されたお客様の離脱対策は何かされていますか？」

<span class="label">質問8</span>
「現在のLPのCVR（コンバージョン率）はどのくらいでしょうか？」

<span class="label">質問9</span>
「Cookie規制への対応として、何か検討されていることはありますか？」

<span class="label">質問10</span>
「LINE運用について、社内で担当されている方はいらっしゃいますか？」
</div>

<h4>ニーズ確認の質問</h4>
<div class="script-block">
<span class="label">質問11</span>
「もし広告CPAを下げながらCV数を増やせるとしたら、ご興味はありますか？」

<span class="label">質問12</span>
「初期費用も月額費用もゼロで、成果が出た分だけお支払いいただくモデルがあるのですが、そういった形ならご検討の余地はございますか？」

<span class="label">質問13</span>
「LINE運用を丸ごとお任せいただけるサービスがあれば、お話を聞いてみたいと思われますか？」
</div>
`,
  },

  // ──────────────────────────────────────────
  // Tab 2: 一気通貫スクリプト
  // ──────────────────────────────────────────
  {
    id: "full-script",
    title: "一気通貫スクリプト",
    icon: "ScrollText",
    content: `
<h2>一気通貫スクリプト</h2>
<p>このスクリプトを上から順に読むだけで、受付突破からアポイント獲得まで一気に完結します。<br>
<strong>ヒアリングは商談時に行う</strong>ため、電話ではテンポよくクロージングまで進めてください。</p>

<h3>プロット1：受付突破</h3>

<div class="script-block">
<span class="label">営業</span>
お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
御社のECサイトの広告効果改善について、ご担当者様にお繋ぎいただけますでしょうか。
</div>

<table>
<tr><th>相手の反応</th><th>対応</th></tr>
<tr><td>「営業ですか？」</td><td>「いえ、LINE社の認定企業からEC事業に関する情報提供のお電話です」</td></tr>
<tr><td>「どういったご用件ですか？」</td><td>「EC広告のCPA削減に成功した事例のご案内です。広告やマーケのご担当者様にお願いします」</td></tr>
<tr><td>「担当者不在です」</td><td>「お戻りの時間を教えていただけますか？お名前もお伺いできますと幸いです」</td></tr>
<tr><td>担当者に繋がった</td><td><strong>→ プロット2へ</strong></td></tr>
</table>

<a class="scene-card scene-link" data-tab="talk-script" data-heading="0">
  <span class="scene-reference">→ 受付突破の詳細パターンは「トークスクリプト」タブへ</span>
</a>

<h3>プロット2：オープニング</h3>

<div class="script-block">
<span class="label">営業</span>
お電話代わりました、ありがとうございます。
DOTZ株式会社の○○と申します。

今、御社と同じEC事業者様の間で、Cookie規制でリタゲ広告が効きにくくなっている中、
<strong>LINEを使って離脱ユーザーを追加CVに変える</strong>手法が急速に広がっています。

弊社はこの仕組みを<strong>完全成果報酬型（初期0円・月額0円）</strong>で提供しておりまして、
簡単にご紹介させていただきます。
</div>

<table>
<tr><th>相手の反応</th><th>対応</th></tr>
<tr><td>「いいですよ」「どうぞ」</td><td><strong>→ プロット3へ</strong></td></tr>
<tr><td>「忙しい」「時間ない」</td><td>「15秒だけ。ECサイトの離脱者をLINEでCVに変えるサービスです。成果報酬で費用リスクゼロ、500アカウント実績。資料だけお送りしてもいいですか？」→ <strong>プロット4へ</strong></td></tr>
<tr><td>「間に合ってます」</td><td>「既存施策にプラスする形です。成果報酬なのでリスクゼロで追加CVが獲れます。30秒だけいいですか？」→ <strong>プロット3へ</strong></td></tr>
</table>

<h3>プロット3：興味づけ</h3>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。弊社の「カリトルチャット」を簡潔にお伝えします。

仕組みは、御社のECサイトから離脱しようとするユーザーに対して
LINEへの誘導バナーを表示し、LINE登録後にチャットボットとメッセージ配信で
自動的にCVまで導くというものです。

ポイントは3つです。

<strong>① 完全成果報酬型</strong> — 初期0円・月額0円。成果が出なければ費用はゼロです。
<strong>② 完全代行</strong> — 企画から運用まで全て弊社が行います。御社の工数はほぼゼロです。
<strong>③ 500アカウント超の実績</strong> — 洋服の青山様でLINE経由売上<strong>4倍</strong>、ロート製薬様でLTV<strong>2倍</strong>。

今、御社のサイトで離脱しているユーザーの60〜90%を、
成果報酬型・ノーリスクでCV化できる可能性があります。
</div>

<table>
<tr><th>相手の反応</th><th>対応</th></tr>
<tr><td>「面白そう」「もう少し聞きたい」</td><td><strong>→ プロット4（オンラインアポ）へ</strong></td></tr>
<tr><td>「うちの商材でも使えるの？」</td><td>「アパレル・D2C・化粧品・健康食品・家電等で実績があります。御社に近い事例を商談でご紹介します」→ <strong>プロット4へ</strong></td></tr>
<tr><td>「効果あるの？」</td><td>「青山様で売上4倍、ロート製薬様でLTV2倍の実績です。しかも成果報酬なので効果がなければ費用ゼロです」→ <strong>プロット4へ</strong></td></tr>
<tr><td>「予算がない」</td><td>「完全成果報酬なので予算は不要です。成果が出た分だけのお支払い。リスクゼロで始められます」→ <strong>プロット4へ</strong></td></tr>
<tr><td>「検討します」</td><td>「では事例資料をお送りさせてください」→ <strong>プロット4（資料送付）へ</strong></td></tr>
</table>

<a class="scene-card scene-link" data-tab="objection-handling" data-heading="0">
  <span class="scene-reference">→ 反論対応の詳細は「反論対応」タブへ</span>
</a>

<h3>プロット4：アポ取り / クロージング</h3>

<div class="callout callout-success">
  <strong>パターンA：オンラインアポ（興味あり）</strong>
</div>

<div class="script-block">
<span class="label">営業</span>
ありがとうございます。
では一度、御社のECサイトを拝見しながら、
<strong>具体的にどのくらいの追加CVが見込めるか</strong>無料でシミュレーションさせてください。

30分のオンラインお打ち合わせで完了します。
来週の火曜か水曜で、ご都合の良いお時間はございますか？

<span class="label">相手</span>
「水曜の14時なら空いてます」

<span class="label">営業</span>
ありがとうございます。では来週水曜14時で確定させていただきます。
オンラインミーティングのURLをお送りしますので、メールアドレスをお伺いしてもよろしいですか？
</div>

<div class="callout callout-info">
  <strong>パターンB：資料送付（まだ慎重）</strong>
</div>

<div class="script-block">
<span class="label">営業</span>
では、洋服の青山様やロート製薬様の具体的な成果数値が入った資料をお送りさせてください。
メールアドレスをお伺いしてもよろしいですか？

<span class="label">相手</span>
「○○@○○.co.jpです」

<span class="label">営業</span>
ありがとうございます。本日中にお送りいたします。
資料をご覧いただいた翌日、○曜日にお電話させていただいてもよろしいですか？
5分程度で資料のポイントだけご説明させてください。
</div>

<h3>プロット5：メール確認・お礼</h3>

<div class="script-block">
<span class="label">営業</span>
（メールアドレスの確認）
確認させてください。○○@○○.co.jp、○○様のお名前は漢字でどのようにお書きしますか？

ちなみに、○○様のお役職とご所属の部署名をお伺いしてもよろしいですか？
（任意：聞ける雰囲気なら）

<span class="label">営業</span>
本日は貴重なお時間をいただき、どうもありがとうございました。
引き続きよろしくお願いいたします。失礼いたします。
</div>

<h3>電話終了後のアクション</h3>

<ul>
<li><strong>CRM記録</strong>：担当者名・役職・メールアドレス・反応の良かったポイント・次回アクション</li>
<li><strong>資料送付は即日</strong>：時間が経つと記憶が薄れる。メール本文に通話内容を簡潔に記載</li>
<li><strong>次回コール日をカレンダー登録</strong>：約束した日時を必ず登録、前日リマインド設定</li>
</ul>
`,
  },

  // ──────────────────────────────────────────
  // Tab 4: トークスクリプト
  // ──────────────────────────────────────────
  {
    id: "talk-script",
    title: "トークスクリプト",
    icon: "MessageSquare",
    content: `
<h2>トークスクリプト</h2>

<div class="callout callout-warning">
<strong>重要</strong>：スクリプトは「型」として活用してください。相手の反応に応じて柔軟にアレンジすることが大切です。棒読みにならないよう、自然な会話を心がけましょう。
</div>

<h3>受付突破フレーズ集</h3>

<h4>パターン1: 直接型（担当者名がわかる場合）</h4>
<div class="script-block">
<span class="label">営業</span>
「お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
EC事業部の△△様はいらっしゃいますでしょうか？
先日お送りしたLINE活用のご提案資料の件でお電話いたしました。」
</div>

<h4>パターン2: 情報提供型（担当者名不明）</h4>
<div class="script-block">
<span class="label">営業</span>
「お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
御社のECサイトのLINE活用について、成功事例をお伝えしたくご連絡いたしました。
広告運用やマーケティングをご担当されている方にお繋ぎいただけますでしょうか？」
</div>

<h4>パターン3: 業界トレンド型</h4>
<div class="script-block">
<span class="label">営業</span>
「お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
最近のCookie規制に伴う広告効果の変化について、御社のEC事業部の方と情報交換させていただきたくご連絡しました。
ご担当の方にお繋ぎいただけますでしょうか？」
</div>

<h4>パターン4: 紹介型</h4>
<div class="script-block">
<span class="label">営業</span>
「お忙しいところ恐れ入ります。DOTZ株式会社の○○と申します。
同業界の□□様にもご導入いただいているLINE活用サービスについてご案内でお電話しました。
EC事業のご責任者様にお繋ぎいただけますでしょうか？」
</div>

<h3>受付タイプ別対応</h3>

<table>
<tr><th>タイプ</th><th>特徴</th><th>対応法</th></tr>
<tr><td><strong>おっとりタイプ</strong></td><td>丁寧だが判断に時間がかかる</td><td>焦らず丁寧に。「お手数ですが〜」を多用。具体的な用件を伝えると繋いでもらいやすい</td></tr>
<tr><td><strong>マニュアルタイプ</strong></td><td>「営業はお断り」と機械的に対応</td><td>「営業ではなく情報提供です」と用件を変える。「○○の件で」と具体的な案件名を出す</td></tr>
<tr><td><strong>ガードマンタイプ</strong></td><td>強めに断ってくる</td><td>ひるまず堂々と。「御社のEC事業に関わる重要なご提案です」と権威性を出す</td></tr>
<tr><td><strong>ベテランタイプ</strong></td><td>営業を見抜く力がある</td><td>正直に用件を伝える。「LINEマーケティングの専門企業からのご提案です」と専門性で勝負</td></tr>
</table>

<h3>オープニングトーク</h3>

<div class="callout callout-info">
<strong>オープニングの流れ</strong>：名乗り → 課題提起（共感） → 解決策の提示 → 興味確認
</div>

<div class="script-block">
<span class="label">営業</span>
「お忙しいところ失礼いたします。DOTZ株式会社の○○と申します。
本日は、EC事業者様の広告費最適化についてご提案がありお電話いたしました。

最近、多くのEC事業者様から『リタゲ広告の効果が落ちてきた』『CPAが高騰して困っている』
というお声をいただいております。

御社でも、広告のCPAや費用対効果について課題を感じていらっしゃることはございますか？」

<span class="label">相手</span>
「ええ、まあ…確かに最近は上がってきていますね。」

<span class="label">営業</span>
「やはりそうですよね。実は今、Cookie規制の影響でリターゲティング広告の効果が業界全体で低下しているんです。

そこで弊社では、サイト来訪者をLINEに誘導して、チャットボットとプッシュ配信でCVを増やす
『カリトルチャット』というサービスをご提供しています。

特徴的なのは<strong>完全成果報酬型</strong>という点で、初期費用も月額費用も一切かかりません。
成果が出た分だけお支払いいただく仕組みです。

洋服の青山様ではLINE経由の売上が4倍になった実績もあります。

少しだけお時間いただいて、詳しくご説明させていただけませんか？」
</div>

<h3>ヒアリングトーク</h3>

<div class="script-block">
<span class="label">営業</span>
「ありがとうございます。まず御社の状況をお伺いさせてください。

現在、ECサイトへの集客にはどのような広告チャネルをお使いですか？」

<span class="label">相手</span>
「主にGoogle広告とSNS広告ですね。」

<span class="label">営業</span>
「なるほど。月間の広告予算はおおよそどのくらいの規模感でしょうか？」

<span class="label">相手</span>
「月に○○万円くらいです。」

<span class="label">営業</span>
「ありがとうございます。その中で、リターゲティング広告の割合はどのくらいですか？
最近、リタゲの効果が変わったなと感じることはありますか？」

<span class="label">相手</span>
「確かに以前より効きにくくなった気がします。」

<span class="label">営業</span>
「それはまさにCookie規制の影響ですね。多くの企業様が同じ状況です。

ちなみに、LINE公式アカウントはお持ちですか？」

<span class="label">相手</span>
「一応あるんですけど、あまり使えてないですね…」

<span class="label">営業</span>
「そういう企業様、実はとても多いんです。LINEは作ったけど運用リソースがなくて放置、というケースですね。

実はそこが大きなチャンスで、御社のサイトに来訪しているお客様をLINEに誘導して、
自動でナーチャリングすることで、今逃しているCVを成果報酬型で獲得できるんです。」
</div>

<h3>商材説明トーク</h3>

<div class="script-block">
<span class="label">営業</span>
「カリトルチャットの仕組みを簡単にご説明させていただきますね。

まず、御社のECサイトに離脱防止のポップアップバナーを設置します。
サイトを離れようとするお客様に対してLINEへの登録を促し、
登録後はチャットボットで自動的に商品をおすすめしたり、
プッシュ配信でセール情報をお届けしたりします。

ポイントは3つです。

<strong>1つ目は、完全成果報酬型であること。</strong>
初期費用ゼロ、月額費用ゼロ。成果が出た時だけ費用が発生します。
つまり、御社にとってリスクは一切ありません。

<strong>2つ目は、全て丸投げできること。</strong>
企画立案、クリエイティブ制作、シナリオ構築、配信運用、レポーティングまで
全て弊社が代行します。御社にお願いするのはヒアリングとタグ設置だけです。

<strong>3つ目は、500アカウント以上の運用実績があること。</strong>
アパレル、D2C、化粧品、健康食品など幅広い業種で成果を上げています。
このノウハウを御社のLINE運用にも活かせます。」
</div>

<h3>クロージングトーク</h3>

<h4>パターン1: 無料相談への誘導</h4>
<div class="script-block">
<span class="label">営業</span>
「ここまでお話を聞いていただきありがとうございます。

御社の状況を拝見する限り、カリトルチャットでCPAを抑えながらCV数を増やせる可能性が十分あると思います。

まずは無料のオンライン相談で、御社のサイトを拝見しながら
具体的にどのくらいの効果が見込めるかシミュレーションさせていただければと思うのですが、
来週の火曜か水曜でしたら、どちらがご都合よろしいでしょうか？」
</div>

<h4>パターン2: 資料送付 + 次回アポ</h4>
<div class="script-block">
<span class="label">営業</span>
「まずは詳しい資料と導入事例をメールでお送りさせていただきますね。
導入事例には洋服の青山様やロート製薬様の具体的な数値も入っていますので、
ご参考になると思います。

資料をお送りした後、内容のご説明も兼ねて改めてお電話させていただいてもよろしいでしょうか？
今週金曜か来週月曜あたりはいかがでしょうか？」
</div>

<div class="memo-box">
<span class="badge">POINT</span>
<p><strong>「検討します」で終わらせない</strong>：必ず次のアクション（資料送付＋次回電話の日時）を約束する。<br>
「○日頃にお電話させていただいてもよろしいでしょうか？」と具体的な日時を提案する。</p>
</div>
`,
  },

  // ──────────────────────────────────────────
  // Tab 5: 反論対応
  // ──────────────────────────────────────────
  {
    id: "objection-handling",
    title: "反論対応",
    icon: "Shield",
    content: `
<h2>反論対応（切り返し集）</h2>

<div class="callout callout-info">
<strong>反論対応の基本姿勢</strong>：まず相手の意見を受け止めてから（「おっしゃる通りです」「そうですよね」）、切り返しに入る。否定から入らない。
</div>

<h3>「間に合ってます」</h3>

<div class="objection-block">
<div class="objection">「今は間に合ってます」「特に必要ないです」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：営業を断る定型句。現状に不満がないか、変化を面倒に感じている。</p>

<div class="script-block">
<span class="label">営業</span>
「承知いたしました。現状の施策がうまくいっていらっしゃるんですね。

ちなみに、今の施策に『プラスして』成果を上げる方法だとしたらいかがでしょうか？

カリトルチャットは既存の広告施策と競合するものではなく、
今サイトに来て購入せずに離脱しているお客様を追加でCVに変えるサービスです。

しかも完全成果報酬型なので、成果が出なければ費用はゼロ。
御社にリスクは一切ありません。

実は『間に合っている』とおっしゃっていた企業様でも、
実際にはLP来訪者の60〜90%が離脱している、というケースがほとんどなんです。

1分だけお時間いただいて、どのくらいの改善余地があるかだけお伝えさせていただけませんか？」
</div>
</div>
</div>

<h3>「LINE運用は考えてない」</h3>

<div class="objection-block">
<div class="objection">「LINEは今のところ考えてないです」「LINE運用は優先度が低い」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：LINE運用のメリットが見えていない。または以前試して効果がなかった。</p>

<div class="script-block">
<span class="label">営業</span>
「そうですよね。LINE運用って手間がかかるイメージがありますよね。

ただ実は今、Cookie規制の影響でリターゲティング広告の効果が大幅に下がっているのはご存知ですか？

これまでリタゲ広告で追いかけていたユーザーを、今後はLINEで直接つながって
アプローチするのが業界のトレンドになっています。

カリトルチャットなら、LINE運用は全て弊社が代行しますので、
御社の手間はヒアリングとタグ設置だけ。
しかも成果報酬型なので、効果が出なければ費用もかかりません。

リタゲ広告の代替手段として、一度お話だけでも聞いていただけませんか？」
</div>
</div>
</div>

<h3>「予算がない」</h3>

<div class="objection-block">
<div class="objection">「今は予算がなくて…」「コストをかけられない」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：初期投資や月額費用がかかると思い込んでいる。</p>

<div class="script-block">
<span class="label">営業</span>
「予算面でのご心配、ごもっともだと思います。

実はカリトルチャットは<strong>完全成果報酬型</strong>のサービスでして、
初期費用も月額費用も一切かかりません。

成果が出た時にだけ、成果に応じた費用をお支払いいただく仕組みです。
つまり、成果が出なければ費用はゼロ円です。

ですので、むしろ予算に制約がある時こそ、
リスクゼロで始められるカリトルチャットは最適だと思います。

まずは無料でシミュレーションだけでもさせていただけませんか？」
</div>
</div>
</div>

<h3>「社内で検討します」</h3>

<div class="objection-block">
<div class="objection">「社内で検討してからまた連絡します」「上に確認しないと…」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：決裁権限がない、または断りの婉曲表現。</p>

<div class="script-block">
<span class="label">営業</span>
「ありがとうございます。ぜひご検討ください。

ご検討にあたって、上長の方にもご説明しやすい詳しい資料をお送りさせていただきますね。
導入事例や具体的な成果数値も入っていますので、ご判断の材料にしていただけると思います。

ちなみに、ご検討いただくにあたって、何か気になるポイントはございますか？
事前にお答えできることがあれば、検討もスムーズに進むかと思います。

資料をご覧いただいた後、来週○曜日くらいに改めてお電話させていただいてもよろしいでしょうか？」
</div>

<div class="memo-box">
<span class="badge">POINT</span>
<p>「検討します」で電話を切らせない。<strong>必ず次回アポの日時を確定させる</strong>。<br>
「いつ頃お返事いただけそうですか？」→「では○日にこちらからお電話しますね」</p>
</div>
</div>
</div>

<h3>「他社でやってます」</h3>

<div class="objection-block">
<div class="objection">「LINE運用は他社にお願いしてます」「すでにツールを使ってます」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：既に他社のLINE運用サービスやツールを導入済み。</p>

<div class="script-block">
<span class="label">営業</span>
「すでにLINE運用に取り組まれているんですね。素晴らしいです。

ちなみに、現在のLINE運用の成果にはご満足されていますか？

カリトルチャットは他社様と少し違うのが、<strong>完全成果報酬型</strong>という点です。
多くのLINE運用サービスは月額固定費がかかりますが、
弊社は成果が出た分だけのお支払いです。

また、500アカウント超の運用データに基づく最適化ノウハウがあります。
今の運用と併用してセカンドオピニオン的に試していただくことも可能です。

現在の運用との違いだけでもご説明させていただけませんか？」
</div>
</div>
</div>

<h3>「効果あるの？」</h3>

<div class="objection-block">
<div class="objection">「本当に効果があるんですか？」「うまくいくのか不安」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：過去にLINE施策やツール導入で失敗した経験がある。成果に確信が持てない。</p>

<div class="script-block">
<span class="label">営業</span>
「効果については気になりますよね。具体的な実績をお伝えさせてください。

例えば、洋服の青山様ではカリトルチャット導入後、
LINE経由の売上が<strong>4倍</strong>になり、ROAS（広告投資対効果）が300%から700%に改善しました。

また、ロート製薬様のD2C事業では、LTV（顧客生涯価値）が<strong>2倍</strong>に、CPAが<strong>半減</strong>しています。

こうした実績が出せるのは、500アカウント以上の運用データに基づいて最適なシナリオを構築しているからです。

しかも完全成果報酬型ですので、万が一効果が出なくても費用はかかりません。
まさにノーリスクでお試しいただけます。」
</div>
</div>
</div>

<h3>「うちの商材で使えるの？」</h3>

<div class="objection-block">
<div class="objection">「うちの商材でも効果あるんですか？」「業界が違うと思うけど…」</div>
<div class="response">
<p><strong>なぜ言うのか</strong>：自社の商材は特殊だと感じている。事例が自社に当てはまるか不安。</p>

<div class="script-block">
<span class="label">営業</span>
「御社の商材に合うかどうか、気になりますよね。

カリトルチャットは500アカウント以上の導入実績がありまして、
アパレル、D2C、化粧品、健康食品、家電など、幅広い業種で成果を上げています。

各業種ごとに最適なチャットボットのシナリオを構築しますので、
御社の商材の特性に合わせたカスタマイズが可能です。

例えば、化粧品なら「肌診断型」のチャットボット、
アパレルなら「コーディネート提案型」など、
業種に合わせた設計で成果を出しています。

御社のECサイトを拝見して、具体的にどのようなシナリオが最適か
ご提案させていただくことも可能です。まずは無料でご相談いただけますか？」
</div>
</div>
</div>
`,
  },

  // ──────────────────────────────────────────
  // Tab 6: 導入事例 & 数値
  // ──────────────────────────────────────────
  {
    id: "case-studies",
    title: "導入事例 & 数値",
    icon: "BarChart3",
    content: `
<h2>導入事例 & 数値</h2>

<h3>実績サマリー</h3>

<div class="stat-grid">
<div class="stat-highlight">
  <span class="stat-label">運用実績</span>
  500アカウント超
</div>
<div class="stat-highlight">
  <span class="stat-label">LINE Frontliner</span>
  国内9名
</div>
<div class="stat-highlight">
  <span class="stat-label">青山 LINE売上</span>
  4倍
</div>
<div class="stat-highlight">
  <span class="stat-label">ロート製薬 LTV</span>
  2倍
</div>
</div>

<h3>洋服の青山（アパレル）</h3>

<table>
<tr><th>項目</th><th>詳細</th></tr>
<tr><td>企業</td><td>洋服の青山（大手アパレル小売）</td></tr>
<tr><td>課題</td><td>EC売上の伸び悩み、広告CPAの高騰、LINE活用が不十分</td></tr>
<tr><td>施策</td><td>離脱防止ポップアップ → LINE誘導 → セグメント別プッシュ配信</td></tr>
<tr><td>成果</td><td><strong>LINE経由売上4倍</strong>、<strong>ROAS 300% → 700%</strong></td></tr>
</table>

<div class="callout callout-success">
<strong>営業での活用ポイント</strong>：「大手アパレルの洋服の青山様でも導入いただいており、LINE経由の売上が4倍になりました。ROASも300%から700%に改善しています。」
</div>

<p><strong>成功の要因</strong>：</p>
<ul>
<li>サイト来訪者の離脱タイミングを精密に検知し、最適なタイミングでLINE誘導</li>
<li>顧客の購買履歴・閲覧履歴に基づくセグメント配信で、パーソナライズされた提案を実現</li>
<li>月4〜12本のクリエイティブ検証で、常に最適なバナーを表示</li>
</ul>

<h3>ロート製薬D2C事業</h3>

<table>
<tr><th>項目</th><th>詳細</th></tr>
<tr><td>企業</td><td>ロート製薬（D2C/EC事業部門）</td></tr>
<tr><td>課題</td><td>D2C事業のCPA高騰、新規獲得後のLTVが低い</td></tr>
<tr><td>施策</td><td>チャットボットナーチャリング + STEP配信で購入後フォロー</td></tr>
<tr><td>成果</td><td><strong>LTV 2倍</strong>、<strong>CPA 半減</strong></td></tr>
</table>

<div class="callout callout-success">
<strong>営業での活用ポイント</strong>：「ロート製薬様のD2C事業では、LTVが2倍に伸び、CPAは半分に下がりました。新規獲得だけでなく、既存顧客のリピート促進にも効果があります。」
</div>

<p><strong>成功の要因</strong>：</p>
<ul>
<li>購入後のSTEP配信で、使い方のフォロー→レビュー依頼→リピート促進の流れを自動化</li>
<li>薄毛リスクチェックという危機感を喚起する診断コンテンツを展開</li>
<li>セグメント配信でリピートタイミングに合わせた自動リマインド</li>
</ul>

<h3>公営競技</h3>

<table>
<tr><th>項目</th><th>詳細</th></tr>
<tr><td>企業</td><td>公営競技事業者</td></tr>
<tr><td>課題</td><td>公営競技場への来場者減少</td></tr>
<tr><td>施策</td><td>ゼロからのLINE立ち上げ→友だちを広告で集客→来場促進→来場計測→継続来場促進</td></tr>
<tr><td>成果</td><td>顧客エンゲージメントの大幅拡大、認知・利用率の向上</td></tr>
</table>

<div class="callout callout-success">
<strong>営業での活用ポイント</strong>：「LINE運用が全くなかった企業様でも、ゼロから立ち上げて成果を出した実績があります。LINEアカウントがまだ活用できていない企業様にも最適です。」
</div>

<h3>導入フロー</h3>

<div class="flow-steps">
<span class="flow-step">1. ヒアリング</span>
<span class="flow-arrow">→</span>
<span class="flow-step">2. タグ設置</span>
<span class="flow-arrow">→</span>
<span class="flow-step">3. 運用開始</span>
<span class="flow-arrow">→</span>
<span class="flow-step">4. レポーティング</span>
</div>

<table>
<tr><th>ステップ</th><th>内容</th><th>御社の負担</th></tr>
<tr><td>1. ヒアリング</td><td>商材・ターゲット・KPIのすり合わせ</td><td>30分〜1時間の打ち合わせ</td></tr>
<tr><td>2. タグ設置</td><td>サイトに計測タグを設置</td><td>1行のタグをサイトに追加</td></tr>
<tr><td>3. 運用開始</td><td>ポップアップ・チャットボット・配信を開始</td><td>なし（全て弊社で対応）</td></tr>
<tr><td>4. レポーティング</td><td>月次で成果レポートを提出</td><td>レポート確認のみ</td></tr>
</table>

<div class="memo-box">
<span class="badge">POINT</span>
<p><strong>クライアント側の負担は最小限</strong>：ヒアリング（30分〜1時間）と、サイトへのタグ設置（1行追加）だけ。<br>
企画立案・クリエイティブ制作・シナリオ構築・配信運用・分析レポートまで、全て弊社が対応します。</p>
</div>
`,
  },
];
