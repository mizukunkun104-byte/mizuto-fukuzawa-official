import Link from "next/link";
import Image from "next/image";

type Props = { title: string; subtitle: string; summary: string; href: string; image: string };
export default function WorkCard({ title, subtitle, summary, href, image }: Props) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 animate-fade-in">
      <div className="mb-4 overflow-hidden rounded-lg border border-border bg-[#171a20]">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={image}
            alt={`${title} visual`}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-blue">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
      <Link href={href} className="mt-4 inline-block text-sm text-text underline-offset-4 hover:text-blue hover:underline">View Detail</Link>
    </article>
  );
}
