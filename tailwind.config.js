// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': '#EBF8FF',
        'purple-100': '#FAF5FF',
        'pink-100': '#FFF5F7',
        'blue-500': '#4299E1',
        'purple-600': '#9F7AEA',
        'purple-700': '#6B46C1',
        'blue-600': '#3182CE',
      },
    },
  },
  plugins: [],
}
