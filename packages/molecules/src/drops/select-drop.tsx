import { useRef, useState } from 'react';

import { Drop, DropBtn, DropItem, DropList, DropMenu, DropToggle } from '@playbooks/ui/drops';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';
import { capitalize } from '@playbooks/utils';

const FilterSelectDrop = ({
	id,
	size = 'md',
	prevIcon = 'filter',
	value,
	placeholder,
	options,
	onChange,
	tailwind,
}) => {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	// Methods
	const isActive = options?.includes(value);

	const onClose = () => setOpen(false);

	const onToggle = () => setOpen(!open);

	const onClick = option => {
		setOpen(false);
		onChange(option);
	};

	// Render
	return (
		<Drop ref={ref} open={open} onClose={onClose}>
			<DropToggle
				id={id}
				variant='border'
				size={size}
				prevIcon={prevIcon}
				onClick={onToggle}
				tailwind={{ span: { display: 'flex-start', flex: 'grow', minHeight: 'min-h-[32px]' } }}
				{...tailwind}>
				{value ? capitalize(value?.name) : placeholder}
			</DropToggle>
			<DropMenu ref={ref} open={open} location='left-0' maxHeight='max-h-[300px]'>
				<DropList>
					{options?.map((option, i) => (
						<DropItem key={i}>
							<DropBtn
								onClick={() => onClick(option)}
								tailwind={{ span: { display: 'flex-between', width: 'w-full' } }}>
								<Span>{capitalize(option.name)}</Span>
								{value?.name === option.name && <FarIcon icon='check' />}
							</DropBtn>
						</DropItem>
					))}
					{isActive && (
						<DropItem>
							<DropBtn
								nextIcon='xmark'
								onClick={() => onClick('')}
								tailwind={{ span: { display: 'flex-between', width: 'w-full' } }}>
								Clear
							</DropBtn>
						</DropItem>
					)}
				</DropList>
			</DropMenu>
		</Drop>
	);
};

export { FilterSelectDrop };
