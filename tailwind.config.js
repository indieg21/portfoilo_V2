module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    theme: {
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1024px',

        xl: '1280px',

        '2xl': '1536px',
      },
    },
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
