import React from 'react';

export const ComponentContext = React.createContext(null);

export const ComponentProvider = ({ theme, children }) => {
	// Render
	return <ComponentContext.Provider value={{ theme }}>{children}</ComponentContext.Provider>;
};

export const useComponents = () => {
	return React.useContext(ComponentContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
