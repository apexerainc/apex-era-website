"use client";

import { Container } from "@/components/ui/Container";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            It&apos;s time to dominate your local market. Partner with the only
            agency built by restorers, for restorers.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
