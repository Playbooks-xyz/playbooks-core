import { useUI } from 'src/context';
import { Div } from 'src/html';
import * as types from 'types';

export const BtnGroup = ({ name = 'BtnGroup', tailwind, className, children, ...props }: types.ButtonGroupProps) => {
	const context = useUI();
	const base = context?.theme?.btnGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/elements/button-groups
