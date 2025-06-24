module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: [
		'index',
		'arrays',
		'dates',
		'downloads',
		'env',
		'errors',
		'helpers',
		'html',
		'inputs',
		'logger',
		'math',
		'regex',
		'tests',
		'transforms',
	].map(fileName => ({
		filePath: `./src/${fileName}.ts`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
