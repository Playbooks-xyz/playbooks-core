# Overview
This repo offers an opionionated collection of resources for Playbooks projects.
Collectively, they offer a modern and extensible framework for building web applications with blazing speed.
Feel free to clone or fork this repo, to create your own framework, or use it as is.

## Prerequisites
- Font Awesome
- React
- Node
- NPM
- Tailwind

## Quick Start

```
npx @playbooks/framework init
```

## Development

This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add @playbooks/adapters
- After that, this library should hot reload into the consuming application

## Scripts

- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky

- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Workspaces
- npm run <command> -w packages/ui
- npm run <command> --workspaces

## Author

- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Troubleshooting
- run types first
- may need to update types per repo before deploy
- look into vite-plugin-dts
- adding global for `contexts` would be great

## Notes

To see this library in action, checkout the following projects:

- [playbooks](https://www.playbooks.xyz)
- [playbooks blog](https://blog.playbooks.xyz)
- [playbooks docs](https://docs.playbooks.xyz)