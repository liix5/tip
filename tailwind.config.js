/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      content:{
        dollar: 'url("./src/assets/images/icon-dollar.svg")',
      },
      fontFamily:{
        mono : "'Space Mono', monospace",
      }
    },
  },
  plugins: [],
}

