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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0206, 189, 182, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0206, 189, 182, 0.1), 0 2px 4px -1px rgba(, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(206, 189, 182, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0206, 189, 182, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(206, 189, 182, 0.25)',
     '3xl': '0 35px 60px -15px rgba(206, 189, 182, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(206, 189, 182, 0.06)',
      none: 'none',
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
