import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: colors.gray,
      secondary: colors.white,
      neutral: colors.neutral,
    },
    extend: {
      width: {
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
      },
      height: {
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
      },
      fontFamily: {
        sans: ["Open Sans Variable", "sans-serif"],
        itali: ["Italianno", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": 'url("./src/assets/hero-bg.webp")',
        "leaves-floating": 'url("./src/assets/leaves-2.webp")',
        "leaves-floating-2": 'url("./src/assets/leaves-3.webp")',
      },
    },
  },
  plugins: [],
};
