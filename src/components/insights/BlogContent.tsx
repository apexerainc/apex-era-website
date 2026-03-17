import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article>
      {/* Author byline */}
      <div className="mb-8 border-b border-border pb-8">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" aria-hidden="true" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Post content */}
      <div className="prose-invert max-w-none">
        {post.content.split("\n\n").map((block, index) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="mb-4 mt-10 font-heading text-2xl font-bold text-text"
              >
                {block.replace("## ", "")}
              </h2>
            );
          }

          if (block.startsWith("### ")) {
            return (
              <h3
                key={index}
                className="mb-3 mt-8 font-heading text-xl font-semibold text-text"
              >
                {block.replace("### ", "")}
              </h3>
            );
          }

          return (
            <p
              key={index}
              className="mb-4 text-base leading-relaxed text-text-muted"
            >
              {block}
            </p>
          );
        })}
      </div>
    </article>
  );
}
