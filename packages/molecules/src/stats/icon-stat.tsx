import { Span } from '@playbooks/ui/html';
import { FadIcon } from '@playbooks/ui/icons';
import { Tag } from '@playbooks/ui/tags';
import { Skeleton } from 'src/skeletons';

export const IconStat = ({ stat, icon, text, loading }) => {
	// Render
	if (loading) return <Skeleton className='w-20' />;
	return (
		<Tag display='flex-start' space='space-x-2'>
			<FadIcon icon={icon} color='text-gray-500 dark:text-gray-300' />
			<Span color='text-gray-500 dark:text-gray-300'>{text}</Span>
		</Tag>
	);
};
