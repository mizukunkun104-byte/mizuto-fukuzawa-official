export type Work = {
  slug: string;
  title: string;
  typeLabel: string;
  note?: string;
  description: string;
  technologies: string[];
  points: string[];
  href: string;
  actionLabel: string;
  external?: boolean;
  image: string;
};

export type WorkCategory = {
  title: string;
  description: string;
  works: Work[];
};

export const workCategories: WorkCategory[] = [
  {
    title: "Web / LP制作",
    description: "店舗の魅力を伝え、来店や予約につながる導線を意識したWeb / LP制作です。",
    works: [
      {
        slug: "sumibi-sakaba-madoi",
        title: "炭火酒場まどい｜架空居酒屋LP",
        typeLabel: "架空店舗デモ",
        note: "ポートフォリオ用デモ",
        description:
          "架空の居酒屋を想定して制作したLPデモです。店舗の雰囲気が伝わるビジュアル、メニュー紹介、予約・問い合わせ導線、スマートフォン表示を意識して構成しました。",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "AI画像生成"],
        points: ["飲食店向けLP", "雰囲気設計", "予約導線", "レスポンシブ対応"],
        href: "https://sumibi-sakaba-madoi-lp.vercel.app/",
        actionLabel: "サイトを見る",
        external: true,
        image: "/images/work-sumibi-sakaba-madoi.png",
      },
      {
        slug: "patisserie-lueur",
        title: "Pâtisserie Lueur｜架空ケーキ店LP",
        typeLabel: "架空店舗デモ",
        note: "ポートフォリオ用デモ",
        description:
          "地域のケーキ店を想定して制作したLPデモです。商品紹介、季節限定メニュー、誕生日予約、店舗情報、FAQを整理し、来店・予約につながる導線を意識して構成しました。",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "AI画像生成"],
        points: ["地域店舗向けLP", "商品整理", "予約導線", "FAQ設計", "スマホ対応"],
        href: "https://cake-demo-delta.vercel.app/",
        actionLabel: "サイトを見る",
        external: true,
        image: "/images/work-patisserie-lueur.png",
      },
    ],
  },
  {
    title: "業務改善 / Google Sheets / GAS",
    description: "日々の業務整理や問い合わせ対応を支える、運用を見据えた改善ツールです。",
    works: [
      {
        slug: "work-management-sheet",
        title: "業務管理シート",
        typeLabel: "Google Sheets",
        description:
          "応募案件や作業状況を整理・管理するために作成したGoogleスプレッドシートです。案件情報、進捗、優先度、対応状況を一覧で管理しやすいように設計しました。",
        technologies: ["Google Sheets"],
        points: ["案件管理", "進捗管理", "優先度整理", "業務可視化"],
        href: "/works/work-management-sheet",
        actionLabel: "詳細を見る",
        image: "/images/work-management-sheet.png",
      },
      {
        slug: "staff-navi",
        title: "お仕事ナビ / スタッフ対応ナビ",
        typeLabel: "業務改善アプリ",
        description:
          "アルバイト現場での業務確認や問い合わせ対応を支援するために作成した業務ナビゲーションアプリです。検索、カテゴリ表示、対応手順の確認、利用ログ記録などを通じて、現場の属人化を減らすことを目的にしています。",
        technologies: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript"],
        points: ["業務改善", "マニュアル検索", "対応品質の標準化", "利用ログ蓄積"],
        href: "/works/staff-navi",
        actionLabel: "詳細を見る",
        image: "/images/work-staff-navi.png",
      },
    ],
  },
];

export const relatedWorks: WorkCategory = {
  title: "関連実績",
  description: "このポートフォリオサイト自体の制作実績も掲載しています。",
  works: [
    {
      slug: "personal-website",
      title: "個人ポートフォリオサイト",
      typeLabel: "Webサイト制作",
      description:
        "Next.js、TypeScript、Tailwind CSSで制作した、実績と対応領域を整理するポートフォリオサイトです。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      points: ["情報設計", "レスポンシブ対応", "コンポーネント設計"],
      href: "/works/personal-website",
      actionLabel: "詳細を見る",
      image: "/images/work-personal-website.png",
    },
  ],
};
