import { HtmlProps } from 'types';

export type TableProps = HtmlProps;

export type TableHeaderProps = HtmlProps;

export type TableHeaderRowProps = HtmlProps;

export type TableHeadProps = HtmlProps & {
	alt?: string;
	value?: string;
	params?: any;
	setParams?: (v: any) => any;
};

export type TableBodyProps = HtmlProps;

export type TableRowProps = HtmlProps;

export type TableDataProps = HtmlProps & {
	title?: boolean;
	value?: string | number;
};
