import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { Li, Ul } from 'interface/html';

export const ListGroup = ({ name = 'ListGroup', tailwind, className, children, ...props }: types.LiPropsstGroup) => {
	const { theme } = useInterface();
	const base = theme.listGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const ListItem = ({ name = 'ListItem', tailwind, className, children, ...props }: types.LiPropsstItem) => {
	const { theme } = useInterface();
	const base = theme.listItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

// Docs
// https://tailwindui.com/interface/application-ui/layout/list-containers
