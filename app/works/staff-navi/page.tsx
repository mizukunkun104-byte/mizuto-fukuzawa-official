import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "店舗スタッフ向け業務ナビ | Mizuto Fukuzawa",
  description: "業務手順の確認導線をまとめたWebツールの制作実績です。",
};

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  {
    title: "概要",
    body: "日々の業務確認を支援するために設計した、Webベースのスタッフ向けナビゲーション画面です。必要な情報に迷わずたどり着けるよう、確認導線の分かりやすさを重視して検証を進めています。",
  },
  {
    title: "背景",
    body: "業務中に「どこを見ればよいか」が分かりにくい場面があり、必要な項目をすぐ確認できる導線の必要性を感じました。情報を蓄積するだけでなく、カテゴリごとに整理して探しやすくすることを重視しました。",
  },
  {
    title: "課題",
    body: (
      <ul className="list-disc pl-5">
        <li>不明点をすぐ確認できない</li>
        <li>必要情報を探しにくい</li>
        <li>確認対応が一部メンバーに集中しやすい</li>
        <li>マニュアルの可読性が低い</li>
        <li>対応品質のばらつき</li>
        <li>確認が必要な場面の判断が難しい</li>
      </ul>
    ),
  },
  {
    title: "取り組み",
    body: "業務カテゴリと確認項目を整理し、迷ったときに必要な手順へ進みやすいナビゲーション構成を設計しました。基本事項を自分で確認できることを目指し、スマホ・PCのどちらからでも見やすい画面構成を検証しています。",
  },
  {
    title: "ビジュアル",
    body: "公開用には掲載用に再構成したデモ画面のみを使用しています。固有名詞や具体的な運用内容は掲載せず、構造設計と操作導線が伝わる形に調整しています。",
  },
  {
    title: "成果",
    body: "業務に関する情報をカテゴリごとに整理し、スタッフが必要な内容を確認しやすい導線づくりを目指しています。現在は検証段階のため、使いやすい構成や表示内容を調整しながら改善を進めています。",
  },
  {
    title: "学び",
    body: "業務管理シートから発展して、業務改善をWebツール化する発想へつながりました。利用者が迷わず確認できる構成を考えることで、情報設計と導線設計の重要性を学びました。",
  },
];

export default function Page() {
  return (
    <section>
      <PageTitle title="店舗スタッフ向け業務ナビ" description="業務手順の確認導線をまとめたWebツール" />

      <div className="mb-6 overflow-hidden rounded-xl border border-border bg-[#171a20] p-2 sm:p-3">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/work-staff-navi.png"
            alt="店舗スタッフ向け業務ナビのデモ画面"
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
