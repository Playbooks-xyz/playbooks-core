import { BtnProps, HtmlProps, LinkProps } from 'src';

export type NavProps = HtmlProps;

export type NavHeaderProps = HtmlProps;

export type NavTitleProps = HtmlProps;

export type NavBodyProps = HtmlProps;

export type NavListProps = HtmlProps;

export type NavItemProps = HtmlProps;

export type NavBtnProps = BtnProps & {
	variant?: string;
};

export type NavLinkProps = LinkProps & {
	variant?: string;
};
