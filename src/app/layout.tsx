import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nanda Kumar Mangati | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 10+ years of experience building scalable platforms with Django, Next.js, and AI-powered development workflows.",
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
  openGraph: {
    title: "Nanda Kumar Mangati | Senior Full Stack Developer",
    description:
      "Building scalable platforms and orchestrating AI-powered development workflows. 10+ years of shipping products that matter.",
    url: "https://mangatinanda.me",
    siteName: "Nanda Kumar Mangati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanda Kumar Mangati | Senior Full Stack Developer",
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
        {children}
      </body>
    </html>
  );
}
