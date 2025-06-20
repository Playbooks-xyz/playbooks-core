import { useEffect } from 'react';

import { H4 } from '@playbooks/ui/fonts';
import { Blockquote } from '@playbooks/ui/html';

export const BlockquoteElement = props => {
	// Hooks
	useEffect(() => {
		// logger.log('BlockquoteElement: ', props);
	}, []);

	// Render
	return (
		<Blockquote>
			<H4 fontWeight='font-light' fontStyle='italic'>
				{props.children}
			</H4>
		</Blockquote>
	);
};

// Docs
// https://shiki.matsu.io/
