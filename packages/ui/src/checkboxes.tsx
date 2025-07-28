import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { useUI } from 'src/context';
import { P, Small } from 'src/fonts';
import { Div } from 'src/html';
import * as types from 'types';

export const Checkbox = ({
	id,
	name = 'Checkbox',
	title,
	text,
	checked,
	onChange,
	tailwind,
	className,
	children,
	...props
}: types.CheckboxProps) => {
	const context = useUI();
	const base = context?.theme?.checkbox({ active: checked });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} className={classes}>
			<CheckboxInput id={id} checked={checked} onChange={onChange} />
			<Div space='space-y-1' tailwind={tailwind?.div}>
				{title && <CheckboxTitle tailwind={tailwind?.title}>{title}</CheckboxTitle>}
				{text && <CheckboxText tailwind={tailwind?.text}>{text}</CheckboxText>}
			</Div>
		</HTML.Label>
	);
};

export const CheckboxInput = ({
	id,
	name = 'CheckboxInput',
	checked,
	onChange,
	tailwind,
	className,
	children,
	...props
}: types.CheckboxInputProps) => {
	const context = useUI();
	const base = context?.theme?.checkboxInput();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Input id={id} type='checkbox' name={name} checked={checked} onChange={onChange} className={classes}>
			{children}
		</HTML.Input>
	);
};

export const CheckboxTitle = ({ name = 'CheckboxLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const context = useUI();
	const base = context?.theme?.checkboxTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CheckboxText = ({ name = 'CheckboxLabel', tailwind, className, children, ...props }: types.FontProps) => {
	const context = useUI();
	const base = context?.theme?.checkboxText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

// Docs:
// https://tailwindui.com/src/application-ui/forms/checkbox-groups
