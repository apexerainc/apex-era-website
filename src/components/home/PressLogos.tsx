"use client";

import { Container } from "@/components/ui/Container";

export function PressLogos() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
          <span className="text-sm font-medium text-slate-400">
            Trusted by 100+ restoration companies
          </span>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-400">
            C&amp;R Magazine
          </span>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-400">
            Digital Journal
          </span>
        </div>
      </Container>
    </section>
  );
}
