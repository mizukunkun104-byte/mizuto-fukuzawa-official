import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Contact | Mizuto Fukuzawa", description: "福澤瑞人へのお問い合わせページです。" };

const instagramUrl = "https://www.instagram.com/mizuto._.fukuzawa";
const mailToUrl =
  "mailto:mizukunkun104@gmail.com?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E7%A6%8F%E6%BE%A4%E7%91%9E%E4%BA%BA%E6%A7%98%0D%0A%0D%0A%E4%BB%A5%E4%B8%8B%E3%81%AE%E5%86%85%E5%AE%B9%E3%81%A7%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%E3%80%90%E3%81%8A%E5%90%8D%E5%89%8D%E3%80%91%0D%0A%E3%80%90%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%E3%80%91%0D%0A";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <PageTitle
        title="お問い合わせ"
        description="制作のご相談、活動に関するご連絡、その他お問い合わせは、Instagramまたはメールよりお願いいたします。"
      />

      <div className="space-y-4">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-cyan-500/40 bg-zinc-900/80 p-5 transition hover:border-cyan-400 hover:bg-zinc-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <p className="text-base font-semibold text-cyan-300">Instagramで連絡する</p>
          <p className="mt-2 text-sm text-zinc-300">@mizuto._.fukuzawa</p>
        </a>

        <a
          href={mailToUrl}
          className="block rounded-xl border border-cyan-500/40 bg-zinc-900/80 p-5 transition hover:border-cyan-400 hover:bg-zinc-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <p className="text-base font-semibold text-cyan-300">メールで連絡する</p>
          <p className="mt-2 text-sm text-zinc-300">mizukunkun104@gmail.com</p>
        </a>
      </div>

      <p className="text-sm text-zinc-400">内容を確認のうえ、可能な範囲で返信いたします。</p>
    </section>
  );
}
