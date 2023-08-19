/** @type {import('tailwindcss').Config} */
module.exports = {
  //setting up tailwind
  content: [".src/**/*.{html, js, jsx }"],
  mode: "jit", 
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0, 0, 0, 0.35)"
      },
      backgroundImage : (theme) => ({
         "gradient-rainbow" : "linear-gradient(90deg, rgba(0,0,0,1) 2%, rgba(71,73,73,1) 41%, rgba(0,250,207,1) 100%);",
         "gradient-rainbow2" : "linear-gradient(90deg, rgba(0,0,0,1) 5%, rgba(106,122,122,1) 41%, rgba(8,189,158,1) 100%);"
      }),
      fontFamily : {
        playfair : ["Playfair Display", "serif"],
        opensans : ["Open Sans", "sans-serif"]
      },
      content : {
        brush : "url('./assets/brush.png')"
      },
      //setting up the breakpoints
      screens : {
        xs : "480px",
        sm : "768px",
        md : "1060px"
      }
    },
  },
  plugins: [],
}

