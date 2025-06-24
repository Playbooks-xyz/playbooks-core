import { Fragment } from 'react';

import { TabBtn } from '@playbooks/ui/buttons';
import { Div, Span } from '@playbooks/ui/html';
import { capitalize } from '@playbooks/utils';
import { Skeleton } from 'src/skeletons';

export type ViewProps = {
	view: string;
	options: string[];
	loading?: boolean;
	setView: (value) => void;
	tailwind?: any;
};

const ViewSubnav = ({ view = '', options = [], loading, setView, tailwind }: ViewProps) => {
	// Render
	return (
		<Div display='flex-start' space='space-x-2' overflow='overflow-x-scroll' {...tailwind?.div}>
			{loading ? (
				<Div className='py-4'>
					<Skeleton type='filter' />
				</Div>
			) : (
				<Fragment>
					{options.map((option, i) => (
						<Span key={i}>
							<TabBtn size='p-3' active={option === view} onClick={() => setView(option)} className='w-full'>
								{capitalize(option ? option : 'all')}
							</TabBtn>
						</Span>
					))}
				</Fragment>
			)}
		</Div>
	);
};
export { ViewSubnav };
