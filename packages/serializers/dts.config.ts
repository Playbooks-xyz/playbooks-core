module.exports = {
	entries: ['index'].map(fileName => ({
		filePath: `./src/${fileName}.ts`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: false,
	})),
};
