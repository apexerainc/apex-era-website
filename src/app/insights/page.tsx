"use client";

import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogFilters } from "@/components/insights/BlogFilters";
import { BlogCard } from "@/components/insights/BlogCard";
import { blogPosts } from "@/data/blog";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [...new Set(blogPosts.map((post) => post.category))],
    []
  );

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Insights" }]} />

      <section className="pb-20 pt-8">
        <Container>
          <SectionHeading
            title="Insights & Resources"
            subtitle="Expert articles on digital marketing, SEO, and technology for the restoration industry."
          />

          <div className="mt-10">
            <BlogFilters
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="mt-12 text-center text-text-muted">
              No articles found in this category.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
