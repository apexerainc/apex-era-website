import { COMPANY } from "@/lib/constants";
import type { BlogPost } from "@/types";
import type { Service } from "@/types";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.url,
    description: COMPANY.description,
    foundingDate: String(COMPANY.founded),
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.tiktok,
    ],
  };

  return <JsonLdScript data={data} />;
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${COMPANY.url}/#business`,
    name: COMPANY.name,
    description:
      "National digital marketing agency specializing in SEO, web design, remote Xactimate estimating, and AI-powered automation for damage restoration companies.",
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9496,
      longitude: -75.1657,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "SEO for Restoration Companies",
      "Restoration Company Website Design",
      "Remote Xactimate Estimating",
      "Restoration Business Automation",
      "Digital Marketing for Restoration Companies",
    ],
    knowsAbout: [
      "Water Damage Restoration Marketing",
      "Fire Damage Restoration SEO",
      "Mold Remediation Marketing",
      "Xactimate Estimating",
      "IICRC Standards",
      "Insurance Claims Estimating",
      "Restoration Lead Generation",
    ],
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.tiktok,
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/insights/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  };

  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${COMPANY.url}/services/${service.slug}`,
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={data} />;
}
