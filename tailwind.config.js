module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        navbar_logo: ['Merienda', 'cursive'],
        navbar_items: ['Lexend Deca', 'sans-serif'],
        heroh1: ['PlayFair Display', 'sans-serif'],
        heroh2: ['Montserrat', 'sans-serif'],
      },
      height: {
        section: '90vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
