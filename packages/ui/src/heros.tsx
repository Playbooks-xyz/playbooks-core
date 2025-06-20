import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Font, P, Small } from 'src/fonts';
import { Div, Img } from 'src/html';
import { FadIcon } from 'src/icons';

export const Hero = ({ name = 'Hero', size = '', tailwind, className, children, ...props }: types.HeroProps) => {
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
	const base = theme.heroIcon({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} tailwind={{ fontSize: 'text-3xl' }} />
		</Div>
	);
};

export const HeroBody = ({ name = 'HeroBody', tailwind, className, children, ...props }: types.HeroBodyProps) => {
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
	const base = theme.heroSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroText = ({ name = 'HeroText', tailwind, className, children, ...props }: types.HeroTextProps) => {
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
	const base = theme.heroActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/heroes
