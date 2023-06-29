/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        999: 999,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Noto Sans", "sans-serif"],
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
      colors: {
        "discord-blue": "#7289DA",
        "github-gray": "#333333",
        "linkedin-blue": "#0077B5",
      },
    },
  },
  plugins: [],
};
