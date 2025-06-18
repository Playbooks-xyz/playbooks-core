import { animated, useSpring } from '@react-spring/web';

import { computeTailwind } from '@ehubbell/html';
import { HtmlProps } from '@playbooks/ui/html';

export const useAnimation = useSpring;

export type AnimationProps = HtmlProps;

const Animation = ({ name = 'Animation', tailwind, className, style, children, ...props }: AnimationProps) => {
	const base = { position: 'relative' };
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	// Render
	return (
		<animated.div data-name={name} className={classes} style={style}>
			{children}
		</animated.div>
	);
};

export { Animation };

// Docs
// https://www.react-spring.dev/docs/components/use-spring
