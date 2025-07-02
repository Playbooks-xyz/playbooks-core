import { Rating } from 'react-simple-star-rating';

import { computeTailwind } from '@ehubbell/html';

const StarRating = ({
	value,
	iconsCount = 5,
	fillIcon = null,
	emptyIcon = null,
	transition = false,
	onChange = null,
	readOnly = false,
	tailwind,
	...props
}) => {
	const classes = computeTailwind(tailwind);
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
			className={classes}
			style={tailwind?.style}
			{...props}
		/>
	);
};

export { StarRating };

// Docs
// https://www.npmjs.com/package/react-simple-star-rating
