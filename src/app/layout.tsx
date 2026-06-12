import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Nanda Kumar Mangati | Senior Full-Stack Engineer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mangatinanda.me"),
  title: {
    default: SITE_TITLE,
    template: "%s | Nanda Kumar Mangati",
  },
  description:
    "Senior Full-Stack Engineer with 10+ years of experience building scalable platforms with Django, Next.js, and AI-powered development workflows.",
  keywords: [
    "Nanda Kumar Mangati",
    "Full Stack Developer",
    "Django",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "AI Agent Orchestration",
  ],
  authors: [{ name: "Nanda Kumar Mangati" }],
  alternates: {
    // "./" resolves against the current pathname, giving every page a
    // self-referencing canonical (guards against ?utm and host variants).
    canonical: "./",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Building scalable platforms and orchestrating AI-powered development workflows. 10+ years of shipping products that matter.",
    siteName: "Nanda Kumar Mangati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Building scalable platforms and orchestrating AI-powered development workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-surface focus:text-foreground focus:border focus:border-accent"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
