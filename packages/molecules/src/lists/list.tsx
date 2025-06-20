import { DisplayList, GridList, ListList, PreviewList, SearchList, SubmitList } from 'src/lists';

const ListWrapper = ({
	type,
	icon = 'database',
	title = '',
	text = '',
	data = [],
	renderItem,
	count,
	loading,
	taskRunning,
	selected,
	rootLink,
	onClick,
	onNext,
	children = null,
	tailwind,
}) => {
	const defaultText = `We don't have any ${title} that match your criteria.`;
	const computedText = text ? text : defaultText;
	const props = {
		type,
		icon,
		title,
		text: computedText,
		data,
		renderItem,
		count,
		loading,
		taskRunning,
		selected,
		rootLink,
		onClick,
		onNext,
		children,
		tailwind,
	};

	// Render
	switch (type) {
		case 'display':
			return <DisplayList {...props} />;

		case 'list':
			return <ListList {...props} />;

		case 'grid':
		case 'grid-preview':
			return <GridList {...props} />;

		case 'preview':
			return <PreviewList {...props} />;

		case 'search':
			return <SearchList {...props} />;

		case 'submit':
			return <SubmitList {...props} />;
	}
};

export { ListWrapper };

// Docs
// https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop
