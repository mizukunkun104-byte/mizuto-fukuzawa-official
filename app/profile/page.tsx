import type { Metadata } from "next";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Profile | Mizuto Fukuzawa",
  description: "福澤瑞人の対応領域、人物像、関心領域を紹介します。",
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
            <p>{profile.bio}</p>
            <p>
              現在は、LP・ポートフォリオサイトの制作、Googleスプレッドシートを使った業務管理、Webベースの案内画面づくりを中心に制作しています。派手な表現よりも、依頼内容や利用者に合わせて、必要な情報が分かりやすく届く形に整えることを大切にしています。
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
