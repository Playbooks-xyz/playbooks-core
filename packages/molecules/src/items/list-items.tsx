import { Li, Ul } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

export const ListItems = ({ keyName, loading, children, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-column' space='' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm' spacing='pb-4'>
				{keyName}
			</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<Ul border='border' borderRadius='rounded-md' height='min-h-[100px]' spacing='px-4'>
					{children}
				</Ul>
			)}
		</Li>
	);
};
