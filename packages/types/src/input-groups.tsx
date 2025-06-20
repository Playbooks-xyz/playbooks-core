import { HtmlProps } from 'src';

export type InputGroupProps = HtmlProps & {
	active?: boolean;
};

export type InputAddonProps = HtmlProps & {
	icon?: any;
	html?: string;
	taskRunning?: boolean;
};
