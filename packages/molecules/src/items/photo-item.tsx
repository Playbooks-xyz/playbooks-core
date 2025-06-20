import { Fragment } from 'react';

import { Img, Li } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

const PhotoItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<Fragment>
					{value ? <Img src={value} borderRadius='rounded-md' width='w-32' {...tailwind?.img} /> : '--'}
				</Fragment>
			)}
		</Li>
	);
};

export { PhotoItem };
