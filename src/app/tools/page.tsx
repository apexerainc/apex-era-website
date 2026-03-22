import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ToolHero } from "@/components/tools/ToolHero";
import { ToolCard } from "@/components/tools/ToolCard";
import { CTABanner } from "@/components/home/CTABanner";
import { tools } from "@/data/tools";

export const metadata = createMetadata({
  title: "Free AI Tools for Restoration Companies — ChatGPP, Xcavate & More",
  rawTitle: true,
  description:
    "Free AI-powered tools built for damage restoration professionals. ChatGPP for IICRC standards, Xcavate for Xactimate estimating, and EchoScope for market intelligence.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <main>
      <ToolHero />

      {/* Tools Grid */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
