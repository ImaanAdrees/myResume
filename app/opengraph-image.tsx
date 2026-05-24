import { ImageResponse } from "next/og";

export const alt =
  "Imaan Adrees — Full-Stack Developer & Computer Science Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #1E293B 0%, #0F172A 60%, #0B1120 100%)",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(234,179,8,0.35) 0%, rgba(234,179,8,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -180,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(244,114,182,0) 70%)",
            display: "flex",
          }}
        />

        {/* IA monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "linear-gradient(135deg, #EAB308, #F472B6)",
              color: "#0F172A",
              fontSize: 42,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: -2,
            }}
          >
            IA
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 22,
              color: "#94A3B8",
            }}
          >
            <span style={{ color: "#EAB308" }}>{"<Imaan.dev/>"}</span>
            <span>Portfolio · 2026</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Eyebrow */}
        <div
          style={{
            color: "#EAB308",
            fontSize: 28,
            letterSpacing: 4,
            fontFamily: "ui-monospace, monospace",
            display: "flex",
          }}
        >
          {"// hello world, i'm"}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            lineHeight: 1,
            marginTop: 12,
            backgroundImage: "linear-gradient(90deg, #EAB308, #F472B6, #EAB308)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Imaan Adrees
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 40,
            color: "#F8FAFC",
            marginTop: 16,
            display: "flex",
          }}
        >
          Computer Science Graduate &{" "}
          <span style={{ color: "#F472B6", marginLeft: 12 }}>
            Full-Stack Developer
          </span>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "React Native", "Node.js", "C#", "Open to work"].map(
            (t) => (
              <div
                key={t}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: "rgba(30, 41, 59, 0.7)",
                  border: "1px solid rgba(234, 179, 8, 0.35)",
                  color: t === "Open to work" ? "#86EFAC" : "#F8FAFC",
                  fontSize: 22,
                  display: "flex",
                }}
              >
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
