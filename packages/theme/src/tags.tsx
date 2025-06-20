import { computeTagImgSize, computeTagSize } from 'src/utils';

export const tags = () => ({
	display: 'flex-start',
	spacing: '',
	flex: 'flex-wrap',
});

export const tag = ({ size }) => ({
	bgColor: 'bg-gray-200/50 dark:bg-gray-700/50',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-500 dark:text-gray-300',
	display: 'flex-between-inline',
	flex: 'shrink-0',
	size: computeTagSize(size),
	tracking: 'tracking-wide',
});

export const tagImg = ({ size }) => ({
	borderRadius: 'rounded-full',
	size: computeTagImgSize(size),
});

export const tagBody = () => ({
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	fontSize: 'text-sm',
	space: 'space-x-2',
	spacing: 'px-2',
});

export const tagActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
