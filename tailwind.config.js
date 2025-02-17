/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          primary: '#21BCAC',
          secondary: '#EBD3F8',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
}
