import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TimelineItem from "@/components/TimelineItem";
import { historyItems } from "@/data/history";

export const metadata: Metadata = { title: "History | Mizuto Fukuzawa", description: "福澤瑞人の学習領域、制作への取り組み、業務改善への関心を紹介します。" };

export default function HistoryPage() {
  return <section><PageTitle title="経歴" description="Web制作・業務改善ツール制作につながる学習と取り組みをまとめています。" />{historyItems.map((item)=><TimelineItem key={item.index} {...item} />)}</section>;
}
