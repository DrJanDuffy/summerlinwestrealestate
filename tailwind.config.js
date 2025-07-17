/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc4ff',
          400: '#36a7ff',
          500: '#0084ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
          950: '#000d1a',
        },
      },
    },
  },
  plugins: [],
};