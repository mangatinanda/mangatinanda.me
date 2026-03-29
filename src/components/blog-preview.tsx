"use client";

import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  return (
    <SectionWrapper id="blog">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Latest Posts
        </h2>
        <Link
          href="/blog"
          className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
        >
          View all
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              href={post.published ? `/blog/${post.slug}` : "#"}
              className={`block p-6 rounded-xl bg-surface border border-border-color hover:border-accent/30 transition-all duration-300 h-full ${
                !post.published ? "opacity-60 cursor-default" : ""
              }`}
            >
              <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
                <Clock size={12} />
                <span>{post.date}</span>
                {post.published && (
                  <>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-surface-light text-text-secondary border border-border-color"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
