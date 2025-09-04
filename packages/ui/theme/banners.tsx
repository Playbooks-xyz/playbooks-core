export const banner = () => ({
	border: 'border-b',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	color: 'text-white',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-2 px-4',
	width: 'w-full',
});

export const bannerIcon = () => ({
	bgColor: 'bg-black/25 dark:bg-black/25',
	borderRadius: 'rounded-md',
	color: 'text-primary dark:text-secondary',
	spacing: 'px-2 py-1',
});

export const bannerBody = () => ({
	display: 'flex-start',
	space: 'space-x-3',
	spacing: 'py-1',
});

export const bannerTitle = () => ({
	color: 'text-gray-700 dark:text-white',
	fontWeight: 'font-semibold',
});

export const bannerText = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontSize: 'text-sm',
});

export const bannerActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
