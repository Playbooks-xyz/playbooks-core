export const header = () => ({
	border: 'border-b',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	display: 'flex-between',
	position: 'relative',
	space: 'space-x-4',
	spacing: 'py-4',
	width: 'w-full',
});

export const headerTitle = () => ({
	fontWeight: 'font-bold',
	tracking: 'tracking-wide',
});

export const headerSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	tracking: 'tracking-normal',
});

export const headerText = () => ({
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-light',
	fontFamily: 'font-secondary',
	tracking: 'tracking-normal',
});

export const headerActions = () => ({
	display: 'flex-end',
	space: 'space-x-4',
});
