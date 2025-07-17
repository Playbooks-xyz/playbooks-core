import { computeTailwind } from '@ehubbell/html';
import * as Loaders from '@playbooks/assets/loaders';
import * as types from 'types';
import { useUI } from 'src/context';

export const Oval = ({ name = 'Oval', tailwind, className, ...props }: types.SpinnerProps) => {
	const context = useUI();
	const base = context?.theme?.spinner();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <Loaders.Oval className={classes} />;
};

export const Puff = ({ name = 'Puff', tailwind, className, ...props }: types.SpinnerProps) => {
	const context = useUI();
	const base = context?.theme?.spinner();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <Loaders.Puff className={classes} />;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
// https://tailwindcss.com/docs/animation#spin
