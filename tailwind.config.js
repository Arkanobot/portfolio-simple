/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        scale: "scale 1s ease-in-out 1",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-3deg) scale(1)" },
          "50%": { transform: "rotate(3deg) scale(1.10)" },
          "100%": { transform: "rotate(-3deg) scale(1)" },
        },
      },
    },
    plugins: [],
  },
};
