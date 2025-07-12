import { useEffect, useRef, useState } from 'react';

import { arrow, computePosition, flip, limitShift, shift } from '@floating-ui/dom';
import { Fade } from '@playbooks/components/fade';
import * as types from '@playbooks/types';
import { useUI } from 'src/context';
import { Div, Span } from 'src/html';

export const Tooltip = ({
	id,
	name = 'Tooltip',
	open,
	placement = 'right',
	html,
	onClick,
	onHover,
	className,
	children,
	tailwind,
	...props
}: types.TooltipProps) => {
	const [show, setShow] = useState(false);
	const context = useUI();
	const base = context?.theme?.tooltip({ open: show, placement });
	const computed = { ...base, ...props, tailwind, className, name };
	const ref = useRef(null);
	const popRef = useRef(null);
	const arrowRef = useRef(null);

	// Hooks
	useEffect(() => {
		if (ref?.current && arrowRef?.current && popRef?.current) {
			const middleware = [arrow({ element: arrowRef?.current }), flip(), shift({ limiter: limitShift() })];
			const formattedOptions = { placement, middleware, strategy: 'fixed' as any };
			computePosition(ref?.current, popRef?.current, formattedOptions).then(({ x, y, middlewareData }) => {
				Object.assign(popRef?.current.style, { left: `${x}px`, top: `${y}px` });
				Object.assign(arrowRef?.current.style, {
					left: `${middlewareData.arrow?.x}px`,
					top: `${middlewareData.arrow?.y}px`,
				});
			});
		}
	}, [ref?.current, arrowRef?.current, popRef?.current, open]);

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);
	const onMouseEnter = () => (!open && onHover ? onHover() : null);
	const onMouseLeave = () => (open && onHover ? onHover() : null);

	const onShow = e => {
		if (!onClick) e.preventDefault();
		return onClick ? onClick() : null;
	};

	// Render
	return (
		<Span id={id} ref={ref} name={name} onClick={onShow} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
			<Fade ref={popRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
				<Div ref={popRef} position='fixed' zIndex='z-10' {...computed}>
					<TooltipArrow ref={arrowRef} position='fixed' tailwind={tailwind?.arrow} />
					<TooltipInner tailwind={tailwind?.inner}>{html}</TooltipInner>
				</Div>
			</Fade>
		</Span>
	);
};

export const TooltipInner = ({
	name = 'TooltipInner',
	className,
	children,
	tailwind,
	...props
}: types.TooltipInnerProps) => {
	const context = useUI();
	const base = context?.theme?.tooltipInner();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TooltipArrow = ({
	name = 'TooltipArrow',
	ref,
	tailwind,
	className,
	style,
	...props
}: types.TooltipArrowProps) => {
	const context = useUI();
	const base = context?.theme?.tooltipArrow();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div ref={ref} style={style}>
			<Div {...computed} />
		</Div>
	);
};

// Docs
// https://floating-ui.com/docs/arrow
// https://floating-ui.com/docs/computePosition#middlewaredata
// https://floating-ui.com/docs/migration
