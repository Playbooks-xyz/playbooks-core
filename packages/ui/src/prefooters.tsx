import * as types from 'types';
import { useUI } from 'src/context';
import { Font, H6, P } from 'src/fonts';
import { Div } from 'src/html';
import { Section } from 'src/sections';

export const Prefooter = ({ name = 'Prefooter', tailwind, className, children, ...props }: types.PrefooterProps) => {
	const context = useUI();
	const base = context?.theme?.prefooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Section {...computed}>{children}</Section>;
};

export const PrefooterBody = ({
	name = 'PrefooterBody',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterBodyProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const PrefooterPretitle = ({
	name = 'PrefooterPretitle',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterPretitleProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const PrefooterTitle = ({
	name = 'PrefooterTitle',
	size = 'h2',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterTitleProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const PrefooterSubtitle = ({
	name = 'PrefooterSubtitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const PrefooterText = ({
	name = 'PrefooterText',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterTextProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const PrefooterActions = ({
	name = 'PrefooterActions',
	tailwind,
	className,
	children,
	...props
}: types.PrefooterActionsProps) => {
	const context = useUI();
	const base = context?.theme?.prefooterActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/cta-sections
