import { Badge } from '@playbooks/ui/badges';
import { Li } from '@playbooks/ui/html';
import { SectionActions, SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const BadgeItems = ({ keyName, loading, values = [], tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<SectionActions flex='flex-wrap'>
					{values.map((value, i) => (
						<Badge key={i} type={value} className='mb-1'>
							{value}
						</Badge>
					))}
				</SectionActions>
			)}
		</Li>
	);
};
