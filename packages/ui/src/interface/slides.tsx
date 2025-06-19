import { useEffect, useRef, useState } from 'react';

import { Fade } from '@playbooks/components/fade';
import { useKeyPress } from '@playbooks/hooks';
import * as types from '@playbooks/types';
import { useInterface } from 'contexts';
import { AccentBtn } from 'interface/buttons';
import { H4 } from 'interface/fonts';
import { Div } from 'interface/html';

export const SlideWrapper = ({
	name = 'SlideWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideWrapperProps) => {
	const { theme } = useInterface();
	const base = theme.slideWrapper();
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
	const { theme } = useInterface();
	const base = theme.slideBackdrop({ open });
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
	const { theme } = useInterface();
	const base = theme.slide({ open: show, placement });
	const computed = { ...base, ...props, tailwind, className, name };
	const { ref, createPortal, toggleScroll } = useInterface();
	const nodeRef = useRef(null);

	// Hooks
	useEffect(() => {
		toggleScroll(open);
	}, [open]);

	useKeyPress(onKeyDown, [open]);

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
	return ref?.current
		? createPortal(
				<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
					<SlideWrapper open={show} onClose={onClose}>
						<Div ref={nodeRef} {...computed}>
							{children}
						</Div>
					</SlideWrapper>
				</Fade>,
				ref?.current,
			)
		: null;
};

export const SlideHeader = ({
	name = 'SlideHeader',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.SlideHeaderProps) => {
	const { theme } = useInterface();
	const base = theme.slideHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<AccentBtn alt='close' size='icon' icon='xmark' color='text-gray-500 dark:text-gray-200' onClick={onClose} />
		</Div>
	);
};

export const SlideTitle = ({ name = 'SlideTitle', tailwind, className, children, ...props }: types.SlideTitleProps) => {
	const { theme } = useInterface();
	const base = theme.slideTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H4 {...computed}>{children}</H4>;
};

export const SlideBody = ({ name = 'SlideBody', tailwind, className, children, ...props }: types.SlideBodyProps) => {
	const { theme } = useInterface();
	const base = theme.slideBody();
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
	const { theme } = useInterface();
	const base = theme.slideFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/overlays/slide-overs
