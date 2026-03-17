"use client";

import Link from "next/link";
import {
  Search,
  Layout,
  Calculator,
  Zap,
  ShieldCheck,
  Settings,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Layout,
  Calculator,
  Zap,
  ShieldCheck,
  Settings,
};

const serviceCards = [
  {
    icon: "Search",
    title: "SEO & Lead Generation",
    description:
      "Dominate local search and generate qualified leads through proven restoration-focused SEO strategies.",
    href: "/services/seo-lead-generation",
  },
  {
    icon: "Layout",
    title: "Website Design",
    description:
      "Conversion-optimized websites that turn visitors into customers, built by industry experts.",
    href: "/services/website-design",
  },
  {
    icon: "Calculator",
    title: "Remote Estimates",
    description:
      "Professional Xactimate and Symbility estimates by certified estimators with 20+ years experience.",
    href: "/services/remote-estimates",
  },
  {
    icon: "Zap",
    title: "Custom Automations",
    description:
      "AI-powered automations that streamline operations from lead follow-up to job scheduling.",
    href: "/services/automations",
  },
  {
    icon: "ShieldCheck",
    title: "Claims Support",
    description:
      "Expert support navigating insurance claims, supplements, and carrier negotiations.",
    href: "/contact",
  },
  {
    icon: "Settings",
    title: "Managed Services",
    description:
      "Full-service digital marketing management so you can focus on running your business.",
    href: "/contact",
  },
];

export function ServiceGrid() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 section-fade">
      {/* Decorative gradient orbs */}
      <div className="gradient-orb gradient-orb-cyan absolute -top-24 -left-32 h-72 w-72" />
      <div className="gradient-orb gradient-orb-blue absolute -bottom-20 -right-40 h-80 w-80" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Services That Drive Results"
            subtitle="From SEO and web design to AI-powered automations, we provide everything restoration companies need to grow."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <Link href={service.href} className="group block h-full">
                  <Card hover className="relative h-full overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent" />

                    <div className="relative">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                        {Icon && <Icon className="h-5 w-5 text-primary" />}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-text">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-text-muted">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
