import { HtmlProps } from '@playbooks/types';
import { Badge } from '@playbooks/ui/badges';
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
	CardTitle,
} from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { LinkWrapper } from 'src/components';
import { Skeleton } from 'src/skeletons';

type PreviewCardProps = HtmlProps & {
	icon?: any;
	photo?: string;
	status?: string;
	pretitle?: string;
	title?: string;
	subtitle?: string;
	text?: string;
	meta?: any;
	href: string;
	loading?: string;
	tailwind?: string;
};

export const PreviewCard = ({
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
}: PreviewCardProps) => {
	// Render
	if (loading) return <Skeleton type='preview' tailwind={tailwind} />;
	return (
		<Card
			border='border-b'
			borderRadius=''
			display='flex-between'
			hover='group-hover:bg-gray-100 dark:group-hover:bg-gray-800'
			space='space-x-4'
			spacing='py-4'
			{...tailwind?.card}>
			<Span display='flex-start' flex='grow' space='space-x-4' {...tailwind?.span}>
				<CardHeader
					aspect='aspect-[1/1]'
					borderRadius='rounded-md'
					display='flex-middle'
					flex='shrink-0'
					overflow='overflow-hidden'
					spacing=''
					width='w-12'
					{...tailwind?.header}>
					{photo ? (
						<CardImg src={photo} width='w-full' {...tailwind?.photo} />
					) : (
						<CardIcon icon={icon} {...icon} {...tailwind?.icon} />
					)}
				</CardHeader>
				<CardBody spacing='' width='w-full' {...tailwind?.body}>
					{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
					{title && (
						<CardTitle {...tailwind?.title}>
							<Span>{title}</Span>
							{status && <Badge size='xs'>{status}</Badge>}
						</CardTitle>
					)}
					{subtitle && <CardSubtitle {...tailwind?.subtitle}>{subtitle}</CardSubtitle>}
					{text && (
						<CardSubtitle fontSize='text-sm' {...tailwind?.text}>
							{text}
						</CardSubtitle>
					)}
					{meta}
				</CardBody>
			</Span>
			<CardActions display='flex-end' flex='shrink-0'>
				{children}
			</CardActions>
		</Card>
	);
};

export const PreviewBtnCard = props => (
	<BtnWrapper onClick={props.onClick} group='group'>
		<PreviewCard {...props} />
	</BtnWrapper>
);

export const PreviewLinkCard = props => (
	<LinkWrapper href={props.href} group='group'>
		<PreviewCard {...props} />
	</LinkWrapper>
);
