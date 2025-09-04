export const pagination = () => ({
	position: 'inline-flex',
	border: 'border',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	overflow: 'overflow-hidden',
});

export const paginationBtn = (props?: { active: boolean }) => ({
	border: '-border-x',
	borderColor: 'border-gray-400/50 dark:border-gray-600/50',
	borderRadius: '',
	color: 'text-gray-500 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	hover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
	spacing: 'px-4 py-2',
	...(props?.active && {
		bgColor: 'bg-gray-200 dark:bg-gray-700',
		color: 'text-gray-700 dark:text-gray-200',
	}),
});
