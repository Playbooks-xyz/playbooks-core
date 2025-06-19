import { useRouter } from 'next/router';

import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Head } from 'interface/head';
import { Div } from 'interface/html';
import { capitalize } from 'utils';

export const Route = ({ name = 'Route', seo, tailwind, className, children, ...props }: types.RouteProps) => {
	const { theme } = useInterface();
	const base = theme.route();
	const computed = { ...base, ...props, tailwind, className, name };
	const interfaceContext = useInterface();
	const router = useRouter();

	// Computed
	const paths = router.asPath.split('?')[0].split('/');
	const formattedPaths = paths.map(path =>
		path
			.split('-')
			.map(v => capitalize(v))
			.join(' '),
	);
	const computedTitle = interfaceContext.meta?.title + formattedPaths.join(' | ');
	const computedUrl = interfaceContext.meta?.baseUrl + router.asPath.split('?')[0];
	const computedHead = { ...interfaceContext.meta, ...seo };

	// Render
	return (
		<Div {...computed}>
			<Head {...computedHead} title={seo?.title || computedTitle} url={computedUrl} />
			{children}
		</Div>
	);
};
