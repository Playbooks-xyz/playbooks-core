import { HtmlProps, InputProps } from 'types';

export type FormProps = HtmlProps & {
	onSubmit?: (v) => any;
};

export type FormGroupProps = HtmlProps;

export type FormLabelProps = HtmlProps & {
	htmlFor?: string;
};

export type FormCheckboxProps = FormInputProps & {
	checked?: boolean;
};

export type FormFileProps = FormInputProps;

export type FormInputProps = InputProps & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
	disabled?: boolean;
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

export type FormSelectProps = FormInputProps & {
	options?: string[];
};

export type FormTextProps = HtmlProps;

export type FormTextAreaProps = FormInputProps & {
	rows: any;
};
