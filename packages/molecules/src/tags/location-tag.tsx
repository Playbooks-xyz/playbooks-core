import { AccentBtn } from '@playbooks/ui/buttons';
import { Tag, TagActions, TagBody } from '@playbooks/ui/tags';

export const LocationTag = ({ size = 'xs', location, onRemove }) => (
	<Tag size={size} spacing=''>
		<TagBody fontSize='text-xs'>
			{location.city}, {location.state}
		</TagBody>
		<TagActions>
			<AccentBtn size='p-1' icon='xmark' onClick={() => onRemove(location)} />
		</TagActions>
	</Tag>
);
