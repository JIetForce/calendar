import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-primary": "#FF4E6B",
        "red-secondary": "#FF4E6B29",
        "green-primary": "#00CC66",
        "green-secondary": "#00CC6629",
        "yellow-primary": "#FFBB33",
        "yellow-secondary": "#FFBB3329",
        "blue-primary": "#4DB4FF",
        "blue-secondary": "#4DB4FF29",
        "gray-primary": "#797979",
        "white-primary": "#FFFAFB",
      },
    },
  },
  plugins: [],
} satisfies Config;
