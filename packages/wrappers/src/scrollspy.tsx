import Scrollspy from '@playbooks/scrollspy';

const defaultOpts = {
	dataAttribute: 'scrollspy',
	offsetBottom: 100,
	activeClass: 'active',
};

const ScrollSpy = ({ ref = null, options = defaultOpts, onUpdate = () => null, children }) => {
	// Render
	return (
		<Scrollspy navRef={ref} {...options} onUpdate={onUpdate}>
			{children}
		</Scrollspy>
	);
};

export { ScrollSpy };

// Docs
// https://www.npmjs.com/package/@playbooks/scrollspy
