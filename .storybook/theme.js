import { create } from '@storybook/theming'
import { config } from '../config'
import pkg from '../package.json'

export default create({
  base: 'dark',
  brandTitle: pkg.name,
  brandUrl: pkg.repository,
  brandImage: 'https://rare-porn.com/images/framelogo.png',

  colorPrimary: '#26DED0',
  colorSecondary: '#26DED0',

  appBg: '#141416',
  appContentBg: '#141416',
  appBorderColor: '#26DED0',

  barSelectedColor: '#26DED0',
  barBg: '#141416',
})
