/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#D434FE",
        ligthPurple100: "rgba(144, 58, 255, 0.12)",
        lightPurple200: "rgba(217, 217, 217, 0.03)",
        darkPurple: "#903AFF",
        darkPurple100: "rgba(144, 58, 255, 0.12)",
        darkPink: "#FF26B9",
        lightBlue: "#FE34B9",
        darkBlue: "#150E28",
        darkBlue100: "#100B20",
        gray: "#FFFF3F",
        gray100: "rgba(255, 255, 255, 0.18)",
        gray200: "rgba(255, 255, 255, 0.75)",
      },
      fontFamily: {
        clashDisplay: ["clash-display"],
        montserrat: ["montserrat"],
        unicaOne: ["unicaOne"],
      },
    },
  },
  plugins: [],
};
