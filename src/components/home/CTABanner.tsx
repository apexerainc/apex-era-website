"use client";

import { Container } from "@/components/ui/Container";
import { CalendlyWidget } from "@/components/ui/CalendlyWidget";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-hover py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            It&apos;s time to dominate your local market. Partner with the only
            agency built by restorers, for restorers.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <h3 className="text-center text-lg font-semibold text-slate-900">
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
