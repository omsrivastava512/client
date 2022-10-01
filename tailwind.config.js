/** @type {import('tailwindcss').Config} */
  const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    fontFamily: {
      brand : ['Titillium'],
    },
  plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
    
  },
    extend: {
      colors: {
        'brand' : '#F1430C',
    },
    },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

