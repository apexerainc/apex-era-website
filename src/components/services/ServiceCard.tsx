"use client";

import Link from "next/link";
import { ArrowRight, Search, Layout, Calculator, Zap, MessageSquare, GitCompare, Brain, Megaphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types";
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

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group block rounded-xl border border-border bg-card p-6 sm:p-8",
          "transition-all duration-300",
          "hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        )}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            {Icon && <Icon className="h-6 w-6 text-primary" />}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-semibold text-text">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {service.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
