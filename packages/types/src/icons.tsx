import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { HtmlProps } from 'src';

export type IconProps = HtmlProps & {
	type?: IconPrefix;
	icon?: any;
	wrapper?: any;
};
