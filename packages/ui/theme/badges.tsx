import { computeBadgeSize } from 'theme/utils';

export const badge = ({ size }) => ({
	size: computeBadgeSize(size),
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	display: 'inline-block',
	flex: 'shrink-0',
	fontFamily: 'font-accent',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	space: 'space-x-2',
	whitespace: 'whitespace-nowrap',
});

export const draftBadge = () => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	color: 'text-gray-600 dark:text-gray-300',
});

export const infoBadge = () => ({
	bgColor: 'bg-blue-200 dark:bg-cyan-800',
	color: 'text-blue-700 dark:text-cyan-300',
});

export const pendingBadge = () => ({
	bgColor: 'bg-yellow-200 dark:bg-yellow-800',
	color: 'text-yellow-700 dark:text-yellow-300',
});

export const warningBadge = () => ({
	bgColor: 'bg-orange-200 dark:bg-orange-800',
	color: 'text-orange-700 dark:text-orange-300',
});

export const successBadge = () => ({
	bgColor: 'bg-green-200 dark:bg-green-800',
	color: 'text-green-700 dark:text-green-300',
});

export const finishedBadge = () => ({
	bgColor: 'bg-gray-300 dark:bg-gray-700',
	color: 'text-gray-700 dark:text-gray-200',
});

export const errorBadge = () => ({
	bgColor: 'bg-red-200 dark:bg-red-800',
	color: 'text-red-700 dark:text-red-300',
});

export const defaultBadge = () => ({
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	bgColor: 'bg-transparent',
	border: 'border',
	color: 'text-gray-600 dark:text-gray-300',
});
