"use client";

import { Search, Layout, Calculator, Zap, MessageSquare, GitCompare, Brain, Megaphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Tool } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Layout,
  Calculator,
  Zap,
  MessageSquare,
  GitCompare,
  Brain,
  Megaphone,
  BarChart3,
};

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const Icon = iconMap[tool.icon];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={cn(
          "group flex h-full flex-col rounded-xl border border-border bg-card p-6",
          "transition-all duration-300",
          "hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            {Icon && <Icon className="h-6 w-6 text-primary" />}
          </div>
          {tool.comingSoon && (
            <Badge variant="accent">Coming Soon</Badge>
          )}
        </div>

        <h3 className="mt-4 font-heading text-lg font-semibold text-text">
          {tool.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {tool.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {tool.description}
        </p>

        <div className="mt-5">
          {tool.comingSoon ? (
            <Button variant="secondary" size="sm" disabled>
              Coming Soon
            </Button>
          ) : (
            <Button href={tool.href || "#"} size="sm">
              Try Free
            </Button>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
