"use client";

import { BarChart3, Users, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Stay on top of things with always up-to-date reporting on your leads, rankings, and ROI.",
  },
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Never lose track of a lead again. Our automated follow-up system ensures every prospect gets attention.",
  },
  {
    icon: Shield,
    title: "Claims Support",
    description:
      "Organize all your insurance claims, supplements, and carrier communications in one place.",
  },
];

export function SecondaryFeatures() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900">
            Simplify your marketing operations.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
            Because you&apos;re probably too busy restoring properties to worry
            about your marketing strategy.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
