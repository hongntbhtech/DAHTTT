/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      backgroundPosition: {
        'custom-y': '0 -130%',
      },

      boxShadow: {
        'custom': '0 5px 0 0 #191A23',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #71BC9F 100%)',
      },
    },
  },
  plugins: [],
}

