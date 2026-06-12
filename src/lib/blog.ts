import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-06-05". Source of truth for sitemap lastmod, RSS pubDate, OG publishedTime, and JSON-LD. */
  publishedAt: string;
  tags: string[];
  readTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

let cache: Post[] | undefined;

function readAllPosts(): Post[] {
  if (cache) return cache;

  cache = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const { title, description, publishedAt, tags } = data as Frontmatter;
      const words = content.split(/\s+/).filter(Boolean).length;

      return {
        slug,
        title,
        description,
        publishedAt,
        tags: tags ?? [],
        readTime: `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`,
        content,
      };
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return cache;
}

export function getPublishedPosts(): Post[] {
  return readAllPosts();
}

export function getBlogPost(slug: string): Post | undefined {
  return readAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
