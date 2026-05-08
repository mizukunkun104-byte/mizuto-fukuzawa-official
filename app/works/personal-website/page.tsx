import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Personal Website | Mizuto Fukuzawa", description: "プロフィールサイト制作プロジェクトの詳細。" };

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  { title: "Overview", body: "このサイトは、自分のプロフィールをまとめるだけでなく、Web制作・公開・運用の流れを一通り学ぶための実践プロジェクトとして制作しています。" },
  { title: "Background", body: "今後、飲食店や個人事業向けのホームページ制作に応用していくことを見据え、まずは自分自身を題材にしてサイト設計の基本を固めることを目的にしました。" },
  { title: "Challenge", body: "情報を見やすく整理しながら、スマホでの可読性とPCでの上品な見え方を両立することが課題でした。過度な演出を避け、落ち着いた印象を保つ必要もありました。" },
  { title: "Approach", body: "Next.js App RouterとTypeScript、Tailwind CSSを採用し、ページごとに役割を明確化。Header / Footer / WorkCardなどを部品化し、再利用性と保守性を高めました。" },
  { title: "Visuals", body: <p>黒基調の背景に青を主アクセントとして配置し、赤は最小限に使用。トップには差し替え可能なプレースホルダービジュアルを置き、今後の正式画像に対応しやすい構造にしました。</p> },
  { title: "Result", body: "複数ページ構成、レスポンシブ、SEOメタデータ設定を含む初期土台を構築できました。GitHubで管理し、Vercel公開を前提とした実践的な構成に整えています。" },
  { title: "Learning", body: "制作前の要件整理の重要性、コンポーネント分割による実装効率、公開を見据えた守秘観点の必要性を学びました。今後は運用改善と実案件想定の導線設計を強化します。" },
];

export default function Page() {
  return (
    <section>
      <PageTitle title="Personal Website" description="自分自身のプロフィールサイト制作" />

      <div className="mb-6 overflow-hidden rounded-xl border border-border bg-[#171a20] p-2 sm:p-3">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/work-personal-website.png"
            alt="Personal Website visual"
            fill
            className="rounded-lg object-contain object-center"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <div className="mt-2 leading-relaxed text-muted">{section.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
