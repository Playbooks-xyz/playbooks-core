import { computeSectionSize } from 'theme/utils';

export const modal = ({ open }) => ({
	animation: 'transition-all',
	align: 'text-left',
	bgColor: 'bg-white dark:bg-gray-950',
	border: 'border',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: 'rounded-lg',
	duration: 'duration-200',
	fade: 'ease-in',
	opacity: open ? 'opacity-100' : 'opacity-0',
	scale: open ? 'scale-100' : 'scale-90',
	spacing: 'mx-auto my-8',
	width: 'w-sm max-w-full',
	zIndex: 'z-30',
});

export const modalWrapper = () => ({
	inset: 'inset-0',
	overflow: 'overflow-y-auto',
	position: 'fixed',
	zIndex: 'z-20',
});

export const modalBackdrop = ({ open }) => ({
	animation: 'transition-all',
	bgColor: open ? 'bg-black/85 dark:bg-gray-700/85' : 'bg-transparent dark:bg-transparent',
	duration: 'duration-200',
	fade: 'ease-in',
	height: 'h-full',
	inset: 'inset-0',
	position: 'fixed',
});

export const modalHeader = () => ({
	display: 'flex-between',
	border: 'border-b',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	space: 'space-x-4',
	spacing: 'p-4',
});

export const modalTitle = () => ({
	fontWeight: 'font-bold',
});

export const modalSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	space: 'space-x-4',
});

export const modalBody = ({ size }) => ({
	align: 'text-left',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	spacing: 'p-4',
	size: computeSectionSize(size),
});

export const modalFooter = () => ({
	border: 'border-t',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	color: 'text-gray-500',
	fontSize: 'text-sm',
	display: 'flex-end',
	spacing: 'p-4',
	space: 'space-x-4',
});
