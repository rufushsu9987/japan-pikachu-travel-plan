# Japan Pikachu Travel Plan

一個以「日本自由行 + 橫濱皮卡丘遊行」為主題的 Next.js 靜態網站。首頁包含 5 天 4 夜路線、遊行觀賞提醒、照片視覺區和預算估算。

## Tech stack

- Next.js 15
- React 19
- TypeScript
- GitHub Actions
- GitHub Pages static hosting

## Local development

```bash
npm install
npm run dev:web
```

網站會在 `http://localhost:3000` 啟動。

## Build

```bash
npm run build
```

Next.js 會輸出靜態檔案到 `apps/web/out`。

## CI/CD

`.github/workflows/deploy.yml` 會在推送到 `main` 時自動：

1. 安裝依賴
2. 建置 Next.js 靜態網站
3. 上傳 `apps/web/out`
4. 部署到 GitHub Pages

部署完成後可在 GitHub repo 的 Pages 頁面查看正式網址。
