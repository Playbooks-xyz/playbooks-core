import { HtmlProps } from '@playbooks/types';
import { BtnWrapper } from '@playbooks/ui/buttons';
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
import { FarIcon } from '@playbooks/ui/icons';
import { Skeleton } from 'src/skeletons';

type ActionCardProps = HtmlProps & {
	icon?: any;
	photo?: string;
	status?: string;
	pretitle?: string;
	title?: string;
	subtitle?: string;
	text?: string;
	meta?: any;
	loading?: string;
};

export const ActionCard = ({
	icon,
	photo,
	status,
	pretitle,
	title,
	subtitle,
	text,
	meta,
	loading,
	tailwind,
	children,
}: ActionCardProps) => {
	// Render
	if (loading) return <Skeleton type='action' tailwind={tailwind} />;
	return (
		<Card
			border='border-b'
			borderRadius=''
			display='flex-between'
			hover='group-hover:bg-gray-100 dark:group-hover:bg-gray-800'
			space='space-x-8'
			spacing='py-4'
			{...tailwind?.card}>
			<Span display='flex-start' space='space-x-4' width='w-full'>
				<CardHeader
					aspect='aspect-[1/1]'
					borderRadius='rounded-md'
					display='flex-middle'
					overflow='overflow-hidden'
					spacing=''
					width='w-24'
					{...tailwind?.header}>
					{photo ? <CardImg src={photo} width='w-full' /> : <CardIcon icon={icon} {...icon} {...tailwind?.icon} />}
				</CardHeader>
				<CardBody display='flex-column' spacing='' width='w-full' {...tailwind?.body}>
					{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
					{title && <CardTitle size='h5'>{title}</CardTitle>}
					{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
					{text && <CardText>{text}</CardText>}
					{meta}
				</CardBody>
			</Span>
			<CardActions display='flex-end' flex='shrink-0' {...tailwind?.actions}>
				{children}
			</CardActions>
		</Card>
	);
};

export const ActionBtnCard = props => (
	<BtnWrapper onClick={props.onClick} cursor='cursor-pointer' group='group' width='w-full'>
		<ActionCard {...props}>
			<FarIcon icon='chevron-right' />
		</ActionCard>
	</BtnWrapper>
);
