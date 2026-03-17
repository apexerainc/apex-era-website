import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProps } from "@/components/home/ValueProps";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ToolsShowcase } from "@/components/home/ToolsShowcase";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { PressLogos } from "@/components/home/PressLogos";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = createMetadata({
  description:
    "Apex Era Inc is a Philadelphia-based digital marketing and technology agency built for the water damage restoration industry. SEO, web design, remote estimating, and AI tools.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <AboutPreview />
      <ServiceGrid />
      <StatsCounter />
      <ToolsShowcase />
      <TestimonialCarousel />
      <PressLogos />
      <CTABanner />
    </>
  );
}
