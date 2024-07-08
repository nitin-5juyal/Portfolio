/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      width: {
        'custom': '500px', // Custom width
      },
     
      height: {
        'custom': '300px', // Custom height
      },
      zIndex: {
        '100': '100',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'purple': '0 4px 6px rgba(128, 0, 128, 0.5)', // Define the purple drop shadow here

      }, fontFamily: {
        roboto: ['Roboto', 'sans'],
      }, boxShadow: {
        'purple': '0 4px 6px -1px rgba(128, 0, 128, 0.1), 0 2px 4px -1px rgba(128, 0, 128, 0.06)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      color:{
           tints : '#8749f2',
           gred : '#1F2425',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

