import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

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
        modeLightMainBg: colors.sky[300],
        modeLightAccBg: colors.sky[100],
        modeLightText: colors.slate[950],

        modeDarkMainBg: colors.indigo[700],
        modeDarkAccBg: colors.indigo[950],
        modeDarkText: colors.slate[50],
      },
    },
  },
  plugins: [],
};
export default config;
