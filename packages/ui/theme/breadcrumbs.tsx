export const breadcrumbs = () => ({
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	display: 'flex-start',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	space: 'space-x-2',
	spacing: 'mb-4 pb-4',
	width: 'w-full',
});

export const breadcrumbItem = () => ({
	display: 'flex-start',
	space: 'space-x-2',
});

export const breadcrumbBtn = ({ active }) => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});

export const breadcrumbLink = ({ active }) => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});
