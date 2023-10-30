import tailwindFontawesome from 'tailwind-fontawesome';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**.mustache"],
  theme: {
    extend: {},
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: [
    tailwindFontawesome
  ]
}

