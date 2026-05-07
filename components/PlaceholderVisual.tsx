export default function PlaceholderVisual() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#111621] via-[#101319] to-[#191117] sm:h-[460px]">
      <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-blue/30 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-28 w-28 rounded-full bg-accentRed/20 blur-2xl" />
      <p className="absolute bottom-4 right-4 text-xs text-muted">Visual image will be added</p>
    </div>
  );
}
