const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./stories/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
