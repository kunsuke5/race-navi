# レースnavi (簡潔版)

このプロジェクトは「オフてんき」アプリのように、ビルド不要で動作するシンプルな構成に作り直されました。

## 特徴
- **ビルド不要**: `npm install` や `npm run build` はもう必要ありません。
- **簡単アップロード**: このフォルダをそのまま GitHub にアップロードするだけで、GitHub Pages で公開できます。
- **データ編集が簡単**: `races.js`（レース日程）や `facilities.js`（周辺施設）を直接編集するだけで内容を更新できます。

## 公開方法 (GitHub Pages)
1. GitHub リポジトリの **Settings** を開きます。
2. 左メニューの **Pages** をクリックします。
3. **Build and deployment** > **Source** で「Deploy from a branch」を選びます。
4. **Branch** で `main` (または `master`) と `/ (root)` を選択して **Save** を押します。
5. 数分後、URL が発行されサイトが公開されます。

## フォルダ構成
- `index.html`: アプリの本体（デザインとプログラム）
- `races.js`: レースのスケジュールデータ
- `facilities.js`: 会場周辺の施設データ
- `*.png`: アイコンやロゴ画像
- `_backup/`: 以前の Vite バージョンのファイル（バックアップ）

## 開発・プレビュー
`index.html` をブラウザで開くだけで確認できます。
（※一部のブラウザではセキュリティ設定により直接開けない場合があります。その際は VSCode の Live Server などを使用してください。）
