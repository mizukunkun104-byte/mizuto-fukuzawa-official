import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export const metadata: Metadata = { title: "Works | Mizuto Fukuzawa", description: "Web制作、LP制作、Googleスプレッドシート、業務改善ツールの制作実績を紹介します。" };

export default function WorksPage() {
  return <section><PageTitle title="制作実績" description="Web制作・LP制作・Googleスプレッドシート・業務改善ツール制作の取り組みをまとめています。" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{works.map((w)=><WorkCard key={w.slug} title={w.title} subtitle={w.subtitle} summary={w.summary} image={w.image} href={`/works/${w.slug}`} />)}</div></section>;
}
