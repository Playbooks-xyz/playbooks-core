import { useInterface } from 'contexts';
import { Div } from 'interface/html';
import * as types from 'types/button-group-types';

export const BtnGroup = ({ name = 'BtnGroup', tailwind, className, children, ...props }: types.ButtonGroupProps) => {
	const { theme } = useInterface();
	const base = theme.btnGroup();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/button-groups
