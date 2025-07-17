import * as types from 'types';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div, Img } from 'src/html';

export const Avatar = ({ name = 'Avatar', tailwind, className, children, ...props }: types.AvatarProps) => {
	const context = useUI();
	const base = context?.theme?.avatar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarBadge = ({
	name = 'AvatarBadge',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.AvatarBadgeProps) => {
	const context = useUI();
	const base = context?.theme?.avatarBadge({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarImg = ({
	name = 'AvatarImg',
	alt = '',
	size = 'md',
	tailwind,
	className,
	...props
}: types.AvatarImgProps) => {
	const context = useUI();
	const base = context?.theme?.avatarImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img alt={alt} {...computed} />;
};

export const AvatarBody = ({ name = 'AvatarBody', tailwind, className, children, ...props }: types.AvatarBodyProps) => {
	const context = useUI();
	const base = context?.theme?.avatarBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarTitle = ({
	name = 'AvatarTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AvatarTitleProps) => {
	const context = useUI();
	const base = context?.theme?.avatarTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AvatarText = ({ name = 'AvatarText', tailwind, className, children, ...props }: types.AvatarTextProps) => {
	const context = useUI();
	const base = context?.theme?.avatarText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const AvatarActions = ({
	name = 'AvatarActions',
	tailwind,
	className,
	children,
	...props
}: types.AvatarActionsProps) => {
	const context = useUI();
	const base = context?.theme?.avatarActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/elements/avatars
