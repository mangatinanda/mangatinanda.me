import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-sm text-accent mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Page not found
      </h1>
      <p className="text-text-secondary max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="text-sm text-accent hover:text-accent-hover transition-colors"
      >
        &larr; Back home
      </Link>
    </main>
  );
}
