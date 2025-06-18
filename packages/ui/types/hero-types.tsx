import { HtmlProps } from 'types';

export type HeroProps = HtmlProps & {
	ref?: any;
};

export type HeroBgProps = HtmlProps;

export type HeroImgProps = HtmlProps & {
	alt?: string;
	src: string;
};

export type HeroIconProps = HtmlProps & {
	icon: string;
};

export type HeroBodyProps = HtmlProps;

export type HeroPretitleProps = HtmlProps;

export type HeroTitleProps = HtmlProps;

export type HeroSubtitleProps = HtmlProps;

export type HeroTextProps = HtmlProps;

export type HeroActionsProps = HtmlProps;
