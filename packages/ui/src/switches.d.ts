import * as types from '@playbooks/types';
export declare const SwitchGroup: ({
	name,
	tailwind,
	className,
	children,
	...props
}: types.SwitchGroupProps) => import('react/jsx-runtime').JSX.Element;
export declare const Switch: ({
	name,
	icon,
	checked,
	onClick,
	tailwind,
	className,
	...props
}: types.SwitchProps) => import('react/jsx-runtime').JSX.Element;
export declare const SwitchBackdrop: ({
	name,
	checked,
	tailwind,
	className,
	...props
}: types.SwitchBackdropProps) => import('react/jsx-runtime').JSX.Element;
export declare const SwitchInner: ({
	name,
	checked,
	tailwind,
	className,
	...props
}: types.SwitchInnerProps) => import('react/jsx-runtime').JSX.Element;
export declare const SwitchToggle: ({
	name,
	icon,
	checked,
	tailwind,
	className,
	...props
}: types.SwitchToggleProps) => import('react/jsx-runtime').JSX.Element;
export declare const SwitchLabel: ({
	id,
	name,
	htmlFor,
	tailwind,
	className,
	children,
	...props
}: types.SwitchLabelProps) => import('react/jsx-runtime').JSX.Element;
