import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Font, H6, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { Section } from 'interface/sections';

export const Prefooter = ({ name = 'Prefooter', tailwind, className, children, ...props }: types.PrefooterProps) => {
	const base = theme.prefooter();
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
	const base = theme.prefooterBody();
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
	const base = theme.prefooterPretitle();
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
	const base = theme.prefooterTitle();
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
	const base = theme.prefooterSubtitle();
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
	const base = theme.prefooterText();
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
	const base = theme.prefooterActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/cta-sections
