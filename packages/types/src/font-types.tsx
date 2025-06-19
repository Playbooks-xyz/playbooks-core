import { HtmlProps } from 'src';

export type FontProps = HtmlProps & {
	id?: string;
	size?: string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'sm';
};
