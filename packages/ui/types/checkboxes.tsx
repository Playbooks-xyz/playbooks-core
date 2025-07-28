import { HtmlProps, InputProps } from 'types';

export type CheckboxProps = InputProps & {
	checked: any;
	title?: string;
	text?: string;
};

export type CheckboxInputProps = InputProps & {
	checked: boolean;
};

export type CheckboxLabelProps = HtmlProps & {
	active?: boolean;
	htmlFor?: string;
};
