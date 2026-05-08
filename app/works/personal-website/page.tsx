import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Personal Website | Mizuto Fukuzawa", description: "プロフィールサイト制作プロジェクトの詳細。" };

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  { title: "Overview", body: "自身のプロフィール・経歴・制作実績を整理し、Web制作の学習とポートフォリオ活用を目的に制作した公式プロフィールサイトです。" },
  { title: "Background", body: "Work Management SheetやStaff Naviのような主要実績を補足する位置づけで、まずは自分自身を題材に、情報設計とページ構成の基本を実践的に学ぶために制作しました。" },
  { title: "Challenge", body: "情報を見やすく整理しながら、スマホでの可読性とPCでの上品な見え方を両立することが課題でした。過度な演出を避け、落ち着いた印象を保つ必要もありました。" },
  { title: "Approach", body: "Next.js App RouterとTypeScript、Tailwind CSSを採用し、ページごとに役割を明確化。Header / Footer / WorkCardなどを部品化し、再利用性と保守性を高めています。公開環境はVercelを前提に構成しています。" },
  { title: "Visuals", body: <><p>黒基調の背景に青を主アクセントとして配置し、赤は最小限に使用。トップには差し替え可能なプレースホルダービジュアルを置き、今後の正式画像に対応しやすい構造にしました。</p><div className="mt-4 overflow-hidden rounded-lg border border-border bg-[#171a20]"><div className="relative aspect-[3/2] w-full"><Image src="/images/work-personal-website.png" alt="Personal Website visual" fill className="object-contain object-center" sizes="(max-width: 768px) 100vw, 900px" /></div></div></> },
  { title: "Result", body: "複数ページ構成、レスポンシブ対応、SEOメタデータ設定を含む初期土台を構築できました。Next.js / TypeScript / Tailwind CSS / Vercelを使った制作実績として、運用を見据えた形に整理しています。" },
  { title: "Learning", body: "制作前の要件整理、デザイン設計と実装のすり合わせ、コンポーネント分割による実装効率の重要性を学びました。今後は店舗サイト制作や個人事業向けサイト制作にも応用していく予定です。" },
];

export default function Page() { return <section><PageTitle title="Personal Website" description="自分自身のプロフィールサイト制作" /><div className="space-y-6">{sections.map((section) => <div key={section.title} className="rounded-xl border border-border bg-card p-5"><h2 className="text-lg font-semibold">{section.title}</h2><div className="mt-2 leading-relaxed text-muted">{section.body}</div></div>)}</div></section>; }
