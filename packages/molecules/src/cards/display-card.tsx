import { BtnWrapper } from '@playbooks/ui/buttons';
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
import { LinkWrapper } from 'src/components';
import { Skeleton } from 'src/skeletons';

export const DisplayCard = ({ icon, photo, pretitle, title, subtitle, text, loading, tailwind, children }) => {
	// Render
	if (loading) return <Skeleton type='display' tailwind={tailwind} />;
	return (
		<Card
			display='flex-column'
			height='h-full'
			hover='hover:border-gray-300 dark:hover:border-gray-600'
			{...tailwind?.card}>
			<CardHeader
				aspect='aspect-[2/1]'
				borderRadius='rounded-md'
				display='flex-middle'
				overflow='overflow-hidden'
				spacing='m-4'
				width='w-32'
				{...tailwind?.header}>
				{photo ? (
					<CardImg src={photo} display='' position='absolute' {...tailwind?.photo} />
				) : (
					<CardIcon icon={icon} {...icon} {...tailwind?.icon} />
				)}
			</CardHeader>
			<CardBody align='text-left' flex='grow' spacing='px-4 pb-6' {...tailwind?.body}>
				{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
				{title && <CardTitle>{title}</CardTitle>}
				{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
				{text && <CardText fontSize=''>{text}</CardText>}
			</CardBody>
			{children && <CardFooter {...tailwind?.footer}>{children}</CardFooter>}
		</Card>
	);
};

export const DisplayBtnCard = props => (
	<BtnWrapper onClick={props.onClick} group='group'>
		<DisplayCard {...props} />
	</BtnWrapper>
);

export const DisplayLinkCard = props => (
	<LinkWrapper href={props.href} group='group'>
		<DisplayCard {...props} />
	</LinkWrapper>
);
