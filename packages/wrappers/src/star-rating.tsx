import { Rating } from 'react-simple-star-rating';

import { FasIcon } from '@playbooks/ui/icons';

const StarRating = ({
	value,
	iconsCount = 5,
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
			fillIcon={<FasIcon icon='star' fontSize='text-xl' {...tailwind?.icon} {...tailwind?.fillIcon} />}
			emptyIcon={<FasIcon icon='star' fontSize='text-xl' {...tailwind?.icon} {...tailwind?.emptyIcon} />}
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
