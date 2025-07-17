import * as types from 'types';
import { TextBtn } from 'src/buttons';
import { useUI } from 'src/context';
import { Li } from 'src/html';
import { FarIcon } from 'src/icons';
import { TextLink } from 'src/links';
import { Nav, NavList } from 'src/navs';

export const Breadcrumbs = ({
	name = 'Breadcrumbs',
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbsProps) => {
	const context = useUI();
	const base = context?.theme?.breadcrumbs();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Nav {...computed}>
			<NavList tailwind={{ display: 'flex flex-row', space: 'space-x-2' }}>{children}</NavList>
		</Nav>
	);
};

export const BreadcrumbItem = ({
	name = 'BreadcrumbItem',
	icon = 'chevron-right',
	arrow = true,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbItemProps) => {
	const context = useUI();
	const base = context?.theme?.breadcrumbItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Li {...computed}>
			{children}
			{arrow && <FarIcon icon={icon} tailwind={{ color: 'text-gray-400', fontSize: 'text-xs', ...tailwind?.icon }} />}
		</Li>
	);
};

export const BreadcrumbBtn = ({
	name = 'BreadcrumbBtn',
	size = 'xxs',
	active,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbBtnProps) => {
	const context = useUI();
	const base = context?.theme?.breadcrumbBtn({ active });
	const computed = { ...base, ...props, tailwind, size, className, name, active, children };

	return <TextBtn onClick={onClick} {...computed} />;
};

export const BreadcrumbLink = ({
	name = 'BreadcrumbLink',
	size = 'xxs',
	active,
	href,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbLinkProps) => {
	const context = useUI();
	const base = context?.theme?.breadcrumbLink({ active });
	const computed = { ...base, ...props, tailwind, size, className, name, active, children };

	return <TextLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/src/application-ui/navigation/breadcrumbs
