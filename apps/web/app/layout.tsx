import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日本皮卡丘遊行旅遊規劃",
  description: "東京、橫濱和箱根 5 天 4 夜自由行規劃，重點安排皮卡丘遊行觀賞日。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
