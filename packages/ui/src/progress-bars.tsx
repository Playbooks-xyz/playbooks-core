import { useUI } from 'src/context';
import { Div } from 'src/html';
import * as types from 'types';

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

export const RadialProgressBar = ({
	name = 'RadialProgressBar',
	tailwind,
	className,
	children,
	...props
}: types.RadialProgressBar) => {
	const context = useUI();
	// const base = context?.theme?.radialProgressBar() || {};
	const base = {};
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div width='w-40' {...computed}>
			<svg className='w-full -rotate-90' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' {...tailwind?.svg}>
				<circle
					cx='18'
					cy='18'
					r='16'
					fill='none'
					className='stroke-current text-gray-200 dark:text-neutral-700'
					strokeWidth='2'
					{...tailwind?.baseCircle}
				/>
				<circle
					cx='18'
					cy='18'
					r='16'
					fill='none'
					className='stroke-current text-blue-600 dark:text-blue-500'
					strokeWidth='2'
					strokeDasharray='100'
					strokeDashoffset='75'
					strokeLinecap='round'
					{...tailwind?.fillCircle}
				/>
			</svg>
			{children}
		</Div>
	);
};

// Docs
// https://tailwindui.com/src/application-ui/feedback/progress-bars
// https://preline.co/docs/progress.html
