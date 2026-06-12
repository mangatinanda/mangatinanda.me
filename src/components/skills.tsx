import { Monitor, Server, Database, Cloud, Brain, Users } from "lucide-react";
import SectionWrapper from "./section-wrapper";

interface SkillCategory {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Ember.js",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Python", "Django", "Node.js", "REST APIs", "Celery"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS (S3, EC2, ECS, Lambda)", "CI/CD", "Nginx", "Git"],
  },
  {
    icon: Brain,
    title: "AI & Tools",
    skills: [
      "LLM Integration",
      "AI Agent Orchestration",
      "Claude Code",
      "Prompt Engineering",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Team Leadership",
      "Mentoring",
      "Cross-functional Collaboration",
      "Product Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-xl bg-surface border border-border-color hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <cat.icon size={20} className="text-accent" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-surface-light text-text-secondary border border-border-color hover:text-foreground hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
