import * as HTML from '@ehubbell/html';
import { useInterface } from 'contexts';
import { Font, P, Small } from 'interface/fonts';
import { Div, Img } from 'interface/html';
import { FadIcon } from 'interface/icons';
import * as types from 'types/hero-types';
import { computeProps } from 'utils';

export const Hero = ({ name = 'Hero', size = '', tailwind, className, children, ...props }: types.HeroProps) => {
	const { theme } = useInterface();
	const base = theme.hero({ size });
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Header name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Header>
	);
};

export const HeroBg = ({ name = 'HeroBg', ref, tailwind, className, children, ...props }: types.HeroBgProps) => {
	const { theme } = useInterface();
	const base = theme.heroBg();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeroImg = ({
	name = 'HeroImg',
	alt = 'thumbnail',
	size = 'lg',
	src,
	tailwind,
	className,
	...props
}: types.HeroImgProps) => {
	const { theme } = useInterface();
	const base = theme.heroImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Img src={src} alt={alt} tailwind={{ width: 'w-full' }} />
		</Div>
	);
};

export const HeroIcon = ({
	name = 'HeroIcon',
	size = 'lg',
	icon = 'code',
	tailwind,
	className,
	...props
}: types.HeroIconProps) => {
	const { theme } = useInterface();
	const base = theme.heroIcon({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} tailwind={{ fontSize: 'text-3xl' }} />
		</Div>
	);
};

export const HeroBody = ({ name = 'HeroBody', tailwind, className, children, ...props }: types.HeroBodyProps) => {
	const { theme } = useInterface();
	const base = theme.heroBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const HeroPretitle = ({
	name = 'HeroPretitle',
	tailwind,
	className,
	children,
	...props
}: types.HeroPretitleProps) => {
	const { theme } = useInterface();
	const base = theme.heroPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const HeroTitle = ({
	name = 'HeroTitle',
	size = 'h1',
	tailwind,
	className,
	children,
	...props
}: types.HeroTitleProps) => {
	const { theme } = useInterface();
	const base = theme.heroTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroSubtitle = ({
	name = 'HeroSubtitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.HeroSubtitleProps) => {
	const { theme } = useInterface();
	const base = theme.heroSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroText = ({ name = 'HeroText', tailwind, className, children, ...props }: types.HeroTextProps) => {
	const { theme } = useInterface();
	const base = theme.heroText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const HeroActions = ({
	name = 'HeroActions',
	tailwind,
	className,
	children,
	...props
}: types.HeroActionsProps) => {
	const { theme } = useInterface();
	const base = theme.heroActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/marketing/sections/heroes
