import {
	AccordionItems,
	AvatarItem,
	BadgeItem,
	BadgeItems,
	BasicItem,
	BooleanItem,
	CurrencyItem,
	DateItem,
	DateItems,
	DescriptionItem,
	HtmlItem,
	IconItem,
	InfoItem,
	LinkItem,
	ListItems,
	NumberItem,
	PhotoItem,
	ProgressBarItem,
	StepItem,
	TextItem,
} from 'src/items';

export const Item = props => {
	switch (props.type) {
		case 'accordion-items':
			return <AccordionItems {...props} />;

		case 'avatar':
			return <AvatarItem {...props} />;

		case 'badge':
			return <BadgeItem {...props} />;

		case 'badges':
			return <BadgeItems {...props} />;

		case 'boolean':
			return <BooleanItem {...props} />;

		case 'currency':
			return <CurrencyItem {...props} />;

		case 'date':
			return <DateItem {...props} />;

		case 'dates':
			return <DateItems {...props} />;

		case 'description':
			return <DescriptionItem {...props} />;

		case 'html':
			return <HtmlItem {...props} />;

		case 'icon':
			return <IconItem {...props} />;

		case 'info':
			return <InfoItem {...props} />;

		case 'link':
			return <LinkItem {...props} />;

		case 'list-items':
			return <ListItems {...props} />;

		case 'number':
			return <NumberItem {...props} />;

		case 'photo':
			return <PhotoItem {...props} />;

		case 'progress-bar':
			return <ProgressBarItem {...props} />;

		case 'step':
			return <StepItem {...props} />;

		case 'text':
			return <TextItem {...props} />;

		default:
			return <BasicItem {...props} />;
	}
};
