import PlaceholderVisual from "@/components/PlaceholderVisual";

export default function HomePage() {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2">
      <div className="animate-fade-in space-y-3">
        <p className="text-4xl font-semibold sm:text-5xl">Mizuto Fukuzawa</p>
        <p className="text-xl text-blue sm:text-2xl">Official Website</p>
        <p className="text-2xl text-muted sm:text-3xl">福澤 瑞人</p>
      </div>
      <PlaceholderVisual />
    </section>
  );
}
