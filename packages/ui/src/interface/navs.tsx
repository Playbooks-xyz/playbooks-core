import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { AccentBtn } from 'interface/buttons';
import { Font } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';

export const Nav = ({ name = 'Nav', tailwind, className, children, ...props }: types.NavProps) => {
	const base = theme.nav();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Nav name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Nav>
	);
};

export const NavHeader = ({ name = 'NavHeader', tailwind, className, children, ...props }: types.NavHeaderProps) => {
	const base = theme.navHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavTitle = ({
	name = 'NavTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.NavTitleProps) => {
	const base = theme.navTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const NavBody = ({ name = 'NavBody', size, tailwind, className, children, ...props }: types.NavBodyProps) => {
	const base = theme.navBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavList = ({ tailwind, children, ...props }: types.NavListProps) => {
	const base = theme.navList();
	const computed = { ...base, ...props, tailwind };

	return <Ul {...computed}>{children}</Ul>;
};

export const NavItem = ({ tailwind, children, ...props }: types.NavItemProps) => {
	const base = theme.navItem();
	const computed = { ...base, ...props, tailwind };

	return <Li {...computed}>{children}</Li>;
};

export const NavBtn = ({ name = 'NavBtn', tailwind, className, children, ...props }: types.NavBtnProps) => {
	const base = theme.navBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentBtn {...computed} />;
};

export const NavLink = ({ name = 'NavLink', tailwind, className, children, ...props }: types.NavLinkProps) => {
	const base = theme.navLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentLink {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/sidebar-navigation
