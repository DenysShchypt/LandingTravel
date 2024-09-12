/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}","./icons.svg"],
  theme: {
    extend: {
      container: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // або ваш кастомний шрифт
        },
        padding: {
          default: "1rem",
        },
        center: true,
      },
      screens: {
        xs: "320px",
        sm: "390px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
      },
      colors: {
        auxiliary: "#003c82",
        current: 'currentColor',
        customBlue: 'rgba(0, 60, 130, 0.3)',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      
    },
  },
  plugins: [],
};
