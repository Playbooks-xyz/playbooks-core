import { BtnProps, HtmlProps, LinkProps } from 'types';

export type FooterProps = HtmlProps;

export type FooterHeaderProps = HtmlProps;

export type FooterTitleProps = HtmlProps;

export type FooterTextProps = HtmlProps;

export type FooterBodyProps = HtmlProps;

export type FooterListProps = HtmlProps;

export type FooterItemProps = HtmlProps;

export type FooterBtnProps = BtnProps & {
	variant?: string;
};

export type FooterLinkProps = LinkProps & {
	variant?: string;
};
