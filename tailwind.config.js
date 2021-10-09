const defaultTheme = require('tailwindcss/defaultTheme');
const defaultsDeep = require('lodash.defaultsdeep');
const baseConfig = require("@croud-ui/css");

module.exports = defaultsDeep({
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ]
}, baseConfig);