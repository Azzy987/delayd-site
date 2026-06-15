import { ImageResponse } from "next/og";

export const alt = "Delayd - See what spending costs your dreams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "64px 72px",
        color: "#231A2F",
        background:
          "radial-gradient(circle at 78% 22%, rgba(122,77,243,.24), transparent 34%), radial-gradient(circle at 18% 82%, rgba(248,201,118,.28), transparent 30%), #FBF7F0",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 58,
              height: 58,
              borderRadius: 16,
              color: "white",
              background: "linear-gradient(135deg, #9A75FF, #6235DC)",
              fontSize: 38
            }}
          >
            D
          </div>
          Delayd
        </div>
        <div style={{ marginTop: 58, fontSize: 68, lineHeight: 1.03, fontWeight: 750 }}>
          See what spending costs your dreams.
        </div>
        <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.4, color: "#776F82" }}>
          Turn everyday purchases into the time they move your goals further away.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 360,
          padding: 30,
          borderRadius: 34,
          background: "rgba(255,255,255,.92)",
          border: "2px solid rgba(255,255,255,.9)",
          boxShadow: "0 28px 80px rgba(65,48,86,.18)"
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: "#7A4DF3", textTransform: "uppercase" }}>
          Impact reveal
        </div>
        <div style={{ marginTop: 18, fontSize: 26, color: "#776F82" }}>₹2,000 dinner</div>
        <div style={{ marginTop: 10, fontSize: 44, lineHeight: 1.1, fontWeight: 750 }}>
          Bali moved 6 days further away.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            padding: "16px 20px",
            borderRadius: 18,
            color: "white",
            background: "linear-gradient(90deg, #7A4DF3, #5431A7)",
            fontSize: 22,
            fontWeight: 700
          }}
        >
          Pause. Decide. Protect the dream.
        </div>
      </div>
    </div>,
    size
  );
}
