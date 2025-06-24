import { Fragment } from 'react';

import { Skeleton } from '@playbooks/components/skeleton';
import { listBuilder } from '@playbooks/utils/helpers';
import { Item } from 'src/items';

const ItemSkeleton = ({ count }) => (
	<Fragment>
		{listBuilder(count).map((v, i) => (
			<Item
				type='text'
				key={i}
				keyName={<Skeleton width='w-1/4' />}
				value={<Skeleton width='w-1/4' />}
				width='w-full'
			/>
		))}
	</Fragment>
);

export { ItemSkeleton };

// Docs:
// https://github.com/dvtng/react-loading-s#readme
