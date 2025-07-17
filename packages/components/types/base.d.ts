export * as RHP from 'react-html-props';
import { TailwindProps } from '@ehubbell/html';

export type HtmlProps = RHP.HtmlProps &
	TailwindProps & {
		ref?: any;
		name?: string;
		html?: any;
		size?: string;
		tailwind?: TailwindProps & any;
	};
