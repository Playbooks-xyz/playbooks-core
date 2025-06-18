import ScrollSpy from '@ehubbell/scrollspy';

const defaultOpts = {
	dataAttribute: 'scrollspy',
	offsetBottom: 100,
	activeClass: 'active',
};

const Scrollspy = ({ ref = null, options = defaultOpts, onUpdate = () => null, children }) => {
	// Render
	return (
		<ScrollSpy navRef={ref} {...options} onUpdate={onUpdate}>
			{children}
		</ScrollSpy>
	);
};

export { Scrollspy };

// Docs
// https://www.npmjs.com/package/@ehubbell/scrollspy
