import * as types from '@playbooks/types';
export declare const Breadcrumbs: ({
	name,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbsProps) => import('react/jsx-runtime').JSX.Element;
export declare const BreadcrumbItem: ({
	name,
	icon,
	arrow,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbItemProps) => import('react/jsx-runtime').JSX.Element;
export declare const BreadcrumbBtn: ({
	name,
	size,
	active,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbBtnProps) => import('react/jsx-runtime').JSX.Element;
export declare const BreadcrumbLink: ({
	name,
	size,
	active,
	href,
	tailwind,
	className,
	children,
	...props
}: types.BreadcrumbLinkProps) => import('react/jsx-runtime').JSX.Element;
