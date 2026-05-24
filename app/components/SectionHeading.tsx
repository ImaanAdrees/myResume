export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-primary font-mono text-sm tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <div className="mx-auto h-1 w-20 rounded-full animated-gradient mb-5" />
      {description && (
        <p className="text-muted max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
