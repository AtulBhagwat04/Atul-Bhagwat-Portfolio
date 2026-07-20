import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0B0F12",
          card: "#111418",
          cardHover: "#161B22",
        },
        accent: {
          primary: "#34F58A",
          hover: "#50FFA6",
          dark: "#14C97D",
        },
        text: {
          heading: "#FFFFFF",
          body: "#B5BBC7",
          muted: "#8E98A8",
        },
        border: {
          custom: "#232931",
          hover: "#34F58A40",
        },
        status: {
          success: "#22C55E",
          warning: "#FACC15",
          error: "#EF4444",
        },
      },
      borderRadius: {
        card: "20px",
        container: "24px",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(52, 245, 138, 0.30)",
        glowSm: "0 0 15px rgba(52, 245, 138, 0.20)",
        glowLg: "0 0 50px rgba(52, 245, 138, 0.40)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #34F58A 0%, #14C97D 100%)",
        "gradient-dark": "linear-gradient(180deg, rgba(11, 15, 18, 0.6) 0%, rgba(5, 5, 5, 0.9) 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(52, 245, 138, 0.15) 0%, transparent 70%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-general-sans)", "General Sans", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "Space Grotesk", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
