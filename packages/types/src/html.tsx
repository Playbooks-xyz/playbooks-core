import { HtmlProps } from 'src';

export type AsideProps = HtmlProps;

export type BodyProps = HtmlProps;

export type IFrameProps = HtmlProps & {
	title: string;
	src: string;
	onLoad?: () => void;
};

export type MainProps = HtmlProps;

export type DivProps = HtmlProps;

export type UlProps = HtmlProps;

export type LiProps = HtmlProps;

export type SpanProps = HtmlProps;

export type ImgProps = HtmlProps & {
	alt?: string;
	src: string;
	fetchPriority?: 'high' | 'low' | 'auto';
};

export type HrProps = HtmlProps;
