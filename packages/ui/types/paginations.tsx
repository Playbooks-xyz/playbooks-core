import { BtnProps, HtmlProps } from 'types';

export type PaginationProps = HtmlProps;

export type PaginationBtnProps = BtnProps & {
	page: number;
	active?: boolean;
	disabled?: boolean;
	onClick: (v: number) => any;
};
