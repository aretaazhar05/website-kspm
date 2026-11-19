import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f6fc",
          100: "#e5ecf8",
          200: "#c5d5ee",
          300: "#97b3df",
          400: "#628acb",
          500: "#3f6bb6",
          600: "#2f5499",
          700: "#29447c",
          800: "#12294f",
          900: "#0a1b3a",
          950: "#050f24",
        },
        royal: {
          50: "#eef4ff",
          100: "#dce7ff",
          200: "#c1d3ff",
          300: "#98b6ff",
          400: "#6d8dfb",
          500: "#4b67f2",
          600: "#3348e6",
          700: "#2938cb",
          800: "#2431a4",
          900: "#233182",
          950: "#171d4c",
        },
        gold: {
          50: "#fdf9eb",
          100: "#fbf1c9",
          200: "#f7e194",
          300: "#f2cb5b",
          400: "#eab630",
          500: "#d99a1b",
          600: "#bc7714",
          700: "#965513",
          800: "#7c4417",
          900: "#693a18",
          950: "#3d1d09",
        },
        ink: "#0c1527",
        mist: "#f5f7fb",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(10, 27, 58, 0.35)",
        card: "0 18px 50px -24px rgba(10, 27, 58, 0.45)",
        glow: "0 0 60px rgba(75, 103, 242, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,15,36,0), rgba(5,15,36,0.85))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
