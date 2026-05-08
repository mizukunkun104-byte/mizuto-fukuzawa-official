type Props = { title: string; description?: string };

export default function PageTitle({ title, description }: Props) {
  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">
        <span className="heading-accent">{title}</span>
      </h1>
      {description && <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
