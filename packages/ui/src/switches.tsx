import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import * as types from 'types';
import { BtnWrapper } from 'src/buttons';
import { useUI } from 'src/context';
import { Div, Span } from 'src/html';
import { FadIcon } from 'src/icons';

export const SwitchGroup = ({
	name = 'SwitchGroup',
	tailwind,
	className,
	children,
	...props
}: types.SwitchGroupProps) => {
	const context = useUI();
	const base = context?.theme?.switchGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Switch = ({
	name = 'Switch',
	icon,
	checked,
	onClick,
	tailwind,
	className,
	...props
}: types.SwitchProps) => {
	const context = useUI();
	const base = context?.theme?.switchBase();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<BtnWrapper name={name} alt='switch' onClick={() => onClick(!checked)} className={classes}>
			<Span className='sr-only'>Use setting</Span>
			<SwitchBackdrop checked={checked} />
			<SwitchInner checked={checked} />
			<SwitchToggle checked={checked} icon={icon} />
		</BtnWrapper>
	);
};

export const SwitchBackdrop = ({
	name = 'SwitchBackdrop',
	checked,
	tailwind,
	className,
	...props
}: types.SwitchBackdropProps) => {
	const context = useUI();
	const base = context?.theme?.switchBackdrop();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span aria-hidden='true' {...computed} />;
};

export const SwitchInner = ({
	name = 'SwitchInner',
	checked,
	tailwind,
	className,
	...props
}: types.SwitchInnerProps) => {
	const context = useUI();
	const base = context?.theme?.switchInner({ checked });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Span aria-hidden='true' {...computed} />;
};

export const SwitchToggle = ({
	name = 'SwitchToggle',
	icon,
	checked,
	tailwind,
	className,
	...props
}: types.SwitchToggleProps) => {
	const context = useUI();
	const base = context?.theme?.switchToggle({ checked });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Span aria-hidden='true' {...computed}>
			{icon && (
				<Span className='absolute w-full inset-0 flex-middle'>
					<FadIcon icon={icon} className='' />
				</Span>
			)}
		</Span>
	);
};

export const SwitchLabel = ({
	id,
	name = 'SwitchLabel',
	htmlFor,
	tailwind,
	className,
	children,
	...props
}: types.SwitchLabelProps) => {
	const context = useUI();
	const base = context?.theme?.switchLabel();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} htmlFor={htmlFor} className={classes}>
			{children}
		</HTML.Label>
	);
};

// Docs:
// https://tailwindui.com/src/application-ui/forms/toggles
