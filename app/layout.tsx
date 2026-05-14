import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mizuto Fukuzawa Portfolio",
  description: "福澤瑞人のポートフォリオサイト。Web制作、LP制作、Googleスプレッドシート、業務改善ツールの制作実績を掲載しています。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-180px)] w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
