import { AccentBtn } from '@playbooks/ui/buttons';
import { FadIcon } from '@playbooks/ui/icons';
import { Tag, TagActions, TagBody, TagImg } from '@playbooks/ui/tags';

const SearchTag = ({ result, options, onRemove }) => (
	<Tag size='xxs' spacing=''>
		{result.thumbnail ? <TagImg size='w-4 h-4' src={result.thumbnail} /> : <FadIcon icon={options.icon} />}
		<TagBody>{result[options.keyName || 'name']}</TagBody>
		<TagActions>
			<AccentBtn size='p-1' icon='xmark' onClick={() => onRemove(result)} />
		</TagActions>
	</Tag>
);

export { SearchTag };
