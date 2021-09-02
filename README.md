# Welcome to @rp/ui 👋

## 🚀 Usage

Install

Generate a token with the `read:packages` permission [here](https://github.com/settings/tokens/new)

Add the following lines to your `.npmrc` (usually located at `~/.npmrc`)

```
@rareporn:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:always-auth=true
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

```sh
yarn add @rareporn/ui
```

Inside `tailwind.config.js`

```js
const rpuiConfig = require('@rareporn/ui/config')

module.exports = rpuiConfig({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
```

> `rpuiConfig` contains default config of the design system but you can still override them.

You can find an usage example [here](example).

## 🎨 Run storybook

```sh
yarn start
```

## ✨ Format code style

```sh
yarn format
```
