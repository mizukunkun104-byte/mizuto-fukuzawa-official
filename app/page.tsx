import PlaceholderVisual from "@/components/PlaceholderVisual";

export default function HomePage() {
  return (
    <section className="grid items-center gap-8 bg-base md:grid-cols-2 md:gap-10">
      <div className="animate-fade-in space-y-2 sm:space-y-3">
        <p className="text-3xl font-semibold leading-tight sm:text-5xl">
          <span className="name-accent">Mizuto Fukuzawa</span>
        </p>
        <p className="pt-1 text-lg text-blue sm:pt-0 sm:text-2xl">Official Website</p>
        <p className="text-xl text-muted sm:text-3xl">福澤 瑞人</p>
      </div>
      <PlaceholderVisual />
    </section>
  );
}
