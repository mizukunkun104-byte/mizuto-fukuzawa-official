import Link from "next/link";

type Props = { title: string; subtitle: string; summary: string; href: string };
export default function WorkCard({ title, subtitle, summary, href }: Props) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 animate-fade-in">
      <div className="mb-4 h-40 rounded-lg border border-border bg-gradient-to-br from-[#1a2338] to-[#171a20]" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-blue">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
      <Link href={href} className="mt-4 inline-block text-sm text-text underline-offset-4 hover:text-blue hover:underline">View Detail</Link>
    </article>
  );
}
