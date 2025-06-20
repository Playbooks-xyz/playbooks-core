export const rangeSliderTrack = () => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	borderRadius: 'rounded-full',
	height: 'h-inherit',
	display: 'flex',
	width: 'w-full',
});

export const rangeSliderThumb = ({ isDragged }) => ({
	size: 'w-6 h-6',
	bgColor: isDragged ? 'bg-primary dark:bg-secondary' : 'bg-gray-300 dark:bg-gray-600',
	border: 'border-2',
	borderColor: isDragged ? 'border-primary dark:border-secondary' : 'border-gray-300 dark:border-gray-600',
	borderRadius: 'rounded-full',
	display: 'flex-middle',
	position: '',
	shadow: 'shadow-sm',
});
