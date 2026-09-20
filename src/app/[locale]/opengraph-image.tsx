import { ImageResponse } from "next/og";

export const alt = "Pequenos Negócios com IA | Série prática para pequenos negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050B11",
          color: "#F5F5F2",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#F5B52E",
          }}
        >
          Série prática para pequenos negócios
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              maxWidth: 980,
            }}
          >
            Usar. Transformar. Gerenciar. Criar.
          </div>
          <div style={{ fontSize: 26, color: "#AEB7C0", maxWidth: 760 }}>
            Pequenos Negócios com IA
          </div>
        </div>
      </div>
    ),
    size,
  );
}
