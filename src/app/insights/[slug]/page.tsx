import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { BlogContent } from "@/components/insights/BlogContent";
import { CTABanner } from "@/components/home/CTABanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: post.title },
        ]}
      />

      <section className="pb-20 pt-8">
        <Container className="max-w-4xl">
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <BlogContent post={post} />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
