import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="pb-20 pt-8">
        <Container className="max-w-4xl">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Last updated: January 2025
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-text-muted">
            <div>
              <p>
                {COMPANY.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Information We Collect
              </h2>
              <p className="mb-3">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-text">Personal Data:</strong> Name, email
                  address, phone number, company name, and other information you
                  voluntarily provide when filling out contact forms, requesting
                  quotes, or engaging with our services.
                </li>
                <li>
                  <strong className="text-text">Usage Data:</strong> Information about
                  how you access and use our website, including your IP address,
                  browser type, operating system, referring URLs, pages viewed, and the
                  dates and times of your visits.
                </li>
                <li>
                  <strong className="text-text">Cookies and Tracking Technologies:</strong>{" "}
                  We use cookies, web beacons, and similar technologies to collect
                  information about your browsing activities and to personalize your
                  experience on our website.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>
                  To send you marketing communications, including information about
                  our services, promotions, and industry insights (you may opt out at
                  any time)
                </li>
                <li>
                  To analyze website usage and improve our website design and
                  functionality
                </li>
                <li>
                  To detect, prevent, and address technical issues and security
                  threats
                </li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Information Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-text">Service Providers:</strong> We may
                  share your information with third-party vendors who perform services
                  on our behalf, such as email delivery, analytics, and hosting.
                </li>
                <li>
                  <strong className="text-text">Legal Requirements:</strong> We may
                  disclose your information if required by law, regulation, or legal
                  process, or if we believe disclosure is necessary to protect our
                  rights, your safety, or the safety of others.
                </li>
                <li>
                  <strong className="text-text">Business Transfers:</strong> In the
                  event of a merger, acquisition, or sale of assets, your information
                  may be transferred as part of the transaction.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>
                  The right to request deletion of your personal information, subject
                  to certain exceptions
                </li>
                <li>
                  The right to opt out of marketing communications at any time
                </li>
                <li>
                  The right to lodge a complaint with a supervisory authority if you
                  believe your rights have been violated
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-semibold text-text">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
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
