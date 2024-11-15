/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      dropShadow: {
        'custom': '5px 8px 10px orange',
        '2-custom': '0px 2px 4px orange',
        'black-custom': '0px 3px 2px black',
      }
    },
  },
  plugins: [],
}
