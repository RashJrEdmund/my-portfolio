import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        app: {
          blue: {
            500: "var(--app-blue-500)",
          },
          shimmer: {
            200: "var(--app-shimmer-200)",
          },
          text: {
            200: "var(--app-text-200)",
            500: "var(--app-text-500)",
          },
          dark: {
            200: "var(--app-dark-200)",
            500: "var(--app-dark-500)",
            600: "var(--app-dark-600)",
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
