import { FontProps, HtmlProps } from 'src';

export type AlertProps = HtmlProps & {
	type?: string;
	show?: boolean;
};

export type AlertIconProps = HtmlProps & {
	type?: string;
	icon: string;
};

export type AlertBodyProps = HtmlProps;

export type AlertTitleProps = FontProps;

export type AlertTextProps = HtmlProps;

export type AlertActionsProps = HtmlProps;
