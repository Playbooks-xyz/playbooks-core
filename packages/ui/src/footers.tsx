import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as types from 'types';
import { Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div, Li, Ul } from 'src/html';
import { Link } from 'src/links';

export const Footer = ({ name = 'Footer', tailwind, className, children, ...props }: types.FooterProps) => {
	const context = useUI();
	const base = context?.theme?.footer();
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
	const context = useUI();
	const base = context?.theme?.footerHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FooterBody = ({ name = 'FooterBody', tailwind, className, children, ...props }: types.FooterBodyProps) => {
	const context = useUI();
	const base = context?.theme?.footerBody();
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
	const context = useUI();
	const base = context?.theme?.footerTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const FooterText = ({ name = 'FooterText', tailwind, className, children, ...props }: types.FooterTextProps) => {
	const context = useUI();
	const base = context?.theme?.footerText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const FooterList = ({ name = 'FooterList', tailwind, className, children, ...props }: types.FooterListProps) => {
	const context = useUI();
	const base = context?.theme?.footerList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const FooterItem = ({ name = 'FooterItem', tailwind, className, children, ...props }: types.FooterItemProps) => {
	const context = useUI();
	const base = context?.theme?.footerItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const FooterBtn = ({ name = 'FooterBtn', tailwind, className, children, ...props }: types.FooterBtnProps) => {
	const context = useUI();
	const base = context?.theme?.footerBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Btn variant='text' {...computed} />;
};

export const FooterLink = ({ name = 'FooterLink', tailwind, className, children, ...props }: types.FooterLinkProps) => {
	const context = useUI();
	const base = context?.theme?.footerLink();
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
	const context = useUI();
	const base = context?.theme?.footerFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/footers
