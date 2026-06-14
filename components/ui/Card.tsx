import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-sm card-shadow p-6",
        hover && "transition-all duration-200 hover:border-white/20 hover:card-shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
