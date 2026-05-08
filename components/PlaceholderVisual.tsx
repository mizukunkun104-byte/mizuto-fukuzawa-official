import Image from "next/image";

export default function PlaceholderVisual() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden sm:h-[460px]">
      <Image
        src="/images/top-visual-mizuto.png"
        alt="Mizuto Fukuzawa official portrait"
        fill
        priority
        className="object-contain object-bottom"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-base via-base/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-base via-base/55 to-transparent" />
    </div>
  );
}
