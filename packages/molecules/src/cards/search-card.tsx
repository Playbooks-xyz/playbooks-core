import { Badge } from '@playbooks/ui/badges';
import { BtnWrapper } from '@playbooks/ui/buttons';
import { Card, CardBody, CardHeader, CardIcon, CardImg, CardText, CardTitle } from '@playbooks/ui/cards';
import { Span } from '@playbooks/ui/html';
import { capitalize, truncate } from '@playbooks/utils';
import { LinkWrapper } from '@playbooks/ui/links';

export const SearchCard = ({ modelName, photo, icon = 'magnifying-glass', title, text, tailwind }) => {
	// Render
	return (
		<Card
			border='border-b'
			borderRadius=''
			display='flex-between'
			focus='group-focus:bg-gray-100 group-focus:dark:bg-gray-800'
			hover='group-hover:bg-gray-100 group-dark:hover:bg-gray-800'
			space='space-x-8'
			spacing='p-4'
			{...tailwind?.card}>
			<Span display='flex-start-top' space='space-x-4'>
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
						<CardImg src={photo} scale='scale-[200%]' {...tailwind?.photo} />
					) : (
						<CardIcon icon={icon} {...tailwind?.icon} />
					)}
				</CardHeader>
				<CardBody spacing=''>
					{title && <CardTitle fontSize='text-base'>{title}</CardTitle>}
					{text && <CardText>{truncate(text, 120)}</CardText>}
				</CardBody>
			</Span>
			{modelName && (
				<Badge
					bgColor=''
					border='border'
					borderColor='border-gray-400 dark:border-gray-500'
					color='text-gray-600 dark:text-gray-400'>
					{capitalize(modelName)}
				</Badge>
			)}
		</Card>
	);
};

export const SearchBtnCard = props => (
	<BtnWrapper
		onClick={props.onClick}
		cursor='cursor-pointer'
		group='group'
		outline='outline-none'
		outlineColor=''
		width='w-full'>
		<SearchCard {...props} />
	</BtnWrapper>
);

export const SearchLinkCard = props => (
	<LinkWrapper href={props.href} group='group'>
		<SearchCard border='border' spacing='p-4' {...props} />
	</LinkWrapper>
);
