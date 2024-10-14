import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'charcoal-gray' : '#333333',
        'charcoal-gray-alpha' : '#33333355',
        'light-gray': '#D3D3D3',
        'light-gray-alpha': '#D3D3D355',
      },
    },
  },
  plugins: [],
};
export default config;
