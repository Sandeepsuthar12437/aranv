//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/*.html", // All HTML files in dist
    "./src/**/*.{js,ts,jsx,tsx,css}", // All CSS and JS/TS in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      screens: {
        xs: "450px", // Custom breakpoint for 450px
        "sm-md": "700px", // Custom breakpoint for 700px
        "md-lg": "850px", // Custom breakpoint for 850px
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx,html}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
