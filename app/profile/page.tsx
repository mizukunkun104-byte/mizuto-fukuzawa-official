import type { Metadata } from "next";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Profile | Mizuto Fukuzawa",
  description: "福澤瑞人の基本情報、人物像、関心領域を紹介します。",
};

export default function ProfilePage() {
  return (
    <section>
      <PageTitle title="プロフィール" />

      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <h2 className="text-xl font-semibold heading-accent">{profile.name}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              {profile.basics.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
            <Image
              src="/images/top-visual-mizuto.png"
              alt="福澤瑞人のポートレート"
              width={720}
              height={960}
              className="w-full rounded-xl border border-border/70 object-cover shadow-sm"
              priority
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium heading-accent">人物像</h3>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              福澤瑞人は、近畿大学 経営学部 経営学科 ITビジネスコースに在籍し、Web制作・IT・業務改善に関心を持つ学生です。興味を持った分野に対して自分で調べ、試しながら形にしていく姿勢があり、現在はプロフィールサイト制作や業務改善ツールの制作を通して、身近な課題を分かりやすい仕組みに落とし込むことに取り組んでいます。
            </p>
            <p>
              アルバイト現場での経験をきっかけに、業務の見える化や新人が確認しやすい仕組みづくりにも関心を持ち、GoogleスプレッドシートやWebベースのナビ画面を活用した改善にも取り組んでいます。派手な表現よりも、実際に使いやすく、相手に伝わりやすい形に整えることを意識しています。
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium heading-accent">興味・関心</h3>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((i) => (
              <Tag key={i} text={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
