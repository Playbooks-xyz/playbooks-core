import { Fragment } from 'react';

import { Li, Span } from '@playbooks/ui/html';
import { AccentLink } from 'src/components';
import { SectionSubtitle } from '@playbooks/ui/sections';

export const LinkItem = ({ keyName, loading, value, display, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{value ? (
				<Fragment>
					<AccentLink
						size=''
						bgColor=''
						nextIcon='arrow-up-right'
						color='text-primary dark:text-secondary'
						hover='hover:underline'
						href={value}
						target='_blank'>
						{display ? display : 'View'}
					</AccentLink>
				</Fragment>
			) : (
				<Span>--</Span>
			)}
		</Li>
	);
};
