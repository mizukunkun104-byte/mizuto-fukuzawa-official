import Image from "next/image";

export default function PlaceholderVisual() {
  return (
    <div className="relative mb-6 h-[340px] w-full overflow-hidden sm:mb-0 sm:h-[460px]">
      <div className="relative mx-auto h-full w-full max-w-[480px] sm:max-w-none">
        <Image
          src="/images/top-visual-mizuto.png"
          alt="Mizuto Fukuzawa official portrait"
          fill
          priority
          className="object-contain object-bottom"
          sizes="(min-width: 768px) 50vw, min(92vw, 480px)"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-base via-base/80 to-transparent sm:w-[34%] sm:via-base/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-base via-base/80 to-transparent sm:h-1/4 sm:via-base/65" />
    </div>
  );
}
