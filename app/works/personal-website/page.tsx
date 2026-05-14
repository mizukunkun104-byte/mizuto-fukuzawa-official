import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "個人ポートフォリオサイト | Mizuto Fukuzawa", description: "個人ポートフォリオサイト制作プロジェクトの詳細です。" };

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  { title: "概要", body: "このサイトは、対応領域や制作実績を整理し、Web制作や業務改善ツール制作の実績として提示できるポートフォリオとして制作しています。" },
  { title: "背景", body: "小規模なWebサイトやLP制作、業務改善ツール制作に応用していくことを見据え、構成設計・実装・公開・運用の流れを実践することを目的にしました。" },
  { title: "課題", body: "制作実績を分かりやすく見せながら、個人情報を出しすぎない構成に整えることが課題でした。スマホでの可読性とPCでの落ち着いた見え方の両立も意識しました。" },
  { title: "取り組み", body: "Next.js App RouterとTypeScript、Tailwind CSSを採用し、ページごとに役割を明確化。Header / Footer / WorkCardなどを部品化し、再利用性と保守性を高めました。" },
  { title: "ビジュアル", body: <p>黒基調の背景に青を主アクセントとして配置し、落ち着いた印象で制作物が見やすい構成にしています。トップには差し替え可能なビジュアルを置き、今後の更新にも対応しやすい構造にしました。</p> },
  { title: "成果", body: "複数ページ構成、レスポンシブ対応、SEOメタデータ設定を含む初期土台を構築しました。GitHubで管理し、Vercel公開を前提とした実践的な構成に整えています。" },
  { title: "学び", body: "制作前の要件整理、コンポーネント分割による実装効率、公開を見据えた個人情報・守秘観点の重要性を学びました。今後は実案件を想定した導線設計と改善提案の見せ方を強化します。" },
];

export default function Page() {
  return (
    <section>
      <PageTitle title="個人ポートフォリオサイト" description="Web制作・公開・運用の実践" />

      <div className="mb-6 overflow-hidden rounded-xl border border-border bg-[#171a20] p-2 sm:p-3">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/work-personal-website.png"
            alt="個人ポートフォリオサイトの画面"
            fill
            className="rounded-lg object-contain object-center"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="space-y-7 text-muted leading-relaxed sm:space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-2">
              <h2 className="text-lg text-text font-semibold heading-accent">{section.title}</h2>
              <div>{section.body}</div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
