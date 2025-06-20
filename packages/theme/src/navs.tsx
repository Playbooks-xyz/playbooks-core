import { computeSectionSize } from 'src/utils';

export const nav = () => ({
	bgColor: 'bg-white dark:bg-gray-900',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	display: 'block',
	position: 'relative',
});

export const navHeader = () => ({
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	spacing: 'p-4',
});

export const navTitle = () => ({
	fontWeight: 'font-bold',
});

export const navBody = ({ size }) => ({
	size: computeSectionSize(size),
	spacing: 'p-4',
});

export const navList = () => ({
	align: 'text-left',
	display: 'flex-column',
	space: 'space-y-1',
	spacing: '',
});

export const navItem = () => ({
	display: 'block',
});

export const navBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const navLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});
