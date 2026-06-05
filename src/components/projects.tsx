"use client";

import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "IVM Platform",
    description:
      "Config-driven platform where database defines what to show and what to do. Frontend renders templates based on backend configuration.",
    tags: ["Next.js 16", "Django", "PostgreSQL", "Docker"],
  },
  {
    title: "iPaaS Platform",
    description:
      "Internal integration-as-a-service platform that reduced integration development time by 50%.",
    tags: ["Python", "Django", "React", "REST APIs"],
  },
  {
    title: "HappyFox Helpdesk",
    description:
      "Enterprise customer support platform used by thousands of businesses. Full UI revamp and ongoing feature development.",
    tags: ["Ember.js", "Python", "Django", "ElasticSearch"],
  },
  {
    title: "JavaScript Integration SDK",
    description:
      "Reusable SDK enabling third-party app integrations for the core helpdesk platform.",
    tags: ["JavaScript", "REST APIs", "SDK Design"],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group p-6 rounded-xl bg-surface border border-border-color hover:border-accent/40 transition-all duration-300 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
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
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
