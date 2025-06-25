import React from 'react';

import { Library } from 'src/library';
export const IconContext = React.createContext(null);

export const IconProvider = ({ icons, children }) => {
	Library(icons);

	// Render
	return <IconContext.Provider value={{ icons }}>{children}</IconContext.Provider>;
};

export const useIcons = () => {
	return React.useContext(IconContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
