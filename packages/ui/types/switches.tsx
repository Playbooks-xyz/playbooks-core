import { HtmlProps } from 'types';

export type SwitchGroupProps = HtmlProps;

export type SwitchProps = HtmlProps & {
	icon?: string;
	checked: boolean;
	onClick: (v?: any) => any;
};

export type SwitchBackdropProps = HtmlProps & {
	checked?: boolean;
};

export type SwitchInnerProps = HtmlProps & {
	checked: boolean;
};

export type SwitchToggleProps = HtmlProps & {
	icon?: string;
	checked: boolean;
};

export type SwitchLabelProps = HtmlProps & {
	active?: boolean;
	htmlFor?: string;
};
