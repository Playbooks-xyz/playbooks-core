module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: [
		'index',
		'accordions',
		'avatars',
		'breadcrumbs',
		'buttons',
		'cards',
		'context',
		'drops',
		'feedbacks',
		'form-groups',
		'forms',
		'inputs',
		'items',
		'lists',
		'mdx',
		'paginations',
		'pixels',
		'progress-bars',
		'skeletons',
		'slides',
		'stats',
		'subnavs',
		'tags',
		'toasts',
		'toggles',
	].map(fileName => {
		if (fileName !== 'index') {
			return {
				filePath: `./src/${fileName}/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: false,
			};
		}
		return {
			filePath: `./src/${fileName}.tsx`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: false,
		};
	}),
};
