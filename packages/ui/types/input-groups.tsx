import { HtmlProps } from 'types';

export type InputGroupProps = HtmlProps & {
	active?: boolean;
};

export type InputAddonProps = HtmlProps & {
	icon?: any;
	html?: string;
	taskRunning?: boolean;
};
