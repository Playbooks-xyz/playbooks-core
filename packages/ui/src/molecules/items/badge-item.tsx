import { Skeleton } from '@playbooks/components';
import { Badge } from 'interface/badges';
import { Small } from 'interface/fonts';
import { Li } from 'interface/html';
import { SectionSubtitle } from 'interface/sections';

export const BadgeItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : value ? (
				<Badge type={value} textTransform=''>
					{value}
				</Badge>
			) : (
				<Small>--</Small>
			)}
		</Li>
	);
};
