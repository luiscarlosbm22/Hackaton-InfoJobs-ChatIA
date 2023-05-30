/** @type {import('tailwindcss').Config} */
export default {
  content: [",/index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#5ca4cd","100":"#5ca4cd","200":"#5ca4cd","300":"#5ca4cd","400":"#5ca4cd","500":"#5ca4cd","600":"#5ca4cd","700":"#2088C2","800":"#5ca4cd","900":"#4c1d95"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

