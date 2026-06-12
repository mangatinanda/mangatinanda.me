import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog";

export const alt = "Blog post by Nanda Kumar Mangati";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        color: "#ededed",
        padding: "80px",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        {(post?.tags ?? []).map((tag) => (
          <div
            key={tag}
            style={{
              fontSize: 22,
              color: "#3b82f6",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              borderRadius: 9999,
              padding: "6px 18px",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        style={{
          fontSize: 58,
          fontWeight: 700,
          lineHeight: 1.15,
          marginTop: 36,
        }}
      >
        {post?.title ?? "Blog"}
      </div>
      <div style={{ fontSize: 26, color: "#a1a1a1", marginTop: 48 }}>
        Nanda Kumar Mangati &middot; mangatinanda.me
      </div>
    </div>,
    { ...size },
  );
}
