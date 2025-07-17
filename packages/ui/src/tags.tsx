import * as types from 'types';
import { useUI } from 'src/context';
import { Div, Img } from 'src/html';

export const Tags = ({ name = 'Tags', tailwind, className, children, ...props }: types.TagsProps) => {
	const context = useUI();
	const base = context?.theme?.tags();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Tag = ({ name = 'Tag', size = 'md', tailwind, className, children, ...props }: types.TagProps) => {
	const context = useUI();
	const base = context?.theme?.tag({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TagImg = ({
	name = 'TagImg',
	size = 'md',
	src,
	alt = 'tag image',
	tailwind,
	className,
	...props
}: types.TagImgProps) => {
	const context = useUI();
	const base = context?.theme?.tagImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const TagBody = ({ name = 'TagBody', tailwind, className, children, ...props }: types.TagBodyProps) => {
	const context = useUI();
	const base = context?.theme?.tagBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TagActions = ({ name = 'TagActions', tailwind, className, children, ...props }: types.TagActionsProps) => {
	const context = useUI();
	const base = context?.theme?.tagActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/elements/badges
