import { ArrowDown, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
      {/* Gradient glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-accent/20 via-accent-purple/15 to-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <p className="text-text-secondary text-sm md:text-base font-mono mb-4 animate-fade-up">
          Hello, I&apos;m
        </p>

        {/* The LCP element: never animated from opacity 0. */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
          Nanda Kumar
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">
            Mangati
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-text-secondary font-light mb-6 animate-fade-up animation-delay-150">
          Senior Full-Stack Engineer &middot; AI-Native Platforms
        </h2>

        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed mb-10 animate-fade-up animation-delay-300">
          Building scalable platforms and orchestrating AI-powered development
          workflows. 10+ years of shipping products that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-450">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-solid hover:bg-accent-solid-hover text-white text-sm font-medium rounded-lg transition-colors"
          >
            View My Work
            <ArrowDown size={16} aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:border-text-secondary text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            Get In Touch
            <Mail size={16} aria-hidden />
          </a>
          <a
            href="/nanda-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:border-text-secondary text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            Download Resume
            <Download size={16} aria-hidden />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <ArrowDown size={20} className="text-text-secondary" aria-hidden />
      </div>
    </section>
  );
}
