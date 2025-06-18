import { TailwindProps } from '@ehubbell/html';

export type HtmlProps = TailwindProps & {
	id?: string;
	ref?: any;
	name?: string;
	size?: string;
	html?: any;
	tabIndex?: any;
	onClick?: (v?: any) => any;
	onMouseEnter?: (v?: any) => any;
	onMouseLeave?: (v?: any) => any;
	tailwind?: TailwindProps & any;
	className?: string;
	style?: any;
	children?: any;
};

export type InputProps = HtmlProps & {
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onBlur?: (e: any) => any;
	onChange?: (e: any) => any;
	onFocus?: (e: any) => any;
	readOnly?: boolean;
};
