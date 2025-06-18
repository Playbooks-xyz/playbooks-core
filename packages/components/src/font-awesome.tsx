import dynamic from 'next/dynamic';

import { computeTailwind } from '@ehubbell/html';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { HtmlProps } from '@playbooks/ui/html';

export type FontAwesomeProps = HtmlProps & {
	type?: IconPrefix;
	icon?: any;
};

const FaWrapper = dynamic(() => import('@fortawesome/react-fontawesome').then(v => v.FontAwesomeIcon), {
	ssr: false,
});

const FontAwesome = ({ type = 'fas', name, icon, tailwind, className, ...props }: FontAwesomeProps) => {
	const base = {};
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <FaWrapper data-name={name} icon={[type, icon]} className={classes} />;
};

export { FontAwesome };

// Docs
// https://fontawesome.com/kits/95c629a819/use
// https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
