import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightModeBg: colors.slate[100],
        lightModeAccBg: colors.indigo[100],
        lightModeText: colors.slate[950],

        darkModeBg: colors.slate[950],
        darkModeAccBg: colors.slate[800],
        darkModeText: colors.slate[50],
      },
    },
  },
  plugins: [],
};
export default config;
