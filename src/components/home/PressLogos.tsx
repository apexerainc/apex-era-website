"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

export function PressLogos() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 section-fade">
      {/* Very subtle decorative orb */}
      <div className="gradient-orb gradient-orb-blue absolute -bottom-16 right-1/4 h-48 w-48 opacity-50" />

      <Container className="relative z-10">
        <ScrollReveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            <div className="text-2xl font-bold tracking-tight text-text-muted/50 transition-colors duration-300 hover:text-text-muted sm:text-3xl">
              C&amp;R Magazine
            </div>
            <div className="text-2xl font-bold tracking-tight text-text-muted/50 transition-colors duration-300 hover:text-text-muted sm:text-3xl">
              Digital Journal
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
