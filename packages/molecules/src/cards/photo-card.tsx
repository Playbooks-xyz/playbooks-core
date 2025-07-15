import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardIcon,
	CardImg,
	CardSubtitle,
	CardTitle,
} from '@playbooks/ui/cards';
import { LinkWrapper } from '@playbooks/ui/links';
import { Skeleton } from 'src/skeletons';

const PhotoCard = ({ icon, badge, photo, title, subtitle, text, href, loading, tailwind, children }) => {
	// Render
	if (loading) return <Skeleton type='photo' count={1} tailwind={tailwind} />;
	return (
		<Card
			display='flex-column'
			height='h-full'
			hover='hover:border-gray-300 dark:hover:border-gray-600'
			spacing='p-4'
			{...tailwind?.card}>
			<LinkWrapper href={href}>
				<CardHeader
					aspect='aspect-[1/1]'
					display='flex-middle'
					overflow='overflow-hidden'
					spacing=''
					width='w-full'
					{...tailwind?.header}>
					{badge}
					{photo ? <CardImg src={photo} {...tailwind?.photo} /> : <CardIcon icon={icon} {...tailwind?.icon} />}
				</CardHeader>
			</LinkWrapper>
			<CardBody spacing='pt-4' {...tailwind?.body}>
				{title && (
					<LinkWrapper href={href} textTransform='hover:underline'>
						<CardTitle>{title}</CardTitle>
					</LinkWrapper>
				)}
				{subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
			</CardBody>
			{children && (
				<CardFooter spacing='pt-4' {...tailwind?.footer}>
					{children}
				</CardFooter>
			)}
		</Card>
	);
};

export { PhotoCard };
