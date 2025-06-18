import { HtmlProps } from 'types';

export type RadioWrapperProps = HtmlProps & {
	active?: boolean;
	onClick: () => any;
};

export type RadioProps = HtmlProps & {
	title: string;
	value: any;
	text?: string;
	onClick: () => any;
};

export type RadioInputProps = HtmlProps & {
	value: boolean;
};

export type RadioLabelProps = HtmlProps & {
	active?: boolean;
	htmlFor?: string;
};
