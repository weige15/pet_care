import "./globals.css";

export const metadata = {
  title: "毛毛沐場寵物沙龍",
  description: "桃園新屋精緻寵物洗護沙龍，提供洗澡、造型美容、深層護毛與皮膚敏感照護。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
