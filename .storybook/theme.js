import { create } from '@storybook/theming'
import pkg from '../package.json'

export default create({
  base: 'dark',
  brandTitle: pkg.name,
  brandUrl: pkg.repository,
  brandImage:
    'https://global-uploads.webflow.com/612d3e6930fdc54f36f7d349/612f49b5ac99ee2dc27c9926_GIF_POKMI_V1_blanc.gif',

  colorPrimary: '#26DED0',
  colorSecondary: '#26DED0',

  appBg: '#141416',
  appContentBg: '#141416',
  appBorderColor: '#26DED0',

  barSelectedColor: '#26DED0',
  barBg: '#141416',
})
