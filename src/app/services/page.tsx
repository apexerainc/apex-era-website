import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTABanner } from "@/components/home/CTABanner";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Comprehensive digital marketing solutions built specifically for the restoration industry — SEO, web design, remote estimates, and custom automations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              Comprehensive digital marketing solutions built specifically for
              the restoration industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Service cards */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
