"use client";

import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";
import { CalendlyWidget } from "@/components/ui/CalendlyWidget";

export function ServiceCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              Let us show you how we can transform your online presence and drive
              real growth for your restoration business.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Or call us directly at {COMPANY.phone}
            </a>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-center text-lg font-semibold text-text">
            Schedule a Free Strategy Call
          </h3>
          <div className="mt-4">
            <CalendlyWidget />
          </div>
        </div>
      </Container>
    </section>
  );
}
