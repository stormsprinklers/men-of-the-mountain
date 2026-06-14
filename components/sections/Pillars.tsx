import { Mountain, Shield, Heart } from "lucide-react";
import { homeCopy } from "@/content/copy";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  mountain: Mountain,
  shield: Shield,
  heart: Heart,
};

export function Pillars() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={homeCopy.pillars.title}
          subtitle={homeCopy.pillars.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {homeCopy.pillars.items.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <Card key={pillar.title} hover className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 gradient-accent rounded-sm mb-6 card-shadow">
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">{pillar.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
