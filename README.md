# Welcome to @rp/ui 👋

## 🚀 Usage

Install

```sh
yarn add @rp/ui
```

Inside `tailwind.config.js`

```js
const rpuiConfig = require('@rp/ui/config')

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
