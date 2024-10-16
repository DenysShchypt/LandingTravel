/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{css,js,ts,jsx,tsx,jpg}',
    './public/icons.svg',
  ],
  theme: {
    extend: {
      container: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // або ваш кастомний шрифт
        },
        padding: {
          xs: '16px',
          sm: '16px',
          md: '110px',
          lg: '110px',
          xl: '110px',
          '2xl': '220px',
        },
        center: true,
      },
      screens: {
        xs: '320px',
        sm: '390px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '48px',
      },
      colors: {
        auxiliary: '#003c82',
        comments: '#ecf5ff',
        current: 'currentColor',
        customBlue: 'rgba(0, 60, 130, 0.3)',
        footerTitle: '#f2f2f2',
        inputText: 'rgba(0, 60, 130, 0.5);',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
    },
  },
  plugins: [],
}
