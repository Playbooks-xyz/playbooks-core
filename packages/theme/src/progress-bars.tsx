import { gradientBgColor } from 'src/utils';

export const progressBar = () => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	borderRadius: 'rounded-full',
	height: 'h-2',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const progress = () => ({
	animation: 'transition-all',
	...gradientBgColor,
	borderRadius: 'rounded-full',
	fade: 'ease-out',
	height: 'h-full',
});

export const radialProgressBar = () => ({});
