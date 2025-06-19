import SkeletonWrapper, { SkeletonTheme } from 'react-loading-skeleton';

import { computeTailwind } from '@ehubbell/html';
import { HtmlProps } from '@playbooks/types';

export type SkeletonProps = HtmlProps;

const Skeleton = ({ tailwind, className, ...props }: SkeletonProps) => {
	const base = { height: 'h-full', width: 'w-full' };
	const classes = computeTailwind({ ...base, ...tailwind, ...props, className });

	return (
		<SkeletonTheme>
			<SkeletonWrapper className={classes} />
		</SkeletonTheme>
	);
};

export { Skeleton };

// Docs
// https://github.com/dvtng/react-loading-skeleton#readme
