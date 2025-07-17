import dynamic from 'next/dynamic';

import { computeTailwind } from '@ehubbell/html';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { HtmlProps } from 'types';

export type FontAwesomeProps = HtmlProps & {
	type?: IconPrefix;
	icon?: any;
};

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});

const FontAwesome = ({ type = 'fas', name, icon, tailwind, className, ...props }: FontAwesomeProps) => {
	const base = {};
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <FontAwesomeIcon data-name={name} icon={[type, icon]} className={classes} />;
};

export { FontAwesome };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
