import { ExternalLink } from "lucide-react";
import SectionWrapper from "./section-wrapper";

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Outlay — Household Expense Tracker",
    description:
      "My family had no shared way to track who paid for what, so I built and shipped a multi-user PWA — Google + passcode auth, strict per-household data isolation, a charts dashboard, and CSV/XLSX/PDF export — that my family uses daily. 100+ tests (Vitest + Playwright), husky pre-commit, and CI on every push.",
    tags: [
      "Next.js 16",
      "Drizzle/SQLite (Turso)",
      "Auth.js",
      "PWA",
      "Vitest/Playwright",
    ],
    links: [
      { label: "Live", href: "https://outlay.mangatinanda.me" },
      { label: "Source", href: "https://github.com/mangatinanda/outlay" },
    ],
  },
  {
    title: "IVM Volunteer Platform",
    description:
      "Isha's internal volunteer-management platform. Own the entire Next.js frontend: config-driven screens defined by backend data, virtualized data-heavy admin views (TanStack Table/Query), rich-text editing, drag-and-drop, NextAuth, and a quality setup with Storybook, Jest, and MSW.",
    tags: ["Next.js 16", "Django", "PostgreSQL", "Docker"],
  },
  {
    title: "iPaaS Platform",
    description:
      "Helpdesk integrations were hand-built one at a time. Led a full-stack team building an internal integration-platform-as-a-service — owned the frontend and contributed Django backend — cutting integration development time by 50%.",
    tags: ["Python", "Django", "React", "REST APIs"],
  },
  {
    title: "HappyFox Helpdesk",
    description:
      "Enterprise customer-support platform serving thousands of businesses. Played a key role in the full revamp of the legacy UI into a performant Ember.js single-page app, shipped via weekly-to-daily CI/CD.",
    tags: ["Ember.js", "Python", "Django", "ElasticSearch"],
    links: [{ label: "happyfox.com", href: "https://www.happyfox.com" }],
  },
  {
    title: "JavaScript Integration SDK",
    description:
      "Third-party helpdesk embeds were bespoke and brittle. Designed and built a reusable JavaScript SDK that streamlined integrations across project-management, CRM, e-commerce, and voice platforms.",
    tags: ["JavaScript", "REST APIs", "SDK Design"],
  },
  {
    title: "This Site",
    description:
      "Server-Components-first Next.js 16 portfolio: markdown content pipeline, per-post Open Graph images, JSON-LD, RSS, security headers, and CI — with zero client-side animation libraries.",
    tags: ["Next.js 16", "RSC", "Tailwind CSS 4", "GitHub Actions"],
    links: [
      { label: "Live", href: "https://mangatinanda.me" },
      {
        label: "Source",
        href: "https://github.com/mangatinanda/mangatinanda.me",
      },
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-xl bg-surface border border-border-color hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              {project.links && (
                <div className="flex items-center gap-3 shrink-0">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={12} aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
