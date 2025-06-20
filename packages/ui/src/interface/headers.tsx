import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';

export const Header = ({ name = 'Header', tailwind, className, children, ...props }: types.HeaderProps) => {

	const base = theme.header();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeaderTitle = ({
	name = 'HeaderTitle',
	size = 'h4',
	tailwind,
	className,
	children,
	...props
}: types.HeaderTitleProps) => {

	const base = theme.headerTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderSubtitle = ({
	name = 'HeaderSubtitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.HeaderSubtitleProps) => {

	const base = theme.headerSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderText = ({ name = 'HeaderText', tailwind, className, children, ...props }: types.HeaderTextProps) => {

	const base = theme.headerText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const HeaderActions = ({
	name = 'HeaderActions',
	tailwind,
	className,
	children,
	...props
}: types.HeaderActionsProps) => {

	const base = theme.headerActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/headings/page-headings
