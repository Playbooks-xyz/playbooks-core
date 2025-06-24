import { Span } from '@playbooks/ui/html';
import { Tag } from '@playbooks/ui/tags';
import { Skeleton } from 'src/skeletons';

export const TextStat = ({ stat, text, loading }) => {
	// Render
	if (loading) return <Skeleton className='w-20' />;
	return (
		<Tag display='flex-start' space='space-x-2'>
			<Span color='text-gray-500 dark:text-gray-300' fontSize='text-sm'>
				{stat}
			</Span>
			<Span color='text-gray-500 dark:text-gray-300' fontSize='text-sm'>
				{text}
			</Span>
		</Tag>
	);
};
