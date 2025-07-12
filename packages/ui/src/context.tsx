import React, { useEffect, useState } from 'react';

import { useResize } from '@playbooks/hooks/window';
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
	const [size, setSize] = useState({ xxl: null, xl: null, lg: null, md: null, sm: null, xs: null });
	const router = contexts.useRouter();
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

	useResize(() => {
		setSize({
			xxl: window.innerWidth > 1536,
			xl: window.innerWidth >= 1280,
			lg: window.innerWidth >= 1024,
			md: window.innerWidth >= 768,
			sm: window.innerWidth >= 640,
			xs: window.innerWidth < 640,
		});
	}, []);

	// Render
	return (
		<UIContext.Provider value={{ components, seo: computedSeo, size, theme: computedTheme }}>
			{children}
		</UIContext.Provider>
	);
};

export const useUI = () => {
	return React.useContext(UIContext);
};

// Docs
// https://www.npmjs.com/package/nprogress
// https://tailwindcss.com/docs/responsive-design
