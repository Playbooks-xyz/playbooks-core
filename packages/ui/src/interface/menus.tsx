import { useRef, useState } from 'react';

import { Fade } from '@playbooks/components/fade';
import { useKeyPress, useMouseUp } from '@playbooks/hooks';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { AccentBtn } from 'interface/buttons';
import { H6, P } from 'interface/fonts';
import { Div, Li, Ul } from 'interface/html';
import { AccentLink } from 'interface/links';

export const Menu = ({ name = 'Menu', open, onClose, tailwind, className, children, ...props }: types.MenuProps) => {
	const base = theme.menu();
	const computed = { ...base, ...props, tailwind, className, name };
	const ref = useRef(null);

	// Hooks
	useKeyPress(onKeyDown, [open]);
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
	const base = theme.menuWrapper();
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
	const base = theme.menuBackdrop({ open });
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

	const base = theme.menuMenu({ open: show });
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
	const base = theme.menuBlock();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const MenuTitle = ({ name = 'MenuTitle', tailwind, className, children, ...props }: types.MenuTitleProps) => {
	const base = theme.menuTitle();
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
	const base = theme.menuSubtitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const MenuList = ({ name = 'MenuList', tailwind, className, children, ...props }: types.MenuListProps) => {
	const base = theme.menuList();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Ul {...computed}>{children}</Ul>;
};

export const MenuItem = ({ name = 'MenuItem', tailwind, className, children, ...props }: types.MenuItemProps) => {
	const base = theme.menuItem();
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
	const base = theme.menuBtn();
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
	const base = theme.menuLink();
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <AccentLink href={href} {...computed} />;
};

// Docs
// https://tailwindui.com/interface/application-ui/elements/menus
