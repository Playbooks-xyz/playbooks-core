module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: [
		'index',
		'avatars',
		'cards',
		'feedbacks',
		'inputs',
		'items',
		'lists',
		'paginations',
		'skeletons',
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
