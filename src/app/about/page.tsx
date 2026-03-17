import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderSection } from "@/components/about/FounderSection";
import { Timeline } from "@/components/about/Timeline";
import { MissionValues } from "@/components/about/MissionValues";
import { TeamGrid } from "@/components/about/TeamGrid";
import { StatsCounter } from "@/components/home/StatsCounter";
import { PressLogos } from "@/components/home/PressLogos";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Apex Era Inc — founded by a 20-year restoration veteran, we build digital marketing solutions and AI tools specifically for the restoration industry.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              About <span className="gradient-text">Apex Era</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              Built by restorers, for restorers. We combine decades of
              restoration industry experience with cutting-edge digital marketing
              and AI technology to help your business thrive.
            </p>
          </div>
        </Container>
      </section>

      <FounderSection />
      <Timeline />
      <MissionValues />
      <TeamGrid />
      <StatsCounter />
      <PressLogos />
      <CTABanner />
    </main>
  );
}
