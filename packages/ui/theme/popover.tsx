import { computeTooltipAnimation } from 'theme/utils';

export const popover = ({ open, placement }) => ({
	animation: 'transition-all',
	cursor: 'cursor-pointer',
	duration: 'duration-100',
	fade: 'ease-in',
	opacity: open ? 'opacity-100' : 'opacity-0',
	translate: open ? 'translate-x-0' : computeTooltipAnimation(placement),
	zIndex: 'z-10',
});

export const popoverInner = () => ({
	bgColor: 'bg-gray-950 dark:bg-gray-100',
	borderRadius: 'rounded-sm',
	color: 'text-gray-100 dark:text-gray-700',
	fontSize: 'text-sm',
	spacing: 'p-2 m-1',
	width: 'w-auto',
});

export const popoverArrow = () => ({
	bgColor: 'bg-gray-950 dark:bg-gray-100',
	borderRadius: 'rounded-sm',
	rotate: 'rotate-45',
	size: 'h-4 w-4',
});
