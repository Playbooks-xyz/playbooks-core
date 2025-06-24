import * as types from '@playbooks/types';
export declare const RangeSlider: ({
	ref,
	min,
	max,
	step,
	value,
	onChange,
	tailwind,
	className,
	...props
}: types.RangeSliderProps) => import('react/jsx-runtime').JSX.Element;
export declare const RangeSliders: ({
	min,
	max,
	step,
	values,
	onChange,
	onNext,
	tailwind,
	className,
	...props
}: types.RangeSlidersProps) => import('react/jsx-runtime').JSX.Element;
export declare const RangeSliderTrack: ({
	ref,
	values,
	min,
	max,
	trackProps,
	children,
	onNext,
	tailwind,
	...restProps
}: {
	[x: string]: any;
	ref: any;
	values: any;
	min: any;
	max: any;
	trackProps: any;
	children: any;
	onNext: any;
	tailwind: any;
}) => import('react/jsx-runtime').JSX.Element;
export declare const RangeSliderThumb: ({
	ref,
	isDragged,
	tailwind,
	...props
}: {
	[x: string]: any;
	ref: any;
	isDragged: any;
	tailwind: any;
}) => import('react/jsx-runtime').JSX.Element;
