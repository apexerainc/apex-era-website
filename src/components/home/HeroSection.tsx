"use client";

import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="pb-16 pt-20 text-center sm:pt-32 lg:pt-32">
        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Marketing{" "}
          <span className="relative inline-block">
            made simple
            {/* Hand-drawn squiggly underline */}
            <svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-[0.6em] w-full fill-none stroke-primary"
            >
              <path
                d="M2 30 C30 8, 60 8, 90 28 S150 8, 190 28 S230 8, 279 28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <br />
          for restoration companies.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-600">
          We help restoration companies generate more leads, dominate local
          search, and scale with AI-powered marketing tools.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
          >
            Get Free Audit
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-colors"
          >
            Learn More
          </a>
        </div>

      </Container>
    </section>
  );
}
