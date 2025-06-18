import { Fragment, useMemo } from 'react';

import { BorderBtn } from 'interface/buttons';
import { Small } from 'interface/fonts';

const BtnPagination = ({ meta, params, setParams, taskRunning }) => {
	// Computed
	const totalPages = useMemo(() => {
		return Math.ceil(meta?.totalRecords / (meta?.pageSize || 10000000));
	}, [JSON.stringify(meta)]);

	// Render
	return (
		<Fragment>
			{meta.page + 1 < totalPages ? (
				<BorderBtn
					size='lg'
					nextIcon='arrow-down'
					taskRunning={taskRunning}
					className='w-full'
					onClick={() => setParams({ ...params, page: meta.page + 1 })}>
					Show More
				</BorderBtn>
			) : (
				<Small>End of results</Small>
			)}
		</Fragment>
	);
};

export { BtnPagination };
