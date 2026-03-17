import type { Metadata } from "next";
import { ExternalLink, Phone } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

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
          <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center sm:p-10">
            <h3 className="font-heading text-xl font-semibold text-text">
              Prefer to schedule a call?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted">
              Book a time that works for you and we&apos;ll walk through how Apex Era
              can help your restoration company grow.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="https://calendly.com/apexerainc"
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                size="lg"
              >
                Schedule a Call
                <ExternalLink className="h-4 w-4" />
              </Button>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Or call us directly at {COMPANY.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
