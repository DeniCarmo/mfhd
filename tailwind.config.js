/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
    colors: {
      ...colors,
      'mf-red': '#b60000',
      'mf-grey-dark': '#232323',
      'mf-body-bg': '#191919',
      'mf-yellow': '#ffd200',
      'mf-orange': '#ff8400',
      'mf-alt-red': '#ca0211',
      'mf-grey-light': '#a0a0a0',
      'mf-white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Arial', 'Tahoma', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
};
