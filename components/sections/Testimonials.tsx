import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
}

export function Testimonials({
  title = "Men who've done the work",
  subtitle = "Real results from honest conversations and consistent accountability.",
}: TestimonialsProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} hover className="flex flex-col">
              <Quote className="h-8 w-8 text-accent mb-4 shrink-0" />
              <blockquote className="text-foreground-muted leading-relaxed flex-1 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-sm font-bold uppercase tracking-wide">
                  {testimonial.author}
                </p>
                <p className="text-xs text-foreground-muted mt-1">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
