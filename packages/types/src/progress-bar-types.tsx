import { HtmlProps } from 'src';

export type ProgressBarProps = HtmlProps;

export type ProgressProps = HtmlProps & {
	value: number;
};

export type FramePropsworkedProgress = HtmlProps & {
	value: number;
	offset: number;
};
