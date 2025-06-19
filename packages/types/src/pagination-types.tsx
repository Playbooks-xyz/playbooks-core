import { BtnProps, HtmlProps } from 'src';

export type PaginationProps = HtmlProps;

export type PaginationBtnProps = BtnProps & {
	page: number;
	active?: boolean;
	disabled?: boolean;
	onClick: (v: number) => any;
};
