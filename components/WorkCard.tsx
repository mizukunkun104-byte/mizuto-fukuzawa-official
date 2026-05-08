import Link from "next/link";
import Image from "next/image";

type Props = { title: string; subtitle: string; summary: string; href: string; image: string };
export default function WorkCard({ title, subtitle, summary, href, image }: Props) {
  return (
    <Link
      href={href}
      aria-label={`${title} の詳細を見る`}
      className="group block rounded-xl border border-border bg-card p-5 transition-all duration-200 ease-out animate-fade-in hover:-translate-y-0.5 hover:border-blue/60 hover:bg-[#171b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/70"
    >
      <article>
        <div className="mb-4 overflow-hidden rounded-lg border border-border bg-[#171a20]">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={image}
              alt={`${title} visual`}
              fill
              className="object-contain object-center transition-transform duration-200 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-blue">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
      </article>
    </Link>
  );
}
