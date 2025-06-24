import React from 'react';

export const MoleculesContext = React.createContext(null);

export const MoleculesProvider = ({ theme, children }) => {
	// Render
	return <MoleculesContext.Provider value={{ theme }}>{children}</MoleculesContext.Provider>;
};

export const useContext = () => {
	return React.useContext(MoleculesContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
