/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#6365f1",
        purple: "#987ef7",
        pink: "#ef94f6",
        cyan: "#b5f8f9",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(5px, 5px)" },
          "25%": { transform: "translate(0px, 5px)" },
          "50%": { transform: "translate(-5px, -5px)" },
          "75%": { transform: "translate(0px, -5px)" },
          "100%": { transform: "translate(5px, 5px)" },
        },
        fadeInKF: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInKF: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        typing: {
          "0%": { width: "100%" },
          "10%": { width: "100%" },
          "40%": { width: "0%" },
          "60%": { width: "0%" },
          "90%": { width: "100%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%": { "border-color": "#2CE080" },
          "10%": { "border-color": "#2CE080" },
          "40%": { "border-color": "transparent" },
          "60%": { "border-color": "transparent" },
          "90%": { "border-color": "#2CE080" },
          "100%": { "border-color": "#2CE080" },
        },
      },
      animation: {
        fadeIn_1Sec: "fadeInKF 1s linear 1 forwards",
        fadeIn_3Sec: "fadeInKF 3s linear 1 forwards",
        slideIn: "slideInKF 0.5s ease-out 1 forwards",
        typewriter: "typing 4s steps(40, end) infinite, blink-caret .75s step-end infinite",
        floating: "float 6s infinite ease",
      },
    },
  },
  plugins: [],
};
