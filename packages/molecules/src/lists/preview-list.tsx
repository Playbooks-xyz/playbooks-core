import { Fragment } from 'react';

import { Col, Grid } from '@playbooks/ui/grid';
import { Div } from '@playbooks/ui/html';
import { Feedback } from 'src/feedbacks';
import { Skeleton } from 'src/skeletons';
import { listBuilder } from '@playbooks/utils';

const PreviewList = ({
	type = 'preview',
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
				<Grid gap='' {...tailwind?.grid}>
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
				<Div spacing='py-4' {...tailwind.div}>
					<Feedback type={type} icon={icon} title={title} text={text} tailwind={tailwind} />
				</Div>
			)}
		</Fragment>
	);
};

export { PreviewList };
