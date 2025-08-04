import * as RHP from 'react-html-props';

import { TailwindProps } from '@ehubbell/html';

export type BaseProps = TailwindProps & {
	ref?: any;
	name?: string;
	active?: boolean;
	dataActive?: boolean;
	dataFocus?: boolean;
	html?: any;
	size?: string;
	tailwind?: any;
};

export type HtmlProps = RHP.HtmlProps & BaseProps;

export type InputProps = RHP.InputProps & BaseProps;

export type LabelProps = RHP.LabelProps & BaseProps;

export type SelectProps = RHP.SelectProps & BaseProps;

export type TextAreaProps = RHP.TextAreaProps & BaseProps;
