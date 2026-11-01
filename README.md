# café hinata

架空のナチュラルカフェを題材にした、HTML・CSS・JavaScriptのみの5ページ静的サイトです。Web制作の学習・ポートフォリオ用模擬案件であり、実在の店舗ではありません。

## 構成

- `index.html`：HOME
- `about.html`：ABOUT
- `menu.html`：MENU（ランチ3品・スイーツ4品・ドリンク6品）
- `access.html`：ACCESS
- `contact.html`：CONTACT〈送信しないデモ〉
- `assets/css/style.css`：共通スタイル
- `assets/js/main.js`：モバイルナビ、ページトップ、デモ入力チェック
- `assets/images/`：サイト内イメージ画像
- `CREDITS.md`：画像素材の記録

## 確認方法

VS CodeのLive Serverなどでプロジェクト直下を開き、`index.html`を表示してください。ビルド・npm・サーバー処理は不要です。GitHub Pagesのリポジトリ配下URLでも動作するよう、リンクと画像は相対パスで記述しています。

## 編集箇所

- 掲載文章・価格：各HTML
- 配色・レイアウト・レスポンシブ：`assets/css/style.css`
- ナビゲーション、ページトップ、CONTACTデモ：`assets/js/main.js`
- 写真：`assets/images/` と各HTMLの画像パス

ヘッダー・フッターは初心者が構造を追えるよう、5ページのHTMLに直接記述しています。共通部分を更新した場合は5ページを同期してください。

## 注意

CONTACTは`form`要素を使用せず、入力値を送信・保存・ログ出力しません。実装後にDevToolsのNetworkとStorageを確認してください。画像は生成素材で、実在店舗・実在商品を示すものではありません。
