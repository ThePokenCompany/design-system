const deepMerge = require('deepmerge')
const customFormsPlugin = require('@tailwindcss/forms')
const colors = require('tailwindcss/colors')

const config = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      'node_modules/@thepokencompany/ui/lib/defaultTheme.js',
      'node_modules/@thepokencompany/ui/dist/index.js',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#141416',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: '#FFD612',
      green: '#45B36B',
    },
    extend: {
      colors: {
        primary: '#26DED0',
        secondary: '#08282D',
        'neutral-1': '#141416',
        'neutral-2': '#23262F',
        'neutral-3': '#353945',
        'neutral-4': '#777E90',
        'neutral-5': '#B1B5C3',
        'neutral-6': '#E6E8EC',
        'neutral-7': '#F4F5F6',
        'neutral-8': '#FCFCFD',
        unlockable: '#B5B906',
        orange: '#FF9212',
        red: '#FF1E1E',
        turquoise: '#26DED0',
      },
      width: {
        '128': '32rem',
        '160': '40rem',
      },
      fontSize: {
        s: ['12px', '16px'],
        m: ['14px', '20px'],
        l: ['16px', '24px'],
        hs: ['20px', '28px'],
        hm: ['28px', '36px'],
        hl: ['36px', '44px'],
        hxl: ['42px', '54px'],
      },
    },
  },
  variants: {
    extend: {
      translate: ['motion-reduce'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [customFormsPlugin],
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc
    return [...acc, cur]
  }, [])
}

/**
 * Merge RP-UI and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }
  return deepMerge({ ...tailwindConfig, purge }, config, {
    arrayMerge: arrayMergeFn,
  })
}

module.exports = wrapper
