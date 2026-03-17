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
              className="absolute -bottom-2 left-0 h-[0.6em] w-full fill-none stroke-blue-600"
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
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
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

        {/* Trust logos strip */}
        <div className="mt-36 sm:mt-44">
          <p className="text-sm font-medium text-slate-500">
            Trusted by these industry leaders
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {/* Text-styled logos for a clean, typographic approach */}
            <span className="text-lg font-bold tracking-tight text-slate-400 grayscale transition hover:text-slate-600">
              C&amp;R Magazine
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-400 grayscale transition hover:text-slate-600">
              Digital Journal
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-400 grayscale transition hover:text-slate-600">
              100+ Restoration Companies
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
