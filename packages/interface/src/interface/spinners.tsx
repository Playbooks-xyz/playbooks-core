import * as Loaders from 'assets/loaders';
import { useInterface } from 'contexts';
import * as types from 'types/spinner-types';
import { computeTailwind } from 'utils';

export const Oval = ({ name = 'Oval', tailwind, className, ...props }: types.SpinnerProps) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <Loaders.Oval className={classes} />;
};

export const Puff = ({ name = 'Puff', tailwind, className, ...props }: types.SpinnerProps) => {
	const { theme } = useInterface();
	const base = theme.spinner();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <Loaders.Puff className={classes} />;
};

// Docs
// https://github.com/ajwann/svg-loaders-react
// http://samherbert.net/svg-loaders/
// https://tailwindcss.com/docs/animation#spin
