import {
	Card,
	CardActions,
	CardBody,
	CardHeader,
	CardIcon,
	CardSubtitle,
	CardText,
	CardTitle,
} from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { Skeleton } from 'src/skeletons';
import { HtmlProps } from '@playbooks/types';
import { capitalize } from '@playbooks/utils';

type iActivityCard = HtmlProps & {
	type?: string;
	icon?: string;
	title?: string;
	subtitle?: string;
	text?: string;
	loading?: string;
};

export const ActivityCard = ({ type, icon, title, subtitle, text, loading, tailwind }: iActivityCard) => {
	// Render
	if (loading) return <Skeleton type='activity' tailwind={tailwind} />;
	return (
		<Card border='border-b' borderRadius='' display='flex-between' space='space-x-4' spacing='py-4' {...tailwind?.card}>
			<CardBody display='flex-start-top' flex='grow' space='space-x-4' spacing=''>
				<CardHeader aspect='aspect-[1/1]' borderRadius='rounded-md' display='flex-middle' spacing='' width='w-8'>
					<CardIcon type='fad' icon={icon} fontSize='text-base' />
				</CardHeader>
				<Span className='space-y-1'>
					{title && <CardTitle>{title}</CardTitle>}
					{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
					{text && <CardText>{text}</CardText>}
				</Span>
			</CardBody>
			<CardActions display='flex-end' flex='shrink-0'>
				<Span
					border='border'
					borderRadius='rounded-md'
					color='text-gray-500 dark:text-gray-400'
					display='flex-middle'
					fontSize='text-xs'
					fontWeight='font-light'
					spacing='px-2 py-1'>
					{capitalize(type)}
				</Span>
			</CardActions>
		</Card>
	);
};
