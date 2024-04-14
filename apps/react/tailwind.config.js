/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      "slide-in": "slide-in 0.8s cubic-bezier(0.5, 0, 0.5, 1)",
      shake: "shake 1s ease",
    },
    keyframes: {
      "slide-in": {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      shake: {
        "20%, 40%, 60%, 80%": {
          transform: "translateX(1%)",
        },
        "10%, 30%, 50%, 70%, 90%": {
          transform: "translateX(-1%)",
        },
        "0%, 100%": {
          transform: "translateX(0)",
        },
      },
    },
  },
  plugins: [],
};
