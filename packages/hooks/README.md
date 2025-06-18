# Overview

A collection of hooks for React projects.

## Prerequisites

- @playbooks/utils
- @playbooks/ui

## Installation

```
npm install @playbooks/hooks
```

## Usage

```tsx
import { WelcomeMessage } from 'components/welcome/welcome-message';
import { WelcomeWrapper } from 'components/welcome/welcome-wrapper';
import { useLoaded } from '@playbooks/hooks';

const WelcomeRoute = ({ app, ssr, account, router, search, session, store, toast }) => {
	// Hooks
	const loaded = useLoaded();

	// Render
	return (
		<WelcomeWrapper title='Playbooks | Hybrid Source Software'>
			<WelcomeMessage
				tailwind={{
					animation: 'transition-all duration-200 ease',
					opacity: loaded ? 'opacity-100' : 'opacity-0',
					transform: loaded ? 'translateY(0)' : 'translateY(-4rem)',
				}}
			/>
		</WelcomeWrapper>
	);
};

export default WelcomeRoute;
```

## Development

This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add @playbooks/hooks
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
