import React from 'react';
import { useRouter } from 'next/router';

import { capitalize } from '@playbooks/utils';

export const SeoContext = React.createContext(null);

const SeoProvider = ({ meta, children }) => {
	const router = useRouter();

	// Computed
	const paths = router?.asPath.split('?')[0].split('/') || [];
	const formattedPaths = paths.map(path =>
		path
			.split('-')
			.map(v => capitalize(v))
			.join(' '),
	);
	const computedTitle = meta?.title + formattedPaths.join(' | ');
	const computedUrl = meta?.baseUrl + router.asPath.split('?')[0];

	// Render
	return <SeoContext.Provider value={{ computedTitle, computedUrl, meta }}>{children}</SeoContext.Provider>;
};

export { SeoProvider };

// Docs
// https://www.npmjs.com/package/nprogress
