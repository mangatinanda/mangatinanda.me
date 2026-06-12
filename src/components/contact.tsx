import { Mail, Globe, Code } from "lucide-react";
import SectionWrapper from "./section-wrapper";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "mangatinanda@gmail.com",
    href: "mailto:mangatinanda@gmail.com",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/mangatinanda",
    href: "https://linkedin.com/in/mangatinanda",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "github.com/mangatinanda",
    href: "https://github.com/mangatinanda",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about tech.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border-color hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <link.icon size={18} className="text-accent" aria-hidden />
            </div>
            <div>
              <p className="text-xs text-text-secondary">{link.label}</p>
              <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                {link.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
