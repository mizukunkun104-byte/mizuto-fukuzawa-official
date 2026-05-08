import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TimelineItem from "@/components/TimelineItem";
import { historyItems } from "@/data/history";

export const metadata: Metadata = { title: "History | Mizuto Fukuzawa", description: "福澤瑞人の幼少期から現在までの歩みを紹介します。" };

export default function HistoryPage() {
  return <section><PageTitle title="経歴" />{historyItems.map((item)=><TimelineItem key={item.index} {...item} />)}</section>;
}
