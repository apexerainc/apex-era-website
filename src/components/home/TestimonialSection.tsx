"use client";

import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

interface TestimonialItem {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

const extraTestimonials: TestimonialItem[] = [
  {
    name: "David Park",
    company: "FloodMaster Pro",
    quote:
      "The website Apex Era built for us pays for itself every month. We went from 5 leads a week to 5 leads a day.",
    rating: 5,
  },
  {
    name: "Rachel Kim",
    company: "PureAir Restoration",
    quote:
      "Finally, a marketing team that speaks our language. No more explaining what an IICRC certification is.",
    rating: 5,
  },
];

const allTestimonials: TestimonialItem[] = [
  ...testimonials,
  ...extraTestimonials,
];

// Distribute 6 testimonials across 3 columns (2 per column)
const columns: TestimonialItem[][] = [
  [allTestimonials[0], allTestimonials[3]],
  [allTestimonials[1], allTestimonials[4]],
  [allTestimonials[2], allTestimonials[5]],
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <figure className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-sm leading-relaxed text-slate-600">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
          <span className="text-xs font-bold text-slate-500">
            {getInitials(testimonial.name)}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-slate-500">{testimonial.company}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Loved by restoration companies nationwide.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our clients can&apos;t help but share their results. Here&apos;s
            what they have to say.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-y-6">
              {column.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
