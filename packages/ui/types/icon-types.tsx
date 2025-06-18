import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { HtmlProps } from 'types';

export type IconProps = HtmlProps & {
	type?: IconPrefix;
	icon?: any;
	wrapper?: any;
};
