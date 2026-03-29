import { Code, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-color py-8 px-6 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          &copy; 2026 Nanda Kumar Mangati. Built with Next.js &amp; Tailwind
          CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mangatinanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Code size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mangatinanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Globe size={18} />
          </a>
          <a
            href="mailto:mangatinanda@gmail.com"
            className="text-text-secondary hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
