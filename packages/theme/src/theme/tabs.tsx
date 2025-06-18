export const tabWrapper = () => ({
	width: 'w-full',
});

export const tabSelect = () => ({
	border: 'border-1',
	borderRadius: '',
	sm: 'sm:hidden',
});

export const tabs = () => ({
	display: 'flex-start',
});

export const tab = ({ active }) => ({
	bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-700',
	border: 'border-b-4',
	borderColor: 'border-transparent hover:border-gray-300 dark:hover:border-gray-600',
	color: 'text-gray-700 dark:text-gray-200',
	borderRadius: 'rounded-none',
	grid: 'hidden sm:block',
	zIndex: 'z-10',
	...(active && {
		borderColor: 'border-primary dark:border-secondary',
		color: 'text-primary dark:text-secondary',
	}),
});

export const tabPanes = () => ({});

export const tabPane = ({ active }) => ({
	display: active ? 'block' : 'hidden',
});
