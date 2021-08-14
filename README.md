# Welcome to rp-ui 👋

## 📦 Import library to your project

```sh
// install dependency

yarn add rp-ui
```

```sh
// import global stylesheet from `index.ts` file

import 'rp-ui/lib/css/index.css'
```

## 🚀 Run storybook

```sh
yarn start
```

## 🎨 Add new icons

1. Add `.svg` icons to `./src/assets/icons` folder

2. Run

```sh
yarn build:styles
```

> this will generate new sccs file from then update typescript enum from `./src/design-token/Icon/types.d.ts` with added (or removed) icons.

## ✨ Format code style

```sh
yarn format
```
