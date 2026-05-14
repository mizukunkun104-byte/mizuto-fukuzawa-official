import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "業務管理シート | Mizuto Fukuzawa",
  description: "Googleスプレッドシートを使った業務管理シートの制作実績です。",
};

type Section = { title: string; body: ReactNode };

const sections: Section[] = [
  {
    title: "概要",
    body: "日々の確認事項や担当状況を整理するために、Googleスプレッドシートを活用した業務管理シートを作成しました。公開ページでは固有名詞や具体的な運用内容を伏せ、仕組みの考え方に焦点を当てています。",
  },
  {
    title: "背景",
    body: "担当する作業や優先順位が分かりにくい場面があり、口頭共有だけでは確認漏れや対応のばらつきが起きやすい点に課題を感じました。",
  },
  {
    title: "課題",
    body: (
      <ul className="list-disc pl-5">
        <li>次に確認する作業が分かりにくい</li>
        <li>共有内容にばらつきが出やすい</li>
        <li>確認事項の抜け漏れ</li>
        <li>忙しい時間帯の確認待ち</li>
        <li>一部メンバーへの確認負担の集中</li>
        <li>担当の偏り</li>
        <li>口頭中心の情報共有</li>
      </ul>
    ),
  },
  {
    title: "取り組み",
    body: "時間帯ごとに確認項目を分け、担当者や進捗を選択できる設計にしました。役割ごとに優先度を整理し、誰が何を行うかを明確化。Google Apps Scriptで定期的に入力状態を整える仕組みも実装しました。",
  },
  {
    title: "ビジュアル",
    body: "公開ページでは、掲載用に再構成したデモUIのみを使用しています。公開範囲に配慮しながら、業務導線や情報整理の構造が伝わる見せ方にしています。",
  },
  {
    title: "成果",
    body: "確認事項を一覧化することで、担当状況や未対応項目を把握しやすい形に整理しました。スタッフが自分で確認しやすい環境づくりを目指した改善活動として継続しています。",
  },
  {
    title: "学び",
    body: "業務上の課題を抽出し、情報を整理して仕組みとして改善する流れを実践できました。今後は利用状況を確認しながら、項目整理や操作性の改善を進めます。",
  },
];

export default function Page() {
  return (
    <section>
      <PageTitle title="業務管理シート" description="担当・進捗を整理するGoogleスプレッドシート" />

      <div className="mb-6 overflow-hidden rounded-xl border border-border bg-[#171a20] p-2 sm:p-3">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/work-management-sheet.png"
            alt="業務管理シートのデモ画面"
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
