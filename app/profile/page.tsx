import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Profile | Mizuto Fukuzawa", description: "福澤瑞人の基本情報、価値観、関心領域を紹介します。" };

export default function ProfilePage() {
  return <section><PageTitle title="PROFILE" /><div className="space-y-8"><div><h2 className="text-xl font-semibold">{profile.name}</h2><ul className="mt-3 list-disc space-y-1 pl-5 text-muted">{profile.basics.map((b)=><li key={b}>{b}</li>)}</ul><p className="mt-4 leading-relaxed text-muted">{profile.bio}</p></div><div><h3 className="mb-3 text-lg font-medium">Interests</h3><div className="flex flex-wrap gap-2">{profile.interests.map((i)=><Tag key={i} text={i} />)}</div></div><div><h3 className="mb-3 text-lg font-medium">Values</h3><div className="grid gap-3 sm:grid-cols-2">{profile.values.map((v)=><div key={v} className="rounded-lg border border-border bg-card px-4 py-3 text-muted">{v}</div>)}</div></div></div></section>;
}
