import { Fragment } from 'react';

import { Col, Grid } from '@playbooks/ui/grid';
import { Div } from '@playbooks/ui/html';
import { listBuilder } from '@playbooks/utils';
import { Feedback } from 'src/feedbacks';
import { Skeleton } from 'src/skeletons';

const SearchList = ({
	type = 'search',
	icon = 'database',
	title = '',
	text = '',
	data = [],
	renderItem,
	count = 3,
	selected = [],
	loading = false,
	taskRunning = false,
	rootLink = '',
	onClick,
	onNext,
	children,
	tailwind,
}) => {
	const props = { selected, loading, taskRunning, rootLink, onClick, onNext, children, tailwind };
	const RenderItem = props => renderItem(props);

	// Render
	return (
		<Fragment>
			{data.length > 0 || loading ? (
				<Grid {...tailwind?.grid}>
					{loading ? (
						<Fragment>
							{listBuilder(count).map((v, i) => (
								<Col key={i}>
									<Skeleton type={type} tailwind={tailwind} />
								</Col>
							))}
						</Fragment>
					) : (
						<Fragment>
							{data?.map((item, i) => (
								<Col key={i}>
									<RenderItem item={item} {...props} />
								</Col>
							))}
						</Fragment>
					)}
				</Grid>
			) : (
				<Div spacing='p-4'>
					<Feedback type={type} icon={icon} title={title} text={text} tailwind={tailwind?.feedback} />
				</Div>
			)}
		</Fragment>
	);
};

export { SearchList };
