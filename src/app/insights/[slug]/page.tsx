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
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";
import { services } from "@/data/services";

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
      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Insights", url: `${COMPANY.url}/insights` },
          { name: post.title, url: `${COMPANY.url}/insights/${post.slug}` },
        ]}
      />
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

      {/* Related Posts */}
      {blogPosts.filter((p) => p.slug !== post.slug).length > 0 && (
        <section className="border-t border-border py-16">
          <Container className="max-w-4xl">
            <h2 className="text-xl font-semibold text-text">Related Insights</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/insights/${related.slug}`}
                    className="group block rounded-xl border border-border p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-primary">
                      {related.category}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-muted line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
            </div>

            {/* Related Services */}
            <h2 className="mt-12 text-xl font-semibold text-text">
              Our Restoration Marketing Services
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-text-muted transition-all hover:border-primary hover:text-primary"
                >
                  {svc.shortTitle}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
