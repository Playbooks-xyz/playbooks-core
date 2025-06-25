import React from 'react';

export const MoleculesContext = React.createContext(null);

export const MoleculesProvider = ({ components, theme, children }) => {
	// Render
	return <MoleculesContext.Provider value={{ components, theme }}>{children}</MoleculesContext.Provider>;
};

export const useMolecules = () => {
	return React.useContext(MoleculesContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
