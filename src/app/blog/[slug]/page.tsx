import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Nanda Kumar Mangati`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Placeholder content */}
        <div className="prose prose-invert max-w-none">
          <div className="p-8 rounded-xl bg-surface border border-border-color text-center">
            <p className="text-text-secondary text-lg mb-2">
              Full article coming soon.
            </p>
            <p className="text-text-secondary text-sm">
              This post is currently being written. Check back later for the
              full content.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-color">
          <Link
            href="/blog"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
