import { computeToastAnimation } from 'theme';

export const toastWrapper = () => ({
	inset: 'bottom-0 right-0 left-0',
	position: 'fixed',
	spacing: 'mx-auto',
	width: 'w-[400px] max-w-[90%]',
	zIndex: 'z-40',
});

export const toast = ({ open, direction }) => ({
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-800',
	borderRadius: 'rounded-md',
	color: 'text-gray-700 dark:text-white',
	duration: 'duration-200',
	display: 'block',
	fade: 'ease-in',
	opacity: open ? 'opacity-100' : 'opacity-0',
	overflow: 'overflow-hidden',
	shadow: 'shadow-lg',
	spacing: 'mb-4',
	transform: 'transform',
	translate: open ? 'translate-x-0' : computeToastAnimation(direction),
	width: 'w-full',
});

export const toastHeader = () => ({
	display: 'flex-between',
	spacing: 'p-2',
});

export const toastIcon = () => ({
	color: 'text-gray-700 dark:text-gray-300',
	borderRadius: 'rounded-md',
	spacing: 'px-2 py-1',
});

export const toastBody = () => ({
	spacing: 'px-4 pt-2 pb-4',
});

export const toastTitle = () => ({
	color: 'text-gray-800 dark:text-gray-200',
	fontWeight: 'font-semibold',
	fontSize: 'text-sm',
	tracking: 'tracking-wide',
});

export const toastText = () => ({
	color: 'text-gray-700 dark:text-gray-300',
	fontSize: 'text-sm',
});
