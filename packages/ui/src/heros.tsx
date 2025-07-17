import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as types from 'types';
import { useUI } from 'src/context';
import { Font, P, Small } from 'src/fonts';
import { Div, Img } from 'src/html';
import { FadIcon } from 'src/icons';

export const Hero = ({ name = 'Hero', size = '', tailwind, className, children, ...props }: types.HeroProps) => {
	const context = useUI();
	const base = context?.theme?.hero({ size });
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Header name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Header>
	);
};

export const HeroBg = ({ name = 'HeroBg', ref, tailwind, className, children, ...props }: types.HeroBgProps) => {
	const context = useUI();
	const base = context?.theme?.heroBg();
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
	const context = useUI();
	const base = context?.theme?.heroImg({ size });
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
	const context = useUI();
	const base = context?.theme?.heroIcon({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FadIcon icon={icon} tailwind={{ fontSize: 'text-3xl' }} />
		</Div>
	);
};

export const HeroBody = ({ name = 'HeroBody', tailwind, className, children, ...props }: types.HeroBodyProps) => {
	const context = useUI();
	const base = context?.theme?.heroBody();
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
	const context = useUI();
	const base = context?.theme?.heroPretitle();
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
	const context = useUI();
	const base = context?.theme?.heroTitle();
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
	const context = useUI();
	const base = context?.theme?.heroSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const HeroText = ({ name = 'HeroText', tailwind, className, children, ...props }: types.HeroTextProps) => {
	const context = useUI();
	const base = context?.theme?.heroText();
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
	const context = useUI();
	const base = context?.theme?.heroActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/heroes
