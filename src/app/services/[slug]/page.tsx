import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Search, Layout, Calculator, Zap, MessageSquare, GitCompare, Brain, Megaphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Layout,
  Calculator,
  Zap,
  MessageSquare,
  GitCompare,
  Brain,
  Megaphone,
  BarChart3,
};

/* Feature icon helper — uses a rotating set of icons for variety */
const featureIcons = [Search, Layout, Zap, BarChart3];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero service={service} />

      {/* Features Grid */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="What You Get"
              title="Features & Capabilities"
              subtitle="Everything included in our service to help you grow."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.features.map((feature, index) => {
              const FeatureIcon = featureIcons[index % featureIcons.length];

              return (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <Card hover className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <FeatureIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-text">
                          {feature.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <ProcessSteps steps={service.process} />

      {/* Stats */}
      <section className="py-20 sm:py-24">
        <Container>
          <ScrollReveal>
            <div className="grid gap-8 sm:grid-cols-3">
              {service.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <ServiceCTA />
    </main>
  );
}
