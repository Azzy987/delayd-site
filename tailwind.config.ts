import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)",
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        grape: "rgb(var(--color-grape) / <alpha-value>)",
        plum: "rgb(var(--color-plum) / <alpha-value>)",
        mint: "rgb(var(--color-mint) / <alpha-value>)",
        amber: "rgb(var(--color-amber) / <alpha-value>)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        glow: "0 0 40px rgb(var(--color-grape) / 0.15)",
        "glow-lg": "0 0 80px rgb(var(--color-grape) / 0.2)",
        "glow-btn": "0 0 30px rgb(var(--color-grape) / 0.35)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 700ms ease-out both",
        "fade-up": "fadeUp 600ms ease-out both",
        "fade-in": "fadeIn 500ms ease-out both",
        "scale-in": "scaleIn 500ms ease-out both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse": "marqueeReverse var(--marquee-duration, 40s) linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgb(var(--color-grape) / 0.15)" },
          "50%": { boxShadow: "0 0 40px rgb(var(--color-grape) / 0.3)" }
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
