/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oxanium : ['Oxanium', "cursive"],
        poppins: ['Poppins', 'sans-serif']
      },
      colors : {
        purple : "#9334ea",
        grey : "#d1d5da",
        
      }
    },
  },
  plugins: [],
}

