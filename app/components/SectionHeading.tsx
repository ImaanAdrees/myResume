import Reveal from "./Reveal";

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
    <Reveal animation="fade-up" className="text-center mb-10 sm:mb-14">
      <p className="text-primary font-mono text-xs sm:text-sm tracking-widest mb-2 sm:mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
        {title}
      </h2>
      <div className="mx-auto h-1 w-16 sm:w-20 rounded-full animated-gradient mb-4 sm:mb-5" />
      {description && (
        <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto px-2">
          {description}
        </p>
      )}
    </Reveal>
  );
}
