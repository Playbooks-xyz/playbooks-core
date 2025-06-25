import {
	Card,
	CardActions,
	CardBody,
	CardHeader,
	CardIcon,
	CardImg,
	CardPretitle,
	CardSubtitle,
	CardText,
	CardTitle,
} from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { LinkWrapper } from 'src/components';
import { Skeleton } from 'src/skeletons';

const ListCard = ({
	icon,
	photo,
	header,
	badges,
	status,
	pretitle,
	title,
	subtitle,
	text,
	href,
	meta,
	loading,
	tailwind,
	children,
}) => {
	// Render
	if (loading) return <Skeleton type='list' tailwind={tailwind} />;
	return (
		<Card
			display='md:flex-between'
			hover='hover:border-gray-300 dark:hover:border-gray-600'
			space='space-x-8'
			spacing='py-4'
			{...tailwind?.card}>
			<Span display='flex-start' space='space-x-4' width='w-full'>
				<LinkWrapper href={href}>
					{header ? (
						header
					) : (
						<CardHeader
							aspect='aspect-[1/1]'
							borderRadius='rounded-md'
							display='flex-middle'
							overflow='overflow-hidden'
							spacing=''
							width='w-20 lg:w-24'
							{...tailwind?.header}>
							{photo ? (
								<CardImg src={photo} width='w-full' {...tailwind?.photo} />
							) : (
								<CardIcon icon={icon} {...icon} {...tailwind?.icon} />
							)}
						</CardHeader>
					)}
				</LinkWrapper>
				<CardBody display='flex-column' spacing='' width='w-full' {...tailwind?.body}>
					{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
					{title && (
						<CardTitle>
							<LinkWrapper href={href} textTransform='hover:underline'>
								{title}
							</LinkWrapper>
						</CardTitle>
					)}
					{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
					{text && <CardText>{text}</CardText>}
					{meta}
				</CardBody>
			</Span>
			{children && (
				<CardActions display='hidden md:flex-end' flex='shrink-0'>
					{children}
				</CardActions>
			)}
		</Card>
	);
};

export { ListCard };
