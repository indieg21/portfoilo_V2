module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        navbar_logo: ['Merienda', 'cursive'],
        navbar_items: ['Zilla Slab Highlight', 'cursive'],
        heroh1: ['PlayFair Display', 'sans-serif'],
        heroh2: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
