import type { Metadata } from "next";
import { coachingCopy } from "@/content/copy";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one coaching for driven Christian men. Reclaim confidence, health, and identity. Free 30-minute intro session.",
};

export default function CoachingPage() {
  return (
    <>
      <PageHero title={coachingCopy.hero.title} subtitle={coachingCopy.hero.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={coachingCopy.whoItsFor.title} align="left" className="mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {coachingCopy.whoItsFor.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-surface border border-border rounded-sm p-5 card-shadow"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-sm" />
                <span className="text-foreground-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={coachingCopy.outcomes.title} />
          <div className="grid md:grid-cols-2 gap-6">
            {coachingCopy.outcomes.items.map((outcome) => (
              <Card key={outcome.title} hover>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-3">
                  {outcome.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">{outcome.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={coachingCopy.process.title} />
          <div className="grid md:grid-cols-3 gap-6">
            {coachingCopy.process.steps.map((step) => (
              <Card key={step.step} hover className="border-t-2 border-t-accent">
                <span className="font-heading text-3xl font-bold text-accent/40">{step.step}</span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">{step.body}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href={siteConfig.links.calendly} external size="lg">
              Start With a Free Intro Call
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
            {coachingCopy.different.title}
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed">{coachingCopy.different.body}</p>
        </div>
      </section>

      <Testimonials
        title="What clients say"
        subtitle="Honest feedback from men who've done the work."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {coachingCopy.faq.map((item) => (
              <Card key={item.question}>
                <h3 className="font-heading text-base font-bold uppercase tracking-wide mb-2">
                  {item.question}
                </h3>
                <p className="text-foreground-muted leading-relaxed text-sm">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
