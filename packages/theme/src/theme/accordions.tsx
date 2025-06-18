export const accordion = () => ({
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const accordionToggle = ({ open }) => ({
	align: 'text-left',
	display: 'flex-between',
	nextIcon: {
		animation: 'transition-all',
		fade: 'ease',
		icon: 'chevron-down',
		rotate: open ? 'rotate-180' : 'rotate-0',
	},
	spacing: 'p-0',
	width: 'w-full',
});

export const accordionTitle = () => ({
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const accordionBodyWrapper = () => ({
	animation: 'transition-all',
	fade: 'ease',
	duration: 'duration-200',
	overflow: 'overflow-hidden',
});

export const accordionBody = () => ({
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	border: 'border-t',
	spacing: 'p-4',
	width: 'w-full',
});

export const accordionText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
});
