import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact | Mizuto Fukuzawa", description: "福澤瑞人へのお問い合わせページです。" };

export default function ContactPage() {
  return <section><PageTitle title="CONTACT" description="お問い合わせや制作のご相談は、下記フォームまたはSNSよりご連絡ください。" /><ContactForm /></section>;
}
