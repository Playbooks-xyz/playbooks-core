# Overview

An opinionated collection of Font Awesome Icons for React projects.

## Installation

```
npm install @playbooks/icons
```

## Usage
Simply add the following to the top of your `_app.tsx` file:
```tsx
import React from 'react';

import { FabIcons, FasIcons, Library } from '@playbooks/icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

Library.load({ ...FabIcons, ...FasIcons })

const App = ({ Component, pageProps }: AppProps) => {
  ...
}

```

## Development

This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add @playbooks/components
- After that, this library should hot reload into the consuming application

## Scripts

- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky

- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author

- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes

To see this library in action, checkout the following projects:

- [playbooks](https://www.playbooks.xyz)
- [playbooks blog](https://blog.playbooks.xyz)
- [playbooks docs](https://docs.playbooks.xyz)

