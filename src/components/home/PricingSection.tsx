"use client";

import { Container } from "@/components/ui/Container";
import { pricingPlans } from "@/data/pricing";
import type { PricingPlan } from "@/data/pricing";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlighted = plan.highlighted;

  return (
    <div
      className={`flex flex-col rounded-2xl p-8 ${
        isHighlighted
          ? "bg-blue-600 text-white ring-4 ring-blue-600/20"
          : "bg-white text-slate-900"
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          isHighlighted ? "text-white" : "text-slate-900"
        }`}
      >
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline">
        <span
          className={`text-5xl font-bold tracking-tight ${
            isHighlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`ml-1 text-sm ${
            isHighlighted ? "text-blue-200" : "text-slate-600"
          }`}
        >
          {plan.period}
        </span>
      </div>
      <p
        className={`mt-4 text-sm leading-relaxed ${
          isHighlighted ? "text-blue-100" : "text-slate-600"
        }`}
      >
        {plan.description}
      </p>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            <CheckIcon
              className={`h-5 w-5 flex-shrink-0 ${
                isHighlighted ? "text-blue-200" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm ${
                isHighlighted ? "text-blue-100" : "text-slate-600"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href="/contact"
          className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isHighlighted
              ? "bg-white text-blue-600 hover:bg-blue-50 focus-visible:outline-white"
              : "border border-slate-300 bg-transparent text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-400"
          }`}
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-dark py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Simple{" "}
            <span className="relative inline-block">
              pricing
              <svg
                aria-hidden="true"
                viewBox="0 0 281 40"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-[0.6em] w-full fill-none stroke-blue-400"
              >
                <path
                  d="M2 30 C30 8, 60 8, 90 28 S150 8, 190 28 S230 8, 279 28"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            , for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Choose the plan that fits your business. Scale up as you grow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
