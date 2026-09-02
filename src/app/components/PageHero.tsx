export default function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-brown/10 bg-brown-deep text-cream">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20">
        {kicker && (
          <p className="text-xs uppercase tracking-[0.28em] text-gold">{kicker}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          {title}
        </h1>
        {lede && <p className="mt-5 max-w-2xl text-base leading-relaxed text-orange-pale/85">{lede}</p>}
      </div>
    </section>
  );
}
