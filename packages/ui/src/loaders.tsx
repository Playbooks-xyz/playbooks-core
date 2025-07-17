import { useUI } from 'src/context';
import { H5, P, Small } from 'src/fonts';
import { Div, Span } from 'src/html';
import { Oval } from 'src/spinners';
import * as types from 'types';

export const ModalLoader = ({
	name = 'ModalLoader',
	title = 'Processing Order',
	message = 'Give us a second...',
	tailwind,
	className,
	children,
	...props
}: types.PageLoaderProps) => {
	const context = useUI();
	const base = context?.theme?.modalLoader();
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
	const context = useUI();
	const base = context?.theme?.pageLoader();
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
	const context = useUI();
	const base = context?.theme?.sectionLoader();
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
// https://tailwindui.com/src/application-ui/feedback/loading-states
