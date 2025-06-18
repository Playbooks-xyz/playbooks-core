import { useInterface } from 'contexts';
import { TextBtn } from 'interface/buttons';
import { Li } from 'interface/html';
import { FarIcon } from 'interface/icons';
import { TextLink } from 'interface/links';
import { Nav, NavList } from 'interface/navs';
import * as types from 'types/breadcrumb-types';

export const Breadcrumbs = ({
	name = 'Breadcrumbs',
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbsProps) => {
	const { theme } = useInterface();
	const base = theme.breadcrumbs();
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
	const { theme } = useInterface();
	const base = theme.breadcrumbItem();
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
	const { theme } = useInterface();
	const base = theme.breadcrumbBtn({ active });
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
	const { theme } = useInterface();
	const base = theme.breadcrumbLink({ active });
	const computed = { ...base, ...props, tailwind, size, className, name, active, children };

	return <TextLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/breadcrumbs
