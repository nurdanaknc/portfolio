import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
    extend: {
      typography: (theme:any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: {
              color: theme('colors.black'),
            },
            h2: {
              color: theme('colors.black'),
            },
            h3: {
              color: theme('colors.black'),
            },
      
            // Add other custom styles here
          },
        },
      }),},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
