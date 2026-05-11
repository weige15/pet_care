/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2a2e",
        muted: "#667579",
        paper: "#fffdf9",
        mist: "#eff8f6",
        mint: "#8bd4c7",
        coral: "#f08f7f",
        gold: "#e9b44c",
        deep: "#23545d",
        line: "#dbe8e5",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 42, 46, 0.12)",
        card: "0 12px 34px rgba(31, 42, 46, 0.08)",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Microsoft JhengHei"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
