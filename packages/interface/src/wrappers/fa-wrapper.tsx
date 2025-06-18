import dynamic from 'next/dynamic';

import { computeTailwind } from '@ehubbell/html';
import { IconProps } from 'types';

const FontAwesome = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});

const FaWrapper = ({ type = 'fas', name, icon, transform, tailwind, className, ...props }: IconProps) => {
	const base = {};
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <FontAwesome data-name={name} icon={[type, icon]} transform={transform} className={classes} />;
};

export { FaWrapper };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
