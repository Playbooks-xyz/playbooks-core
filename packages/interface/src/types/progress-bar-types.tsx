import { HtmlProps } from 'types';

export type ProgressBarProps = HtmlProps;

export type ProgressProps = HtmlProps & {
	value: number;
};

export type FramePropsworkedProgress = HtmlProps & {
	value: number;
	offset: number;
};
