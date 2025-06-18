import { useInterface } from 'contexts';
import { H5, P, Small } from 'interface/fonts';
import { Div, Span } from 'interface/html';
import { Oval } from 'interface/spinners';
import * as types from 'types/loader-types';

export const ModalLoader = ({
	name = 'ModalLoader',
	title = 'Processing Order',
	message = 'Give us a second...',
	tailwind,
	className,
	children,
	...props
}: types.PageLoaderProps) => {
	const { theme } = useInterface();
	const base = theme.modalLoader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span>
				<Oval size='w-14 h-14' className='stroke-gray-600 dark:stroke-gray-300 mb-4' />
				<Div spacing='space-y-1' className='text-center'>
					{title && <H5 tailwind={{ fontWeight: 'font-bold' }}>{title}</H5>}
					{message && <Small>{message}</Small>}
					{children}
				</Div>
			</Span>
		</Div>
	);
};

export const PageLoader = ({
	name = 'PageLoader',
	title = 'Hang Tight',
	message = 'Loading dashboard...',
	tailwind,
	className,
	children,
	...props
}: types.PageLoaderProps) => {
	const { theme } = useInterface();
	const base = theme.pageLoader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span display='flex-start' space='space-x-8'>
				<Oval size='w-12 h-12' className='stroke-gray-600 dark:stroke-gray-300' />
				<Div align='text-left'>
					{title && <H5 tailwind={{ fontWeight: 'font-bold' }}>{title}</H5>}
					{message && <P>{message}</P>}
					{children}
				</Div>
			</Span>
		</Div>
	);
};

export const SectionLoader = ({
	name = 'SectionLoader',
	title = 'Loading',
	message = 'Give us a second...',
	tailwind,
	className,
	children,
	...props
}: types.SectionLoaderProps) => {
	const { theme } = useInterface();
	const base = theme.sectionLoader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Oval size='w-12 h-12' className='stroke-gray-600 dark:stroke-gray-300 mb-4' />
			<Div spacing='space-y-1' className='text-center'>
				{title && <H5 tailwind={{ fontWeight: 'font-bold' }}>{title}</H5>}
				{message && <Small>{message}</Small>}
				{children}
			</Div>
		</Div>
	);
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/loading-states
