# ラスターマシナリー ウェブサイト

工作機械修理の専門家 - 福山市・全国出張修理対応

## 🌐 ウェブサイトの閲覧方法

このウェブサイトは以下のURLで公開されています：

### 本番サイト（推奨）
**https://www.kikai.work**

カスタムドメインでアクセスできます。こちらが正式なURLです。

### GitHub Pages（代替）
**https://lusterma.github.io/lus/**

GitHub Pagesの標準URLでもアクセス可能です。

---

## 📸 整理した写真ギャラリーの閲覧

先ほど整理した写真は、ウェブサイトの「**作業風景・機械写真**」セクションで見ることができます。

詳しくは **[VIEWING_GUIDE.md](VIEWING_GUIDE.md)** をご覧ください。

![作業風景・機械写真ギャラリー](https://github.com/user-attachments/assets/bc3f706f-2bb1-4340-b2eb-5ce329191814)

---

## 📱 対応デバイス

- **デスクトップ・PC** - 完全対応
- **タブレット** - レスポンシブデザイン対応
- **スマートフォン** - モバイル最適化済み

---

## 🔧 ローカル環境での確認方法

開発や編集時にローカルでウェブサイトを確認する方法：

### 方法1: Pythonを使用（最も簡単）

```bash
# リポジトリのディレクトリに移動
cd /path/to/lus

# HTTPサーバーを起動
python3 -m http.server 8000

# ブラウザで開く
# http://localhost:8000
```

### 方法2: Node.jsを使用

```bash
# リポジトリのディレクトリに移動
cd /path/to/lus

# http-serverをインストール（初回のみ）
npm install -g http-server

# サーバーを起動
http-server -p 8000

# ブラウザで開く
# http://localhost:8000
```

### 方法3: Live Server（VS Code拡張機能）

1. VS Codeで`index.html`を開く
2. 右クリック → 「Open with Live Server」を選択
3. ブラウザが自動で開きます

---

## 📂 ファイル構成

```
lus/
├── index.html              # メインHTMLファイル
├── images/                 # 画像フォルダ
│   ├── *.jpg              # 機械・作業写真
│   └── README.md          # 画像一覧
├── videos/                 # 動画フォルダ
│   └── CM2.mp4            # CM動画
├── CNAME                  # カスタムドメイン設定
├── robots.txt             # 検索エンジン設定
├── sitemap.xml            # サイトマップ
├── README.md              # このファイル
└── VIEWING_GUIDE.md       # 写真閲覧ガイド
```

---

## 🚀 デプロイメント

このサイトは**GitHub Pages**で自動デプロイされています。

### デプロイの仕組み

1. `main`ブランチにプッシュすると自動的にデプロイ
2. GitHub Actionsがビルドと公開を実行
3. 数分後に変更が反映されます

### デプロイ状況の確認

GitHub ActionsのWorkflowページで確認できます：
https://github.com/lusterma/lus/actions

---

## 📞 お問い合わせ

**ラスターマシナリー（Luster Machinery）**

- **電話**: 080-3880-4695
- **メール**: info@kikai.work
- **所在地**: 広島県福山市沼隈町常石

### SNS

- **Instagram**: [@luster_machinery](https://www.instagram.com/luster_machinery/)
- **Facebook**: [luster50m](https://www.facebook.com/luster50m/)
- **ブログ**: [キカイブログ](https://luster55.hateblo.jp/)

---

## 📝 更新履歴

### 2026-02-24
- 写真ギャラリーセクションを追加
- 重複画像を整理・削除
- レスポンシブデザインの改善
- アクセシビリティの向上
- README.mdとVIEWING_GUIDE.mdを追加

### 2025年
- ウェブサイト公開
- カスタムドメイン設定
- 初版リリース

---

## 🛠️ 技術情報

- **ホスティング**: GitHub Pages
- **フレームワーク**: 静的HTML/CSS/JavaScript
- **ドメイン**: www.kikai.work
- **SSL**: GitHub Pages自動SSL対応

---

## 📄 ライセンス

© 2025 ラスターマシナリー. All rights reserved.
