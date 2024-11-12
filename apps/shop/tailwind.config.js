const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { screens } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        'outer-space': {
          DEFAULT: '#243940',
          50: '#f1f9fa',
          100: '#dceff1',
          200: '#bde1e4',
          300: '#90cad0',
          400: '#5babb5',
          500: '#408f9a',
          600: '#387682',
          700: '#32606c',
          800: '#30515a',
          900: '#243940',
          950: '#192d33',
        },
        'burnt-sienna': {
          DEFAULT: '#e9704d',
          50: '#fdf4ef',
          100: '#fbe4d9',
          200: '#f6c7b2',
          300: '#f0a181',
          400: '#e9704d',
          500: '#e44d2b',
          600: '#d53621',
          700: '#b1271d',
          800: '#8d211f',
          900: '#721f1c',
          950: '#3d0d0e',
        },
        opal: {
          DEFAULT: '#a1c8cb',
          50: '#f5f9fa',
          100: '#eaf3f4',
          200: '#d1e4e6',
          300: '#a1c8cb',
          400: '#7bb2b5',
          500: '#5b989c',
          600: '#477d82',
          700: '#3a656a',
          800: '#335659',
          900: '#2e494c',
          950: '#1f2f32',
        },
        'citrine-white': {
          DEFAULT: '#f8f5d7',
          50: '#fbfaeb',
          100: '#f8f5d7',
          200: '#eee39a',
          300: '#e4ce60',
          400: '#dbb834',
          500: '#cba227',
          600: '#af7f1f',
          700: '#8c5d1c',
          800: '#754b1e',
          900: '#64401f',
          950: '#3a210e',
        },
      },
      container: {
        center: true,
        padding: {
          xs: '1rem',
          sm: '2.25rem',
          md: '3.75rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '7rem',
          '3xl': '9.5rem',
          '4xl': '14rem',
        },
      },
      screens: {
        xs: '360px',
        ...screens,
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
};
