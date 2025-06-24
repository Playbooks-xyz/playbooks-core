import * as types from '@playbooks/types';
export declare const Alert: ({
	type,
	name,
	tailwind,
	className,
	children,
	...props
}: types.AlertProps) => import('react/jsx-runtime').JSX.Element;
export declare const AlertIcon: ({
	type,
	name,
	icon,
	tailwind,
	className,
	...props
}: types.AlertIconProps) => import('react/jsx-runtime').JSX.Element;
export declare const AlertBody: ({
	name,
	tailwind,
	className,
	children,
	...props
}: types.AlertBodyProps) => import('react/jsx-runtime').JSX.Element;
export declare const AlertTitle: ({
	name,
	size,
	tailwind,
	className,
	children,
	...props
}: types.AlertTitleProps) => import('react/jsx-runtime').JSX.Element;
export declare const AlertText: ({
	name,
	tailwind,
	className,
	children,
	...props
}: types.AlertTextProps) => import('react/jsx-runtime').JSX.Element;
export declare const AlertActions: ({
	name,
	tailwind,
	className,
	children,
	...props
}: types.AlertActionsProps) => import('react/jsx-runtime').JSX.Element;
