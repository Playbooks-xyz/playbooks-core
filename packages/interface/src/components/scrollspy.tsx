import ScrollSpy from '@ehubbell/scrollspy';

const defaultOpts = {
	dataAttribute: 'scrollspy',
	offsetBottom: 100,
	activeClass: 'active',
};

const ScrollspyWrapper = ({ ref = null, options = defaultOpts, onUpdate = () => null, children }) => {
	// Render
	return (
		<ScrollSpy navRef={ref} {...options} onUpdate={onUpdate}>
			{children}
		</ScrollSpy>
	);
};

export { ScrollspyWrapper };

// Docs
// https://www.npmjs.com/package/@ehubbell/scrollspy
