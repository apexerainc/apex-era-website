import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Search, Layout, Calculator, Zap, MessageSquare, GitCompare, Brain, Megaphone, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import Link from "next/link";

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
    title: `${service.title} for Restoration Companies`,
    description: service.longDescription.slice(0, 155) + "...",
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
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Services", url: `${COMPANY.url}/services` },
          { name: service.title, url: `${COMPANY.url}/services/${service.slug}` },
        ]}
      />
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

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <>
          <FAQPageJsonLd faqs={service.faqs} />
          <section className="border-t border-border py-20 sm:py-24">
            <Container>
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Common Questions"
                  title={`${service.shortTitle} FAQ`}
                  subtitle={`Answers to common questions about ${service.title.toLowerCase()} for restoration companies.`}
                />
              </ScrollReveal>
              <div className="mx-auto mt-12 max-w-3xl space-y-8">
                {service.faqs.map((faq, index) => (
                  <ScrollReveal key={faq.question} delay={index * 0.1}>
                    <div>
                      <h3 className="text-base font-semibold text-text">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Related Services */}
      <section className="border-t border-border bg-background-alt py-20 sm:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              subtitle="See how our other services help restoration companies grow."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((related, index) => (
                <ScrollReveal key={related.slug} delay={index * 0.1}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <h3 className="font-heading text-base font-semibold text-text group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </Container>
      </section>

      <ServiceCTA />
    </main>
  );
}
