import { Fragment } from 'react';

import * as HTML from '@ehubbell/html';
import { computeProps, computeTailwind } from '@ehubbell/html';
import { useUI } from 'src/context';
import { Img, Span } from 'src/html';
import { Icon } from 'src/icons';
import { Oval } from 'src/spinners';
import * as types from 'types';

export const Link = props => {
	switch (props?.variant) {
		case 'primary':
			return <PrimaryLink {...props} />;

		case 'accent':
			return <AccentLink {...props} />;

		case 'border':
			return <BorderLink {...props} />;

		case 'tab':
			return <TabLink {...props} />;

		case 'text':
			return <TextLink {...props} />;

		case 'wrapper':
			return <LinkWrapper {...props} />;

		default:
			return <PrimaryLink {...props} />;
	}
};

export const PrimaryLink = ({ name = 'Link', size = 'sm', alt, active, className, ...props }: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.primaryLink({ active, size });

	return <LinkShared name={name} className={className} {...base} {...props} />;
};

export const AccentLink = ({ name = 'AccentLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.accentLink({ active, size });

	return <LinkShared name={name} className={className} {...base} {...props} />;
};

export const BorderLink = ({ name = 'BorderLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.borderLink({ active, size });

	return <LinkShared name={name} className={className} {...base} {...props} />;
};

export const TabLink = ({ name = 'TabLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.tabLink({ active, size });

	return <LinkShared name={name} className={className} {...base} {...props} />;
};

export const TextLink = ({ name = 'TextLink', size = 'sm', active, className, ...props }: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.textLink({ active, size });

	return <LinkShared name={name} className={className} {...base} {...props} />;
};

export const LinkShared = ({
	alt,
	prevIcon,
	prevImg,
	icon,
	img,
	nextIcon,
	nextImg,
	taskRunning,
	tailwind,
	children,
	...props
}: types.LinkProps) => {
	return (
		<LinkWrapper alt={alt} tailwind={tailwind} {...props}>
			{taskRunning ? <Span /> : prevIcon && <Icon type='far' icon={prevIcon?.icon || prevIcon} {...prevIcon} />}
			{taskRunning ? (
				<Fragment />
			) : (
				prevImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			<Span display='inline-flex' space='space-x-4' {...tailwind?.span}>
				{taskRunning ? (
					<Oval />
				) : icon ? (
					<Icon type='far' icon={icon?.icon || icon} {...icon} />
				) : img ? (
					<Img src={img?.src || img} borderRadius='rounded-sm' spacing='w-5 h-5' {...img} />
				) : (
					children
				)}
			</Span>
			{taskRunning ? (
				<Fragment />
			) : (
				nextImg && <Img src={prevImg?.src || prevImg} borderRadius='rounded-sm' spacing='w-5 h-5' {...prevImg} />
			)}
			{taskRunning ? <Span /> : nextIcon && <Icon type='far' icon={nextIcon?.icon || nextIcon} {...nextIcon} />}
		</LinkWrapper>
	);
};

export const LinkWrapper = ({
	name = 'LinkWrapper',
	alt = '',
	href,
	target,
	disabled,
	tailwind,
	className,
	children,
	...props
}: types.LinkProps) => {
	const context = useUI();
	const base = context?.theme?.linkWrapper({ disabled });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });
	const filtered = computeProps(props);
	const NextLink = context?.components?.Link;

	return (
		<Fragment>
			{target ? (
				<HTML.A aria-label={alt} title={alt} name={name} href={href} target={target} className={classes} {...filtered}>
					{children}
				</HTML.A>
			) : (
				<NextLink aria-label={alt} title={alt} data-name={name} href={href} className={classes} {...filtered}>
					{children}
				</NextLink>
			)}
		</Fragment>
	);
};

// Docs:
// https://nextjs.team/docs/api-reference/next/link
