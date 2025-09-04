import { computeSectionSize } from 'theme/utils';

export const section = () => ({
	bgColor: 'bg-white dark:bg-gray-950',
	border: 'border',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	position: 'relative',
	spacing: 'mb-4',
	width: 'w-full',
});

export const sectionHeader = () => ({
	spacing: 'p-4',
	border: 'border-b',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	display: 'flex-between',
	space: 'space-x-4',
	width: 'w-full',
});

export const sectionPretitle = () => ({
	color: 'text-gray-700 dark:text-gray-300',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wider',
});

export const sectionTitle = () => ({
	fontWeight: 'font-bold',
});

export const sectionSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontWeight: 'font-light',
	fontFamily: 'font-secondary',
	tracking: 'tracking-normal',
});

export const sectionText = () => ({});

export const sectionActions = () => ({
	display: 'lg:flex-end',
	space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
	width: 'w-full lg:w-1/2',
});

export const sectionBody = ({ size }) => ({
	spacing: 'p-4',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	size: computeSectionSize(size),
	width: 'w-full',
});

export const sectionHr = () => ({});

export const sectionFooter = () => ({
	display: 'flex-between',
	border: 'border-t',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	space: 'space-x-4',
	spacing: 'p-4',
	width: 'w-full',
});
