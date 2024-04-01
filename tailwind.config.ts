module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#fefefe",
        },
        zinc: "#101010",
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // Set the font family here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "outline-gray-focus": "inset 0 0 0 1.5px #222127",
        "outline-gray": "inset 0 0 0 1.5px #131317",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        titleFade: "titleFade 1s ease-in-out forwards",
        fadeBottom: "fadeBottom 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        titleFade: {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        fadeBottom: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { transform: "translateY(0%)", opacity: "100%" },
        },
      },
    },
  },
};
