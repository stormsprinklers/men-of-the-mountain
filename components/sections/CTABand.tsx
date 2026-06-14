import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LeadMagnetForm } from "@/components/sections/LeadMagnetForm";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
}

export function CTABand({
  title = "Ready to reclaim your life?",
  subtitle = "Book a free 30-minute intro session. No pressure. No pitch. Just an honest conversation to see if this is the right fit.",
  showForm = true,
}: CTABandProps) {
  return (
    <section className="py-20 lg:py-28 bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">{subtitle}</p>
            <Button href={siteConfig.links.calendly} external size="lg">
              Book Your Free 30-Min Session
            </Button>
            <p className="mt-4 text-sm text-foreground-muted">
              Or email{" "}
              <a
                href={siteConfig.links.email}
                className="text-accent hover:text-white transition-colors"
              >
                {siteConfig.coach.email}
              </a>
            </p>
          </div>

          {showForm && (
            <div id="lead-magnet">
              <LeadMagnetForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
