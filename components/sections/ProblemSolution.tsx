import { homeCopy } from "@/content/copy";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={homeCopy.problem.title}
          subtitle={homeCopy.problem.intro}
        />

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {homeCopy.problem.points.map((point) => (
            <Card key={point.title} hover className="border-l-2 border-l-accent">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-3">
                {point.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">{point.body}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
              {homeCopy.solution.title}
            </h3>
            <p className="text-foreground-muted text-lg leading-relaxed mb-6">
              {homeCopy.solution.body}
            </p>
          </div>
          <ul className="space-y-4">
            {homeCopy.solution.differentiators.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-surface border border-border rounded-sm p-4 card-shadow"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-sm" />
                <span className="text-foreground-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
