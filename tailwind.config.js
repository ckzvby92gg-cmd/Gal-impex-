/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D72638",
          green: "#1B9C65",
          dark: "#111827",
          light: "#F9FAFB"
        }
      }
    }
  },
  plugins: []
};
