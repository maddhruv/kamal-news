module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 500,
    },
    colors: {
      primary: {
        light: "#2563EB",
        regular: "#1D4ED8",
        dark: "#1E40AF",
      },
      white: {
        light: "#ffffff",
        regular: "#E5E7EB",
        dark: "#D1D5DB",
      },
      black: {
        light: "#1F2937",
        regular: "#111827",
        dark: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
