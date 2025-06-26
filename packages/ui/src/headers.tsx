import * as types from '@playbooks/types';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div } from 'src/html';

export const Header = ({ name = 'Header', tailwind, className, children, ...props }: types.HeaderProps) => {
	const context = useUI();
	const base = context?.theme?.header();
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
	const context = useUI();
	const base = context?.theme?.headerTitle();
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
	const context = useUI();
	const base = context?.theme?.headerSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeaderText = ({ name = 'HeaderText', tailwind, className, children, ...props }: types.HeaderTextProps) => {
	const context = useUI();
	const base = context?.theme?.headerText();
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
	const context = useUI();
	const base = context?.theme?.headerActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/headings/page-headings
