const rpuiConfig = require('@thepokencompany/ui/config')

module.exports = rpuiConfig({
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
