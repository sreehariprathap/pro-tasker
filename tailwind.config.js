/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3a86ff",
          secondary: "#7209b7",
          accent: "#34ced3",
          neutral: "#35363C",
          "base-100": "#F4F7FA",
          info: "#A5B3F3",
          success: "#24A897",
          warning: "#F8AE1B",
          error: "#E53E4F",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xsm: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1836px",
        "4xl": "2236px",
      },
      colors: {
        main: "#3a86ff",
        main2: "#60BAF9",
        main3: "#85D7FC",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require('tailwind-scrollbar-hide')
  ],
};
