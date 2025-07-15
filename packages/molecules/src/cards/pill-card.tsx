import {
	Card,
	CardActions,
	CardBody,
	CardHeader,
	CardIcon,
	CardImg,
	CardSubtitle,
	CardText,
	CardTitle,
} from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { LinkWrapper } from '@playbooks/ui/links';
import { Skeleton } from 'src/skeletons';

const PillCard = ({ icon, photo, title, subtitle, text, href, loading, children, tailwind }) => {
	// Render
	if (loading) return <Skeleton type='pill' tailwind={tailwind} />;
	return (
		<Card
			display='flex-between'
			hover='hover:border-gray-300 dark:hover:border-gray-600'
			space='space-x-4'
			spacing='p-4'
			{...tailwind?.card}>
			<Span display='flex-start' space='space-x-4' width='w-full'>
				<LinkWrapper href={href}>
					<CardHeader
						aspect='aspect-[1/1]'
						borderRadius='rounded-md'
						display='flex-middle'
						overflow='overflow-hidden'
						spacing=''
						width='w-16'
						{...tailwind?.header}>
						{photo ? (
							<CardImg src={photo} width='w-full' {...tailwind?.photo} />
						) : (
							<CardIcon icon={icon} {...icon} {...tailwind?.icon} />
						)}
					</CardHeader>
				</LinkWrapper>
				<CardBody align='text-left' flex='grow' spacing='' {...tailwind?.body}>
					{title && (
						<LinkWrapper href={href} textDecoration='hover:underline'>
							<CardTitle {...tailwind?.title}>{title}</CardTitle>
						</LinkWrapper>
					)}
					{subtitle && <CardSubtitle {...tailwind?.subtitle}>{subtitle}</CardSubtitle>}
					{text && <CardText>{text}</CardText>}
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

export { PillCard };
