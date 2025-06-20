import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Font, P } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';

export const Alert = ({ type = 'info', name = 'Alert', tailwind, className, children, ...props }: types.AlertProps) => {
	const base = theme.alert({ type });
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
	const base = theme.alertIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const AlertBody = ({ name = 'AlertBody', tailwind, className, children, ...props }: types.AlertBodyProps) => {
	const base = theme.alertBody();
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
	const base = theme.alertTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AlertText = ({ name = 'AlertText', tailwind, className, children, ...props }: types.AlertTextProps) => {
	const base = theme.alertText();
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
	const base = theme.alertActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/feedback/alerts
