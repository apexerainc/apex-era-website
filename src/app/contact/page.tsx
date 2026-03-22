import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CalendlyWidget } from "@/components/ui/CalendlyWidget";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Apex Era Inc. Let's discuss how we can help grow your restoration business with SEO, web design, and automation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="pb-20 pt-8">
        <Container>
          <SectionHeading
            title="Get In Touch"
            subtitle="Ready to grow your restoration business? Let's talk."
          />

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Schedule a call section */}
          <div className="mt-16 rounded-xl border border-border bg-card p-8 sm:p-10">
            <div className="text-center">
              <h3 className="font-heading text-xl font-semibold text-text">
                Schedule a Free Strategy Call
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted">
                Book a time that works for you and we&apos;ll walk through how Apex Era
                can help your restoration company grow.
              </p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Or call us directly at {COMPANY.phone}
              </a>
            </div>
            <div className="mt-6">
              <CalendlyWidget />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
