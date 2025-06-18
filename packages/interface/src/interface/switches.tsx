import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { useInterface } from 'contexts';
import { BtnWrapper } from 'interface/buttons';
import { Div, Span } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as types from 'types';

export const SwitchGroup = ({
	name = 'SwitchGroup',
	tailwind,
	className,
	children,
	...props
}: types.SwitchGroupProps) => {
	const { theme } = useInterface();
	const base = theme.switchGroup();
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
	const { theme } = useInterface();
	const base = theme.switchBase();
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
	const { theme } = useInterface();
	const base = theme.switchBackdrop();
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
	const { theme } = useInterface();
	const base = theme.switchInner({ checked });
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
	const { theme } = useInterface();
	const base = theme.switchToggle({ checked });
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
	const { theme } = useInterface();
	const base = theme.switchLabel();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} htmlFor={htmlFor} className={classes}>
			{children}
		</HTML.Label>
	);
};

// Docs:
// https://tailwindui.com/interface/application-ui/forms/toggles
