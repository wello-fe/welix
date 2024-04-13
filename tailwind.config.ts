import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deepblue: {
          50: '#E6F0FF',
          500: '#3366FF',
          700: '#1939B7',
        },
        grayscale: {
          200: '#F3F3F3',
          300: '#E5E7EC',
          800: '#4A4D55',
          900: '#292A2E',
        },
      },
    },
  },
  plugins: [],
};

export default config;
