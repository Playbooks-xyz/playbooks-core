import { AvatarBadge } from '@playbooks/ui/avatars';
import { BorderBtn } from '@playbooks/ui/buttons';
import { DropToggle } from '@playbooks/ui/drops';
import { Div } from '@playbooks/ui/html';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';

export const FilterBtn = ({ type = 'icon', count, active, onClick }) => {
	const props = { count, active, onClick };

	// Render
	switch (type) {
		case 'drop':
			return <DropFilterBtn {...props} />;
		case 'icon':
			return <IconFilterBtn {...props} />;
	}
};

const DropFilterBtn = ({ count, active, onClick }) => (
	<Div display='inline-block' width='w-full'>
		{count > 0 && (
			<Div position='absolute' inset='-top-2.5 -right-2.5' zIndex='z-[1]'>
				<AvatarBadge>{count}</AvatarBadge>
			</Div>
		)}
		<DropToggle variant='border' display='flex-between' open={active} onClick={onClick} className='w-full'>
			<FarIcon icon='filter' />
			<Span>Filters</Span>
		</DropToggle>
	</Div>
);

const IconFilterBtn = ({ count, onClick }) => (
	<Div display='inline-block'>
		{count > 0 && (
			<Div position='absolute' inset='-top-2.5 -right-2.5' zIndex='z-[1]'>
				<AvatarBadge>{count}</AvatarBadge>
			</Div>
		)}
		<BorderBtn size='icon' icon='filter' onClick={onClick} />
	</Div>
);
