import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Div, Img } from 'interface/html';

export const Tags = ({ name = 'Tags', tailwind, className, children, ...props }: types.TagsProps) => {

	const base = theme.tags();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Tag = ({ name = 'Tag', size = 'md', tailwind, className, children, ...props }: types.TagProps) => {

	const base = theme.tag({ size });
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

	const base = theme.tagImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img src={src} alt={alt} {...computed} />;
};

export const TagBody = ({ name = 'TagBody', tailwind, className, children, ...props }: types.TagBodyProps) => {

	const base = theme.tagBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TagActions = ({ name = 'TagActions', tailwind, className, children, ...props }: types.TagActionsProps) => {

	const base = theme.tagActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/interface/application-ui/elements/badges
