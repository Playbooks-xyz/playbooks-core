import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as types from 'types';
import { AccentBtn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font } from 'src/fonts';
import { Div, Li, Ul } from 'src/html';
import { AccentLink } from 'src/links';

export const Nav = ({ name = 'Nav', tailwind, className, children, ...props }: types.NavProps) => {
	const context = useUI();
	const base = context?.theme?.nav();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Nav name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Nav>
	);
};

export const NavHeader = ({ name = 'NavHeader', tailwind, className, children, ...props }: types.NavHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.navHeader();
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
	const context = useUI();
	const base = context?.theme?.navTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const NavBody = ({ name = 'NavBody', size, tailwind, className, children, ...props }: types.NavBodyProps) => {
	const context = useUI();
	const base = context?.theme?.navBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const NavList = ({ tailwind, children, ...props }: types.NavListProps) => {
	const context = useUI();
	const base = context?.theme?.navList();
	const computed = { ...base, ...props, tailwind };

	return <Ul {...computed}>{children}</Ul>;
};

export const NavItem = ({ tailwind, children, ...props }: types.NavItemProps) => {
	const context = useUI();
	const base = context?.theme?.navItem();
	const computed = { ...base, ...props, tailwind };

	return <Li {...computed}>{children}</Li>;
};

export const NavBtn = ({ name = 'NavBtn', tailwind, className, children, ...props }: types.NavBtnProps) => {
	const context = useUI();
	const base = context?.theme?.navBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentBtn {...computed} />;
};

export const NavLink = ({ name = 'NavLink', tailwind, className, children, ...props }: types.NavLinkProps) => {
	const context = useUI();
	const base = context?.theme?.navLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentLink {...computed} />;
};

// Docs
// https://tailwindui.com/src/application-ui/navigation/sidebar-navigation
