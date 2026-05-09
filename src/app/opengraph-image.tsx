import { ImageResponse } from "next/og";

export const alt =
  "Marcelo Farias - Desenvolvedor Full Stack para landing pages, aplicações web personalizadas, correção de bugs e publicação.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 45%, #083344 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: "rgba(34, 211, 238, 0.22)",
            filter: "blur(80px)",
            top: "-120px",
            right: "-80px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "9999px",
            background: "rgba(16, 185, 129, 0.14)",
            filter: "blur(80px)",
            bottom: "-100px",
            left: "-80px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", zIndex: "1" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "12px 22px",
              borderRadius: "9999px",
              border: "1px solid rgba(34, 211, 238, 0.35)",
              background: "rgba(34, 211, 238, 0.12)",
              color: "#67e8f9",
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 46,
            }}
          >
            Disponível para projetos no Brasil e no exterior
          </div>

          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            Marcelo Farias
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#e2e8f0",
              marginBottom: 34,
            }}
          >
            Desenvolvedor Full Stack
          </div>

          <div
            style={{
              maxWidth: 900,
              fontSize: 34,
              lineHeight: 1.25,
              color: "#cbd5e1",
            }}
          >
            Landing pages, aplicações web personalizadas, dashboards, correção
            de bugs e publicação com React, Next.js e Node.js.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            zIndex: "1",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(
            (item) => (
              <div
                key={item}
                style={{
                  padding: "14px 22px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#e2e8f0",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}