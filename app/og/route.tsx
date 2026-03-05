import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function OGImage() {
  const title = "JU Estimating"
  const subtitle = "Construction Estimating & Quantity Takeoff Services"
  const url = "juestimating.com"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.8 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, opacity: 0.7 }}>{url}</div>
          <div
            style={{
              fontSize: 18,
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.15)",
            }}
          >
            Get Accurate Estimates • Win More Bids
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}