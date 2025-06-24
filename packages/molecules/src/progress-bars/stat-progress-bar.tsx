import { useState } from 'react';

import { useDelay } from '@playbooks/hooks';
import { Small } from '@playbooks/ui/fonts';
import { Span } from '@playbooks/ui/html';
import { Progress, ProgressBar } from '@playbooks/ui/progress-bars';
import { toNumber } from '@playbooks/utils';

const StatProgressBar = ({ value, count, percent }) => {
	const [progress, setProgress] = useState(0);

	// Hooks
	useDelay(() => {
		setProgress(value * 100);
	}, [300, value]);

	// Render
	return (
		<Span display='flex-end' space='space-x-4' width='w-full'>
			<ProgressBar>
				<Progress value={progress} />
			</ProgressBar>
			{typeof count === 'number' && <Small align='text-right'>{toNumber(count, 1)}</Small>}
			{typeof percent === 'number' && <Small align='text-right'>{toNumber(percent * 100)}%</Small>}
		</Span>
	);
};

export { StatProgressBar };
