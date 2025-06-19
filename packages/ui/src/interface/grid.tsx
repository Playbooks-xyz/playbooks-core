import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Div } from 'interface/html';

export const Container = ({
	name = 'Container',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ContainerProps) => {
	const { theme } = useInterface();
	const base = theme.container({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Grid = ({ name = 'Grid', cols = '12', tailwind, className, children, ...props }: types.GridProps) => {
	const { theme } = useInterface();
	const base = theme.grid({ cols });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Col = ({
	name = 'Col',
	span = '12',
	sm,
	md,
	lg,
	xl,
	xxl,
	tailwind,
	className,
	children,
	...props
}: types.ColProps) => {
	const { theme } = useInterface();
	const base = theme.col({ span, sm, md, lg, xl, xxl });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindcss.com/docs/grid-template-rows
// https://tailwindcss.com/docs/order
