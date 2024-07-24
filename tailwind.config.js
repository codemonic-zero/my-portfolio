/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '11rem', // Custom font size class
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #f0f, #0ff)',
      },
      boxShadow: {
        'custom-text': '8px 6px -1px rgba(255, 0, 0, 0.7), 5px 4px 2px rgba(0, 0, 255, 0.5)',
        'gradient-red-blue': '0 8px 6px -1px rgba(255, 0, 0, 0.7), 0 5px 4px 2px rgba(0, 0, 255, 0.5)',
      },
      fontFamily: {
        'kalnia': ['"Kalnia Glaze"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px white',
        },
        '.text-shadow-lg': {
          textShadow: '7px 7px 8px red',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
