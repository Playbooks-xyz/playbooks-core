import * as types from 'types';
import { useUI } from 'src/context';
import { Div } from 'src/html';

export const ProgressBar = ({
	name = 'ProgressBar',
	tailwind,
	className,
	children,
	...props
}: types.ProgressBarProps) => {
	const context = useUI();
	const base = context?.theme?.progressBar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Progress = ({ name = 'Progress', value = 0, tailwind, className, ...props }: types.ProgressProps) => {
	const context = useUI();
	const base = context?.theme?.progress();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed} style={{ width: `${value}%` }} />;
};

// Docs
// https://tailwindui.com/src/application-ui/feedback/progress-bars
