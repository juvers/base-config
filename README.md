This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. I-S-B  (Install, Start & Build)

### npm

```
npm i
or
npm i --legacy-peer-deps
```

### yarn

```
yarn install
```

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "start:base": "yarn install --legacy-peer-deps && yarn start",
    "start:bare": "npm i -g yarn && yarn install --legacy-peer-deps && yarn start",
    "eject": "react-scripts eject",
    "lint": "eslint --ext .ts,.tsx ./src",
    "lint:fix": "eslint --fix --ext .ts,.tsx ./src",
    "clear-all": "rm -rf build node_modules",
    "re-start": "rm -rf build node_modules && yarn install --legacy-peer-deps && yarn start",
    "re-build": "rm -rf build node_modules && yarn install --legacy-peer-deps && yarn build"
  },
```

## 2. Start

```sh
npm start
or
yarn start
```

## 3. Build

```sh
npm run build or yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## 4. Directory Structure

```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── _redirects
│   ├── branding
│   ├── favicon
│   ├── fonts
│   ├── icons
│   ├── images
│   ├── index.html
│   ├── logo
│   ├── manifest.json
│   ├── mock
│   └── robots.txt
├── src
│   ├── @types
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── config.ts
│   ├── contexts
│   ├── guards
│   ├── hooks
│   ├── index.tsx
│   ├── layouts
│   ├── locales
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── redux
│   ├── reportWebVitals.ts
│   ├── routes
│   ├── sections
│   ├── service-worker.ts
│   ├── serviceWorkerRegistration.ts
│   ├── theme
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```

## 5. Internationalization

## 6. User Guide

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/).


