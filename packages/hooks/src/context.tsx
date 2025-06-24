import React from 'react';

export type HooksContextProps = {
	toast?: any;
};

export const HooksContext = React.createContext<HooksContextProps>(null);

export const HooksProvider = ({ toast, children }: { toast: any; children: any }) => {
	// Render
	return <HooksContext.Provider value={{ toast }}>{children}</HooksContext.Provider>;
};

export const useContext = () => {
	return React.useContext(HooksContext);
};

// Docs
// https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
