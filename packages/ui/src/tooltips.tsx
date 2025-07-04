import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

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
	const [refElement, setRefElement] = useState(null);
	const [popElement, setPopElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const nodeRef = useRef(null);
	const { styles: popperStyles, attributes } = usePopper(refElement, popElement, {
		placement,
		strategy: 'fixed',
		modifiers: [
			{ name: 'arrow', options: { element: arrowElement } },
			{ name: 'offset', options: { offset: [0, 5] } },
		],
	});

	// Methods
	const onEnter = () => setShow(true);
	const onExit = () => setShow(false);

	const onShow = e => {
		if (!onClick) e.preventDefault();
		return onClick ? onClick() : null;
	};

	const onMouseEnter = () => {
		return !open && onHover ? onHover() : null;
	};

	const onMouseLeave = () => {
		return open && onHover ? onHover() : null;
	};

	// Render
	if (typeof window === 'undefined') return null;
	return (
		<Span
			id={id}
			ref={setRefElement}
			name={name}
			onClick={onShow}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}>
			{children}
			{createPortal(
				<Fade ref={nodeRef} show={open} timeout={200} onEnter={onEnter} onExit={onExit}>
					<Div ref={setPopElement} zIndex='z-10' style={popperStyles.popper} {...attributes.popper}>
						<Div ref={nodeRef} {...computed}>
							<TooltipArrow
								setArrowElement={setArrowElement}
								style={{ ...popperStyles.popper, ...popperStyles.arrow }}
								tailwind={tailwind?.arrow}
							/>
							<TooltipInner tailwind={tailwind?.inner}>{html}</TooltipInner>
						</Div>
					</Div>
				</Fade>,
				document.body,
			)}
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
	setArrowElement,
	tailwind,
	className,
	style,
	...props
}: types.TooltipArrowProps) => {
	const context = useUI();
	const base = context?.theme?.tooltipArrow();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div ref={setArrowElement} style={style}>
			<Div {...computed} />
		</Div>
	);
};

// Docs
// https://www.npmjs.com/package/react-popper
// https://popper.js.team/docs/v2/modifiers/offset/
// https://popper.js.team/docs/v2/constructors/#options
// https://popper.js.team/docs/v2/modifiers/
