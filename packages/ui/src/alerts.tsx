import * as types from '@playbooks/types';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div } from 'src/html';
import { Icon } from 'src/icons';

export const Alert = ({ type = 'info', name = 'Alert', tailwind, className, children, ...props }: types.AlertProps) => {
	const context = useUI();
	const base = context?.theme?.alert({ type });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AlertIcon = ({
	type = 'fad',
	name = 'AlertIcon',
	icon = 'exclamation-circle',
	tailwind,
	className,
	...props
}: types.AlertIconProps) => {
	const context = useUI();
	const base = context?.theme?.alertIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const AlertBody = ({ name = 'AlertBody', tailwind, className, children, ...props }: types.AlertBodyProps) => {
	const context = useUI();
	const base = context?.theme?.alertBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AlertTitle = ({
	name = 'AlertTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AlertTitleProps) => {
	const context = useUI();
	const base = context?.theme?.alertTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AlertText = ({ name = 'AlertText', tailwind, className, children, ...props }: types.AlertTextProps) => {
	const context = useUI();
	const base = context?.theme?.alertText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const AlertActions = ({
	name = 'AlertActions',
	tailwind,
	className,
	children,
	...props
}: types.AlertActionsProps) => {
	const context = useUI();
	const base = context?.theme?.alertActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/feedback/alerts
