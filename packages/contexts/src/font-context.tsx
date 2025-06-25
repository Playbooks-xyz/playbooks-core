import React, { useEffect } from 'react';

export const FontContext = React.createContext(null);

const FontProvider = ({ fonts, children }) => {
	// Hooks
	useEffect(() => {
		const body = document.querySelector('body');
		if (fonts.length > 0) fonts.map(font => body.classList?.add(font.variable));
	}, [fonts]);

	// Render
	return <FontContext.Provider value={null}>{children}</FontContext.Provider>;
};

const useFont = () => {
	return React.useContext(FontContext);
};

export { FontProvider, useFont };

// Docs
