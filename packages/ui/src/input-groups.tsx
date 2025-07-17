import { useUI } from 'src/context';
import { Div } from 'src/html';
import { Icon } from 'src/icons';
import * as types from 'types';

export const InputGroup = ({
	name = 'InputGroup',
	active,
	tailwind,
	className,
	children,
	...props
}: types.InputGroupProps) => {
	const context = useUI();
	const base = context?.theme?.inputGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const InputAppend = ({
	name = 'InputAppend',
	icon,
	taskRunning,
	tailwind,
	className,
	children,
	...props
}: types.InputAddonProps) => {
	const context = useUI();
	const base = context?.theme?.inputAppend();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Div>;
};

export const InputPrepend = ({
	name = 'InputPrepend',
	icon,
	taskRunning,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.InputAddonProps) => {
	const context = useUI();
	const base = context?.theme?.inputPrepend();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{icon ? <Icon icon={icon?.icon || icon} {...icon} /> : children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/forms/input-groups
