"use client";

import type { ProcessStep } from "@/types";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="border-y border-border bg-background-elevated py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            subtitle="A proven, repeatable process that delivers results for every client."
          />
        </ScrollReveal>

        <div className="relative mt-14">
          {/* Horizontal connector line (desktop only) */}
          <div className="absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] hidden h-px bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number */}
                  <div
                    className={cn(
                      "relative z-10 flex h-16 w-16 items-center justify-center rounded-full",
                      "bg-primary/10 ring-4 ring-background-elevated"
                    )}
                  >
                    <span className="font-heading text-xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>

                  {/* Vertical connector (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 h-8 w-px bg-border sm:hidden" />
                  )}

                  <h3 className="mt-5 font-heading text-base font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
