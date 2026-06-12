import Link from "next/link";
import { Clock } from "lucide-react";
import { formatPostDate, type PostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: PostMeta;
  /** h2 on the blog index (page h1 above), h3 on the homepage preview (section h2 above). */
  headingLevel?: "h2" | "h3";
}

export default function BlogPostCard({
  post,
  headingLevel = "h3",
}: BlogPostCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block h-full p-6 rounded-xl bg-surface border border-border-color hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
        <Clock size={12} aria-hidden />
        <time dateTime={post.publishedAt}>
          {formatPostDate(post.publishedAt)}
        </time>
        <span>&middot;</span>
        <span>{post.readTime}</span>
      </div>

      <Heading
        className={`font-semibold text-foreground mb-2 ${
          headingLevel === "h2" ? "text-xl" : "text-base leading-snug"
        }`}
      >
        {post.title}
      </Heading>

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
    </Link>
  );
}
