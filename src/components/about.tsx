"use client";

import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";
import { Code2, Rocket, Brain, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Clock, label: "10+ Years Experience" },
  { icon: Rocket, label: "3 Products Built" },
  { icon: Brain, label: "50% Dev Time Reduction" },
  { icon: Code2, label: "Full Stack" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Avatar */}
        <motion.div
          className="shrink-0 mx-auto md:mx-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-purple p-[2px]">
            <Image
              src="/nanda.jpg"
              alt="Nanda Kumar Mangati"
              width={128}
              height={128}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Bio */}
        <div className="flex-1">
          <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-8">
            Full Stack Developer with over 10 years of experience building
            scalable, customer-centric web applications and internal platforms.
            Currently at Isha Foundation&apos;s IT team, architecting
            config-driven platforms with Django and Next.js while pioneering
            AI-agent orchestrated development workflows. Previously led teams at
            HappyFox, building enterprise SaaS products used by thousands of
            businesses worldwide. Passionate about continuous learning and
            leveraging AI to ship faster.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-4 rounded-xl bg-surface border border-border-color text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon
                  size={20}
                  className="text-accent mx-auto mb-2"
                />
                <p className="text-xs text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
