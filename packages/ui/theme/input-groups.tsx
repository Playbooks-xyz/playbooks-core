export const inputGroup = () => ({
	animation: 'transition',
	bgColor: 'bg-gray-white dark:bg-gray-950',
	border: 'border',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-700 dark:text-gray-200',
	fade: 'ease',
	focus: 'focus-within:border-primary dark:focus-within:border-secondary',
	display: 'flex no-wrap',
	ring: 'focus-within:ring-1',
	ringColor: 'focus-within:ring-transparent dark:focus-within:ring-transparent',
	ringOffset: 'focus-within:ring-offset-1',
	ringOffsetColor: 'focus-within:ring-offset-primary focus-within:dark:ring-offset-secondary',
});

export const inputAppend = () => ({
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	display: 'flex-middle',
	flex: 'shrink-0',
	spacing: 'px-4',
});

export const inputPrepend = () => ({
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	display: 'flex-middle',
	flex: 'shrink-0',
	spacing: 'px-4',
});
