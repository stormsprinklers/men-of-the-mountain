import type { Metadata } from "next";
import Image from "next/image";
import { aboutCopy } from "@/content/copy";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About John Baker",
  description:
    "Meet John Baker — founder of Men of the Mountain Coaching. From six figures to purpose-driven coaching for Christian men.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutCopy.hero.title} subtitle={aboutCopy.hero.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full card-shadow-lg border border-border rounded-sm overflow-hidden">
              <Image
                src="/images/john-baker.png"
                alt="John Baker"
                fill
                className="object-cover object-[center_62%]"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">
                {aboutCopy.story.title}
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed text-lg">
                {aboutCopy.story.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 text-center">
            {aboutCopy.credentials.title}
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {aboutCopy.credentials.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-surface border border-border rounded-sm p-4 card-shadow"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-sm" />
                <span className="text-foreground-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10">
            <blockquote className="font-heading text-xl md:text-2xl font-medium italic text-white mb-6 leading-relaxed">
              &ldquo;{aboutCopy.mission.quote}&rdquo;
            </blockquote>
            <p className="text-foreground-muted leading-relaxed">{aboutCopy.mission.body}</p>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 text-center">
            {aboutCopy.personal.title}
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed text-lg">
            {aboutCopy.personal.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href={siteConfig.links.calendly} external size="lg">
              Book Your Free Session
            </Button>
          </div>
        </div>
      </section>

      <CTABand showForm={false} />
    </>
  );
}
