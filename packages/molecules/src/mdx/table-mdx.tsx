import { useEffect } from 'react';

import { Div } from '@playbooks/ui/html';
import { Table } from '@playbooks/ui/tables';

export const TableElement = props => {
	// Hooks
	useEffect(() => {
		// logger.log('TableElement: ', props);
	}, []);

	// Render
	return (
		<Div border='border' borderRadius='rounded-md' spacing='mb-8'>
			<Table {...props} />
		</Div>
	);
};
