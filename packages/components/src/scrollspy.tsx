import ReactScrollspy from '@ehubbell/scrollspy';

const defaultOpts = {
	dataAttribute: 'scrollspy',
	offsetBottom: 100,
	activeClass: 'active',
};

const Scrollspy = ({ ref = null, options = defaultOpts, onUpdate = () => null, children }) => {
	// Render
	return (
		<ReactScrollspy navRef={ref} {...options} onUpdate={onUpdate}>
			{children}
		</ReactScrollspy>
	);
};

export { Scrollspy };

// Docs
// https://www.npmjs.com/package/@ehubbell/scrollspy
