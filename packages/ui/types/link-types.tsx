import { HtmlProps } from 'types';

export type LinkProps = HtmlProps & {
	alt?: string;
	active?: boolean;
	size?: string;
	prevIcon?: any;
	prevImg?: any;
	icon?: any;
	img?: any;
	nextIcon?: any;
	nextImg?: any;
	span?: any;
	href?: string;
	disabled?: boolean;
	target?: '_self' | '_blank';
	taskRunning?: boolean;
};
