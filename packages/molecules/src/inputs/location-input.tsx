import { useRef } from 'react';

import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { GoogleAutocomplete } from '@playbooks/components/google-autocomplete';
import { useElementKeyPress } from '@playbooks/hooks';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';

export const LocationInput = ({
	id,
	name = 'LocationInput',
	size = 'sm',
	value,
	variant,
	options,
	placeholder,
	googleMapsApiKey,
	onChange,
	onSelect,
	onBlur,
	readOnly,
	tailwind,
	className,
	...props
}: types.InputLocationProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });
	const ref = useRef(null);

	// Hooks
	useElementKeyPress(ref.current, onKeyPress, []);

	// Methods
	function onKeyPress(e) {
		if (e.keyCode === 13) e.preventDefault();
	}

	return (
		<GoogleAutocomplete options={options} googleMapsApiKey={googleMapsApiKey} onSelect={onSelect}>
			<HTML.Input
				id={id}
				ref={ref}
				value={value}
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={onChange}
				readOnly={readOnly}
				className={classes}
			/>
		</GoogleAutocomplete>
	);
};
