import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#00a884",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Backend Engineer · Fintech
          </p>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: "#0a0a0f",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: 26,
              color: "#6b7280",
              lineHeight: 1.5,
              maxWidth: "800px",
              margin: 0,
            }}
          >
            Payments, real estate, accounting infrastructure in Go and PostgreSQL
          </p>
        </div>
        <p
          style={{
            fontSize: 22,
            color: "#00a884",
            margin: 0,
          }}
        >
          kumail.in
        </p>
      </div>
    ),
    { ...size },
  );
}
