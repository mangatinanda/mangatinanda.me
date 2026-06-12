import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogPostCard from "@/components/blog-post-card";
import { getPublishedPosts } from "@/lib/blog";

const description =
  "Thoughts on full-stack development, AI-powered workflows, and building config-driven platforms.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Blog | Nanda Kumar Mangati",
    description,
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nanda Kumar Mangati",
    description,
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={14} aria-hidden />
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
          {posts.map((post) => (
            <article key={post.slug}>
              <BlogPostCard post={post} headingLevel="h2" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
