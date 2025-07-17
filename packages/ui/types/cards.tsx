import { HtmlProps } from 'types';

export type CardProps = HtmlProps;

export type CardHeaderProps = HtmlProps;

export type CardIconProps = HtmlProps & {
	type?: string;
	icon: string;
};

export type CardImgProps = HtmlProps & {
	alt?: string;
	size?: string;
	src: string;
};

export type CardBodyProps = HtmlProps;

export type CardPretitleProps = HtmlProps;

export type CardTitleProps = HtmlProps;

export type CardSubtitleProps = HtmlProps;

export type CardTextProps = HtmlProps;

export type CardFooterProps = HtmlProps;

export type CardActionsProps = HtmlProps;
