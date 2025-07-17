import { HtmlProps } from 'types';

export type SlideProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
	placement: string;
};

export type SlideWrapperProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type SlideBackdropProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type SlideContainerProps = HtmlProps;

export type SlideHeaderProps = HtmlProps & {
	onClose: () => any;
};

export type SlideTitleProps = HtmlProps;

export type SlideBodyProps = HtmlProps;

export type SlideFooterProps = HtmlProps;
