import FadeIn from "./FadeIn";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <FadeIn className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <h2 className="heading-serif mt-2 text-3xl sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-ink/70">{subtitle}</p>}
    </FadeIn>
  );
}
