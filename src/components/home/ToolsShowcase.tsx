"use client";

import {
  MessageSquare,
  Search,
  GitCompare,
  Brain,
  Megaphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { tools } from "@/data/tools";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Search,
  GitCompare,
  Brain,
  Megaphone,
  BarChart3,
};

export function ToolsShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 section-fade">
      {/* Decorative gradient orb */}
      <div className="gradient-orb gradient-orb-blue absolute top-1/3 -right-32 h-96 w-96" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Free AI Tools"
            title="AI-Powered Tools for Restorers"
            subtitle="Purpose-built tools that help restoration professionals work smarter, not harder."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = iconMap[tool.icon];
            return (
              <ScrollReveal key={tool.id} delay={index * 0.08}>
                <Card hover className="flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      {Icon && <Icon className="h-5 w-5 text-primary" />}
                    </div>
                    {tool.comingSoon && (
                      <Badge variant="accent">Coming Soon</Badge>
                    )}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-text">
                    {tool.name}
                  </h3>
                  <p className="mb-2 text-xs font-medium text-primary">
                    {tool.tagline}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">
                    {tool.description}
                  </p>
                  <div>
                    {tool.comingSoon ? (
                      <Button variant="secondary" size="sm" disabled>
                        Coming Soon
                      </Button>
                    ) : (
                      <Button
                        href={tool.href || "/tools"}
                        variant="outline"
                        size="sm"
                      >
                        Try Free
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
