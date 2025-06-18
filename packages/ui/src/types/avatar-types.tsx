import { FontProps, HtmlProps } from 'types';

export type AvatarProps = HtmlProps;

export type AvatarBadgeProps = HtmlProps;

export type AvatarImgProps = HtmlProps & {
	size?: string;
	src?: string;
	alt?: string;
};

export type AvatarBodyProps = HtmlProps;

export type AvatarTitleProps = FontProps;

export type AvatarTextProps = HtmlProps;

export type AvatarActionsProps = HtmlProps;
