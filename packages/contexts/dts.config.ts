module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index', 'loading-context', 'toast-context'].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
