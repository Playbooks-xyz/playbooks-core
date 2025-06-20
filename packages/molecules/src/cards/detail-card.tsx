import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardIcon,
	CardImg,
	CardPretitle,
	CardSubtitle,
	CardText,
	CardTitle,
} from '@playbooks/ui/cards';
import { Div } from '@playbooks/ui/html';
import { formatDate } from '@playbooks/utils';
import { Skeleton } from 'src/skeletons';

export const DetailCard = ({
	icon,
	cover,
	photo,
	header,
	status,
	pretitle,
	title,
	subtitle,
	text,
	footer,
	loading,
	children,
	tailwind,
}) => {
	// Render
	if (loading) return <Skeleton type='detail' tailwind={tailwind} />;
	return (
		<Card overflow='overflow-hidden' spacing='mb-4' {...tailwind?.card}>
			{header ? (
				header
			) : (
				<CardHeader width='w-full' aspect='aspect-[16/9]' borderRadius='' {...tailwind?.header}>
					{cover ? (
						<CardImg src={cover} {...tailwind?.cover} />
					) : (
						<Div inset='inset-0' position='absolute' display='flex-middle'>
							<CardIcon icon='image' fontSize='text-4xl' />
						</Div>
					)}
				</CardHeader>
			)}
			<CardBody align='text-left' space='space-y-2' {...tailwind?.body}>
				<Div border='border' borderRadius='rounded-md' overflow='overflow-hidden' spacing='-mt-12 mb-4' width='w-20'>
					{photo ? (
						<CardImg src={photo} {...tailwind?.photo} />
					) : (
						<Div
							aspect='aspect-[1/1]'
							bgColor='bg-gray-100 dark:bg-gray-800'
							border='border'
							display='flex-middle'
							width='w-full'>
							<CardIcon icon={icon} display='flex-middle' {...tailwind?.icon} />
						</Div>
					)}
				</Div>
				{/* {status && <Badge type={status}>{status}</Badge>} */}
				{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
				{title && <CardTitle size='h5'>{title}</CardTitle>}
				{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
				{text && <CardText>{text}</CardText>}
				{children}
			</CardBody>
			{footer && (
				<CardFooter fontStyle='italic' {...tailwind?.footer}>
					Last updated {formatDate(footer)}
				</CardFooter>
			)}
		</Card>
	);
};
