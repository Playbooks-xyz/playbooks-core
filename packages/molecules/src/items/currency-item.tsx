import { Li, Span } from '@playbooks/ui/html';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { toCurrency } from '@playbooks/utils';
import { Skeleton } from 'src/skeletons';

export const CurrencyItem = ({ keyName, disclaimer, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<Span display='flex-start' space='space-x-4'>
				<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
				<SectionSubtitle fontSize='text-sm'>{disclaimer}</SectionSubtitle>
			</Span>
			{loading ? <Skeleton className='w-20' /> : <SectionText fontSize='text-sm'>{toCurrency(value)}</SectionText>}
		</Li>
	);
};
