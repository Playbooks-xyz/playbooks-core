import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { arrow, computePosition, flip, limitShift, shift } from '@floating-ui/dom';
import { Fade } from '@playbooks/components/fade';
import { useElementMouseEnter, useElementMouseLeave, useMounted } from '@playbooks/hooks';
import { useUI } from 'src/context';
import { Div, Span } from 'src/html';
import * as types from 'types';

export const Popover = ({
	id,
	ref,
	name = 'Popover',
	open,
	placement = 'top',
	html,
	onClick = () => null,
	onHover = () => null,
	className,
	children,
	tailwind,
	...props
}: types.PopoverProps) => {
	const [show, setShow] = useState(false);
	const context = useUI();
	const base = context?.theme?.popover({ open: show, placement });
	const computed = { ...base, ...props, tailwind, className, name };
	const baseRef = useRef(null);
	const popRef = useRef(null);
	const arrowRef = useRef(null);

	// Hooks
	useEffect(() => {
		const computedRef = ref || baseRef;
		if (computedRef?.current && arrowRef?.current && popRef?.current) {
			const middleware = [arrow({ element: arrowRef?.current }), flip(), shift({ limiter: limitShift() })];
			const formattedOptions = { placement, middleware, strategy: 'fixed' as any };
			computePosition(computedRef?.current, popRef?.current, formattedOptions).then(({ x, y, middlewareData }) => {
				Object.assign(popRef?.current.style, { left: `${x}px`, top: `${y}px` });
				Object.assign(arrowRef?.current.style, {
					left: `${middlewareData.arrow?.x}px`,
					top: `${middlewareData.arrow?.y}px`,
				});
			});
		}
	}, [ref?.current, baseRef?.current, arrowRef?.current, popRef?.current, open]);

	useElementMouseEnter(ref?.current, onMouseEnter, [ref?.current]);
	useElementMouseLeave(ref?.current, onMouseLeave, [ref?.current]);

	const mounted = useMounted(null, []);

	// Functions
	function onMouseEnter() {
		if (onHover) onHover(true);
	}
	function onMouseLeave() {
		if (onHover) onHover(false);
	}

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	// Render
	if (!mounted) return null;
	if (ref?.current) {
		return createPortal(
			<Fade ref={popRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
				<Div ref={popRef} position='absolute' zIndex='z-10' {...computed}>
					<PopoverArrow ref={arrowRef} tailwind={tailwind?.arrow} />
					<PopoverInner tailwind={tailwind?.inner}>{html}</PopoverInner>
				</Div>
			</Fade>,
			document.body,
		);
	}
	return (
		<Span id={id} ref={baseRef} name={name} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
			{createPortal(
				<Fade ref={popRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
					<Div ref={popRef} position='absolute' zIndex='z-10' {...computed}>
						<PopoverArrow ref={arrowRef} tailwind={tailwind?.arrow} />
						<PopoverInner tailwind={tailwind?.inner}>{html}</PopoverInner>
					</Div>
				</Fade>,
				document.body,
			)}
		</Span>
	);
};

export const PopoverInner = ({
	name = 'PopoverInner',
	className,
	children,
	tailwind,
	...props
}: types.PopoverInnerProps) => {
	const context = useUI();
	const base = context?.theme?.popoverInner();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const PopoverArrow = ({
	name = 'PopoverArrow',
	ref,
	tailwind,
	className,
	...props
}: types.PopoverArrowProps) => {
	const context = useUI();
	const base = context?.theme?.popoverArrow();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div ref={ref} position='absolute'>
			<Div {...computed} />
		</Div>
	);
};

// Docs
// https://floating-ui.com/docs/arrow
// https://floating-ui.com/docs/computePosition#middlewaredata
// https://floating-ui.com/docs/migration
