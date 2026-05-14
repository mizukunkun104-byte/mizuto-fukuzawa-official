import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Contact | Mizuto Fukuzawa", description: "制作のご相談・ご依頼に関するお問い合わせページです。" };

const mailToUrl =
  "mailto:mizukunkun104@gmail.com?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E7%A6%8F%E6%BE%A4%E7%91%9E%E4%BA%BA%E6%A7%98%0D%0A%0D%0A%E4%BB%A5%E4%B8%8B%E3%81%AE%E5%86%85%E5%AE%B9%E3%81%A7%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%E3%80%90%E3%81%8A%E5%90%8D%E5%89%8D%E3%80%91%0D%0A%E3%80%90%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%E3%80%91%0D%0A";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <PageTitle
        title="お問い合わせ"
        description="制作のご相談・ご依頼に関するご連絡は、メールよりお願いいたします。"
      />

      <div className="max-w-xl">
        <a
          href={mailToUrl}
          className="inline-flex rounded-md bg-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-deepBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          メールで連絡する
        </a>
      </div>

      <p className="text-sm text-zinc-400">内容を確認のうえ、可能な範囲で返信いたします。</p>
    </section>
  );
}
