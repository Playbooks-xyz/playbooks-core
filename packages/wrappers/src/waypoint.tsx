import { InView, useInView } from 'react-intersection-observer';

const Waypoint = ({ as = 'span', options, onEnter, onLeave, ...props }) => {
	// Methods
	const onChange = (inView, entry) => {
		return inView ? onEnter(entry) : onLeave(entry);
	};

	// Render
	return <InView as={as} onChange={onChange} {...options} {...props} />;
};

export { Waypoint, InView, useInView };

// Docs
// https://www.npmjs.com/package/react-intersection-observer
