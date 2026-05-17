type Props = { title: string; description?: string; descriptionClassName?: string };

export default function PageTitle({ title, description, descriptionClassName = "max-w-3xl" }: Props) {
  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl">
        <span className="heading-accent">{title}</span>
      </h1>
      {description && (
        <p className={`mt-3 text-base leading-relaxed text-muted ${descriptionClassName}`}>{description}</p>
      )}
    </div>
  );
}
