import { useRef } from 'react';

import { computeTailwind } from '@ehubbell/html';
import { useKeyDown } from '@playbooks/hooks';
import { buildArray } from '@playbooks/utils/helpers';
import { useUI } from 'src/context';
import { FormInput } from 'src/forms';
import { Div } from 'src/html';
import * as types from 'types';

export const OtpInput = ({
	id,
	name = 'OtpInput',
	size = 'sm',
	value = '',
	placeholder = '',
	onChange,
	length = 6,
	variant,
	tailwind,
	className,
	...props
}: types.OtpProps) => {
	const context = useUI();
	const base = context?.theme?.otp();
	const classes = computeTailwind({ ...base, ...props, ...tailwind?.div, className });
	const ref = useRef(null);

	// Hooks
	useKeyDown(onKeyPress, [ref, value]);

	// Functions
	function onKeyPress(e) {
		const div = ref.current;
		const elements = div.querySelectorAll(`input`);
		if (Array.from(elements).includes(e.target)) onTab(e);
	}

	function onTab(e) {
		const div = ref.current;
		const elements = div.querySelectorAll(`input`);
		const currentIndex = Array.from(elements).findIndex(el => el === document.activeElement);
		const formattedIndex = currentIndex >= 0 ? currentIndex : 0;
		const newIndex = formattedIndex + 1;
		const element = elements[newIndex] as HTMLInputElement;
		if (element) element.focus();
	}

	return (
		<Div ref={ref} className={classes}>
			{buildArray(length).map((v, index) => {
				const nestedValue = value[index] || '';
				const nestedPlaceholder = placeholder[index] || '';
				const base = context?.theme?.otpInput({ index, length });
				const computed = { ...base, ...tailwind?.input };

				// Methods
				const onUpdate = e => {
					if (index < 0 || index >= value.length) return onChange(value.concat(e.target.value));
					const items = value.split('');
					items[index] = e.target.value;
					const formattedValue = items.join('');
					onChange(formattedValue);
				};

				return (
					<FormInput
						key={index}
						id={`otp_input_${index}`}
						value={nestedValue}
						placeholder={nestedPlaceholder}
						onChange={onUpdate}
						tailwind={computed}
					/>
				);
			})}
		</Div>
	);
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
