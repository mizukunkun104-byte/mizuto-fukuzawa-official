import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";

type Props = { work: Work };

export default function WorkCard({ work }: Props) {
  const actionClassName =
    "inline-flex w-fit items-center rounded-md bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-deepBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/70";

  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 ease-out animate-fade-in hover:-translate-y-0.5 hover:border-blue/60 hover:bg-[#171b22]">
      <div className="mb-4 overflow-hidden rounded-lg border border-border bg-[#171a20]">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={work.image}
            alt={`${work.title} の画面`}
            fill
            className="object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue/35 bg-blue/10 px-3 py-1 text-xs text-blue">
            {work.typeLabel}
          </span>
          {work.note && (
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {work.note}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug">{work.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{work.description}</p>

        <div className="mt-5 space-y-4">
          <section className="space-y-2">
            <h4 className="text-sm font-medium text-text">使用技術</h4>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-medium text-text">制作のポイント</h4>
            <div className="flex flex-wrap gap-2">
              {work.points.map((point) => (
                <span key={point} className="rounded-md bg-[#171a20] px-2.5 py-1 text-xs text-muted">
                  {point}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6">
          {work.external ? (
            <a href={work.href} target="_blank" rel="noreferrer" className={actionClassName}>
              {work.actionLabel}
            </a>
          ) : (
            <Link href={work.href} className={actionClassName}>
              {work.actionLabel}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
