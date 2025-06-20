import { useEffect, useState } from 'react';

import { Small } from '@playbooks/ui/fonts';
import { Col, Grid } from '@playbooks/ui/grid';
import { Li, Span } from '@playbooks/ui/html';
import { Progress, ProgressBar } from '@playbooks/ui/progress-bars';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { sleep, toNumber } from '@playbooks/utils';
import { Skeleton } from 'src/skeletons';

export const ProgressBarItem = ({ title, keyName, loading, value, tailwind }) => {
	const [progress, setProgress] = useState(0);

	// Hooks
	useEffect(() => {
		onDisplay();
	}, [value]);

	// Methods
	const onDisplay = async () => {
		await sleep(300);
		setProgress((value / 5) * 100);
	};

	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<Grid gap=''>
				<Col>
					{title}
					{keyName && <SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>}
				</Col>
				<Col display='flex'>
					{loading ? (
						<Skeleton className='w-20' />
					) : (
						<Span display='flex-end' flex='grow' space='space-x-4' width='w-full'>
							<ProgressBar height='h-1'>
								<Progress value={progress} />
							</ProgressBar>
							<Small>{toNumber(value, 1)}</Small>
						</Span>
					)}
				</Col>
			</Grid>
		</Li>
	);
};
