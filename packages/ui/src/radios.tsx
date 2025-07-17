import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import * as types from 'types';
import { useUI } from 'src/context';
import { P, Small } from 'src/fonts';
import { Div } from 'src/html';

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
	const context = useUI();
	const base = context?.theme?.radioWrapper({ active });
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
	const context = useUI();
	const base = context?.theme?.radio();
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
	const context = useUI();
	const base = context?.theme?.radioInput();
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
	const context = useUI();
	const base = context?.theme?.radioTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const RadioText = ({ name = 'RadioLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const context = useUI();
	const base = context?.theme?.radioText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/src/application-ui/forms/radio-groups
