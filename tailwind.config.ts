import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "ssm": "400px",
        // => @media (min-width: 400px) { ... }

        "sm": "640px",
        // => @media (min-width: 640px) { ... }

        "md": "768px",
        // => @media (min-width: 768px) { ... }

        "lg": "1024px",
        // => @media (min-width: 1024px) { ... }

        "xl": "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        app: {
          blue: {
            500: "var(--app-blue-500)",
          },
          shimmer: {
            200: "var(--app-shimmer-200)",
            300: "var(--app-shimmer-300)",
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
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        17: "4.5rem",
        21: "5.5rem", // since p-20 is 5rem
        "app-max-w": "var(--app-max-w)",
        "app-dynamic-max-w": "var(--app-dynamic-max-w)",

        "app-section-min-h": "var(--app-section-min-h)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      // for adding custom utilities. // https://tailwindcss.com/docs/plugins

      const newUtilities = {
        ".grid-auto-fill-350": {
          "grid-template-columns": "repeat(auto-fill, minmax(350px, 1fr))",
        },
        ".grid-auto-fill-370": {
          "grid-template-columns": "repeat(auto-fill, minmax(370px, 1fr))",
        },
        ".grid-auto-fill-380": {
          "grid-template-columns": "repeat(auto-fill, minmax(380px, 1fr))",
        },
        ".grid-auto-fill-400": {
          "grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;

export default config;
