export const switchGroup = () => ({
	display: 'flex-between',
	space: 'space-x-4',
});

export const switchBase = () => ({
	display: 'inline-flex items-center justify-center',
	flex: ' shrink-0',
	position: 'relative',
	overflow: 'overflow-hidden',
	size: 'w-12 h-10',
	cursor: 'cursor-pointer',
	ring: 'ring-sky',
});

export const switchBackdrop = () => ({
	bgColor: 'bg-gray-200',
	animation: 'transition-all',
	pointer: 'pointer-events-none',
	size: 'w-10 h-2',
	borderRadius: 'rounded-full',
});

export const switchInner = ({ checked }) => ({
	animation: 'transition-all',
	bgColor: checked ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	position: 'absolute',
	size: 'w-10 h-3',
	spacing: 'mx-auto',
	borderRadius: 'rounded-full',
});

export const switchToggle = ({ checked }) => ({
	animation: 'transition-all',
	bgColor: checked ? 'bg-primary dark:bg-secondary' : 'bg-gray-300 dark:bg-gray-600',
	borderRadius: 'rounded-full',
	display: 'inline-block',
	duration: 'duration-200',
	inset: 'left-0',
	transform: 'transform',
	translate: checked ? 'translate-x-6' : 'translate-x-0',
	pointerEvents: 'pointer-events-none',
	position: 'absolute',
	size: 'w-6 h-6',
});

export const switchLabel = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
});
