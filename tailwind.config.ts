import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-red",
    "bg-orange",
    "bg-yellow",
    "bg-green",
    "bg-blue",
    "bg-indigo",
    "bg-purple",
    "bg-pink",
    "bg-brown",
    "border-red",
    "border-orange",
    "border-yellow",
    "border-green",
    "border-blue",
    "border-indigo",
    "border-purple",
    "border-pink",
    "border-brown",
  ],
  theme: {
    extend: {
      colors: {
        red: "hsl(var(--red))",
        orange: "hsl(var(--orange))",
        yellow: "hsl(var(--yellow))",
        green: "hsl(var(--green))",
        blue: "hsl(var(--blue))",
        indigo: "hsl(var(--indigo))",
        purple: "hsl(var(--purple))",
        pink: "hsl(var(--pink))",
        brown: "hsl(var(--brown))",
        background: "hsl(var(--background))",
        "button-background": "hsl(var(--button-background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          background: "hsl(var(--card-background))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          input: "hsl(var(--border-input))",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          background: "hsl(var(--input-background))",
        },
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
