import * as types from 'types';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div } from 'src/html';
import { Icon } from 'src/icons';

export const Banner = ({ name = 'Banner', tailwind, className, children, ...props }: types.BannerProps) => {
	const context = useUI();
	const base = context?.theme?.banner();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const BannerIcon = ({
	name = 'BannerIcon',
	icon = 'exclamation-circle',
	tailwind,
	className,
	...props
}: types.BannerIconProps) => {
	const context = useUI();
	const base = context?.theme?.bannerIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Icon icon={icon} {...tailwind?.icon} />
		</Div>
	);
};

export const BannerBody = ({ name = 'BannerBody', tailwind, className, children, ...props }: types.BannerBodyProps) => {
	const context = useUI();
	const base = context?.theme?.bannerBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const BannerTitle = ({
	name = 'BannerTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.BannerTitleProps) => {
	const context = useUI();
	const base = context?.theme?.bannerTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const BannerText = ({ name = 'BannerText', tailwind, className, children, ...props }: types.BannerTextProps) => {
	const context = useUI();
	const base = context?.theme?.bannerText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const BannerActions = ({
	name = 'BannerActions',
	tailwind,
	className,
	children,
	...props
}: types.BannerActionsProps) => {
	const context = useUI();
	const base = context?.theme?.bannerActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/feedback/banners
