# Studio LampKeep (蒼灯機関) 公式Webサイト

Studio LampKeep（蒼灯機関）の公式ポータルサイトです。GitHub Pages（`https://lampkeeper2026.github.io/`）を通じて全世界に公開されています。

---

## 🌟 サイト掲載タイトル

1. **Prince of Chaos ― 混沌迷宮と呪いの公子 ―**
   - **ジャンル**: 紙芝居 × 一人称地下迷宮RPG (Android)
   - **特徴**: 112場面の吹き出し会話劇、地下10階＋深淵回廊、全32曲完全オリジナルBGM、マルチエンディング（6種）。
   - **個別ページ**: [https://lampkeeper2026.github.io/prince-of-chaos/](https://lampkeeper2026.github.io/prince-of-chaos/)
   - **ポリシー**: [https://lampkeeper2026.github.io/prince-of-chaos-privacy/](https://lampkeeper2026.github.io/prince-of-chaos-privacy/)

2. **LampDrop：混沌迷宮の蒼き灯火 (LampDrop: Chaos Labyrinth)**
   - **ジャンル**: ゴシック・レトロアーケード落下ブロックパズル (Android / Web / Desktop)
   - **特徴**: 『Prince of Chaos』の美学を継ぐ「繋がる魔導ランプ（ランタンクラスタ）」、リアルタイム背景バトル演出、フルボーカル主題歌3分MV、1988年伝説的アーケードゲームの物理挙動完全再現。
   - **個別特設ページ**: [https://lampkeeper2026.github.io/lampdrop/](https://lampkeeper2026.github.io/lampdrop/)
   - **ポリシー**: [lampdrop-privacy.html](lampdrop-privacy.html)

3. **青空文庫＆文書AI朗読 (Aozora & Document AI Reader)**
   - **ジャンル**: AI読書・朗読アクセシビリティツール (Android / Windows PWA)
   - **特徴**: アプリ内包LLM・Geminiによるリアルタイム登場人物判別＆声分け自動配役、Edge-TTS / VOICEVOX連携、青空文庫（57マスター作品プリセット＋18,000作品検索）＆PDF・テキスト文書流し込み対応、バックグラウンド再生・オフラインキャッシュ。
   - **ポリシー**: [privacy.html](privacy.html)

---

## 📁 ディレクトリ構成

```
.
├── index.html                  # 総合ポータルトップページ
├── lampdrop/                   # LampDrop 特設公式サイト一式
│   ├── index.html              # LampDrop 特設サイトトップ
│   ├── img/                    # 高画質ゲーム画面・バトル演出画像
│   ├── video/                  # シネマティック動画・エンディングMV
│   └── audio/                  # サウンドトラック・BGM
├── blockdrop-privacy.html       # ブロックドロップ1988 プライバシーポリシー
├── lampdrop-privacy.html        # LampDrop プライバシーポリシー
├── privacy.html                # 青空文庫＆文書AI朗読 プライバシーポリシー
├── app-ads.txt                 # Google AdMob 認証用必須ファイル
├── favicon.png                 # ファビコン
├── css/
│   └── style.css               # レスポンシブ＆ダークサイバーテーマCSS
├── js/
│   └── main.js                 # モーダル、画像切替、フィルター制御JS
├── assets/
│   └── img/
│       ├── brand/              # ロゴ・ブランドアイコン
│       ├── poc/                # Prince of Chaos 画像・スクリーンショット
│       ├── blockdrop/          # LampDrop スクリーンショット・アイコン
│       └── novelreader/        # 小説AI朗読 スクリーンショット・アイコン
└── novel-ai-reader/            # 小説AI朗読用 規約・ポリシーディレクトリ
```

---

## 🚀 GitHub Pages への公開・デプロイ

リポジトリは `LampKeeper2026/LampKeeper2026.github.io` （mainブランチ）に接続されています。
変更をコミットして `git push` するだけで、数分以内に `https://lampkeeper2026.github.io/` に自動反映されます。

```powershell
git add .
git commit -m "Update official portal website"
git push origin main
```
