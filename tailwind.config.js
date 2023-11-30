/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xs: "478px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary: "#00BE31",
        secondary: "#00AA65",
        tertiary: "#009381",
        color4: "#007A87",
        color5: "#006178",
        color6: "#2F4858",
      },
      fontFamily: {
        signika: ["Signika"],
        varela: ["Varela Round"],
      },
    },
  },
  plugins: [],
};
