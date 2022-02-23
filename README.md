# Welcome to @thepokencompany/ui 👋

## 🚀 Usage

Install

Generate a token with the `read:packages` permission [here](https://github.com/settings/tokens/new)

Add the following lines to your `.npmrc` (usually located at `~/.npmrc`)

```
@thepokencompany:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:always-auth=true
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

```sh
yarn add @thepokencompany/ui
```

Inside `tailwind.config.js`

```js
const rpuiConfig = require('@thepokencompany/ui/config')

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

## 🤓 Test in local

```sh
yarn build
yarn link
```

In targeted local repository
```sh
yarn link "@thepokencompany/ui"
````

## 🎨 Run storybook

```sh
yarn start
```

## ✨ Format code style

```sh
yarn format
```
## 🚀 Deploy package

```sh
npm version <semantic versioning>
npm publish
```
