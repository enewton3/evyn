module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   display: ["Archivo Narrow", "sans-serif"],
    //   body: ["Archivo Narrow", "sans-serif"],
    // },
    // backgroundImage: (theme) => ({
    //   home: "url('../../assets/home.jpg')",
    // }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
