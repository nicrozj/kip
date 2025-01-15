import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "accent": "#555A64",
        "smoke": {
          "100": "#F9FBFC",
          "200": "#E8E7EA",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
