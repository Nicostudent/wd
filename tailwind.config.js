/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'marmolado': "url('/src/assets/images/marmolado.jpeg')",
        'sunflower': "url('/src/assets/images/sunflower.jpg')",
        'bici': "url('/src/assets/images/bici.jpeg')",
        'fondoFlores': "url('/src/assets/images/fondoFlores.jpg')",
        'leaf': "url('/src/assets/images/leaf.jpg')",

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
        "Font-3": ["Courier Prime", "monospace"],
        "Font-0": ["PT Serif", "serif"],
        "times": ["times", "curisive"],
        "seasons": ["seasons", "curisive"],
        "forum": [ "Forum", "serif"],
        "zilla": ["Zilla Slab", "serif"],
        "cormorant": ["Cormorant Garamond", "serif"],
      },
      colors:{
        orangt450:"#FCF8EB",
        orangt4100:"#F4E6D0",
        ambert4700:"#AC5E23",
      },
      sepia: {
        25: '.25',
        75: '.75',
      }
    },
  
  },
  plugins: [],
}

