/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,css}",
    "./views/**/*.ejs",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
