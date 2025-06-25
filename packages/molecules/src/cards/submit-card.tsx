import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardIcon,
	CardPretitle,
	CardSubtitle,
	CardTitle,
} from '@playbooks/ui/cards';
import { Link, LinkWrapper } from 'src/components';
import { Skeleton } from 'src/skeletons';

const SubmitCard = ({ photo, icon, pretitle, title, subtitle, taskRunning, href, loading, tailwind }) => {
	// Render
	if (loading) return <Skeleton type='action' tailwind={tailwind} />;
	return (
		<Card
			display='flex-column'
			height='h-full'
			hover='hover:border-gray-300 dark:hover:border-gray-600'
			{...tailwind?.card}>
			<CardBody display='flex-between' space='space-x-4' spacing='p-4'>
				<LinkWrapper href={href} textTransform='hover:underline' width='w-inherit'>
					<CardHeader aspect='aspect-[1/1]' borderRadius='rounded-md' display='flex-middle' spacing='' width='w-20'>
						<CardIcon icon={icon} color='text-primary dark:text-secondary' fontSize='text-2xl' />
					</CardHeader>
				</LinkWrapper>
			</CardBody>
			<CardBody flex='grow' height='min-h-[200px]' space='space-y-2' spacing='mx-4 pb-4'>
				{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
				{title && <CardTitle size='h4'>{title}</CardTitle>}
				{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
			</CardBody>

			<CardFooter border='border-t' display='flex-between' space='space-x-4' spacing='mx-4 py-4'>
				<Link href={href} nextIcon='chevron-right' className='w-full'>
					Next
				</Link>
			</CardFooter>
		</Card>
	);
};

export { SubmitCard };
