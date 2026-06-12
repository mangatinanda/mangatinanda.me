import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import BlogPostCard from "./blog-post-card";
import { getPublishedPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <SectionWrapper id="blog">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Latest Posts
        </h2>
        <Link
          href="/blog"
          className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
        >
          View all
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} headingLevel="h3" />
        ))}
      </div>
    </SectionWrapper>
  );
}
