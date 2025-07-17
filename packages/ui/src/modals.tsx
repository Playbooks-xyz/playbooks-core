import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Fade } from '@playbooks/components/fade';
import { useKeyDown } from '@playbooks/hooks';
import * as types from 'types';
import { AccentBtn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font } from 'src/fonts';
import { Div, Span } from 'src/html';

export const ModalWrapper = ({
	name = 'ModalWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.ModalWrapperProps) => {
	const context = useUI();
	const base = context?.theme?.modalWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<ModalBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
		</Div>
	);
};

export const ModalBackdrop = ({
	name = 'ModalBackdrop',
	open,
	onClose,
	tailwind,
	...props
}: types.ModalBackdropProps) => {
	const context = useUI();
	const base = context?.theme?.modalBackdrop({ open });
	const computed = { ...base, ...props, tailwind, name };

	return <Div onClick={onClose} {...computed} />;
};

export const Modal = ({ name = 'Modal', open, onClose, tailwind, className, children, ...props }: types.ModalProps) => {
	const [show, setShow] = useState(false);

	const context = useUI();
	const base = context?.theme?.modal({ open: show });
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
			<ModalWrapper open={show} onClose={onClose} tailwind={tailwind?.wrapper}>
				<Div ref={nodeRef} {...computed}>
					{children}
				</Div>
			</ModalWrapper>
		</Fade>,
		document.body,
	);
};

export const ModalHeader = ({
	name = 'ModalHeader',
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.ModalHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.modalHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<Span>{children}</Span>
			{onClose && <AccentBtn alt='close' size='icon' icon='xmark' fontSize='text-xl' onClick={onClose} />}
		</Div>
	);
};

export const ModalTitle = ({
	name = 'ModalTitle',
	size = 'h4',
	tailwind,
	className,
	children,
	...props
}: types.ModalTitleProps) => {
	const context = useUI();
	const base = context?.theme?.modalTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const ModalSubtitle = ({
	name = 'ModalSubtitle',
	size = 'p',
	tailwind,
	className,
	children,
	...props
}: types.ModalSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.modalSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const ModalBody = ({
	name = 'ModalBody',
	size,
	tailwind,
	className,
	children,
	...props
}: types.ModalBodyProps) => {
	const context = useUI();
	const base = context?.theme?.modalBody({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const ModalFooter = ({
	name = 'ModalFooter',
	tailwind,
	className,
	children,
	...props
}: types.ModalFooterProps) => {
	const context = useUI();
	const base = context?.theme?.modalFooter();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://headlessui.dev/react/dialog
// https://tailwindui.com/src/application-ui/overlays/modals
