export const checkbox = ({ active }) => ({
	animation: 'transition-all',
	border: 'border',
	borderColor: active ? 'border-primary dark:border-secondary' : 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	fade: 'ease',
	display: 'flex-start-top',
	duration: 'duration-200',
	hover: 'hover:border-gray-300 hover:dark:border-gray-600',
	space: 'space-x-4',
	position: 'relative',
	spacing: 'p-4',
});

export const checkboxInput = () => ({
	animation: 'transition-all',
	appearance: 'appearance-none',
	bgColor: 'bg-gray-100 dark:bg-gray-800 checked:bg-primary dark:checked:bg-secondary',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600 checked:border-primary checked:dark:border-secondary',
	borderRadius: 'rounded-sm',
	cursor: 'cursor-pointer',
	fade: 'ease',
	height: 'h-5',
	ring: 'ring-none',
	ringColor: 'ring-transparent checked:ring-transparent dark:checked:ring-transparent focus:ring-transparent',
	ringOffset: 'ring-offset-none checked:ring-offset-4 focus:ring-offset-transparent',
	ringOffsetColor: 'checked:ring-offset-primary/50 dark:checked:ring-offset-secondary/50',
	width: 'w-5',
});

export const checkboxTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	leading: 'leading-tight',
});

export const checkboxText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
});
