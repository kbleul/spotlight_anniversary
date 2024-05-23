/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        scare: ["Scarecrow", "sans-serif"],
        cody: ["Codystar", "cursive"],
      }
    },
  },
  plugins: [],
}

