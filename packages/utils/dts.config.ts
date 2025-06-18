const fileNames = [
	'index',
	'arrays',
	'dates',
	'downloads',
	'env',
	'errors',
	'helpers',
	'inputs',
	'logger',
	'math',
	'regex',
	'tests',
	'transforms',
];
const config = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: fileNames.map(fileName => {
		if (fileName !== 'index') {
			return {
				filePath: `./src/utils/${fileName}.ts`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		return {
			filePath: `./src/${fileName}.ts`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: true,
		};
	}),
};

module.exports = config;
