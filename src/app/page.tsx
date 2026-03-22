import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { PrimaryFeatures } from "@/components/home/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/home/SecondaryFeatures";
import { TabSection } from "@/components/home/TabSection";
import { CTABanner } from "@/components/home/CTABanner";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = createMetadata({
  title: "Apex Era — #1 Marketing Agency for Restoration Companies | SEO, Web Design & AI Tools",
  rawTitle: true,
  description:
    "Apex Era is the #1 national marketing agency for damage restoration companies. SEO, website design, remote Xactimate estimating, and AI-powered automation tools built by restorers, for restorers.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <TabSection />
      <CTABanner />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
