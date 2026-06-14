import { Card } from "@/components/ui/Card";

interface EpisodeCardProps {
  number: number;
  title: string;
  subtitle?: string;
  date: string;
  duration: string;
  description: string;
}

export function EpisodeCard({
  number,
  title,
  subtitle,
  date,
  duration,
  description,
}: EpisodeCardProps) {
  return (
    <Card hover>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
          Ep. {number}
        </span>
        <span className="text-xs text-foreground-muted">{date}</span>
        <span className="text-xs text-foreground-muted">· {duration}</span>
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-accent mb-3">{subtitle}</p>}
      <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
