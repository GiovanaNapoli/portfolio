/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        [`aptos-black`]: ["aptos-black", "sans-serif"],
        [`aptos-bold`]: ["aptos-bold", "sans-serif"],
        [`aptos-extrabold`]: ["aptos-book", "sans-serif"],
        [`aptos-light`]: ["aptos-light", "sans-serif"],
        [`aptos-semibold`]: ["aptos-semibold", "sans-serif"],
        [`aptos`]: ["aptos", "sans-serif"],
      },
    },
  },
  plugins: [],
};
