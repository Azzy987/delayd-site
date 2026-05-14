import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#231A2F",
        muted: "#776F82",
        paper: "#FBF7F0",
        cloud: "#FFFDFC",
        blush: "#F5EDE6",
        grape: "#7A4DF3",
        plum: "#5431A7",
        mint: "#D8F2E3",
        amber: "#F8C976"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(65, 48, 86, 0.12)",
        card: "0 14px 40px rgba(65, 48, 86, 0.09)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 700ms ease-out both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
