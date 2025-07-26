import { HtmlProps } from 'types';

export type CheckboxProps = HtmlProps & {
	title: string;
	value: any;
	text?: string;
	onClick: () => any;
};

export type CheckboxInputProps = HtmlProps & {
	value: boolean;
};

export type CheckboxLabelProps = HtmlProps & {
	active?: boolean;
	htmlFor?: string;
};
