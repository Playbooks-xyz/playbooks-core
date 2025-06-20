import { Li } from '@playbooks/ui/html';
import { FadIcon } from '@playbooks/ui/icons';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const InfoItem = ({ keyName, loading, icon, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-start' space='space-x-4' spacing='py-4' {...tailwind?.li}>
			<FadIcon icon={icon} color='text-gray-600 dark:text-gray-500' fontSize='text-xl' />
			{keyName && <SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>}
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<SectionText align='text-right' fontSize='text-sm'>
					{value}
				</SectionText>
			)}
		</Li>
	);
};
