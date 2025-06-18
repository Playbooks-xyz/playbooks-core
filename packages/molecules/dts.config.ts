module.exports = {
	entries: ['index', 'toasts'].map(fileName => ({
		filePath: `./src/${fileName}.ts`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
