module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index', 'algolia-api-service', 'algolia-search-service'].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: true,
	})),
};
