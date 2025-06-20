import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Li, Ul } from 'src/html';

export const ListGroup = ({ name = 'ListGroup', tailwind, className, children, ...props }: types.LiPropsstGroup) => {
	const base = theme.listGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const ListItem = ({ name = 'ListItem', tailwind, className, children, ...props }: types.LiPropsstItem) => {
	const base = theme.listItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

// Docs
// https://tailwindui.com/src/application-ui/layout/list-containers
