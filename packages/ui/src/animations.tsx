import { AnimationProps } from '@playbooks/types';
import { useUI } from 'src/context';
import { Div } from 'src/html';

export const Animation = ({ name = 'Animation', tailwind, className, children, ...props }: AnimationProps) => {
	const context = useUI();
	const base = context?.theme?.animation();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};
