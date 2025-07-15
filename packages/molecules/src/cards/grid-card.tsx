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
import { LinkWrapper } from '@playbooks/ui/links';
import { Skeleton } from 'src/skeletons';

const GridCard = ({
	icon,
	header,
	badges,
	photo,
	pretitle,
	title,
	subtitle,
	text,
	href,
	loading,
	tailwind,
	children,
}) => {
	// Render
	if (loading) return <Skeleton type='grid' tailwind={tailwind} />;
	return (
		<Card display='flex-column' height='h-full' overflow='overflow-hidden' spacing='mb-4' {...tailwind?.card}>
			<LinkWrapper href={href}>
				<CardHeader
					aspect='aspect-[2/1]'
					borderRadius=''
					overflow='overflow-hidden'
					position='relative'
					width='w-full'
					{...tailwind?.header}>
					{photo ? (
						<CardImg
							src={photo}
							position='absolute'
							scale='hover:scale-[105%]'
							transition='transition-all'
							ease='ease'
							{...tailwind?.photo}
						/>
					) : (
						<CardIcon
							icon={icon}
							position='absolute'
							display='flex-middle'
							inset='inset-0'
							{...icon}
							{...tailwind?.icon}
						/>
					)}
				</CardHeader>
			</LinkWrapper>
			<CardBody flex='grow' space='space-y-3' {...tailwind?.body}>
				{pretitle && <CardPretitle>{pretitle}</CardPretitle>}
				{title && (
					<CardTitle size='h5'>
						<LinkWrapper href={href} textTransform='hover:underline'>
							{title}
						</LinkWrapper>
					</CardTitle>
				)}
				{subtitle && <CardSubtitle className='line-clamp-4'>{subtitle}</CardSubtitle>}
				{text && <CardText fontSize='text-lg'>{text}</CardText>}
			</CardBody>
			{children && (
				<CardFooter display='flex-start' {...tailwind?.footer}>
					{children}
				</CardFooter>
			)}
		</Card>
	);
};

export { GridCard };
