import { Li } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Tag } from '@playbooks/ui/tags';
import { Skeleton } from 'src/skeletons';

export const TagItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? <Skeleton className='w-20' /> : <Tag>{value}</Tag>}
		</Li>
	);
};
