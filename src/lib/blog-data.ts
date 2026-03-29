export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  published: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "orchestrating-ai-agents-for-software-development",
    title: "Orchestrating AI Agents for Software Development",
    description:
      "How I'm using AI agents to architect, code, review, and test — and what I've learned about the future of development workflows.",
    date: "March 2026",
    readTime: "8 min read",
    published: true,
    tags: ["AI", "Development Workflows", "Productivity"],
  },
  {
    slug: "building-config-driven-platforms-with-django",
    title: "Building Config-Driven Platforms with Django",
    description:
      "Why database-driven configuration beats hardcoded views, and how to architect a flexible platform.",
    date: "Coming Soon",
    readTime: "6 min read",
    published: false,
    tags: ["Django", "Architecture", "Backend"],
  },
  {
    slug: "from-frontend-to-full-stack-a-10-year-journey",
    title: "From Frontend to Full Stack: A 10-Year Journey",
    description:
      "Lessons learned transitioning from Ember.js frontend work to full-stack Python/Django development.",
    date: "Coming Soon",
    readTime: "10 min read",
    published: false,
    tags: ["Career", "Full Stack", "Reflections"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.published);
}
