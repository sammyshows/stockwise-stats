/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
      },

      spacing: {
        '0.75': '0.1875rem'
      },

      colors: {
        cyan: colors.cyan,
        'normal-cyan': '#1C6E5E',
        'bright-cyan': '#00FFD1',
        'bright-yellow': '#FFFF00',
        'opaque-cyan': 'rgba(0, 255, 187, 0.10)',
        'bright-green': '#45FF58',
        'bright-red': '#FA6A6A'
      },

      fontSize: {
        'tiny': '0.6rem',
        'teeny': '0.5rem',
        'atomic': '0.4rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}