import * as types from 'types';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div, Img } from 'src/html';
import { Icon } from 'src/icons';

export const Card = ({ name = 'Card', tailwind, className, children, ...props }: types.CardProps) => {
	const context = useUI();
	const base = context?.theme?.card();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardHeader = ({ name = 'CardHeader', tailwind, className, children, ...props }: types.CardHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.cardHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardIcon = ({
	name = 'CardIcon',
	type = 'fad',
	icon = 'code',
	tailwind,
	className,
	...props
}: types.CardIconProps) => {
	const context = useUI();
	const base = context?.theme?.cardIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const CardImg = ({
	name = 'CardImg',
	alt = 'thumbnail',
	tailwind,
	className,
	children,
	...props
}: types.CardImgProps) => {
	const context = useUI();
	const base = context?.theme?.cardImg();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img alt={alt} {...computed} />;
};

export const CardBody = ({ name = 'CardBody', tailwind, className, children, ...props }: types.CardBodyProps) => {
	const context = useUI();
	const base = context?.theme?.cardBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardPretitle = ({
	name = 'CardPretitle',
	tailwind,
	className,
	children,
	...props
}: types.CardPretitleProps) => {
	const context = useUI();
	const base = context?.theme?.cardPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardTitle = ({
	name = 'CardTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.CardTitleProps) => {
	const context = useUI();
	const base = context?.theme?.cardTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const CardSubtitle = ({
	name = 'CardSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.CardSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.cardSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardText = ({ name = 'CardText', tailwind, className, children, ...props }: types.CardTextProps) => {
	const context = useUI();
	const base = context?.theme?.cardText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const CardFooter = ({ name = 'CardFooter', tailwind, className, children, ...props }: types.CardFooterProps) => {
	const context = useUI();
	const base = context?.theme?.cardFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const CardActions = ({
	name = 'CardActions',
	tailwind,
	className,
	children,
	...props
}: types.CardActionsProps) => {
	const context = useUI();
	const base = context?.theme?.cardActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/lists/grid-lists
