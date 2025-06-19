import { BtnProps, HtmlProps, LinkProps } from 'src';

export type BreadcrumbsProps = HtmlProps;

export type BreadcrumbItemProps = HtmlProps & {
	icon?: string;
	arrow?: boolean;
};

export type BreadcrumbBtnProps = BtnProps & {
	active?: boolean;
	onClick: () => any;
	icon?: string;
};

export type BreadcrumbLinkProps = LinkProps & {
	active?: boolean;
	href?: string;
	icon?: string;
};
