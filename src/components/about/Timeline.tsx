"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

const timelineEntries: TimelineEntry[] = [
  {
    year: "2023",
    title: "Founded Apex Era Inc",
    description:
      "Matt Gregory launched Apex Era Inc in Philadelphia, combining 20+ years of restoration experience with digital marketing expertise.",
  },
  {
    year: "2023",
    title: "First 10 Restoration Clients Onboarded",
    description:
      "Within months of launching, Apex Era had onboarded its first 10 restoration company clients and began delivering measurable results.",
  },
  {
    year: "2024",
    title: "Launched ChatGPP",
    description:
      "Introduced ChatGPP — an AI-powered assistant trained on IICRC standards — giving restorers instant access to industry knowledge.",
  },
  {
    year: "2024",
    title: "Featured in C&R Magazine",
    description:
      "Apex Era's innovative approach to restoration marketing was featured in Cleaning & Restoration Magazine, a leading industry publication.",
  },
  {
    year: "2024",
    title: "Reached 50+ Active Clients",
    description:
      "Rapid growth driven by word-of-mouth and proven results brought the client roster to over 50 active restoration companies nationwide.",
  },
  {
    year: "2025",
    title: "100+ Restoration Companies Served",
    description:
      "Crossed the milestone of serving over 100 restoration companies, generating thousands of leads and millions in revenue for clients.",
  },
  {
    year: "2025",
    title: "Launched Full AI Tools Suite",
    description:
      "Released a complete suite of free AI-powered tools including Xcavate, EchoScope, and Restoration Guru — all built specifically for restorers.",
  },
];

export function Timeline() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Building the Future of Restoration"
            subtitle="From a single idea to an industry-leading platform, here is how Apex Era has grown."
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
          <div className="absolute left-4 top-0 block h-full w-px bg-border md:hidden" />

          <div className="space-y-12">
            {timelineEntries.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={`${entry.year}-${entry.title}`}
                  delay={index * 0.1}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={cn(
                      "relative flex items-start gap-6 md:gap-0",
                      /* Mobile: always left-aligned */
                      "pl-12 md:pl-0"
                    )}
                  >
                    {/* Dot on timeline (mobile) */}
                    <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:hidden" />

                    {/* Desktop layout */}
                    <div
                      className={cn(
                        "hidden md:flex md:w-full md:items-start",
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      )}
                    >
                      {/* Content */}
                      <div
                        className={cn(
                          "md:w-[calc(50%-2rem)]",
                          isLeft ? "md:text-right md:pr-0" : "md:text-left md:pl-0"
                        )}
                      >
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {entry.year}
                        </span>
                        <h3 className="mt-3 font-heading text-lg font-semibold text-text">
                          {entry.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-muted">
                          {entry.description}
                        </p>
                      </div>

                      {/* Center dot */}
                      <div className="relative flex w-16 shrink-0 justify-center">
                        <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="md:w-[calc(50%-2rem)]" />
                    </div>

                    {/* Mobile content */}
                    <div className="md:hidden">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {entry.year}
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-semibold text-text">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
