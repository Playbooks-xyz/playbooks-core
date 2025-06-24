module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: [
		'index',
		'fathom',
		'font',
		'intercom',
		'loading',
		'mixpanel',
		'session',
		'storage',
		'store',
		'stripe',
		'theme',
		'toast',
	].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
