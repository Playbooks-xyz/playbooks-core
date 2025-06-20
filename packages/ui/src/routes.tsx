import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Head } from 'src/head';
import { Div } from 'src/html';

export const Route = ({ name = 'Route', seo, tailwind, className, children, ...props }: types.RouteProps) => {
	const base = theme.route();
	const computed = { ...base, ...props, tailwind, className, name };

	// Render
	return (
		<Div {...computed}>
			<Head {...seo} />
			{children}
		</Div>
	);
};
