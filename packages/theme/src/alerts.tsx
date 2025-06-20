export const alert = ({ type }) => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: 'border-l-8 border',
	borderColor:
		type === 'success'
			? 'border-green-500/50 dark:border-green-500/50'
			: type === 'warning'
				? 'border-amber-500/50 dark:border-amber-500/50'
				: type === 'error'
					? 'border-red-500/50 dark:border-red-500/50'
					: type === 'info'
						? 'border-blue-300/50 dark:border-cyan-600/50'
						: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	display: 'flex-start-top',
	overflow: 'overflow-hidden',
	space: 'space-x-8',
	spacing: 'p-4',
});

export const alertIcon = () => ({
	color: 'text-gray-600 dark:text-gray-500',
	fontSize: 'text-2xl',
});

export const alertBody = () => ({
	space: 'space-y-1',
	fontSize: 'text-sm',
});

export const alertTitle = () => ({
	fontWeight: 'font-bold',
});

export const alertText = () => ({
	fontSize: 'text-sm',
});

export const alertActions = () => ({
	display: 'flex-start',
	flex: 'shrink-0',
	space: 'space-x-4',
	spacing: 'py-4',
});
