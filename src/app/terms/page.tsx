import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${COMPANY.name}. Read our terms governing the use of our website and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <section className="pb-20 pt-8">
        <Container className="max-w-4xl">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Last updated: January 2025
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-text-muted">
            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website and services provided by{" "}
                {COMPANY.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                you agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Services
              </h2>
              <p className="mb-3">
                {COMPANY.name} provides digital marketing, SEO, website design and
                development, remote estimating, and custom automation services
                primarily for businesses in the water damage restoration industry. The
                specific scope, deliverables, timeline, and pricing for each engagement
                will be outlined in a separate service agreement or proposal.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of
                our services at any time with reasonable notice. We will not be liable
                for any modifications, suspension, or discontinuation of services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Payment Terms
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Payment terms, including amounts, schedules, and methods, will be
                  specified in your service agreement or invoice.
                </li>
                <li>
                  Unless otherwise stated, invoices are due within 30 days of the
                  invoice date.
                </li>
                <li>
                  Late payments may be subject to a late fee of 1.5% per month on the
                  outstanding balance.
                </li>
                <li>
                  We reserve the right to suspend services for accounts with
                  outstanding balances exceeding 60 days past due.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Intellectual Property
              </h2>
              <p className="mb-3">
                All content on this website, including text, graphics, logos, images,
                and software, is the property of {COMPANY.name} or its content
                suppliers and is protected by United States and international
                copyright laws.
              </p>
              <p>
                Upon full payment for services rendered, clients will receive
                ownership or a license to the deliverables as specified in the
                service agreement. Any proprietary tools, templates, methodologies, or
                frameworks developed by {COMPANY.name} remain our exclusive
                intellectual property.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Limitation of Liability
              </h2>
              <p className="mb-3">
                To the fullest extent permitted by applicable law, {COMPANY.name}
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss
                of profits, data, or business opportunities, arising out of or related
                to your use of our website or services.
              </p>
              <p>
                Our total liability for any claim arising out of or related to these
                terms or our services shall not exceed the total amount paid by you to{" "}
                {COMPANY.name} in the twelve (12) months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Termination
              </h2>
              <p className="mb-3">
                Either party may terminate a service engagement in accordance with the
                terms outlined in the applicable service agreement. In the absence of
                specific termination provisions, either party may terminate with 30
                days&apos; written notice.
              </p>
              <p>
                Upon termination, you are responsible for payment of all services
                rendered through the date of termination. We will provide reasonable
                assistance in transitioning any ongoing work or transferring assets
                as specified in the service agreement.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Commonwealth of Pennsylvania, without
                regard to its conflict of law provisions. Any disputes arising from
                these terms shall be resolved in the state or federal courts located
                in Philadelphia, Pennsylvania.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Contact
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact
                us at:
              </p>
              <div className="mt-4 rounded-lg border border-border bg-card p-4">
                <p className="font-medium text-text">{COMPANY.name}</p>
                <p>{COMPANY.address.full}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
