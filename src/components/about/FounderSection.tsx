"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";

export function FounderSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Placeholder image area */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="font-heading text-3xl font-bold text-primary">
                    MG
                  </span>
                </div>
                <p className="font-heading text-xl font-semibold text-text">
                  Matt Gregory
                </p>
                <p className="mt-1 text-sm text-text-muted">Founder & CEO</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-border" />
            </div>
          </ScrollReveal>

          {/* Right: Bio content */}
          <ScrollReveal direction="right">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Meet The Founder
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
                <GradientText>Matt Gregory</GradientText>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
                <p>
                  With over 20 years of hands-on experience in the restoration
                  industry, Matt Gregory has seen firsthand the challenges that
                  restoration companies face when it comes to marketing, lead
                  generation, and technology adoption.
                </p>
                <p>
                  As a former restoration company owner, Matt understands the
                  day-to-day realities of running a restoration business — from
                  managing crews and navigating insurance processes to competing
                  for every lead in a crowded market.
                </p>
                <p>
                  Matt founded Apex Era Inc to bridge the gap between digital
                  marketing expertise and deep restoration industry knowledge.
                  His mission is simple: give restorers the same caliber of
                  digital tools and marketing strategies that the biggest brands
                  in the world use — but tailored specifically for the
                  restoration industry.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
