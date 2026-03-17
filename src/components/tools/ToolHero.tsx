"use client";

import { Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ToolHero() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Container>
        <Breadcrumbs items={[{ label: "Tools", href: "/tools" }]} />

        <ScrollReveal>
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <div className="max-w-3xl">
              <div className="mb-4">
                <Badge variant="success">All Tools Are Free</Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
                AI-Powered Tools{" "}
                <span className="gradient-text">for Restorers</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                Free tools built by restoration professionals to streamline your
                operations. No signup required — just open and use.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
