"use client";

import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Code } from "lucide-react";

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
  {
    icon: Phone,
    label: "Phone",
    value: "+91-0000000000",
    href: "tel:+910000000000",
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
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border-color hover:border-accent/40 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <link.icon size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-text-secondary">{link.label}</p>
              <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                {link.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
