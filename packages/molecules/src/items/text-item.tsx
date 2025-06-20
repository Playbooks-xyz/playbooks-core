import { Li } from '@playbooks/ui/html';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const TextItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' width='w-full' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm' width='w-1/2' {...tailwind?.key}>
				{keyName}
			</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<SectionText align='text-right' display='grow' fontSize='text-sm' width='w-1/2' {...tailwind?.text}>
					{value}
				</SectionText>
			)}
		</Li>
	);
};
