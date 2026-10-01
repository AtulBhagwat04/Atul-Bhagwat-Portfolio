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
          primary: "#030608",
          secondary: "#080D10",
          card: "#0D1117",
          cardHover: "#131920",
        },
        accent: {
          primary: "#34F58A",
          hover: "#50FFA6",
          dark: "#14C97D",
        },
        text: {
          heading: "#FFFFFF",
          body: "#A8B3C4",
          muted: "#6B778C",
        },
        border: {
          custom: "#1C2432",
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
        glow: "0 0 30px rgba(52, 245, 138, 0.28)",
        glowSm: "0 0 15px rgba(52, 245, 138, 0.18)",
        glowLg: "0 0 60px rgba(52, 245, 138, 0.38)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.50)",
        card: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #34F58A 0%, #14C97D 100%)",
        "gradient-dark": "linear-gradient(180deg, rgba(8, 13, 16, 0.6) 0%, rgba(3, 6, 8, 0.95) 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(52, 245, 138, 0.12) 0%, transparent 70%)",
        "radial-glow-strong": "radial-gradient(circle at center, rgba(52, 245, 138, 0.22) 0%, transparent 65%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Plus Jakarta Sans", "sans-serif"],
        heading: ["var(--font-general-sans)", "Outfit", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "Space Grotesk", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(52, 245, 138, 0.15)" },
          "50%": { boxShadow: "0 0 25px rgba(52, 245, 138, 0.35)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

