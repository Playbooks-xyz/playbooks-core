import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { Fade } from '@playbooks/components/fade';
import { useKeyDown, useMouseUp } from '@playbooks/hooks';
import * as types from '@playbooks/types';
import { AccentBtn, Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { H6, P } from 'src/fonts';
import { Div, Li, Ul } from 'src/html';
import { AccentLink } from 'src/links';

export const Drop = ({
	ref,
	name = 'Drop',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.DropProps) => {
	const context = useUI();
	const base = context?.theme?.drop();
	const computed = { ...base, ...props, tailwind, className, name };

	// Hooks
	useKeyDown(onKeyDown, [open]);
	useMouseUp(onMouseUp, [open]);

	// Functions
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27) onClose();
	}

	function onMouseUp(e) {
		if (!open) return;
		if (ref?.current?.contains(e.target)) return;
		onClose();
	}

	// Render
	return (
		<Div ref={ref} {...computed}>
			{children}
		</Div>
	);
};

export const DropToggle = ({
	name = 'DropToggle',
	alt,
	variant = 'accent',
	nextIcon = 'chevron-down',
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.DropToggleProps) => {
	const context = useUI();
	const base = context?.theme?.dropToggle();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Btn alt={alt} variant={variant} nextIcon={nextIcon} onClick={onClick} {...computed} />;
};

export const DropMenu = ({
	ref,
	name = 'DropMenu',
	open,
	placement = 'bottom-start',
	options,
	tailwind,
	className,
	children,
	...props
}: types.DropMenuProps) => {
	const [show, setShow] = useState(false);
	const [dropRef, setDropRef] = useState(null);
	const context = useUI();
	const base = context?.theme?.dropMenu({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const nodeRef = useRef(null);
	const { styles: popperStyles, attributes } = usePopper(ref?.current, dropRef, {
		placement,
		strategy: 'fixed',
		...options,
	});

	// Hooks
	// useEffect(() => {
	// 	update();
	// }, [open]);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	if (typeof window === 'undefined') return null;
	return createPortal(
		<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<Div
				ref={setDropRef}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
				className='w-auto z-50'
				style={popperStyles.popper}
				{...attributes.popper}>
				<Div ref={nodeRef} {...computed}>
					{children}
				</Div>
			</Div>
		</Fade>,
		document.body,
	);
};

export const DropHeader = ({ name = 'DropHeader', tailwind, className, children, ...props }: types.DropHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.dropHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const DropTitle = ({ name = 'DropTitle', tailwind, className, children, ...props }: types.DropTitleProps) => {
	const context = useUI();
	const base = context?.theme?.dropTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const DropSubtitle = ({
	name = 'DropSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.DropSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.dropSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const DropList = ({ name = 'DropList', tailwind, className, children, ...props }: types.DropListProps) => {
	const context = useUI();
	const base = context?.theme?.dropList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const DropItem = ({ name = 'DropItem', tailwind, className, children, ...props }: types.DropItemProps) => {
	const context = useUI();
	const base = context?.theme?.dropItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const DropBtn = ({ name = 'DropBtn', tailwind, className, children, ...props }: types.DropBtnProps) => {
	const context = useUI();
	const base = context?.theme?.dropBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentBtn {...computed} />;
};

export const DropLink = ({ name = 'DropLink', tailwind, className, children, ...props }: types.DropLinkProps) => {
	const context = useUI();
	const base = context?.theme?.dropLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentLink {...computed} />;
};

// Docs
// https://tailwindui.com/src/application-ui/elements/drops
