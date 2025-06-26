import { useEffect, useMemo, useRef, useState } from 'react';

import {
	AccordionBodyProps,
	AccordionProps,
	AccordionTextProps,
	AccordionTitleProps,
	AccordionToggleProps,
} from '@playbooks/types';
import { Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { Font, P } from 'src/fonts';
import { Div } from 'src/html';

export const Accordion = ({ name = 'Accordion', open, tailwind, className, children, ...props }: AccordionProps) => {
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
}: AccordionToggleProps) => {
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
}: AccordionTitleProps) => {
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
}: AccordionBodyProps) => {
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
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const element = entries[0];
			setHeight(element.contentRect.height);
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [children]);

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
}: AccordionTextProps) => {
	const context = useUI();
	const base = context?.theme?.accordionText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

// Docs
// https://tailwindui.com/src/marketing/sections/faq-sections
