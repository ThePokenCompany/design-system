const path = require('path')

module.exports = {
  // The location of your stories
  stories: ['../src/**/*.stories.tsx'],

  // addons added to your storybook
  addons: [
    '@storybook/addon-backgrounds/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
  ],
}
