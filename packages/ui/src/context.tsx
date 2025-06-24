import React from 'react';
import { useRouter } from 'next/router';

import { capitalize } from '@playbooks/utils';

export const UIContext = React.createContext(null);

export const UIProvider = ({ seo, theme, children }) => {
	const router = useRouter();

	// Computed
	const paths = router?.asPath.split('?')[0].split('/') || [];
	const formattedPaths = paths.map(path =>
		path
			.split('-')
			.map(v => capitalize(v))
			.join(' '),
	);

	const title = seo?.title + formattedPaths.join(' | ');
	const url = seo?.baseUrl + router.asPath.split('?')[0];

	// Render
	return <UIContext.Provider value={{ seo: { title, url, ...seo }, theme }}>{children}</UIContext.Provider>;
};

export const useUI = () => {
	return React.useContext(UIContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
