"use client";

import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Role {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
}

const roles: Role[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Isha Foundation IT",
    period: "July 2025 - Present",
    bullets: [
      "Architecting a config-driven platform (IVM) using Django + Next.js 16 with App Router",
      "Pioneering AI-agent orchestrated development workflows \u2014 designing and managing AI agents for code generation, review, and testing",
      "Building dynamic view/action systems driven entirely by database configuration",
    ],
    tech: ["Next.js 16", "Django", "PostgreSQL", "Docker", "AI/LLM Integration"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "HappyFox Technologies",
    period: "May 2024 - June 2025",
    bullets: [
      "Led a team of Full Stack Developers and QA engineers to build an internal iPaaS platform that cut integration development time by 50%",
      "Took full ownership of the frontend while contributing hands-on to backend using Python and Django ORM",
    ],
    tech: ["Python", "Django", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Full Stack Developer",
    company: "HappyFox Technologies",
    period: "Jun 2021 - May 2024",
    bullets: [
      "Designed APIs, database schemas, backend services, and UI components for enterprise helpdesk and BI products",
      "Focused primarily on backend development (Python/Django) while mentoring junior developers",
      "Collaborated with cross-functional teams to deliver end-to-end product features",
    ],
    tech: ["Python", "Django", "Ember.js", "PostgreSQL", "ElasticSearch", "Redis", "Celery"],
  },
  {
    title: "Front-End Developer",
    company: "HappyFox Technologies",
    period: "May 2015 - Oct 2020",
    bullets: [
      "Key role in full UI revamp of large-scale enterprise application using Ember.js",
      "Designed and developed a reusable JavaScript SDK for third-party integrations",
      "Built integrations across project management, CRM, e-commerce, social media, and voice platforms",
      "Delivered features with weekly to daily deployments through CI/CD pipelines",
    ],
    tech: ["Ember.js", "JavaScript", "jQuery", "HTML/CSS", "REST APIs"],
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "Dec 2013 - May 2015",
    bullets: [
      "Contributed to an online banking application built with Ember.js",
    ],
    tech: ["Ember.js", "JavaScript", "HTML/CSS"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-color hidden md:block" />

        <div className="flex flex-col gap-10">
          {roles.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-surface border border-border-color items-center justify-center mt-1">
                <Briefcase size={16} className="text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 rounded-xl bg-surface border border-border-color hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <p className="text-accent text-sm">{role.company}</p>
                  </div>
                  <p className="text-text-secondary text-sm font-mono">
                    {role.period}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-text-secondary text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-accent shrink-0">
                        &bull;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
