import { useUI } from 'src/context';
import { Div } from 'src/html';
import * as types from 'types';

export const Animation = ({ name = 'Animation', tailwind, className, children, ...props }: types.AnimationProps) => {
	const context = useUI();
	const base = context?.theme?.animation();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};
