"use client";

import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <ScrollReveal>
      <Link href={`/insights/${post.slug}`} className="group block h-full">
        <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <Badge className="mb-4 w-fit">{post.category}</Badge>

          <h3 className="font-heading text-lg font-semibold text-text transition-colors duration-200 group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}
