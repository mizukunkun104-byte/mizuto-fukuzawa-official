import Image from "next/image";

export default function PlaceholderVisual() {
  return (
    <div className="animate-visual-entrance animate-gentle-float relative mx-auto mb-6 h-[330px] w-full max-w-[520px] overflow-hidden bg-base sm:mb-0 sm:h-[460px] sm:max-w-none">
      <Image
        src="/images/top-visual-mizuto.png"
        alt="Mizuto Fukuzawa official portrait"
        fill
        priority
        className="object-contain object-[center_bottom] md:object-[58%_bottom]"
        sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 94vw"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[44%] bg-gradient-to-r from-base via-base/80 to-transparent md:w-[48%] md:from-base md:via-base/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-base via-base/80 to-transparent md:h-[38%] md:via-base/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[24%] bg-gradient-to-b from-base via-base/70 to-transparent md:h-[32%] md:via-base/85" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[10%] bg-gradient-to-l from-base/90 via-base/45 to-transparent md:block" />
    </div>
  );
}
