import { useEffect } from 'react';

import { Small } from '@playbooks/ui/fonts';
import { Img, Span } from '@playbooks/ui/html';

export const ImageElement = props => {
	// Hooks
	useEffect(() => {
		// logger.log('ImageElement: ', props);
	}, []);

	// Render
	return (
		<Span space='space-y-3'>
			<Img {...props} />
			<Span
				border='border-l-4'
				borderColor='border-gray-200 dark:border-gray-700'
				display='flex-start'
				spacing='ml-1 px-4'>
				<Small fontStyle='italic' fontWeight='!font-light' spacing='!mb-0'>
					{props.alt}
				</Small>
			</Span>
		</Span>
	);
};
