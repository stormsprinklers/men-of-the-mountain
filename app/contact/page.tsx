import type { Metadata } from "next";
import { Mail, MapPin, Calendar } from "lucide-react";
import { contactCopy } from "@/content/copy";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { LeadMagnetForm } from "@/components/sections/LeadMagnetForm";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with John Baker. Book a free 30-minute coaching intro session or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title={contactCopy.hero.title} subtitle={contactCopy.hero.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
            {contactCopy.intro}
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card>
                <Calendar className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading text-base font-bold uppercase tracking-wide mb-2">
                  Book a Session
                </h3>
                <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                  Free 30-minute intro call to explore if coaching is the right fit.
                </p>
                <Button href={siteConfig.links.calendly} external size="sm" className="w-full">
                  Schedule on Calendly
                </Button>
              </Card>

              <Card>
                <Mail className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading text-base font-bold uppercase tracking-wide mb-2">
                  Email
                </h3>
                <a
                  href={siteConfig.links.email}
                  className="text-accent hover:text-white transition-colors text-sm break-all"
                >
                  {siteConfig.coach.email}
                </a>
              </Card>

              <Card>
                <MapPin className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading text-base font-bold uppercase tracking-wide mb-2">
                  Location
                </h3>
                <p className="text-sm text-foreground-muted">{siteConfig.coach.location}</p>
                <p className="text-xs text-foreground-muted mt-2">
                  Coaching sessions conducted online.
                </p>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
