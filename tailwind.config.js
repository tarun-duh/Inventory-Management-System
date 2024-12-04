/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1E3A8A",
        "light-blue": "#D9E3F0",
        "dark-green": "#1E3A8A",
        "light-green": "#D9E3F0",
      },
    },
  },
  plugins: [],
};
