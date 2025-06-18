import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import * as types from 'types';
import { computeTailwind } from 'utils';

export const RadioWrapper = ({
	id,
	name = 'RadioWrapper',
	active,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.RadioWrapperProps) => {
	const { theme } = useInterface();
	const base = theme.radioWrapper({ active });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} onClick={onClick} className={classes}>
			{children}
		</HTML.Label>
	);
};

export const Radio = ({
	name = 'Radio',
	title,
	text,
	value,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.RadioProps) => {
	const { theme } = useInterface();
	const base = theme.radio();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<RadioWrapper active={value} onClick={onClick} {...computed}>
			<RadioInput value={value} />
			<Div space='space-y-1'>
				{title && <RadioTitle>{title}</RadioTitle>}
				{text && <RadioText>{text}</RadioText>}
			</Div>
		</RadioWrapper>
	);
};

export const RadioInput = ({
	id,
	name = 'RadioInput',
	value,
	tailwind,
	className,
	children,
	...props
}: types.RadioInputProps) => {
	const { theme } = useInterface();
	const base = theme.radioInput();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, name, className });

	return (
		<HTML.Input
			id={id}
			type='radio'
			checked={value}
			aria-labelledby='privacy-setting-0-label'
			aria-describedby='privacy-setting-0-description'
			className={classes}
			readOnly>
			{children}
		</HTML.Input>
	);
};

export const RadioTitle = ({ name = 'RadioLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const { theme } = useInterface();
	const base = theme.radioTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const RadioText = ({ name = 'RadioLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const { theme } = useInterface();
	const base = theme.radioText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/radio-groups
