/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2c86c1",
        
"secondary": "#b73a55",
        
"accent": "#ddc142",
        
"neutral": "#16191D",
        
"base-100": "#ECEAF0",
        
"info": "#98D8F5",
        
"success": "#32E284",
        
"warning": "#EBA83D",
        
"error": "#F07670",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
