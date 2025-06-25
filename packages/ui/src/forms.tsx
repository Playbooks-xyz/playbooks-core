import { useRef } from 'react';

import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { CurrencyInput } from '@playbooks/components/currency-input';
import { GoogleAutocomplete } from '@playbooks/components/google-autocomplete';
import { MaskedInput } from '@playbooks/components/masked-input';
import { PhoneInput } from '@playbooks/components/phone-input';
import { useElementKeyPress } from '@playbooks/hooks';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { useUI } from 'src/context';
import { Div, Span } from 'src/html';

export const Form = ({ id, name = 'Form', onSubmit, tailwind, className, children, ...props }: types.FormProps) => {
	const base = theme.form();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Form id={id} onSubmit={onSubmit} name={name} className={classes}>
			{children}
		</HTML.Form>
	);
};

export const FormGroup = ({ name = 'FormGroup', tailwind, className, children, ...props }: types.FormGroupProps) => {
	const base = theme.formGroup();
	const computed = { ...base, ...props, tailwind, name, className };

	return <Div {...computed}>{children}</Div>;
};

export const FormLabel = ({
	id,
	name = 'FormLabel',
	htmlFor,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.FormLabelProps) => {
	const base = theme.formLabel();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Label id={id} name={name} htmlFor={htmlFor} onClick={onClick} className={classes}>
			{children}
		</HTML.Label>
	);
};

export const FormCheckbox = ({
	id,
	name = 'FormCheckbox',
	checked = false,
	onChange,
	readOnly,
	tailwind,
	className,
	...props
}: types.FormCheckboxProps) => {
	const base = theme.formCheckbox();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Input
			id={id}
			type='checkbox'
			name={name}
			checked={checked}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

export const FormInput = ({
	id,
	ref,
	name = 'FormInput',
	type,
	size = 'sm',
	value,
	variant,
	placeholder,
	onChange,
	onFocus,
	onBlur,
	onClick,
	readOnly,
	tailwind,
	className,
	...props
}: types.FormInputProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Input
			id={id}
			ref={ref}
			name={name}
			type={type || 'text'}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onClick={onClick}
			readOnly={readOnly}
			autoComplete='off'
			className={classes}
		/>
	);
};

export const FormMaskInput = ({
	id,
	name = 'FormMaskInput',
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
}: types.FormInputMaskProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<MaskedInput
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

export const FormCurrencyInput = ({
	id,
	name = 'FormCurrencyInput',
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
}: types.FormInputCurrencyProps) => {
	const ui = useUI();
	const base = ui?.theme || theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<CurrencyInput
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

export const FormDivInput = ({
	id,
	name = 'FormDivInput',
	size = 'sm',
	value,
	variant,
	placeholder,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.FormInputProps) => {
	const base = theme.formDivInput({ size, variant });
	const computed = { ...base, ...props, tailwind, name, className };

	return (
		<Div id={id} tabIndex='0' onClick={onClick} {...computed}>
			{children ? children : <Span>{placeholder}</Span>}
		</Div>
	);
};

export const FormFileInput = ({
	id,
	name = 'FormFileInput',
	value,
	placeholder,
	onChange,
	tailwind,
	className,
	...props
}: types.FormFileProps) => {
	const base = theme.formFileInput();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <HTML.Input placeholder={placeholder} value={value} onChange={onChange} className={classes} />;
};

export const FormLocationInput = ({
	id,
	name = 'FormLocationInput',
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
}: types.FormInputLocationProps) => {
	// const { theme } = useInterface();
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

export const FormPhoneInput = ({
	id,
	name = 'FormPhoneInput',
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
}: types.FormInputPhoneProps) => {
	// const { theme } = useInterface();
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<PhoneInput
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

export const FormSelect = ({
	id,
	name = 'FormSelect',
	size = 'sm',
	value,
	variant,
	options = [],
	placeholder,
	disabled,
	onChange,
	tailwind,
	className,
	...props
}: types.FormSelectProps) => {
	const base = theme.formSelect({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Select value={value} disabled={disabled} onChange={onChange} className={classes}>
			<HTML.Option value='' disabled className='text-gray-500 dark:text-gray-400'>
				{placeholder}
			</HTML.Option>
			{options.map((option, i) => (
				<HTML.Option key={i} value={option}>
					{option}
				</HTML.Option>
			))}
		</HTML.Select>
	);
};

export const FormText = ({ name = 'FormText', tailwind, className, children, ...props }: types.FormTextProps) => {
	const base = theme.formText();
	const computed = { ...base, ...props, tailwind, name, className };

	return <Div {...computed}>{children}</Div>;
};

export const FormTextArea = ({
	id,
	name = 'FormTextArea',
	size = 'sm',
	value,
	variant,
	rows = 4,
	placeholder,
	onChange,
	readOnly,
	tailwind,
	className,
	...props
}: types.FormTextAreaProps) => {
	const base = theme.formInput({ size, variant });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.TextArea
			id={id}
			rows={rows}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			readOnly={readOnly}
			className={classes}
		/>
	);
};

// Docs
// // https://github.com/tailwindlabs/tailwindcss-forms
