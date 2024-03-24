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
        titleFade: "titleFade 1s ease-out forwards",
        fadeBottom: "fadeBottom 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        titleFade: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "80%": { opacity: "100%" },
          "100%": { "line-height": "100%", opacity: "100%" },
        },
        fadeBottom: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { transform: "translateY(0%)", opacity: "100%" },
        },
      },
    },
  },
};
