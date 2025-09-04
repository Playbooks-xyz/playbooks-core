export const navbar = () => ({
	bgColor: 'bg-white dark:bg-gray-950',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'p-4',
	width: 'w-full',
});

export const navbarBrand = () => ({
	animation: 'transition-all',
	display: 'inline-block',
	fade: 'ease',
	flex: 'shrink-0',
	hover: 'hover:opacity-75',
	width: 'w-44',
});

export const navbarList = () => ({
	display: 'flex-end',
	space: 'space-x-2',
	spacing: '',
});
