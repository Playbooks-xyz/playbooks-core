import React from 'react';

import { UIProvider } from '@playbooks/ui/context';
export const MoleculesContext = React.createContext(null);

export const MoleculesProvider = ({ components, contexts, fonts, seo, theme, children }) => {
	// Render
	return (
		<UIProvider components={components} contexts={contexts} fonts={fonts} seo={seo} theme={theme}>
			{children}
		</UIProvider>
	);
};

export const useMolecules = () => {
	return React.useContext(MoleculesContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
