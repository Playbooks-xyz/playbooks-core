import { computeTailwind } from '@ehubbell/html';
import { CurrencyInput as CurrencyInputComponent } from '@playbooks/components/currency-input';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';

export const CurrencyInput = ({
	id,
	name = 'CurrencyInput',
	size = 'sm',
	value,
	variant,
	prefix,
	placeholder,
	onChange,
	onBlur,
	readOnly,
	tailwind,
	className,
	...props
}: types.InputCurrencyProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<CurrencyInputComponent
			id={id}
			value={value}
			prefix={prefix}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};
