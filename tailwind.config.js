/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: '4px 4px 4px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        Italianno: ['Italianno'],
      },
      colors: {
        'content-bg': '#F9F9F9',
        'title-yellow': '#F9ECB0',
        'href-color': '#006ce0',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1.5s ease-out',
        fadeInRight: 'fadeInRight 1.5s ease-out',
      },
      backgroundImage: {
        'highlighted-bar':
          'linear-gradient(to top, #F9ECB0 50%, transparent 50%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          'text-shadow': `
            2px 2px 0px #ff6E6E,
            -2px -2px 0px #ff6E6E,
            2px -2px 0px #ff6E6E,
            -2px 2px 0px #ff6E6E,
            0px 2px 0px #ff6E6E,
            0px -2px 0px #ff6E6E,
            2px 0px 0px #ff6E6E,
            -2px 0px 0px #ff6E6E
          `,
        },
      });
    },
  ],
};
