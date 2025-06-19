import { HtmlProps } from 'src';

export type TooltipProps = HtmlProps & {
	open?: boolean;
	html?: string;
	placement?: any;
	onBlur?: () => any;
	onHover?: () => any;
};

export type TooltipInnerProps = HtmlProps;

export type TooltipArrowProps = HtmlProps & {
	setArrowElement: any;
};
