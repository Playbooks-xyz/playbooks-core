import { BtnProps, HtmlProps, LinkProps } from 'types';

export type NavPropsbar = HtmlProps & {
	ref?: any;
};

export type NavPropsbarBrand = LinkProps & {
	src: string;
};

export type NavPropsbarToggle = BtnProps;

export type NavPropsbarList = HtmlProps;
