import PlaceholderVisual from "@/components/PlaceholderVisual";

export default function HomePage() {
  return (
    <section className="top-ambient-motion relative grid items-center gap-8 overflow-hidden bg-base md:grid-cols-2 md:gap-10">
      <div className="space-y-2 sm:space-y-3">
        <p className="animate-rise-in text-3xl font-semibold leading-tight sm:text-5xl">Mizuto Fukuzawa</p>
        <p className="animate-rise-in-delay-1 pt-1 text-lg text-blue sm:pt-0 sm:text-2xl">Official Website</p>
        <p className="animate-rise-in-delay-2 text-xl text-muted sm:text-3xl">福澤 瑞人</p>
      </div>
      <PlaceholderVisual />
    </section>
  );
}
