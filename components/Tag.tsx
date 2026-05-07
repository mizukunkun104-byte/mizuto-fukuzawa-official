export default function Tag({ text }: { text: string }) {
  return <span className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted">{text}</span>;
}
