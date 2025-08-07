export const drop = () => ({
	position: 'relative',
});

export const dropToggle = () => ({
	display: 'flex-between',
	space: 'space-x-4',
});

export const dropMenu = ({ open }) => ({
	align: 'text-left',
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	duration: 'duration-200',
	fade: 'ease',
	opacity: open ? 'opacity-100' : 'opacity-0',
	overflow: 'overflow-hidden overflow-y-scroll',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	translate: open ? 'translate-y-0' : 'translate-y-2',
	width: 'w-auto',
	zIndex: 'z-10',
});

export const dropHeader = () => ({
	align: 'text-left',
	border: 'border-b',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	space: 'space-y-1',
	spacing: 'px-6 py-4',
});

export const dropTitle = () => ({
	color: 'text-gray-800 dark:text-gray-100',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-semibold',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
});

export const dropSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-accent',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-normal',
	tracking: 'tracking-wide',
});

export const dropList = () => ({
	border: '',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	space: 'space-y-1',
	spacing: 'p-2',
});

export const dropItem = () => ({
	display: 'block',
	width: 'w-full',
});

export const dropBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const dropLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});
