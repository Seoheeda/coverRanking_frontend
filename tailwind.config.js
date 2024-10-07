/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT : "#C8A2C8",
          1: "#C8A2C8",
          2: "#E6E6FA",
        },
        gray: {
          DEFAULT: "#F0F0F0",
          1: "#F0F0F0",
          2: "#D8D8D8",
        }
      },
      fontFamily: {
        jamsil: ['"The Jamsil"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

