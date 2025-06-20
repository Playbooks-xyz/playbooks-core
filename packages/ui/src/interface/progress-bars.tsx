import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Div } from 'interface/html';

export const ProgressBar = ({
	name = 'ProgressBar',
	tailwind,
	className,
	children,
	...props
}: types.ProgressBarProps) => {
	const base = theme.progressBar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const Progress = ({ name = 'Progress', value = 0, tailwind, className, ...props }: types.ProgressProps) => {
	const base = theme.progress();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed} style={{ width: `${value}%` }} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/progress-bars
