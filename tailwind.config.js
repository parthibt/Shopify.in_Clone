/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "758px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mygreen: "#1C8D73",
        hevygreen: "#004C3F",
        lightgreen: "#F3FCF4",
        lightpink: "#FCF6ED",
        myblack: "#242B2E",
        fontsans: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
