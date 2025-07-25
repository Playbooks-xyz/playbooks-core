import { Li } from '@playbooks/ui/html';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { toShortNumber } from '@playbooks/utils';
import { Skeleton } from 'src/skeletons';

export const NumberItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? <Skeleton className='w-20' /> : <SectionText fontSize='text-sm'>{toShortNumber(value)}</SectionText>}
		</Li>
	);
};
