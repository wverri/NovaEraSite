/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ba5ec',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f5ebe8',
          200: '#ebd6d0',
          300: '#ddb7ac',
          400: '#cb8f7f',
          500: '#b97259',
          600: '#a65c44',
          700: '#8c4836',
          800: '#763c2f',
          900: '#66342b',
          950: '#361a15',
        },
        uo: {
          gold: '#FFD700',
          crimson: '#990000',
          parchment: '#F5E8C9',
          darkwood: '#4A3728',
          midnight: '#121212',
          mist: '#E1DFDB',
        },
      },
      fontFamily: {
        medieval: ['Cinzel', 'MedievalSharp', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        almendra: ['Almendra', 'serif'],
        metamorphous: ['Metamorphous', 'cursive'],
        pirata: ['Pirata One', 'cursive'],
        berkshire: ['Berkshire Swash', 'cursive'],
        primary: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/uo-background.jpg')",
        'footer-texture': "url('/images/parchment-texture.jpg')",
      },
    },
  },
  plugins: [],
} 