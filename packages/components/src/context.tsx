import React from 'react';

export const WrapperContext = React.createContext(null);

export const WrapperProvider = ({ theme, children }) => {
	// Render
	return <WrapperContext.Provider value={{ theme }}>{children}</WrapperContext.Provider>;
};

export const useComponents = () => {
	return React.useContext(WrapperContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
