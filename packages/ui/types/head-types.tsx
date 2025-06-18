import { HtmlProps } from 'types';

export type HeadProps = HtmlProps & {
	type?: string;
	favicon?: string;
	logo?: string;
	photo?: string;
	title?: string;
	description?: string;
	url?: string;
	card?: string;
	author?: string;
	keywords?: string;
	locale?: string;
	site?: string;
	siteName?: string;
	robots?: boolean;
};
