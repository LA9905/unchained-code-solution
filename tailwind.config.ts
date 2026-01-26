/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',           // ← importante
    './components/**/*.{js,ts,jsx,tsx,mdx}',    // ← importante
  ],
  theme: {
  extend: {
    colors: {
      primary: '#1E3A8A',
      secondary: '#3B82F6',
      neutral: '#F3F4F6',
      dark: '#111827',
      'text-dark': '#1F2937',      // gris muy oscuro para textos principales
      'text-muted': '#4B5563',     // gris medio para descripciones
    },
  },
},
  plugins: [],
}