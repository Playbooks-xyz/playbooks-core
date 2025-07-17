import { useMemo, useRef, useState } from 'react';

import { useElementHeight } from '@playbooks/hooks';
import { Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div } from 'src/html';
import * as types from 'types';

export const Accordion = ({
	name = 'Accordion',
	open,
	tailwind,
	className,
	children,
	...props
}: types.AccordionProps) => {
	const context = useUI();
	const base = context?.theme?.accordion();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AccordionToggle = ({
	id,
	name = 'AccordionToggle',
	variant = 'accent',
	nextIcon = 'chevron-down',
	open,
	onClick,
	tailwind,
	className,
	children,
	...props
}: types.AccordionToggleProps) => {
	const context = useUI();
	const base = context?.theme?.accordionToggle({ open });
	const computed = { ...base, ...props, tailwind, className, children, name };

	return <Btn id={id} variant={variant} nextIcon={nextIcon} onClick={() => onClick(id)} {...computed} />;
};

export const AccordionTitle = ({
	name = 'AccordionTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AccordionTitleProps) => {
	const context = useUI();
	const base = context?.theme?.accordionTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AccordionBody = ({
	name = 'AccordionBody',
	open,
	animate,
	tailwind,
	className,
	children,
	...props
}: types.AccordionBodyProps) => {
	const context = useUI();
	const base = context?.theme?.accordionBody();
	const wrapper = context?.theme?.accordionBodyWrapper();
	const computed = { ...base, ...props, tailwind, className, name };
	const [height, setHeight] = useState(0);
	const ref = useRef(null);

	// Computed
	const style = useMemo(() => {
		if (animate) return { maxHeight: open ? ref.current?.offsetHeight + 'px' : '0px' };
		return { maxHeight: open ? null : '0px' };
	}, [height, open, ref?.current]);

	// Hooks
	useElementHeight(ref?.current, onHeight, [children]);

	// Methods
	function onHeight(height) {
		setHeight(height);
	}

	// Render
	return (
		<Div style={style} {...wrapper}>
			<Div ref={ref} {...computed}>
				{children}
			</Div>
		</Div>
	);
};

export const AccordionText = ({
	name = 'AccordionText',
	tailwind,
	className,
	children,
	...props
}: types.AccordionTextProps) => {
	const context = useUI();
	const base = context?.theme?.accordionText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/faq-sections
