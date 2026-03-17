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
  description:
    "Apex Era Inc is a Philadelphia-based digital marketing and technology agency built for the water damage restoration industry. SEO, web design, remote estimating, and AI tools.",
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
