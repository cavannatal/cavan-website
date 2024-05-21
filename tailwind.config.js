/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#00141f',
        'custom-blue': '#0466c8',
      },
      width: {
        '128': '32rem', // 512px if your base font-size is 16px
      },
      height: {
        '128': '32rem', // 512px if your base font-size is 16px
      }
    },
  },
  plugins: [],
}

