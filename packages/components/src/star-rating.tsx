import { Rating } from 'react-simple-star-rating';

const StarRating = ({
	value,
	iconsCount = 5,
	fillIcon,
	emptyIcon,
	transition = false,
	onChange = null,
	readOnly = false,
	tailwind,
	...props
}) => {
	// Render
	return (
		<Rating
			initialValue={value}
			onClick={onChange}
			iconsCount={iconsCount}
			fillIcon={fillIcon}
			emptyIcon={emptyIcon}
			transition={transition}
			readonly={readOnly}
			style={tailwind?.style}
			{...props}
		/>
	);
};

export { StarRating };

// Docs
// https://www.npmjs.com/package/react-simple-star-rating
