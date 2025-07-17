import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Fade } from '@playbooks/components/fade';
import { useKeyDown } from '@playbooks/hooks';
import * as types from 'types';
import { AccentBtn } from 'src/buttons';
import { useUI } from 'src/context';
import { H4 } from 'src/fonts';
import { Div } from 'src/html';

export const SlideWrapper = ({
	name = 'SlideWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideWrapperProps) => {
	const context = useUI();
	const base = context?.theme?.slideWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<SlideBackdrop open={open} onClose={onClose} />
		</Div>
	);
};

export const SlideBackdrop = ({
	name = 'SlideBackdrop',
	open,
	onClose,
	tailwind,
	...props
}: types.SlideBackdropProps) => {
	const context = useUI();
	const base = context?.theme?.slideBackdrop({ open });
	const computed = { ...base, ...props, tailwind, name };

	return <Div onClick={onClose} {...computed} />;
};

export const Slide = ({
	name = 'Slide',
	open,
	placement = 'left',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideProps) => {
	const [show, setShow] = useState(false);

	const context = useUI();
	const base = context?.theme?.slide({ open: show, placement });
	const computed = { ...base, ...props, tailwind, className, name };
	const nodeRef = useRef(null);

	// Hooks
	useEffect(() => {
		const el = document.querySelector('body');
		open ? el.classList?.add('overflow-hidden') : el.classList?.remove('overflow-hidden');
	}, [open]);

	useKeyDown(onKeyDown, [open]);

	// Function
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27 && typeof onClose === 'function') onClose();
	}

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	if (typeof window === 'undefined') return null;
	return createPortal(
		<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<SlideWrapper open={show} onClose={onClose}>
				<Div ref={nodeRef} {...computed}>
					{children}
				</Div>
			</SlideWrapper>
		</Fade>,
		document?.body,
	);
};

export const SlideHeader = ({
	name = 'SlideHeader',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.slideHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<AccentBtn alt='close' size='icon' icon='xmark' color='text-gray-500 dark:text-gray-200' onClick={onClose} />
		</Div>
	);
};

export const SlideTitle = ({ name = 'SlideTitle', tailwind, className, children, ...props }: types.SlideTitleProps) => {
	const context = useUI();
	const base = context?.theme?.slideTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H4 {...computed}>{children}</H4>;
};

export const SlideBody = ({ name = 'SlideBody', tailwind, className, children, ...props }: types.SlideBodyProps) => {
	const context = useUI();
	const base = context?.theme?.slideBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const SlideFooter = ({
	name = 'SlideFooter',
	tailwind,
	className,
	children,
	...props
}: types.SlideFooterProps) => {
	const context = useUI();
	const base = context?.theme?.slideFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/overlays/slide-overs
