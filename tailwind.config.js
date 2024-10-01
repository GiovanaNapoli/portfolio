/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        [`aptos-black`]: ["aptos-black", "sans-serif"],
        [`aptos-bold`]: ["aptos-bold", "sans-serif"],
        [`aptos-extrabold`]: ["aptos-extrabold", "sans-serif"],
        [`aptos-light`]: ["aptos-light", "sans-serif"],
        [`aptos-semibold`]: ["aptos-semibold", "sans-serif"],
        [`aptos`]: ["aptos", "sans-serif"],
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 3s linear infinite",
      },
    },
  },
  plugins: [],
};
