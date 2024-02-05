/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Bright Cyan
        secondary: "#FF007F", // Neon Pink
        tertiary: "#FF8F00", // Sunset Orange
        quaternary: "#9400D3", // Deep Purple
        quinary: "#008080", // Teal || Hot Magenta: #FF00FF
        accent: "#39FF14", // Fluorescent Green
      },
    },
  },
  plugins: [],
};
