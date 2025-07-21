export const menu = () => ({
	align: 'text-left',
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border-y',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	duration: 'duration-200',
	fade: open ? 'ease-out' : 'ease-in',
	height: 'max-h-[100vh]',
	inset: 'right-0 left-0',
	opacity: open ? 'opacity-100' : 'opacity-0',
	position: 'fixed',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	translate: open ? 'translate-y-0' : '-translate-y-4',
	width: 'min-w-full w-auto',
	overflow: 'overflow-hidden overflow-y-scroll',
	zIndex: 'z-10',
});

export const menuWrapper = () => ({
	zIndex: 'z-20',
});

export const menuBackdrop = ({ open }) => ({
	animation: 'transition-all',
	bgColor: open ? 'bg-black/85 dark:bg-gray-700/85' : 'bg-transparent dark:bg-transparent',
	delay: open ? 'delay-100' : '',
	duration: 'duration-100',
	fade: 'ease-in',
	height: 'h-full',
	inset: 'left-0 right-0 bottom-0',
	position: 'fixed',
	zIndex: 'z-1',
});

export const menuMenu = ({ open }) => ({
	align: 'text-left',
	animation: 'transition-all',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border-y',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	duration: 'duration-200',
	fade: open ? 'ease-out' : 'ease-in',
	height: 'max-h-[100vh]',
	inset: 'right-0 left-0',
	opacity: open ? 'opacity-100' : 'opacity-0',
	position: 'fixed',
	shadow: 'shadow-lg',
	shadowColor: 'dark:shadow-gray-800/25',
	translate: open ? 'translate-y-0' : '-translate-y-4',
	width: 'min-w-full w-auto',
	overflow: 'overflow-hidden overflow-y-scroll',
	zIndex: 'z-10',
});

export const menuBlock = () => ({
	spacing: 'p-4',
});

export const menuTitle = () => ({
	fontWeight: 'font-bold',
	spacing: 'px-3 mb-4',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
});

export const menuSubtitle = () => ({
	color: 'text-gray-700 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-normal',
	whitespace: 'whitespace-nowrap',
});

export const menuList = () => ({
	display: 'flex-column',
	space: 'space-y-2',
	spacing: 'py-4',
});

export const menuItem = () => ({
	display: 'flex',
	spacing: '',
	width: 'w-inherit',
});

export const menuBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
});

export const menuLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	width: 'w-full',
});
