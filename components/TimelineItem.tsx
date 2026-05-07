export default function TimelineItem({ index, title, body }: { index: string; title: string; body: string }) {
  return <div className="relative border-l border-border pl-6 pb-8"><span className="absolute -left-3 top-0 rounded-full border border-blue bg-base px-2 text-xs text-blue">{index}</span><h3 className="mb-2 text-lg font-medium">{title}</h3><p className="text-muted leading-relaxed">{body}</p></div>;
}
