/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm:   ['12px', '20px'],
      base: ['16px', '24px'],
      lg:   ['24px', '36px'],
      xl:   ['30px', '45px'],
      xxl:  ['38px', '60px']
    }
  },
  plugins: [],
}

