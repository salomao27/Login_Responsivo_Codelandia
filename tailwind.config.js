/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'max-md': {'max': '768px'},
        // Adicione outras media queries com 'max' aqui, se necessário
        'max-lg': {'max': '1024px'},
        'max-sm': {'max': '640px'},
      },
      colors:{
        greenPage: "#1E9E6A"
      },
      fontFamily:{
        Archivo: ['Archivo']
      },
      width:{
        pageW: '400px'
      },
      height:{
        pageH: "49px"
      }
    },
  },
  plugins: [],
}

