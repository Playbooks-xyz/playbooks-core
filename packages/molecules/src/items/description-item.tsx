import { Li } from '@playbooks/ui/html';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const DescriptionItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between-top' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-full' />
			) : (
				<SectionText align='text-right' flex='grow' fontSize='text-sm'>
					{value}
				</SectionText>
			)}
		</Li>
	);
};
