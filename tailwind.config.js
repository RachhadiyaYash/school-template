/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        absoluteBlack: "#000",
        absoluteWhite: "#FFF",
        gray: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",

        },
        orange: {
          65: "#FF8D4C",
          70: "#FF9E66",
          75: "#FFAE80",
          80: "#FFBE99",
          90: "#FFDECC",
          95: "#FFEFE5",
          97: "#FFF5F0",
          99: "#FFFCFA",
        },
      },
    },
  },
  plugins: [],
};
