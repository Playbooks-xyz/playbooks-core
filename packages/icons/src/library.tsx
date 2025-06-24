import { config, library } from '@fortawesome/fontawesome-svg-core';

export function Library(icons) {
	library.add(icons);
	config.autoAddCss = false;
}

// Docs
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
