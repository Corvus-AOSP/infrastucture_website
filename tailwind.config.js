/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      "primary": "#7FDCD7",
      "background": "#0F2629",
      "background-light": "#205165",
      "background-card": "#16373C",
      "background-sec": "#5A62AF",
      "text-hex": "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
}
