import { ImageResponse } from "next/og";

export const alt = "Marcelo Pires de Farias — Tecnologia, IA e Automação";

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
          background: "#080B10",
          color: "#F5F7FA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            fontWeight: 600,
            color: "#9AA4B2",
          }}
        >
          MPF.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Tecnologia para transformar problemas reais.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#9AA4B2",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Software · AI · Automation · Digital Transformation
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
