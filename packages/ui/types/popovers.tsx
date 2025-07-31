import { HtmlProps } from 'types';

export type PopoverProps = HtmlProps & {
	open?: boolean;
	html?: string;
	placement?: any;
	onBlur?: () => any;
	onHover?: (v: boolean) => any;
};

export type PopoverInnerProps = HtmlProps;

export type PopoverArrowProps = HtmlProps;
