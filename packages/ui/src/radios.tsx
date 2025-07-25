import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { useUI } from 'src/context';
import { P, Small } from 'src/fonts';
import { Div } from 'src/html';
import * as types from 'types';

export const Radio = ({
	id,
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
	const base = context?.theme?.radio({ active: value });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} onClick={onClick} className={classes}>
			<RadioInput value={value} />
			<Div space='space-y-1' tailwind={tailwind?.div}>
				{title && <RadioTitle tailwind={tailwind?.title}>{title}</RadioTitle>}
				{text && <RadioText tailwind={tailwind?.text}>{text}</RadioText>}
			</Div>
		</HTML.Label>
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
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Input id={id} type='radio' name={name} checked={value} className={classes} readOnly>
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
