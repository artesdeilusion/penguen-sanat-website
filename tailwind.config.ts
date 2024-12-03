import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]

      }
      ,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

} satisfies Config;
