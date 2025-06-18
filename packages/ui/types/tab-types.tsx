import { BtnProps, HtmlProps } from 'types';

export type TabWrapperProps = HtmlProps;

export type TabSelectProps = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: any) => any;
};

export type TabPropss = HtmlProps & {
	tabs?: string[];
	activeTab?: string;
	onSelect: (v: string) => any;
};

export type TabProps = BtnProps & {
	alt?: string;
	active?: boolean;
	value?: string;
	variant?: string;
	onSelect: (v: string) => any;
	children: any;
};

export type TabPanesProps = HtmlProps;

export type TabPaneProps = HtmlProps & {
	active?: boolean;
	value?: string;
};
