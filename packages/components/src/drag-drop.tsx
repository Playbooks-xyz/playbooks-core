import { Fragment, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Div } from '@ehubbell/html';

export type DragDropProps = {
	index: number;
	model: any;
	disabled?: boolean;
	onMove: any;
	onDrop: any;
	tailwind?: any;
	children: any;
};

const DragDrop = ({ index, model, disabled = false, onMove, onDrop, tailwind, children }: DragDropProps) => {
	const ref = useRef(null);

	// Hooks
	const [{ isDragging }, drag] = useDrag({
		type: 'requirement',
		item: () => ({ index, model }),
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [{ handlerId }, drop] = useDrop({
		accept: 'requirement',
		collect(monitor) {
			return { handlerId: monitor.getHandlerId() };
		},
		drop(item: any, monitor) {
			// console.log('drop: ', item, monitor);
			const dropIndex = item.index;
			if (onDrop) onDrop(dropIndex, monitor);
		},
		hover(item: any, monitor) {
			// console.log('hover: ', item, monitor);
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) return;
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
			if (onMove) onMove(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	drag(drop(ref));

	// Render
	return (
		<Fragment>
			{disabled ? (
				<Div {...tailwind}>{children}</Div>
			) : (
				<Div
					ref={ref}
					data-handler-id={handlerId}
					tailwind={{
						cursor: 'cursor-grab',
						opacity: isDragging ? 'opacity-[30%]' : '',
						shadow: isDragging ? 'shadow-md' : '',
						...tailwind,
					}}>
					{children}
				</Div>
			)}
		</Fragment>
	);
};

export { DragDrop, DndProvider, HTML5Backend };

// Docs
// https://react-dnd.github.io/react-dnd/docs/api/use-drag
