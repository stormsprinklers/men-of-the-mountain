import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-3xl",
        className
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-muted leading-relaxed">{subtitle}</p>
      )}
      <div className="mountain-divider mt-6" />
    </div>
  );
}
