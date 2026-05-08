import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Staff Navi | Mizuto Fukuzawa",
  description: "スタッフ向けナビの詳細。",
};

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  {
    title: "概要",
    body: "新人教育や日々の業務確認を支援するために設計した、Webベースのスタッフ向けナビゲーション画面です。必要な情報に迷わずたどり着けるよう、確認導線の分かりやすさを重視して検証を進めています。",
  },
  {
    title: "背景",
    body: "業務中に「どこを見ればよいか」が分かりにくい場面があり、必要な項目をすぐ確認できる導線の必要性を感じました。情報を蓄積するだけでなく、カテゴリごとに整理して探しやすくすることを重視しました。",
  },
  {
    title: "課題",
    body: (
      <ul className="list-disc pl-5">
        <li>新人が不明点をすぐ確認できない</li>
        <li>必要情報を探しにくい</li>
        <li>教育担当者の負担が大きい</li>
        <li>マニュアルの可読性が低い</li>
        <li>対応品質のばらつき</li>
        <li>責任者確認が必要な場面の判断が難しい</li>
      </ul>
    ),
  },
  {
    title: "取り組み",
    body: "業務カテゴリと確認項目を整理し、迷ったときに必要な手順へ進みやすいナビゲーション構成を設計しました。責任者や先輩に毎回聞かなくても基本事項を確認できることを目指し、スマホ・PCのどちらからでも見やすい画面構成を検証しています。",
  },
  {
    title: "ビジュアル",
    body: "公開用には機密情報を含まないデモ画面のみを使用。実在名や内部マニュアル全文は掲載せず、構造設計と操作導線が伝わる形に調整しています。",
  },
  {
    title: "成果",
    body: "業務に関する情報をカテゴリごとに整理し、新人やスタッフが必要な内容を確認しやすい導線づくりを目指しています。現在は検証段階のため、現場で使いやすい構成や表示内容を調整しながら改善を進めています。",
  },
  {
    title: "学び",
    body: "お仕事表から発展して、業務改善をツール化する発想へつながりました。将来的にはスタッフ向けだけでなく、お客様向け案内への応用可能性も視野に入れています。",
  },
];

export default function Page() {
  return (
    <section>
      <PageTitle title="Staff Navi" description="店舗業務を分かりやすく案内するスタッフ向けナビ" />

      <div className="mb-6 overflow-hidden rounded-xl border border-border bg-[#171a20] p-2 sm:p-3">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/work-staff-navi.png"
            alt="Staff Navi visual"
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
              <h2 className="text-lg text-text font-semibold">{section.title}</h2>
              <div>{section.body}</div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
