export const radio = ({ active }) => ({
	animation: 'transition-all',
	border: 'border',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
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

export const radioInput = () => ({
	animation: 'transition-all',
	appearance: 'appearance-none',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderRadius: 'rounded-full',
	checked: 'checked:bg-primary checked:border-primary checked:dark:bg-secondary checked:dark:border-secondary',
	cursor: 'cursor-pointer',
	fade: 'ease',
	focus: 'focus:ring-2 focus:ring-primary',
	height: 'h-4',
	ring: 'ring-none',
	ringColor: 'ring-transparent checked:ring-transparent dark:checked:ring-transparent focus:ring-transparent',
	ringOffset: 'ring-offset-none checked:ring-offset-4 focus:ring-offset-transparent',
	ringOffsetColor: 'checked:ring-offset-primary/50 dark:checked:ring-offset-secondary/50',
	width: 'w-4',
});

export const radioTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	leading: 'leading-tight',
});

export const radioText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
});
