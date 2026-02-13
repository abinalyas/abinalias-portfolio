import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f3f1ec',
        ink: '#111111',
        muted: '#595857',
        line: '#d3d0c8',
        accent: '#1f3d2f'
      },
      fontFamily: {
        display: ['"Clash Grotesk"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Satoshi"', '"Manrope"', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
