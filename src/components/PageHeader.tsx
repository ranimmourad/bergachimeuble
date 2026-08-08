export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-navbar/60">
      <div className="container-bm py-12 sm:py-16">
        <h1 className="heading-serif text-3xl sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-ink/70">{subtitle}</p>}
      </div>
    </div>
  );
}
