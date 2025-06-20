module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index', 'loading', 'seo', 'toast'].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
