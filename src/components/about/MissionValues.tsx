"use client";

import { Shield, Target, Lightbulb, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Shield,
    title: "Industry Expertise",
    description:
      "Built by restorers who understand your business from the inside out.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Every strategy is measured by real metrics: leads generated, rankings improved, revenue grown.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We leverage AI and cutting-edge technology to give you an unfair advantage.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our success. We grow when you grow.",
  },
];

export function MissionValues() {
  return (
    <section className="border-y border-border bg-background-elevated py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Apex Era"
            title="Our Mission & Values"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              To empower restoration professionals with the digital tools and
              marketing strategies they need to grow their businesses and serve
              their communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <Card hover className="text-center h-full">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
