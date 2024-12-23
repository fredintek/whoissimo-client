import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        swashBreakTrial: ["var(--font-swash-break-trial)"],
      },
      backgroundImage: {
        "hero-bg": "url('/images/simo-art-bg-blur.png')",
        "tunnel-bg": "url('/images/Tunnel.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
