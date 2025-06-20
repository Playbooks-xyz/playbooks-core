import { FontProps, HtmlProps } from 'src';

export type AvatarProps = HtmlProps;

export type AvatarBadgeProps = HtmlProps;

export type AvatarImgProps = HtmlProps & {
	alt?: string;
	size?: string;
	src: string;
};

export type AvatarBodyProps = HtmlProps;

export type AvatarTitleProps = FontProps;

export type AvatarTextProps = HtmlProps;

export type AvatarActionsProps = HtmlProps;
