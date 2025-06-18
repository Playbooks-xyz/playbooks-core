import { computeHeroSize, computeThumbnailSize } from 'utils';

export const hero = ({ size }) => ({
	bgColor: 'bg-white dark:bg-gray-900',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	display: 'block',
	position: 'relative',
	size: computeHeroSize(size),
	spacing: 'py-8',
	width: 'w-full',
});

export const heroBg = () => ({
	inset: 'inset-0',
	position: 'absolute',
});

export const heroImg = ({ size }) => ({
	aspect: 'aspect-[1/1]',
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: '',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-500',
	display: 'flex-middle',
	flex: 'shrink-0',
	overflow: 'overflow-hidden',
	size: computeThumbnailSize(size),
});

export const heroIcon = ({ size }) => ({
	aspect: 'aspect-[1/1]',
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: '',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-500',
	display: 'flex-middle',
	flex: 'shrink-0',
	fontSize: 'text-3xl',
	overflow: 'overflow-hidden',
	size: computeThumbnailSize(size),
});

export const heroBody = () => ({
	align: 'text-left',
	space: 'space-y-1',
});

export const heroPretitle = () => ({
	color: 'text-primary dark:text-secondary',
	fontFamily: 'font-accent',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
});

export const heroTitle = () => ({
	fontWeight: 'font-extrabold',
	leading: 'leading-tight',
	tracking: 'tracking-wide',
});

export const heroSubtitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontWeight: 'font-light',
	leading: '!leading-relaxed',
	tracking: 'tracking-normal',
});

export const heroText = () => ({
	fontFamily: 'font-secondary',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
});

export const heroActions = () => ({
	display: 'lg:flex-end',
	space: 'space-y-4 space-x-0 lg:space-y-0 lg:space-x-4',
	width: 'w-full',
});
