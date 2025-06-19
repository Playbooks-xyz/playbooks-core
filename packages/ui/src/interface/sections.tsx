import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Font, P, Small } from 'interface/fonts';
import { Div, Hr } from 'interface/html';

export const Section = ({ name = 'Section', tailwind, className, children, ...props }: types.SectionProps) => {
	const { theme } = useInterface();
	const base = theme.section();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Section name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Section>
	);
};

export const SectionHeader = ({
	name = 'SectionHeader',
	tailwind,
	className,
	children,
	...props
}: types.SectionHeaderProps) => {
	const { theme } = useInterface();
	const base = theme.sectionHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionPretitle = ({
	name = 'SectionPretitle',
	tailwind,
	className,
	children,
	...props
}: types.SectionPretitleProps) => {
	const { theme } = useInterface();
	const base = theme.sectionPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const SectionTitle = ({
	name = 'SectionTitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.SectionTitleProps) => {
	const { theme } = useInterface();
	const base = theme.sectionTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const SectionSubtitle = ({
	name = 'SectionSubtitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.SectionSubtitleProps) => {
	const { theme } = useInterface();
	const base = theme.sectionSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const SectionText = ({
	name = 'SectionText',
	tailwind,
	className,
	children,
	...props
}: types.SectionTextProps) => {
	const { theme } = useInterface();
	const base = theme.sectionText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const SectionActions = ({
	name = 'SectionActions',
	tailwind,
	className,
	children,
	...props
}: types.SectionActionsProps) => {
	const { theme } = useInterface();
	const base = theme.sectionActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionBody = ({
	name = 'SectionBody',
	size,
	tailwind,
	className,
	children,
	...props
}: types.SectionBodyProps) => {
	const { theme } = useInterface();
	const base = theme.sectionBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SectionHr = ({ name = 'SectionHr', tailwind, className, ...props }: types.SectionHrProps) => {
	const { theme } = useInterface();
	const base = theme.sectionHr();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Hr {...computed} />;
};

export const SectionFooter = ({
	name = 'SectionFooter',
	tailwind,
	className,
	children,
	...props
}: types.SectionFooterProps) => {
	const { theme } = useInterface();
	const base = theme.sectionFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};
