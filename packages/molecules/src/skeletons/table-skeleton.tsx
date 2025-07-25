import { Skeleton } from '@playbooks/components/skeleton';
import { H6 } from '@playbooks/ui/fonts';
import { Col, Grid } from '@playbooks/ui/grid';
import { listBuilder } from '@playbooks/utils/helpers';

const TableSkeleton = ({ count, grid, tailwind }) => {
	// Render
	return (
		<Grid {...grid} spacing='py-4'>
			{listBuilder(count).map((s, i) => (
				<Col key={i}>
					<Grid className='flex items-center px-4 py-2 w-full'>
						<Col span='1'>
							<Skeleton borderRadius='rounded-md' leading='leading-[inherit]' height='h-8' width='w-8' />
						</Col>
						<Col span='2'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
						<Col span='2'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
						<Col span='2'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
						<Col span='2'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
						<Col span='2'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
						<Col span='1'>
							<H6>
								<Skeleton />
							</H6>
						</Col>
					</Grid>
				</Col>
			))}
		</Grid>
	);
};

export { TableSkeleton };
