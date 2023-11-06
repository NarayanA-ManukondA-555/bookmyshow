/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
darkBackground: {
  50: "#edf1fc",
  100: "#d3d4e1",
  200: "#b6b8c9",
  300: "#989bb2",
  400: "#7c7f9b",
  500: "#636582",
  600: "#4c4f66",
  700: "#363849",
  800: "#21222e",
  900: "#0a0a16",
},
navcol:
{
  50: '#e4f1ff',
  100: '#bbd4f7',
  200: '#8fb8ee',
  300: '#659be8',
  400: '#3c7ee2',
  500: '#2665c8',
  600: '#1d4f9c',
  700: '#133870',
  800: '#082244',
  900: '#000b1b',
},
premierCol:
{
  50: '#edf0fd',
  100: '#ced3e5',
  200: '#afb6cf',
  300: '#9099bb',
  400: '#707ba7',
  500: '#57628e',
  600: '#444c6f',
  700: '#2B3148',
  800: '#1c2132',
  900: '#080b17',
}
      },
    },
  },
  plugins: [],
}
