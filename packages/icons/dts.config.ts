module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index', 'library'].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: true,
	})),
};
