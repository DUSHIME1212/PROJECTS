/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "rgba(255, 255, 255, 0.3)",
        white: "#fff",
        yellow: "rgba(219, 255, 0, 0.2)",
        whitesmoke: {
          "100": "#ececec",
          "200": "rgba(235, 235, 235, 0.6)",
        },
        orangered: "rgba(230, 79, 20, 0.2)",
        mediumseagreen: "rgba(10, 207, 131, 0.2)",
        blueviolet: "rgba(151, 71, 255, 0.2)",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "41xl": "60px",
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
