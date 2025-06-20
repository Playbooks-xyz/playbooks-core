import { HtmlProps } from 'src';

export type RangeSliderProps = HtmlProps & {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	onChange: () => any;
};

export type RangeSlidersProps = HtmlProps & {
	min?: number;
	max?: number;
	values?: number[];
	step?: number;
	value?: number;
	onNext: () => any;
	onChange: () => any;
};

export type RangeSliderTrackProps = HtmlProps & {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	onChange: () => any;
};

export type RangeSliderThumbProps = HtmlProps & {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	onChange: () => any;
};
