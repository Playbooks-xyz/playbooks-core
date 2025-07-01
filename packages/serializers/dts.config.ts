module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index'].map(fileName => ({
		filePath: `./src/${fileName}.ts`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: true,
	})),
};
