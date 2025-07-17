import { useUI } from 'src/context';
import { Head } from 'src/head';
import { Div } from 'src/html';
import * as types from 'types';

export const Route = ({ name = 'Route', seo, tailwind, className, children, ...props }: types.RouteProps) => {
	const context = useUI();
	const base = context?.theme?.route();
	const computed = { ...base, ...props, tailwind, className, name };
	const ui = useUI();
	const head = { ...ui?.seo, ...seo };

	// Render
	return (
		<Div {...computed}>
			<Head {...head} />
			{children}
		</Div>
	);
};
