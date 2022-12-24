/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../pages/*.html"],
  theme: {
    extend: {
      colors:{
        "main-darker":"#F9FCFF",
        "violet":"#7872B9",
        // "main":"#F5F5F5",
        "bluelike":"#CDE1FF",
        "bluelike-light":"#EBF5FF",
      }
    },
  },
  plugins: [],
}
