import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "创意实验室 | 个人作品集",
  description:
    "那些没能赚钱，但值得被记住的想法。个人创意项目作品集，记录每一次创业尝试与技术探索。",
  keywords: ["作品集", "开源项目", "创意", "开发者", "portfolio"],
  openGraph: {
    title: "创意实验室 | 个人作品集",
    description: "那些没能赚钱，但值得被记住的想法。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050508] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
