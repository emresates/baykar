import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "325px",
        xs: "450px",

        mobile: "640px",
        // => @media (min-width: 640px)

        tablet: "768px",
        // => @media (min-width: 768px)

        desktop: "1024px",
        // => @media (min-width: 1024px)

        xl: "1280px",
        // => @media (min-width: 1280px)

        "2xl": "1440px",
        // => @media (min-width: 1440px)

        "3xl": "1920px",
        // => @media (min-width: 1920px)
      },
      spacing: {
        none: "0",
        xxs: "0.125rem", // 2px
        xs: "0.25rem", // 4px
        sm: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24px
        "4xl": "2rem", // 32px
        "5xl": "2.5rem", // 40px
        "6xl": "3rem", // 48px
        "7xl": "4rem", // 64px
        "8xl": "5rem", // 80px
        "9xl": "6rem",
        "10xl": "8rem",
        "11xl": "10rem",
      },
      fontSize: {
        "heading-1-l": [
          "6rem", // 96px
          { lineHeight: "105.6px", letterSpacing: "-0.02em" },
        ],

        "heading-1-m": [
          "4.5rem", // 72px
          { lineHeight: "79.2px", letterSpacing: "-0.02em" },
        ],

        "heading-2": [
          "3.5rem", // 56px
          { lineHeight: "61.6px", letterSpacing: "-0.02em" },
        ],

        "heading-3": [
          "3rem", // 48px
          { lineHeight: "52.8px", letterSpacing: "-0.02em" },
        ],

        "heading-5": [
          "2rem", // 32px
          { lineHeight: "35.2px", letterSpacing: "-0.02em" },
        ],

        // Text xxl
        xxl: ["1.5rem", { lineHeight: "2.4rem" }], // 24px

        // Text xl
        xl: ["1.25rem", { lineHeight: "2rem" }], // 20px

        // Text lg
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px

        // Text md
        md: ["1rem", { lineHeight: "1.5rem" }], //16px

        // Text sm
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      },
      colors: {
        primary: {
          DEFAULT: "#0F172A",
        },
        secondary: {
          DEFAULT: "rgba(120, 53, 15, 1)",
        },
        gray: {
          DEFAULT: "#475569",
          100: "#E2E8F0",
        },
      },
      keyframes: {
        frameIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        frameIn: "frameIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
