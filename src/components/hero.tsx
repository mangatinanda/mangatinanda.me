"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
      {/* Gradient glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-accent/20 via-accent-purple/15 to-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="text-text-secondary text-sm md:text-base font-mono mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
            Nanda Kumar
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">
              Mangati
            </span>
          </h1>

          <motion.h2
            className="text-xl md:text-2xl text-text-secondary font-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Senior Full-Stack Engineer
          </motion.h2>

          <motion.p
            className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building scalable platforms and orchestrating AI-powered development
            workflows. 10+ years of shipping products that matter.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:border-text-secondary text-foreground text-sm font-medium rounded-lg transition-colors"
            >
              Get In Touch
              <Mail size={16} />
            </a>
            <a
              href="/nanda-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:border-text-secondary text-foreground text-sm font-medium rounded-lg transition-colors"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-text-secondary" />
      </motion.div>
    </section>
  );
}
