import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export const metadata: Metadata = { title: "Works | Mizuto Fukuzawa", description: "福澤瑞人が取り組んできた制作物や業務改善の取り組みを紹介します。" };

export default function WorksPage() {
  return <section><PageTitle title="WORKS" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{works.map((w)=><WorkCard key={w.slug} title={w.title} subtitle={w.subtitle} summary={w.summary} image={w.image} href={`/works/${w.slug}`} />)}</div></section>;
}
