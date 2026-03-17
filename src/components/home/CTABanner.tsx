"use client";

import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Premium gradient background — blends with page gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/3 to-transparent" />

      {/* Decorative gradient orbs for depth */}
      <div className="gradient-orb gradient-orb-blue absolute -top-24 -right-24 h-96 w-96" />
      <div className="gradient-orb gradient-orb-purple absolute -bottom-24 -left-24 h-80 w-80" />
      <div className="gradient-orb gradient-orb-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 opacity-40" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Join 100+ restoration companies that trust Apex Era to grow their
              business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                <Phone className="h-4 w-4" />
                Book a Call
              </Button>
              <Button href="/contact?audit=true" variant="outline" size="lg">
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
