/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#94a3b8",
        success: "#34d15b",
        info: "#34d1c4",
        warning: "#e6b137",
        danger: "#e64337",
        light: "#f2f0f0",
        dark: "#26252e",
      },
      animation: {
        fadeInDown: "fadeInDown 0.3s ease-in-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
