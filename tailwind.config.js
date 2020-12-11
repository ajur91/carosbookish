module.exports = {
  future: {},
  purge: [],
  theme: {
    colors: {
      'bookish': {
        dark: '#64405a',
        main: '#9f7189',
        medium: '#EDD5D8',
        light: '#FCF4F0',
        primary: '#cebdb6',
        second: '#C6CEBE',
        gray: '#494949',
        white: '#FEFEFE',
      }
    },
    screens: {
      x: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    }
  },
  plugins: []
};
