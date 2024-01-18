/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          'dark-green': '#4D774E',
          'medium-green': '#4D774E',
          'light-green': '#9DC88D',
          'natural-yellow': '#F1B24A',
        }
    },
  },
<<<<<<< HEAD
  plugins: [require("daisyui")],
})

=======
  plugins: [],
});
>>>>>>> b798e911c0b6923d288a7b0312a42fc44d306dea
