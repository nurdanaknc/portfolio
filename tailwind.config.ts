import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
 
      robotoMono: ["Roboto Mono", "monospace"],
    },
    container: {
      padding: {
        DEFAULT: '11rem',
        sm: '2rem',
        lg: '13rem',
        xl: '15rem',
        '2xl': '20rem',
      },
    },
  },
  plugins: [],
};
export default config;
