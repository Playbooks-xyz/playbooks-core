import React, { useEffect } from 'react';

import * as defaultTheme from '@playbooks/theme';
import { capitalize } from '@playbooks/utils/transforms';

export type UIProviderProps = {
	components: any;
	contexts?: any;
	fonts?: any[];
	seo?: any;
	theme?: any;
	children?: any;
};

export const UIContext = React.createContext(null);

export const UIProvider = ({ components, contexts, fonts, seo, theme, children }: UIProviderProps) => {
	const router = contexts?.useRouter();
	const computedTheme = theme || defaultTheme;

	// Computed
	const paths = router?.asPath?.split('?')[0].split('/') || [];
	const formattedPaths = paths.map(path => path.split('-').map(v => capitalize(v)));
	const joinedPaths = formattedPaths.map(path => path.join(' '));
	const title = seo?.title + joinedPaths.join(' | ');
	const url = seo?.baseUrl + router?.asPath?.split('?')[0];
	const computedSeo = { ...seo, title, url };

	// Hooks
	useEffect(() => {
		const body = document.querySelector('body');
		if (fonts.length > 0) fonts.map(font => body.classList?.add(font.variable));
	}, [fonts]);

	// Render
	return (
		<UIContext.Provider value={{ components, seo: computedSeo, theme: computedTheme }}>{children}</UIContext.Provider>
	);
};

export const useUI = () => {
	return React.useContext(UIContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
