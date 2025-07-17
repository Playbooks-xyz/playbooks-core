import { HtmlProps, InputProps, LabelProps, SelectProps, TextAreaProps } from 'types';

export type FormProps = HtmlProps & {
	onSubmit?: (v) => any;
};

export type FormGroupProps = HtmlProps;

export type FormLabelProps = LabelProps & {
	htmlFor?: string;
};

export type FormCheckboxProps = FormInputProps & {
	checked?: boolean;
};

export type FormFileProps = FormInputProps;

export type FormInputProps = Omit<InputProps, 'size'> & {
	size?: string;
	variant?: string;
};

export type FormInputCurrencyProps = FormInputProps & {
	prefix?: string;
};

export type FormInputLocationProps = FormInputProps & {
	options?: any;
	googleMapsApiKey: string;
	onSelect: (e: any) => any;
};

export type FormInputMaskProps = FormInputProps & {
	mask: string;
};

export type FormInputPhoneProps = FormInputProps & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
};

export type FormSelectProps = Omit<SelectProps, 'size'> & {
	size?: string;
	placeholder?: string;
	variant?: string;
	options?: string[];
};

export type FormTextProps = HtmlProps;

export type FormTextAreaProps = Omit<TextAreaProps, 'rows' | 'size'> & {
	size?: string;
	variant?: string;
	rows: any;
};
