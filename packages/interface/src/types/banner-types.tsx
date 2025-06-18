import { FontProps, HtmlProps } from 'types';

export type BannerProps = HtmlProps;

export type BannerIconProps = HtmlProps & {
	type?: string;
	icon: string;
};

export type BannerBodyProps = HtmlProps;

export type BannerTitleProps = FontProps;

export type BannerTextProps = HtmlProps;

export type BannerActionsProps = HtmlProps & {
	onClick: () => any;
	onDismiss: () => any;
};
