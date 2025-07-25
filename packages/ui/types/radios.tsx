import { HtmlProps } from 'types';

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
