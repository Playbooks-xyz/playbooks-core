# Overview
 An interface library for Playbooks

## Prerequisites
- Font Awesome
- React
- Next
- Tailwind

## Installation
```
npm install @playbooks/ui
```

## Usage
Wrap your application with the <InterfaceProvider /> and make sure to pass in the `@playbooks/theme` or a separate theme of your choosing.

```tsx
# _app.tsx

import { AppProps } from 'next/app';
import * as theme from '@playbooks/theme';
import '@playbooks/ui/styles.css';
import { InterfaceProvider } from '@playbooks/ui/context';

const App = ({ Component, pageProps }: AppProps) => {

	// Render
	return (
		<InterfaceProvider meta={meta} theme={theme}>
      <Component ssr={pageProps} {...contexts} />
		</InterfaceProvider>
	);
};

export default App;
```

Then, import the components you want to use and compose from there.

```tsx
import { Accordion, AccordionBody, AccordionText, AccordionTitle, AccordionToggle } from '@playbooks/ui/accordions';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';

const FaqAccordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  // Methods
  const onToggle = () => setOpen(!open);

  // Render
  return (
    <Accordion open={open} border='border' borderRadius='rounded-md' spacing='mb-4'>
      <AccordionToggle size='' open={open} onClick={onToggle} borderRadius='' spacing='p-6'>
        <Span display='flex-start' space='space-x-4'>
          <FarIcon icon='circle-question' fontSize='text-lg' />
          <AccordionTitle fontSize='text-base'>{title}</AccordionTitle>
        </Span>
      </AccordionToggle>

      <AccordionBody open={open} spacing='px-4 py-6' animate>
        <AccordionText>{text}</AccordionText>
      </AccordionBody>
    </Accordion>
  )
}

export { FaqAccordion }
```

## Development
This project is designed for development using the [yalc](https://npmjs.com/package/yalc) library.
- npm run dev
- switch to project
- npx yalc add @playbooks/theme
- You may need to restart your application server
- After that, this library will hot reload into the consuming application

## Scripts
We've included a couple of helpful scripts for faster development.
- `npm run deploy -- 'commit message'`
- `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes
To see this library in action, checkout these related projects:
- [playbooks](https://www.playbooks.xyz)
- [playbooks/ui](https://github.com/playbooks-xyz/playbooks-ui)
- [playbooks/theme](https://github.com/playbooks-xyz/playbooks-theme)