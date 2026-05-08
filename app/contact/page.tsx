import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact | Mizuto Fukuzawa", description: "福澤瑞人へのお問い合わせページです。" };

export default function ContactPage() {
  return <section><PageTitle title="お問い合わせ" description="お問い合わせフォームは現在準備中です。制作や活動に関するご連絡方法は、今後こちらのページでご案内予定です。" /><ContactForm /></section>;
}
