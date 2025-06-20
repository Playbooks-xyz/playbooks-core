import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Div } from 'src/html';

export const BtnGroup = ({ name = 'BtnGroup', tailwind, className, children, ...props }: types.ButtonGroupProps) => {
	const base = theme.btnGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/elements/button-groups
