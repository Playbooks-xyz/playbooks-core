export const accordionProps = open => ({
	body: {
		border: open ? 'border-b border-l border-r' : 'border',
		borderRadius: open ? 'rounded-bl rounded-br' : 'rounded-md',
	},
	toggle: {
		border: 'border',
		borderRadius: open ? 'rounded-tl rounded-tr' : 'rounded-md',
		spacing: 'p-4',
	},
});

export const cloudProps = {
	bgColor: 'bg-gray-200/25 dark:bg-gray-700/25',
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-sm',
	fontFamily: 'font-secondary',
	size: '',
	spacing: 'px-2 py-1',
};

export const gradientBgColor = {
	bgColor: 'bg-linear-to-br from-secondary to-primary',
};

export const gradientSpan = {
	color: 'text-transparent',
	bgClip: 'bg-clip-text',
	bgColor: 'bg-linear-to-r from-secondary to-primary',
	leading: 'leading-relaxed',
};

export const metaProps = {
	color: 'text-gray-500 dark:text-gray-400',
	display: 'flex-start',
	fontSize: 'text-sm',
	space: 'space-x-3',
	tracking: 'tracking-wide',
};

export const metaCardProps = {
	size: '',
	bgColor: '',
	color: 'text-gray-500 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300',
	fontSize: 'text-sm',
	spacing: 'mr-4',
	textDecoration: 'underline',
};

export const sectionLinkProps = {
	section: { display: 'flex-start', spacing: '' },
	header: { display: 'hidden' },
	title: {
		size: 'sm',
		color: 'text-gray-500 dark:text-gray-400',
		fontFamily: 'font-accent',
		fontWeight: 'font-regular',
		tracking: 'tracking-widest',
		transform: 'uppercase',
	},
	body: { size: '', flex: 'grow', width: 'w-full' },
	list: {
		col: { sm: '6', lg: '2' },
		card: { spacing: '' },
		grid: { cols: '12' },
		header: { borderRadius: '', width: 'w-10' },
		title: { fontSize: 'text-base' },
		text: { display: 'hidden' },
	},
	footer: { display: 'hidden' },
};
