"use client";

import { Search, Layout, Calculator, Zap, MessageSquare, GitCompare, Brain, Megaphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = iconMap[service.icon];

  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
        />

        <ScrollReveal>
          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
              {Icon && <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />}
            </div>
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                {service.longDescription}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
