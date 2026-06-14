import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { homeCopy } from "@/content/copy";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Mountain peaks at dawn"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/80 via-background-deep/70 to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-deep/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Men of the Mountain Coaching
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-2">
              {homeCopy.hero.headline}
            </h1>
            <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight gradient-text mb-6">
              {homeCopy.hero.headlineAccent}
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed max-w-xl mb-8">
              {homeCopy.hero.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={siteConfig.links.calendly} external size="lg">
                {homeCopy.hero.primaryCta}
              </Button>
              <Button href="#lead-magnet" variant="outline" size="lg">
                {homeCopy.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-accent opacity-20 blur-2xl rounded-sm" />
              <div className="relative w-72 h-80 card-shadow-lg border border-border rounded-sm overflow-hidden">
                <Image
                  src="/images/john-baker.png"
                  alt="John Baker, founder of Men of the Mountain Coaching"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface border border-border rounded-sm px-4 py-3 card-shadow">
                <p className="font-heading text-sm font-bold uppercase">{siteConfig.coach.name}</p>
                <p className="text-xs text-foreground-muted">{siteConfig.coach.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground-muted">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
