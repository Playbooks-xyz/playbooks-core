import { useRef, useState } from 'react';

import { Fade } from '@playbooks/components/fade';
import { useKeyDown, useMouseUp } from '@playbooks/hooks';
import { AccentBtn } from 'src/buttons';
import { useUI } from 'src/context';
import { H6, P } from 'src/fonts';
import { Div, Li, Ul } from 'src/html';
import { AccentLink } from 'src/links';
import * as types from 'types';

export const Menu = ({ name = 'Menu', open, onClose, tailwind, className, children, ...props }: types.MenuProps) => {
	const context = useUI();
	const base = context?.theme?.menu();
	const computed = { ...base, ...props, tailwind, className, name };
	const ref = useRef(null);

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

export const MenuWrapper = ({
	name = 'MenuWrapper',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuWrapperProps) => {
	const context = useUI();
	const base = context?.theme?.menuWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			{children}
			<MenuBackdrop open={open} onClose={onClose} tailwind={tailwind?.backdrop} />
		</Div>
	);
};

export const MenuBackdrop = ({
	name = 'MenuBackdrop',
	open,
	onClose,
	tailwind,
	className,
	...props
}: types.MenuBackdropProps) => {
	const context = useUI();
	const base = context?.theme?.menuBackdrop({ open });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div onClick={onClose} {...computed} />;
};

export const MenuMenu = ({
	name = 'MenuMenu',
	open,
	onClose,
	tailwind,
	className,
	children,
	...props
}: types.MenuMenuProps) => {
	const [show, setShow] = useState(false);

	const context = useUI();
	const base = context?.theme?.menuMenu({ open: show });
	const computed = { ...base, ...props, tailwind, className, name };
	const ref = useRef(null);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	return (
		<Fade ref={ref} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
			<MenuWrapper open={show} onClose={onClose} tailwind={tailwind?.wrapper}>
				<Div ref={ref} aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={-1} {...computed}>
					{children}
				</Div>
			</MenuWrapper>
		</Fade>
	);
};

export const MenuBlock = ({ name = 'MenuBlock', tailwind, className, children, ...props }: types.MenuListProps) => {
	const context = useUI();
	const base = context?.theme?.menuBlock();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const MenuTitle = ({ name = 'MenuTitle', tailwind, className, children, ...props }: types.MenuTitleProps) => {
	const context = useUI();
	const base = context?.theme?.menuTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <H6 {...computed}>{children}</H6>;
};

export const MenuSubtitle = ({
	name = 'MenuSubtitle',
	tailwind,
	className,
	children,
	...props
}: types.MenuSubtitleProps) => {
	const context = useUI();
	const base = context?.theme?.menuSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const MenuList = ({ name = 'MenuList', tailwind, className, children, ...props }: types.MenuListProps) => {
	const context = useUI();
	const base = context?.theme?.menuList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const MenuItem = ({ name = 'MenuItem', tailwind, className, children, ...props }: types.MenuItemProps) => {
	const context = useUI();
	const base = context?.theme?.menuItem();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Li {...computed}>{children}</Li>;
};

export const MenuBtn = ({
	name = 'MenuBtn',
	active,
	onClick,
	taskRunning,
	tailwind,
	className,
	children,
	...props
}: types.MenuBtnProps) => {
	const context = useUI();
	const base = context?.theme?.menuBtn();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentBtn active={active} taskRunning={taskRunning} onClick={onClick} {...computed} />;
};

export const MenuLink = ({
	name = 'MenuLink',
	href = '',
	tailwind,
	className,
	children,
	...props
}: types.MenuLinkProps) => {
	const context = useUI();
	const base = context?.theme?.menuLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/src/application-ui/elements/menus
