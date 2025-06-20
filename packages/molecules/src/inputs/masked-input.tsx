import { computeTailwind } from '@ehubbell/html';
import { MaskedInput as MaskedInputComponent } from '@playbooks/components/masked-input';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';

export const MaskedInput = ({
	id,
	name = 'MaskedInput',
	size = 'sm',
	mask,
	value,
	variant,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	tailwind,
	className,
	...props
}: types.InputMaskProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<MaskedInputComponent
			id={id}
			mask={mask}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			readOnly={readOnly}
			className={classes}
		/>
	);
};
