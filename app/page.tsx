import Link from "next/link";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export default function HomePage() {
  return (
    <section className="grid items-center gap-8 bg-base md:grid-cols-2 md:gap-10">
      <div className="animate-fade-in space-y-4 sm:space-y-5">
        <p className="text-3xl font-semibold leading-tight sm:text-5xl">
          <span className="name-accent">Mizuto Fukuzawa</span>
        </p>
        <div className="space-y-2">
          <p className="pt-1 text-lg text-blue sm:pt-0 sm:text-2xl">Web Portfolio</p>
          <p className="text-xl text-muted sm:text-3xl">福澤 瑞人</p>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Web制作・LP制作・Googleスプレッドシート・業務改善ツール制作に取り組む学生のポートフォリオです。
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/works"
            className="rounded-md bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-deepBlue"
          >
            制作実績を見る
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted hover:border-blue/60 hover:text-text"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
      <PlaceholderVisual />
    </section>
  );
}
