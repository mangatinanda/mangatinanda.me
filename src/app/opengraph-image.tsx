import { ImageResponse } from "next/og";

// Site-wide Open Graph / Twitter card image. Any route without its own
// opengraph-image inherits this one, so shared links stop rendering blank.
export const alt = "Nanda Kumar Mangati, Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
        Nanda Kumar Mangati
      </div>
      <div style={{ fontSize: 38, color: "#a1a1a1", marginTop: 24 }}>
        Senior Full-Stack Engineer &middot; AI-Native Platforms
      </div>
      <div style={{ fontSize: 28, color: "#3b82f6", marginTop: 48 }}>
        Django &middot; Next.js &middot; AI-powered development workflows
      </div>
      <div style={{ fontSize: 24, color: "#a1a1a1", marginTop: 56 }}>
        mangatinanda.me
      </div>
    </div>,
    { ...size },
  );
}
