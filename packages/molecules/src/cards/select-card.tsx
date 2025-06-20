import { Badge } from '@playbooks/ui/badges';
import { BorderBtn } from '@playbooks/ui/buttons';
import { Card, CardBody, CardHeader, CardIcon, CardImg, CardSubtitle, CardTitle } from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { Skeleton } from 'src/skeletons';

const SelectCard = ({
	photo,
	icon,
	status,
	title,
	subtitle,
	text,
	selected,
	loading,
	taskRunning,
	onClick,
	tailwind,
	children,
}) => {
	// Render
	if (loading) return <Skeleton type='select' tailwind={tailwind} />;
	return (
		<Card
			border='border-b'
			borderRadius=''
			display='flex-between'
			hover='group-hover:bg-gray-50 dark:group-hover:bg-gray-800'
			space='space-x-8'
			spacing='px-4 py-2'
			{...tailwind?.card}>
			<Span display='flex-start' space='space-x-4' width='w-full'>
				<CardHeader
					aspect='aspect-[1/1]'
					borderRadius='rounded-md'
					display='flex-middle'
					flex='shrink-0'
					overflow='overflow-hidden'
					spacing=''
					width='w-10'
					{...tailwind?.header}>
					{photo ? (
						<CardImg src={photo} width='w-full' {...tailwind?.photo} />
					) : (
						<CardIcon icon={icon} {...icon} {...tailwind?.icon} />
					)}
				</CardHeader>
				<CardBody space='' spacing='' width='w-full' {...tailwind?.body}>
					<CardTitle {...tailwind?.title}>
						<Span>{title}</Span>
						{status && (
							<Badge size='xs' type={status}>
								{status}
							</Badge>
						)}
					</CardTitle>
					{subtitle && <CardSubtitle fontSize='text-sm'>{subtitle}</CardSubtitle>}
					{text && <CardSubtitle fontSize='text-sm'>{text}</CardSubtitle>}
				</CardBody>
			</Span>
			{children ? (
				children
			) : (
				<BorderBtn
					size='icon'
					active={selected}
					taskRunning={taskRunning}
					icon={selected ? 'check' : 'plus'}
					onClick={onClick}
				/>
			)}
		</Card>
	);
};

export { SelectCard };
