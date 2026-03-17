import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className, hover = false, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass
          ? "glass glass-hover"
          : "border border-border bg-card",
        hover && "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
