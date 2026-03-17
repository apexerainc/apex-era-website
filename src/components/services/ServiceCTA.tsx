"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

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
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={`tel:${COMPANY.phoneRaw}`}
                variant="outline"
                size="lg"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
