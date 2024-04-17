/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Roboto','Arial','Helvetica','sans-serif','system'",
      },
      fontSize: {
        sm: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
      },
      colors: {
        'primary': '#E5F4FF',
      },
    },
  },
  plugins: [],
}

