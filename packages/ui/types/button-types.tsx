import { HtmlProps } from 'types';

export type BtnProps = HtmlProps & {
	type?: 'button' | 'submit' | 'reset';
	alt?: string;
	size?: string;
	active?: boolean;
	prevIcon?: any;
	prevImg?: any;
	icon?: any;
	img?: any;
	nextIcon?: any;
	nextImg?: any;
	span?: any;
	disabled?: boolean;
	taskRunning?: boolean;
};
