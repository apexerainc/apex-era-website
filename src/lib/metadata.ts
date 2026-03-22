import type { Metadata } from "next";
import { COMPANY } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  rawTitle,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  rawTitle?: boolean;
}): Metadata {
  const fullTitle = rawTitle && title
    ? title
    : title
      ? `${title} | ${COMPANY.name}`
      : `${COMPANY.name} — ${COMPANY.tagline}`;
  const fullDescription = description || COMPANY.description;
  const url = `${COMPANY.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(COMPANY.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: COMPANY.name,
      type: "website",
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
  };
}
