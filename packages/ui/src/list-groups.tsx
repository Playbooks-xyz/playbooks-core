import { useUI } from 'src/context';
import { Li, Ul } from 'src/html';
import * as types from 'types';

export const ListGroup = ({ name = 'ListGroup', tailwind, className, children, ...props }: types.LiPropsstGroup) => {
	const context = useUI();
	const base = context?.theme?.listGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const ListItem = ({ name = 'ListItem', tailwind, className, children, ...props }: types.LiPropsstItem) => {
	const context = useUI();
	const base = context?.theme?.listItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

// Docs
// https://tailwindui.com/src/application-ui/layout/list-containers
