import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winter Dashboard ❄️",
  description: "Dashboard với Hybrid Rendering - Server & Client Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
