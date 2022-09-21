/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '5xl': ['2.2rem', {
        lineHeight: '1.1',
      }],
    },

    extend: {
      colors: {
        'regal-blue': '#646cff',
        'regal-bluer': '#535bf2',
        'regal-blue-light':'#747bff',
      },
    },

  },
  plugins: [],
}
