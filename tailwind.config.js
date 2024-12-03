/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary)',
        'secondary-color': 'var(--secondary)',
        'lightgray-color': 'var(--lightgray)',
      },
      backgroundColor: {
        'primary-color': 'var(--primary)',
      },
    },
  },
  plugins: [],
}
