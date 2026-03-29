import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Nanda Kumar Mangati",
  description:
    "Thoughts on full-stack development, AI-powered workflows, and building config-driven platforms.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Thoughts on development, architecture, and the evolving role of AI in
          software engineering.
        </p>

        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              {post.published ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-xl bg-surface border border-border-color hover:border-accent/30 transition-all duration-300"
                >
                  <BlogCard post={post} />
                </Link>
              ) : (
                <div className="block p-6 rounded-xl bg-surface border border-border-color opacity-60">
                  <BlogCard post={post} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  post,
}: {
  post: (typeof blogPosts)[number];
}) {
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
        <Clock size={12} />
        <span>{post.date}</span>
        {post.published && (
          <>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </>
        )}
        {!post.published && (
          <span className="ml-2 px-2 py-0.5 rounded-full bg-surface-light border border-border-color text-xs">
            Coming Soon
          </span>
        )}
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        {post.title}
      </h2>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {post.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-surface-light text-text-secondary border border-border-color"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
