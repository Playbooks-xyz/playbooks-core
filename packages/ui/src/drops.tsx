import { useEffect, useRef, useState } from 'react';

import { computePosition, flip, limitShift, shift } from '@floating-ui/dom';
import { Fade } from '@playbooks/components/fade';
import { useKeyDown, useMouseDown } from '@playbooks/hooks';
import { AccentBtn, Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font } from 'src/fonts';
import { Div, Li, Ul } from 'src/html';
import { AccentLink } from 'src/links';
import * as types from 'types';

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
	useMouseDown(onMouseDown, [open]);

	// Functions
	function onKeyDown(e) {
		if (!open) return;
		if (e.target.dataset.name === 'FormInput') return;
		if (e.keyCode === 27) onClose();
	}

	function onMouseDown(e) {
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
	tailwind,
	className,
	children,
	...props
}: types.DropMenuProps) => {
	const [show, setShow] = useState(false);
	const context = useUI();
	const base = context?.theme?.dropMenu({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const dropRef = useRef(null);

	// Hooks
	useEffect(() => {
		if (ref?.current && dropRef?.current && open) {
			const middleware = [flip(), shift({ limiter: limitShift() })];
			const formattedOptions = { placement, middleware, strategy: 'fixed' as any };
			computePosition(ref?.current, dropRef?.current, formattedOptions).then(({ x, y }) => {
				Object.assign(dropRef?.current.style, { left: `${x}px`, top: `${y}px` });
			});
		}
	}, [ref?.current, dropRef?.current, open]);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return (
		<Fade ref={dropRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<div
				ref={dropRef}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
				className='absolute w-auto z-20'>
				<Div ref={dropRef} {...computed}>
					{children}
				</Div>
			</div>
		</Fade>
	);
};

export const DropHeader = ({ name = 'DropHeader', tailwind, className, children, ...props }: types.DropHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.dropHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const DropTitle = ({
	name = 'DropTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.DropTitleProps) => {
	const context = useUI();
	const base = context?.theme?.dropTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const DropSubtitle = ({
	name = 'DropSubtitle',
	size = 'p',
	tailwind,
	className,
	children,
	...props
}: types.DropSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.dropSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size='p' {...computed}>
			{children}
		</Font>
	);
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
