import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Btn } from 'interface/buttons';
import { Font, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { Link } from 'interface/links';

export const Footer = ({ name = 'Footer', tailwind, className, children, ...props }: types.FooterProps) => {

	const base = theme.footer();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Footer name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Footer>
	);
};

export const FooterHeader = ({
	name = 'FooterHeader',
	tailwind,
	className,
	children,
	...props
}: types.FooterHeaderProps) => {

	const base = theme.footerHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FooterBody = ({ name = 'FooterBody', tailwind, className, children, ...props }: types.FooterBodyProps) => {

	const base = theme.footerBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FooterTitle = ({
	name = 'FooterTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.FooterTitleProps) => {

	const base = theme.footerTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const FooterText = ({ name = 'FooterText', tailwind, className, children, ...props }: types.FooterTextProps) => {

	const base = theme.footerText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const FooterList = ({ name = 'FooterList', tailwind, className, children, ...props }: types.FooterListProps) => {

	const base = theme.footerList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const FooterItem = ({ name = 'FooterItem', tailwind, className, children, ...props }: types.FooterItemProps) => {

	const base = theme.footerItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const FooterBtn = ({ name = 'FooterBtn', tailwind, className, children, ...props }: types.FooterBtnProps) => {

	const base = theme.footerBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Btn variant='text' {...computed} />;
};

export const FooterLink = ({ name = 'FooterLink', tailwind, className, children, ...props }: types.FooterLinkProps) => {

	const base = theme.footerLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Link variant='text' {...computed} />;
};

export const FooterFooter = ({
	name = 'FooterFooter',
	tailwind,
	className,
	children,
	...props
}: types.FooterBodyProps) => {

	const base = theme.footerFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/footers
