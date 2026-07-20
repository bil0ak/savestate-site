import { ImageResponse } from "next/og";

export const alt = "Savestate — Let the agent cook. Keep an undo button.";
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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 76px",
          background: "#06090d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
          <div style={{ color: "#65f2b1", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Savestate
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 34, fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            <span>Let the agent cook.</span>
            <span style={{ color: "#aab4bc" }}>Keep an undo button.</span>
          </div>
          <div style={{ marginTop: 30, color: "#aab4bc", fontSize: 25 }}>
            Verified local checkpoints for coding-agent sessions.
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 210,
            height: 370,
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #9affce",
            borderRadius: 110,
            background: "linear-gradient(135deg, #0b2119, #287557)",
            boxShadow: "0 0 80px rgba(101,242,177,.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 142,
              height: 142,
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #9affce",
              borderRadius: 80,
              background: "#0b3a29",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 62,
                height: 62,
                transform: "rotate(45deg)",
                border: "2px solid #9affce",
                background: "rgba(101,242,177,.32)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
