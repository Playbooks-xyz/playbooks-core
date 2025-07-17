import { BtnProps, HtmlProps, LinkProps } from 'types';

export type DropProps = HtmlProps & {
	open: boolean;
	onClose: () => any;
};

export type DropToggleProps = BtnProps & {
	variant?: string;
	open: boolean;
	onClick: (v?: any) => any;
};

export type DropMenuProps = HtmlProps & {
	open: boolean;
	placement?: any;
	options?: any;
};

export type DropHeaderProps = HtmlProps;

export type DropTitleProps = HtmlProps;

export type DropSubtitleProps = HtmlProps;

export type DropListProps = HtmlProps;

export type DropItemProps = HtmlProps;

export type DropBtnProps = BtnProps;

export type DropLinkProps = LinkProps;
