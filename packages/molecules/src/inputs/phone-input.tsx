import { computeTailwind } from '@ehubbell/html';
import { PhoneInput as PhoneInputComnponent } from '@playbooks/components/phone-input';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';

export const PhoneInput = ({
	id,
	name = 'PhoneInput',
	size = 'sm',
	value,
	variant,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	tailwind,
	className,
	...props
}: types.InputPhoneProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<PhoneInputComnponent
			id={id}
			value={value}
			placeholder={placeholder}
			onBlur={onBlur}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};
