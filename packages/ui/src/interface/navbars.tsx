import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import { useInterface } from 'contexts';
import { Img, Ul } from 'interface/html';
import { LinkWrapper } from 'interface/links';
import * as types from 'types/navbar-types';

export const Navbar = ({ name = 'Navbar', tailwind, className, children, ...props }: types.NavPropsbar) => {
	const { theme } = useInterface();
	const base = theme.navbar();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Nav name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Nav>
	);
};

export const NavbarBrand = ({
	name = 'NavbarBrand',
	href = '/',
	src,
	alt = 'home',
	tailwind,
	className,
	children,
	...props
}: types.NavPropsbarBrand) => {
	const { theme } = useInterface();
	const base = theme.navbarBrand();
	const computed = { ...base, ...props, tailwind, className };

	return (
		<LinkWrapper alt={alt} name={name} href={href} {...computed}>
			<Img src={src} alt='Brand logo' width='w-full' />
		</LinkWrapper>
	);
};

export const NavbarList = ({ name = 'NavbarList', tailwind, className, children, ...props }: types.NavPropsbarList) => {
	const { theme } = useInterface();
	const base = theme.navbarList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/navbars
