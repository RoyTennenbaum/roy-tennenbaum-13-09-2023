import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/images/background.svg')",
      },
      gridTemplateColumns: {
        'auto-fit-5': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
