/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'selectivi-yellow': '#FFC22D',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        selectivicat: {
          "primary": "#FFC22D",
          "secondary": "#2d3748",
          "accent": "#ed8936",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light",
    ],
  },
} 