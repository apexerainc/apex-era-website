"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 section-fade">
      {/* Decorative gradient orb */}
      <div className="gradient-orb gradient-orb-purple absolute top-1/4 -left-32 h-96 w-96" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image placeholder */}
          <ScrollReveal direction="left">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl glass">
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  APEX ERA
                </div>
                <p className="text-sm text-text-muted">
                  {COMPANY.tagline}
                </p>
              </div>
              {/* Decorative gradient circles */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-accent/10 blur-[60px]" />
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <ScrollReveal direction="right">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                About Us
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Built By Restoration Professionals
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                Apex Era was founded by Matt Gregory, a restoration industry
                veteran with over 20 years of hands-on experience. After
                running his own restoration company, Matt saw firsthand how
                difficult it was for restorers to find marketing partners who
                truly understood the industry. Generic agencies did not know the
                difference between a Category 2 water loss and a Category 3, and
                it showed in their work.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                That is why Apex Era exists — to provide restoration companies
                with the digital marketing expertise they need, delivered by
                people who speak their language and understand their business
                inside and out.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
