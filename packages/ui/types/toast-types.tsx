import { HtmlProps } from 'types';

export type ToastProps = HtmlProps & {
	open?: boolean;
	direction?: string;
	setOpen?: (v: boolean) => any;
	onRemove?: () => any;
};

export type ToastWrapperProps = HtmlProps;

export type ToastHeaderProps = HtmlProps & {
	onRemove?: () => any;
};

export type ToastIconProps = HtmlProps & {
	icon?: string;
};

export type ToastTitleProps = HtmlProps;

export type ToastBodyProps = HtmlProps;

export type ToastTextProps = HtmlProps;
