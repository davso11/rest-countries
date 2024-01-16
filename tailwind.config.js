/** @type {import('tailwindcss').Config} */

import defaultFontFamily from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '469px',
      sm: '640px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Nunito Sans', ...defaultFontFamily.fontFamily.sans],
    },
    dropShadow: {
      DEFAULT: '0px 5px 8px hsl(var(--shadow) / 20%)',
    },
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        shadow: 'hsl(var(--shadow))',
      },
    },
  },
  plugins: [],
};
