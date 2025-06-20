import { Div, Li } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const HtmlItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' space='space-y-4' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? <Skeleton className='w-20' /> : <Div html={{ __html: value }} className='markdown' />}
		</Li>
	);
};
