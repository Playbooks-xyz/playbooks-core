import { Li } from '@playbooks/ui/html';
import { SectionActions, SectionSubtitle } from '@playbooks/ui/sections';
import { Tag } from '@playbooks/ui/tags';
import { Skeleton } from 'src/skeletons';

export const TagItems = ({ keyName, loading, values = [], tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<SectionActions flex='flex-wrap'>
					{values.map((value, i) => (
						<Tag key={i} className='mb-1'>
							{value}
						</Tag>
					))}
				</SectionActions>
			)}
		</Li>
	);
};
