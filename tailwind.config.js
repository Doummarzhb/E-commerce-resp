 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary:"#f42c37",
        brandYellow:"#fdc62e",
        brandBlue:"#1376f4",
        brandWhite:"#eeeeee",
        brandGreen:"#2dcc6f",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem',
        },
      }
    },
  },
  plugins: [],
};