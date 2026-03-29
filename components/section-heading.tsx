export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
