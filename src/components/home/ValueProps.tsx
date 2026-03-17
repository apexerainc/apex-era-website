"use client";

import { Target, MapPin, Wrench, Bot } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const valueProps = [
  {
    icon: Target,
    title: "More Qualified Leads",
    description:
      "Our SEO and marketing strategies drive real leads from homeowners and insurance companies who need your services.",
  },
  {
    icon: MapPin,
    title: "Local Market Domination",
    description:
      "Rank #1 in your local market with our proven restoration-focused SEO strategies.",
  },
  {
    icon: Wrench,
    title: "Built By Restorers",
    description:
      "Our team has 20+ years of hands-on restoration experience. We speak your language.",
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description:
      "Free AI tools built specifically for the restoration industry to streamline your operations.",
  },
];

export function ValueProps() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 section-fade">
      {/* Decorative gradient orb */}
      <div className="gradient-orb gradient-orb-blue absolute -top-10 -right-32 h-72 w-72" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, index) => (
            <ScrollReveal key={prop.title} delay={index * 0.1}>
              <div className="glass glass-hover rounded-2xl p-6 h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {prop.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
