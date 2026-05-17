import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import WorkCard from "@/components/WorkCard";
import { relatedWorks, workCategories } from "@/data/works";

export const metadata: Metadata = {
  title: "Works | Mizuto Fukuzawa",
  description:
    "Web制作、LP制作、Googleスプレッドシート、Google Apps Scriptを使った業務改善ツールの制作実績を紹介します。",
};

export default function WorksPage() {
  return (
    <section>
      <PageTitle
        title="制作実績"
        description="Web制作・LP制作を先にご覧いただけるように整理し、その後にGoogle SheetsやGASを使った業務改善ツールをまとめています。"
        descriptionClassName="max-w-none"
      />

      <div className="space-y-10">
        {workCategories.map((category) => (
          <section key={category.title} className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">
                <span className="heading-accent">{category.title}</span>
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted">{category.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {category.works.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              <span className="heading-accent">{relatedWorks.title}</span>
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">{relatedWorks.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {relatedWorks.works.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
