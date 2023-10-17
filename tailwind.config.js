/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(45, 49, 77)',
        secondary: 'rgb(150,152,166)',
        'lime-green': 'rgb(46, 209, 87)',
        'bright-cyan': 'rgb(43,183,218)',
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/bg-intro-desktop.svg')",
        'hero-mobile': "url('/src/assets/bg-intro-mobile.svg')",
      },
      borderStyle: ['hover'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
