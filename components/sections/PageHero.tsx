interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mountain-divider mt-8 max-w-xs mx-auto" />
      </div>
    </section>
  );
}
