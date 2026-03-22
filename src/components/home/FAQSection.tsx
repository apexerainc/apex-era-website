"use client";

import { Container } from "@/components/ui/Container";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see measurable improvements in search rankings within 60-90 days. Lead generation typically increases within the first month.",
  },
  {
    question: "Do you work with companies outside restoration?",
    answer:
      "We exclusively serve the water damage restoration industry. This focus is what allows us to deliver results that generic agencies can't.",
  },
  {
    question: "What makes Apex Era different from other agencies?",
    answer:
      "Our team has 20+ years of hands-on restoration experience. We've run restoration companies ourselves, so we understand your business inside and out.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "We offer month-to-month plans with no long-term commitments. We believe our results speak for themselves.",
  },
  {
    question: "What's included in the AI tools?",
    answer:
      "All clients get access to our suite of free AI tools including ChatGPP, Xcavate, and EchoScope. These are built specifically for restoration professionals.",
  },
  {
    question: "Can you help with insurance estimates?",
    answer:
      "Yes! Our remote estimating service includes Xactimate and Symbility experts with 20+ years of experience writing insurance-ready estimates.",
  },
  {
    question: "How do you measure ROI?",
    answer:
      "We track everything: keyword rankings, lead volume, lead quality, conversion rates, and revenue attribution. You get monthly reports with full transparency.",
  },
  {
    question: "Do you handle Google Ads?",
    answer:
      "Yes, we manage Google Ads campaigns as part of our SEO & Lead Generation service, optimized specifically for restoration keywords.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We work with restoration companies across the entire United States. Our digital marketing strategies work in any local market.",
  },
];

// Distribute 9 FAQs across 3 columns (3 per column)
const faqColumns: FAQItem[][] = [
  faqs.slice(0, 3),
  faqs.slice(3, 6),
  faqs.slice(6, 9),
];

export function FAQSection() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <FAQPageJsonLd faqs={faqs} />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            If you can&apos;t find what you&apos;re looking for, reach out to
            our team.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-y-10">
              {column.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
