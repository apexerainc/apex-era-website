"use client";

import { cn } from "@/lib/utils";

interface BlogFiltersProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function BlogFilters({ categories, active, onChange }: BlogFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      <button
        onClick={() => onChange("All")}
        className={cn(
          "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
          active === "All"
            ? "bg-primary text-white shadow-md shadow-primary/25"
            : "bg-card text-text-muted hover:bg-card-hover hover:text-text"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            active === category
              ? "bg-primary text-white shadow-md shadow-primary/25"
              : "bg-card text-text-muted hover:bg-card-hover hover:text-text"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
