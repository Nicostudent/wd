/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgSepiaSplash1': "url('/src/assets/images/bgSepiaSplash1.png')",      
      },
      fontFamily:{
        "Gwendolyn" : ["Gwendolyn", "cursive"],
        "Dosis": ["Dosis", "sans-serif"],
        "British-bounce": ["Birthstone Bounce", "cursive"],
        "Merriweather": ["Merriweather", "serif"],
        "Alice": ["Alice", "serif"],
        "Garamond":["EB Garamond", "serif"],
        "Kalam": ["Kalam", "cursive"],
        "Dancing": ["Dancing Script", "cursive"],
        "Smooch": ["Smooch", "cursive"]
      },
      sepia: {
        25: '.25',
        75: '.75',
      }
    },
  
  },
  plugins: [],
}

