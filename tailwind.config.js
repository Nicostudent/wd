/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgSepiaSplash1': "url('/src/assets/images/bgSepiaSplash2.png')",  
        'bgFlowers': "url('/src/assets/images/bgFlowers.png')",  
        'bgSqr': "url('/src/assets/images/bg-squiggle.png')",  
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
        "Smooch": ["Smooch", "cursive"],
        "Font-1": ["Cormorant Garamond", "serif"],
        "Font-2": ["Montserrat", "sans-serif"],
        "Font-3": ["Courier Prime", "monospace"]
      },
      sepia: {
        25: '.25',
        75: '.75',
      }
    },
  
  },
  plugins: [],
}

