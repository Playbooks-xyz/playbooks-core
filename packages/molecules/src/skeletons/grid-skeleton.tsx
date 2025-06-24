import { Skeleton } from '@playbooks/components/skeleton';
import { Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle } from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';

const GridSkeleton = ({ tailwind }) => {
	// Render
	return (
		<Card border='border' display='flex-column' spacing='' {...tailwind?.card}>
			<CardHeader aspect='aspect-[16/9]' bgColor=''>
				<Skeleton className='w-full' />
			</CardHeader>
			<CardBody space='space-y-2' spacing='p-4'>
				<CardTitle display=''>
					<Skeleton width='w-1/2' />
				</CardTitle>
				<CardSubtitle>
					<Skeleton width='w-3/4' />
				</CardSubtitle>
				<CardSubtitle>
					<Skeleton width='w-3/4' />
				</CardSubtitle>
			</CardBody>
			<CardFooter border='' display='flex-between' space='space-x-4' spacing='p-4'>
				<Span display='flex-start' space='space-x-4'>
					<Span width='w-24'>
						<Skeleton />
					</Span>
					<Span width='w-24'>
						<Skeleton />
					</Span>
				</Span>
			</CardFooter>
		</Card>
	);
};

export { GridSkeleton };
