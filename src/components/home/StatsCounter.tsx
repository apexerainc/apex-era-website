"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";

export function StatsCounter() {
  return (
    <section className="relative py-20 sm:py-24 section-fade">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-text sm:text-5xl">
                  <AnimatedCounter
                    value={stat.numericValue}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted sm:text-base">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
