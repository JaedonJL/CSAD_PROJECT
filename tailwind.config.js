const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  // mode: 'jit',

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
});
